const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  id: Number,
  companyName: String,
  jobTitle: String,
  companyLogo: String, // Store file path for company logo
  salaryType: String,
  jobLocation: String,
  postingDate: Date,
  experienceLevel: String,
  employmentType: String,
  description: String,
  skills: [String],
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
