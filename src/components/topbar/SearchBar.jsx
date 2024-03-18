
import React, { useState, useEffect } from 'react';
import './SearchBar.scss'; 
import JobCard from '../../jobcard/jobcard'; 
import { fetchJobsFromFirestore } from '../../../firebaseConfig'; 

function SearchBar() {
  const [jobLocation, setJobLocation] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  async function fetchData() {
    try {
      const fetchedJobs = await fetchJobsFromFirestore();
      console.log('Fetched jobs:', fetchedJobs); 
      setJobs(fetchedJobs);
      setFilteredJobs(fetchedJobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  }
  
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedJobs = await fetchJobsFromFirestore();
        console.log('Fetched jobs:', fetchedJobs); 
        setJobs(fetchedJobs);
        setFilteredJobs(fetchedJobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    }
  
    fetchData(); 
  }, []);
  

  const handleLocationChange = (event) => {
    const newValue = event.target.value;
    setJobLocation(newValue);
  };

  const handleJobTypeChange = (event) => {
    const newValue = event.target.value;
    setJobTitle(newValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const updatedFilteredJobs = jobs.filter(job =>
        job.jobLocation.toLowerCase().includes(jobLocation.toLowerCase()) &&
        job.jobTitle.toLowerCase().includes(jobTitle.toLowerCase())
      );
  
      console.log('Filtered jobs:', updatedFilteredJobs); 
  
      setFilteredJobs(updatedFilteredJobs);
    } catch (error) {
      console.error('Error filtering jobs:', error);
    }
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

      <div className="job-cards-container">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))
        ) : (
          <p>No matching jobs found</p>
        )}
      </div>
    </>
  );
}

export default SearchBar;
