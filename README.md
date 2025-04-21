# HealthSync Backend

## Quick Setup

1. Deploy this repo on [https://render.com](https://render.com)
2. Set `MONGO_URI` as environment variable in Render dashboard.
3. It will expose an API at: `https://your-app.onrender.com/api/patients`

## Dev Local

```bash
npm install
MONGO_URI=mongodb://localhost/healthsync node app.js
```
