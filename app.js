const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Basic test route
app.get('/', (req, res) => {
  res.send('HealthSync v2 API is working');
});

// IMPORTANT: Render needs this!
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
