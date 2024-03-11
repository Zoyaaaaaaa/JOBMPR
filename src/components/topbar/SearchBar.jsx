
import React, { useState } from 'react';
import './SearchBar.scss'; 
import JobCard from '../../jobcard/jobcard'; 

function SearchBar({ jobs }) {
  const [jobLocation, setJobLocation] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);

  const handleLocationChange = (event) => {
    const newValue = event.target.value;
    setJobLocation(newValue);
    console.log('Location:', newValue);
  };

  const handleJobTypeChange = (event) => {
    const newValue = event.target.value;
    setJobTitle(newValue);
    console.log('Job Type:', newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();  
    const filteredJobs = jobs.filter(job =>
      job.jobLocation.toLowerCase().includes(jobLocation.toLowerCase()) &&
      job.jobTitle.toLowerCase().includes(jobTitle.toLowerCase())
    );

    console.log('Filtered Jobs:', filteredJobs);
    setFilteredJobs(filteredJobs); 
  };

  return (
    <>
      <div className='hero'></div>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Location"
          value={jobLocation}
          onChange={handleLocationChange}
          className="input-location"
        />
        <input
          type="text"
          placeholder="Job Type"
          value={jobTitle}
          onChange={handleJobTypeChange}
          className="input-job-type"
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {/* Display filtered job cards */}
    {/* Display filtered job cards */}
<div className="job-cards-container">
  {filteredJobs.length > 0 ? (
    filteredJobs.map((job) => (
      <JobCard key={job.jobLocation} job={job} />
    ))
  ) : (
    <p>No matching jobs found</p>
  )}
</div>

    </>
  );
}

export default SearchBar;
