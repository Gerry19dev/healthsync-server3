const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/healthsync-v2', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

const Patient = mongoose.model('Patient', new mongoose.Schema({
  name: String, dob: String, gender: String, phone: String
}));

const Doctor = mongoose.model('Doctor', new mongoose.Schema({
  name: String, specialization: String, phone: String
}));

app.get('/', (req, res) => res.send('HealthSync v2 API live'));
app.post('/api/patients', async (req, res) => {
  try { res.status(201).json(await new Patient(req.body).save()); }
  catch (err) { console.error(err); res.status(500).json({ error: 'Failed to save patient' }); }
});
app.post('/api/doctors', async (req, res) => {
  try { res.status(201).json(await new Doctor(req.body).save()); }
  catch (err) { console.error(err); res.status(500).json({ error: 'Failed to save doctor' }); }
});
app.get('/api/patients', async (req, res) => res.json(await Patient.find()));
app.get('/api/doctors', async (req, res) => res.json(await Doctor.find()));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server listening on port ${PORT}`));
