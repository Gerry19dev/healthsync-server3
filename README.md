# HealthSync v2 – Full Version

## Overview
A professional clinic-ready system managing:
- Patients
- Doctors
- Appointments
- Diagnoses (with prefilled list)
- Medications
- Medical Scans
- Full Calendar View
- Search Engine for Patients, Doctors, Diagnosis

## Project Structure
- `client/`: HTML + JS frontend
- `server/`: Node.js backend with Express, MongoDB (Mongoose)

## Deployment
1. Push `server/` to GitHub
2. Deploy to Render and set your MongoDB URI in `.env`
3. Upload `client/` folder to Netlify (or connect to GitHub)

## MongoDB Models
- Patient: name, dob, gender, phone
- Doctor: name, specialization, phone
- Appointment: patientId, doctorId, dateTime
- Diagnosis: patientId, doctorId, dateTime, description
- Medication: patientId, doctorId, medicationName, time
- Scan: patientId, filename, uploadDate
