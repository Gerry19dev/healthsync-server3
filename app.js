const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/healthsync-v2', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Mongoose Models
const patientSchema = new mongoose.Schema({
  name: String,
  dob: String,
  gender: String,
  phone: String
});
const Patient = mongoose.model('Patient', patientSchema);

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  phone: String
});
const Doctor = mongoose.model('Doctor', doctorSchema);

// API Routes
app.get('/', (req, res) => {
  res.send('HealthSync v2 API is working');
});

app.post('/api/patients', async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error saving patient' });
  }
});

app.get('/api/patients', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching patients' });
  }
});

app.post('/api/doctors', async (req, res) => {
  try {
    const newDoctor = new Doctor(req.body);
    await newDoctor.save();
    res.status(201).json(newDoctor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error saving doctor' });
  }
});

app.get('/api/doctors', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching doctors' });
  }
});

// Start server on Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server is running on port ${PORT}`));
