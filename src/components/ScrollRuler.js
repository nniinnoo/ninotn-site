import React, { useState, useEffect, useCallback, useRef } from "react";

/**
 * Scroll Ruler — a vertical ruler with tick marks, section labels,
 * and a blue scroll-position indicator (0.00–1.00).
 *
 * Matches the makingsoftware.com chapter ruler design:
 *  - Ticks every 10px, 8px wide, very light (10% black)
 *  - Individual tick hover: expands to 16px, solid black
 *  - Section markers: solid black ticks (12–16px wide)
 *  - Section labels: hidden by default, revealed on group hover
 *    with staggered transition-delay (0ms, 50ms, 100ms…)
 *  - Blue indicator: 16px tick + number (e.g. "0.40")
 *    — number hides on group hover, labels appear instead
 */
function ScrollRuler({ sections = [] }) {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);
    const [sectionPixelPositions, setSectionPixelPositions] = useState([]);
    const containerRef = useRef(null);
    const rafRef = useRef(null);

    // Number of ticks = container height / 10 (one every 10px)
    const TICK_SPACING = 10;

    const calcSectionPositions = useCallback((heightOverride) => {
        if (typeof document === "undefined") return;
        const h = heightOverride !== undefined ? heightOverride : containerHeight;

        const docHeight = document.documentElement.scrollHeight;
        const scrollableHeight = docHeight - window.innerHeight;

        // Avoid division by zero
        if (scrollableHeight <= 0) {
            setSectionPixelPositions([]);
            return;
        }

        const positions = sections.map((section) => {
            const el = document.getElementById(section.id);
            if (!el) return null;
            // Use offsetTop / scrollableHeight to match the scroll progress calculation (0 to 1)
            // This ensures 0% = top of page, 100% = scrolled to very bottom
            const ratio = Math.min(1, Math.max(0, el.offsetTop / scrollableHeight));

            // Return pixel position in container height
            return Math.round(ratio * h);
        });
        setSectionPixelPositions(positions);
    }, [sections, containerHeight]);

    const updateLayout = useCallback(() => {
        if (!containerRef.current || typeof document === "undefined") return;
        const rect = containerRef.current.getBoundingClientRect();
        const h = rect.height;
        setContainerHeight(h);
        calcSectionPositions(h); // Pass new height directly
    }, [calcSectionPositions]); // Add calcSectionPositions to dependencies

    const updateScroll = useCallback(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? scrollTop / docHeight : 0;
        setScrollProgress(Math.min(1, Math.max(0, progress)));
    }, []);

    useEffect(() => {
        const onScroll = () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(updateScroll);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", updateLayout);
        updateScroll();
        const timer = setTimeout(updateLayout, 300);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", updateLayout);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            clearTimeout(timer);
        };
    }, [updateScroll, updateLayout]);

    // Click a tick to scroll to that position
    const handleTickClick = (tickIndex, totalTicks) => {
        const ratio = tickIndex / totalTicks;
        const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;
        window.scrollTo({ top: ratio * docHeight, behavior: "smooth" });
    };

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const totalTicks = Math.floor(containerHeight / TICK_SPACING);
    const indicatorPx = Math.round(scrollProgress * containerHeight);

    return (
        <div className="scroll-ruler" aria-hidden="true">
            <div className="scroll-ruler__container" ref={containerRef}>
                {/* The group wrapper — hovering it reveals labels, hides number */}
                <div className="scroll-ruler__group">
                    <div className="scroll-ruler__inner">
                        {/* Regular tick marks */}
                        {Array.from({ length: totalTicks + 1 }).map((_, i) => {
                            const yPos = i * TICK_SPACING;
                            return (
                                <div
                                    key={`tick-${i}`}
                                    className="scroll-ruler__tick-wrap"
                                    style={{ "--position": `${yPos}px` }}
                                    onClick={() => handleTickClick(i, totalTicks)}
                                >
                                    <div className="scroll-ruler__tick" />
                                    <div className="scroll-ruler__tick-hitarea" />
                                </div>
                            );
                        })}

                        {/* Section labels (hidden, shown on group hover) */}
                        {sections.map((section, i) => {
                            const yPos = sectionPixelPositions[i];
                            if (yPos === null || yPos === undefined) return null;
                            return (
                                <div
                                    key={`label-${section.id}`}
                                    className="scroll-ruler__section-label-wrap"
                                    style={{
                                        "--yPosition": `${yPos - 6}px`,
                                        "--indent": "32px",
                                        transitionDelay: `${i * 50}ms`,
                                    }}
                                >
                                    <a
                                        href={`#${section.id}`}
                                        className="scroll-ruler__section-link"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(section.id);
                                        }}
                                    >
                                        {section.label}
                                    </a>
                                </div>
                            );
                        })}

                        {/* Section marker ticks (solid black, always visible) */}
                        {sections.map((section, i) => {
                            const yPos = sectionPixelPositions[i];
                            if (yPos === null || yPos === undefined) return null;
                            return (
                                <div
                                    key={`marker-${section.id}`}
                                    className="scroll-ruler__section-tick"
                                    style={{
                                        "--yPosition": `${yPos}px`,
                                        "--indent": "12px",
                                    }}
                                />
                            );
                        })}

                        {/* Blue indicator (number + tick) */}
                        <div
                            className="scroll-ruler__indicator"
                            style={{ top: `${indicatorPx}px` }}
                        >
                            <div className="scroll-ruler__indicator-tick" />
                            <span className="scroll-ruler__progress">
                                {scrollProgress.toFixed(2)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScrollRuler;
