# Swayam NPTEL Portal

A lightweight, static web portal for exploring SWAYAM NPTEL content.

## Features
- **Static site**: Simple `index.html` with `css/` and `js/` assets.
- **Dashboard UI**: Profile card and metric cards (overall score, rank, accuracy, etc.).
- **Summary block**: Combined Overall Score + Rank + Accuracy with progress bar and improvement delta.
- **Payment banner (post-login)**: "Check Dues" shows "No dues" and reveals a "Download Receipt" button that downloads the receipt PDF.
- **Favicon + Avatar**: Uses `Assets/fivicon.png` and `Assets/LavDP.png`.
- **Accessible nav**: Smooth scrolling to sections. Header groups all actions on the right.
- **Post-login behavior**: “Home” restores the main landing page; “Logout” returns to logged-out state.
 - **Static data**: Dashboard values are fixed for demo purposes and won’t change on refresh.

## Tech Stack
- **HTML5**, **CSS3**, **JavaScript** (vanilla)

## Project Structure
```
Swayam NPTEL Portal/
├─ index.html
├─ css/
│  └─ style.css
├─ js/
│  └─ script.js
└─ Assets/
   ├─ fivicon.png
   ├─ LavDP.png
   ├─ logo.png
   └─ reciept.pdf   # default receipt used by the payment banner (note spelling)
```

## Getting Started
- **Recommended**: Use a local server for best results (asset loading, smooth scrolling).
  - VS Code: install "Live Server" → right-click `index.html` → Open with Live Server.
- Opening `index.html` directly (file://) also works for the basic flow.

### Demo login
- Username: `lav`
- Password: `gate2025`

### Navigation
- Header buttons are grouped on the right. “Pricing” is removed. After login, “Features” is hidden.
- Clicking “Home” while logged in returns to the landing page. Use “Logout” to exit the dashboard.

### Payment flow (after login)
- Click "Check Dues" in the Payments banner → shows "You have no dues." and a "Download Receipt" button.
- Click "Download Receipt" → downloads your PDF from `Assets/reciept.pdf`.
- If you prefer a different filename/path, rename your file and adjust the path in `js/script.js` or add a second copy named exactly `reciept.pdf` (the app also tries `Assets/receipt.pdf`, `reciept.pdf`, and `receipt.pdf`).

### Static demo data
- Rank: `9,385 / 17,845`
- Overall Score: `48 / 100`
- Accuracy: `48%`
- Attempted Tests: `18`
- Avg Time / Question: `1.5 min`
- Last Active: `23/10/2025`
- Recent Tests:
  - GATE CS Mock Test 1 — 05/10/25 — 48 / 100 — Attempted
  - GATE CS Mock Test 2 — 12/10/25 — 42 / 100 — Attempted
  - Algorithms - Topic Test — 15/10/25 — — — Missed
  - DSA Full-Length 1 — 19/10/25 — — — Missed

## Development
- Keep styles in `css/` and scripts in `js/`.
- Prefer semantic HTML and accessible components.
- Test across modern browsers.

## Deployment
This is a static site. Host on any static provider:
- GitHub Pages
- Netlify / Vercel
- Any static file server

Typical steps:
1. Push this repository to your remote.
2. Point your host to the repository or the exported `dist` (if you later add a build step).

## Contributing
- Fork, create a feature branch, commit with clear messages, and open a PR.
- Keep changes small and focused.

## License
Add your license of choice (e.g., MIT) in `LICENSE`.
