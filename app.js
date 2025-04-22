const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

// Configure Mongoose for compatibility
mongoose.set('strictQuery', true);

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/healthsync');

// Patient Schema
const patientSchema = new mongoose.Schema({
  name: String,
  dob: String,
  gender: String,
  phone: String,
});
const Patient = mongoose.model('Patient', patientSchema);

// Routes
app.get('/api/patients', async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

app.post('/api/patients', async (req, res) => {
  const newPatient = new Patient(req.body);
  await newPatient.save();
  res.json(newPatient);
});

// 🚨 Required for Render to detect port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
