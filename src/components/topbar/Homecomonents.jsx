import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css" 
import NavTop from './NavTop'
import SearchBar from './SearchBar'
import JobCard from '../../jobcard/jobcard'
import Header from "../topbar/header"
import FilterList from '../../Filter';
function HomeComponent() {
  const [jobs, setJobs] = useState([]);

  // Fetch jobs data
  useEffect(() => {
    fetch("jobs.json")
      .then(res => res.json())
      .then(data => {
        setJobs(data);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your submit logic here
    console.log('Form submitted');
  };

  return (
    <div>
      <NavTop />
      <Header/>
      <SearchBar jobs={jobs} />
      {/* <FilterList/> */}
      {/* <JobCard /> */}
      
    </div>
  );
}

export default HomeComponent;
