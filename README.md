## Email Autocorrect Extension

A lightweight Chrome extension that automatically corrects common email typos while typing.

## Features
- Auto-corrects common spelling errors in real-time
- Works inside Gmail, Outlook, and most email textboxes
- Minimal and fast

## Installation

1. Clone this repo:
git clone https://github.com/akhilshrivas/Email_autocarrect_extensions.git

markdown
Copy code

2. Go to `chrome://extensions/` in Chrome.

3. Enable **Developer Mode** (top right).

4. Click **"Load Unpacked"** and select this project folder.

5. Start writing an email and see it auto-correct!

## Project Structure

| File | Purpose |
|------|---------|
| `manifest.json` | Chrome extension metadata |
| `background.js` | Background script (if needed) |
| `content.js` | Runs inside email pages and fixes typos |
| `popup.html` | Popup interface for user interaction (if any) |

## Future Improvements
- Add custom dictionary
- Grammar suggestion
- Toggle autocorrect on/off

---

## Author
**Akhil Shrivas**  
[GitHub](https://github.com/akhilshrivas)

You can copy this as your README and modify it as needed.

2. Add a .gitignore
If you don't already have one:

Create a .gitignore file to avoid uploading unnecessary files like:

bash
Copy code
__pycache__/
node_modules/
.DS_Store
*.log
*.pyc
.env
