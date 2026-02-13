
import os
import re

fragments_dir = "content/fragments"
# Regex to find date lines immediately following <div class="fragment__item">
# Matches:
# 1. Opening div + newline/whitespace
# 2. Date text (any chars except <, >, newline) - assuming simple text
# 3. Optional <br> tag (consumed and removed)
pattern = re.compile(r'(<div class="fragment__item">\s*\n\s*)([^<>\n]+)((?:<br\s*/?>|</br>))?', re.IGNORECASE)

for root, dirs, files in os.walk(fragments_dir):
    for file in files:
        if file.endswith(".md"):
            path = os.path.join(root, file)
            with open(path, "r", encoding="utf-8") as f:
                content = f.read()
            
            # Function to check if the captured text looks like a date/header
            def replacement(match):
                prefix = match.group(1)
                text = match.group(2).strip()
                # Simple heuristic: contains 4 digits (year)
                if re.search(r'\d{4}', text):
                    print(f"Wrapping date in {file}: {text}")
                    return f'{prefix}<div class="fragment__date">{text}</div>'
                return match.group(0)

            new_content = pattern.sub(replacement, content)
            
            if new_content != content:
                with open(path, "w", encoding="utf-8") as f:
                    f.write(new_content)
