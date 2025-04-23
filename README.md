# HealthSync v2 – Clinic Ready

## Overview
A professional health management system connecting patients, doctors, diagnoses, medications, and appointments.

## Structure
- `client/`: HTML frontend with Bootstrap
- `server/`: Node.js + Express + MongoDB backend

## Deploy
1. Backend:
   - Push `server/` to GitHub
   - Deploy on Render.com
   - Set `MONGO_URI` in environment variables

2. Frontend:
   - Upload `client/` to Netlify via drag-and-drop or GitHub

3. MongoDB:
   - Create a cluster and set up users with access

## Notes
This version includes:
- Patient/Doctor DB with search
- Linked diagnosis, medications, scans, appointments
- Calendar-style UI and full CRUD logic
