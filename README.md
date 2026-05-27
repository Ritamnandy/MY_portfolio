# Ritam Nandy Portfolio

A modern full-stack app developer portfolio for Ritam Nandy, built with HTML, CSS, and JavaScript.

## Highlights

- Futuristic black and blue responsive UI
- Dark and light theme toggle
- Loading animation, particle background, animated cursor, typing effect, and scroll reveal
- Professional hero, about, skills, projects, GitHub, contact, navbar, and footer sections
- Data-driven skills, project cards, project filtering, and repository cards
- Live GitHub profile stats using the public GitHub API
- Contribution graph embed and top language visualization
- Downloadable resume document
- SEO meta tags and performance-conscious static assets

## Structure

```text
MY_portfolio/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │   ├── main.jpg
│   │   └── illustrations/
│   │       └── 7e7d0840-721f-4bd6-a823-668803318b7c.jpg
│   ├── js/
│   │   └── main.js
│   └── Ritam_Nandy_Resume.html
├── index.html
└── README.md
```

## Run Locally

Open `index.html` in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 4173
```

Then visit `http://127.0.0.1:4173`.

If you see `OSError: [Errno 98] Address already in use`, port `4173` is already running in another terminal or process. Stop that server with `Ctrl + C`, or use another port:

```bash
python3 -m http.server 4174
```

Then visit `http://127.0.0.1:4174`.
