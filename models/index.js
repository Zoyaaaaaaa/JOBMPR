import mongoose from 'mongoose';
import Job from './jobdata';
import jobsData from '../public/jobs.json';

async function saveJobsToDB() {
  try {
    await Job.deleteMany({});
    await Job.insertMany(jobsData);
    console.log('Job data saved successfully.');
  } catch (err) {
    console.error('Error saving job data:', err);
  } finally {
    mongoose.disconnect();
  }
}

saveJobsToDB();
