import * as React from "react";

export default function FractilesPrivacyPolicy() {
  return (
    <main style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", background: "#faf8ef", minHeight: "100vh", padding: "40px 0" }}>
      <div style={{ background: "white", maxWidth: 800, margin: "0 auto", padding: 40, borderRadius: 12, boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
        <a href="/projects" style={{ display: "inline-block", marginBottom: 20, color: "#776e65", textDecoration: "none", fontWeight: 600 }}>← Back to Projects</a>
        <h1 style={{ color: "#776e65", borderBottom: "3px solid #776e65", paddingBottom: 10 }}>Privacy Policy for Fractiles</h1>
        <p style={{ color: "#999", fontStyle: "italic", marginBottom: 30 }}>Last updated: September 5, 2025</p>
        <div style={{ background: "#f0f8ff", padding: 15, borderLeft: "4px solid #776e65", margin: "20px 0" }}>
          <strong>Quick Summary:</strong> Fractiles collects minimal data only for advertising purposes through Google AdMob. Your game progress stays on your device. We don't collect personal information.
        </div>
        <h2 style={{ color: "#776e65", marginTop: 30 }}>Information We Collect</h2>
        <p>Fractiles is designed to minimize data collection. We collect only the following information:</p>
        <h3 style={{ color: "#776e65" }}>Advertising Data</h3>
        <ul style={{ paddingLeft: 20 }}>
          <li><strong>Advertising Identifier (IDFA/GAID):</strong> Used to serve personalized advertisements</li>
          <li><strong>Ad Interaction Data:</strong> Information about which ads you view or interact with</li>
          <li><strong>Device Information:</strong> Basic device details for ad compatibility</li>
        </ul>
        <h3 style={{ color: "#776e65" }}>Game Data</h3>
        <ul style={{ paddingLeft: 20 }}>
          <li><strong>Game Progress:</strong> Your scores, game history, and settings are stored locally on your device</li>
          <li><strong>App Usage:</strong> Basic app performance and crash data for improving the game</li>
        </ul>
        <h2 style={{ color: "#776e65", marginTop: 30 }}>What We Don't Collect</h2>
        <p>We do not collect:</p>
        <ul style={{ paddingLeft: 20 }}>
          <li>Personal information (name, email, phone number, address)</li>
          <li>Location data</li>
          <li>Contact information</li>
          <li>Photos, videos, or other personal content</li>
          <li>Financial information</li>
          <li>Browsing history</li>
          <li>Sensitive user data</li>
        </ul>
        <h2 style={{ color: "#776e65", marginTop: 30 }}>How We Use Information</h2>
        <p>The limited data we collect is used solely for:</p>
        <ul style={{ paddingLeft: 20 }}>
          <li><strong>Advertising:</strong> Displaying relevant ads through Google AdMob</li>
          <li><strong>Game Improvement:</strong> Understanding app performance and fixing issues</li>
          <li><strong>Local Game Experience:</strong> Saving your progress and preferences on your device</li>
        </ul>
        <h2 style={{ color: "#776e65", marginTop: 30 }}>Data Sharing</h2>
        <p>We share data only with:</p>
        <ul style={{ paddingLeft: 20 }}>
          <li><strong>Google AdMob:</strong> For serving advertisements (subject to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#776e65" }}>Google's Privacy Policy</a>)</li>
        </ul>
        <p>We do not sell, rent, or trade your information with any other third parties.</p>
        <h2 style={{ color: "#776e65", marginTop: 30 }}>Data Storage and Security</h2>
        <ul style={{ paddingLeft: 20 }}>
          <li>Game data is stored locally on your device using secure iOS/Android storage</li>
          <li>Advertising data is processed by Google AdMob according to their privacy practices</li>
          <li>We implement appropriate security measures to protect your information</li>
          <li>No personal data is transmitted to external servers</li>
        </ul>
        <h2 style={{ color: "#776e65", marginTop: 30 }}>Your Rights</h2>
        <p>You have the right to:</p>
        <ul style={{ paddingLeft: 20 }}>
          <li>Opt out of personalized advertising through your device settings</li>
          <li>Reset your advertising identifier in iOS/Android settings</li>
          <li>Delete the app to remove all locally stored game data</li>
          <li>Contact us with privacy-related questions</li>
        </ul>
        <h2 style={{ color: "#776e65", marginTop: 30 }}>Children's Privacy</h2>
        <p>Fractiles is suitable for all ages. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.</p>
        <h2 style={{ color: "#776e65", marginTop: 30 }}>International Users</h2>
        <p>Fractiles is available worldwide. Advertising data processing follows Google AdMob's global privacy practices and applicable local regulations including GDPR and CCPA.</p>
        <h2 style={{ color: "#776e65", marginTop: 30 }}>Changes to This Policy</h2>
        <p>We may update this privacy policy occasionally. We will notify users of any material changes by updating the "Last updated" date above and, if necessary, through app updates.</p>
        <h2 style={{ color: "#776e65", marginTop: 30 }}>Contact Us</h2>
        <p>If you have any questions about this privacy policy, please contact us at:</p>
        <ul style={{ paddingLeft: 20 }}>
          <li>Website: <a href="https://ninotn.com" target="_blank" rel="noopener noreferrer" style={{ color: "#776e65" }}>https://ninotn.com</a></li>
          <li>App Support: <a href="mailto:me@ninotn.com" style={{ color: "#776e65" }}>me@ninotn.com</a></li>
        </ul>
        <footer style={{ marginTop: 40, paddingTop: 20, borderTop: "1px solid #eee", color: "#999", fontSize: 14, textAlign: "center" }}>
          <p>© 2025 Fractiles by <a href="https://ninotn.com" style={{ color: "#776e65" }}>Nino Tannio</a>. This privacy policy is effective as of the date listed above.</p>
        </footer>
      </div>
    </main>
  );
}
