const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const Job = require('./models/jobdata');
const MONGO_URL = "mongodb://127.0.0.1:27017/jobportal";
const app = express();
const port = 3001;

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Define schema for company logo
const CompanyLogoSchema = new mongoose.Schema({
  data: Buffer,
  contentType: String
});
const CompanyLogo = mongoose.model('CompanyLogo', CompanyLogoSchema);

// Function to save company logo to MongoDB
async function saveCompanyLogo(file) {
  try {
    const companyLogo = new CompanyLogo({
      data: file.buffer,
      contentType: file.mimetype
    });
    await companyLogo.save();
    console.log('Company logo saved to MongoDB');
    return companyLogo._id;
  } catch (error) {
    console.error('Error saving company logo to MongoDB:', error);
    throw error;
  }
}

// Route to handle job upload
app.post('/uploadjob', upload.single('companyLogo'), async (req, res) => {
  const formData = req.body;
  const file = req.file;

  // Save company logo to MongoDB if exists
  if (file) {
    formData.companyLogo = await saveCompanyLogo(file);
  }

  try {
    const job = new Job(formData);
    await job.save();
    console.log('Job data saved to MongoDB');
    res.status(200).send('Data received successfully!');
  } catch (error) {
    console.error('Error saving job data to MongoDB:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
