const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/healthsync');

const patientSchema = new mongoose.Schema({
  name: String,
  dob: String,
  gender: String,
  phone: String,
});
const Patient = mongoose.model('Patient', patientSchema);

app.get('/api/patients', async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

app.post('/api/patients', async (req, res) => {
  const newPatient = new Patient(req.body);
  await newPatient.save();
  res.json(newPatient);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
