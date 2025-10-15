# SARA — Smart Road Assistance

Simple road assistance app (SARA) with:
- Frontend: HTML, CSS, JS (mobile responsive, modern UI)
- Backend: Node.js + Express
- Database: MongoDB (use Atlas or local)
- Search: liberal/fuzzy matching (name, address, street, city, services)
- No external API keys required for basic usage (uses browser geolocation + Google Maps links)

## Quick start (development)

1. Clone the repo
2. Create `.env` in project root with:
```
MONGODB_URI="your_mongodb_connection_string"
PORT=3000
```
3. Install and run:
```bash
npm install
npm run start
```
4. Open `http://localhost:3000` in your browser.

## Deploying to GitHub + Render / Heroku / Railway / Vercel
- Do **not** commit `.env`. Use platform environment variables.
- If you need a hosted MongoDB, use MongoDB Atlas and put the connection string in the environment variable `MONGODB_URI`.
- This project avoids using privileged third-party API keys. It uses browser geolocation and Google Maps links (no API key) so you can deploy to GitHub Pages for frontend; for full app deploy backend to Render/Heroku/Railway and set env vars there.

## Structure
```
sara_project/
├─ backend/
│  ├─ server.js
│  ├─ models/Mechanic.js
│  ├─ routes/mechanics.js
│  └─ package.json
├─ frontend/
│  ├─ index.html
│  ├─ mechanics.html
│  ├─ register.html
│  ├─ css/styles.css
│  └─ js/main.js
├─ .env.example
└─ README.md
```

## Notes about APIs and deployment
- Google Maps JavaScript API requires an API key and billing; if you include it publically in a Git repo it can be abused. To avoid this, the app:
  - Uses **no** maps JS API.
  - Uses browser geolocation to get coordinates and constructs simple `https://www.google.com/maps?q=lat,lng` or `https://www.google.com/maps/dir/?api=1...` links which work without API keys.
- If you later want map tiles or embedded map visuals, consider using MapLibre/OSM or configure restricted API keys and store them as environment variables in your deployment platform.

Enjoy! — Generated SARA project (zip available)
