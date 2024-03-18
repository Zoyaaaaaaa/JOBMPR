import React, { useState, useEffect } from "react";
import JobCard from "./jobcard/jobcard";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FilterList = () => {
  const [filters, setFilters] = useState({
    experienceLevel: '',
    employmentType: ''
  });
  const [jobData, setJobData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const firebaseResponse = await fetch('https://job-portal-abdc9-default-rtdb.firebaseio.com/Jobsdata.json');
      const firebaseData = await firebaseResponse.json();

      const firebaseJobsArray = firebaseData ? Object.values(firebaseData) : [];

      setJobData(firebaseJobsArray);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const filterJobs = () => {
    let filtered = jobData;
  
    if (filters.experienceLevel) {
      filtered = filtered.filter(job => job.experienceLevel === filters.experienceLevel);
    }
  
    if (filters.employmentType) {
      filtered = filtered.filter(job => job.employmentType === filters.employmentType);
    }
  
    console.log("Matching filtered jobs:", filtered);
    setFilteredJobs(filtered);
  };
  
  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    filterJobs();
  }, [filters, jobData]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [filterType]: value }));
  };
  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '300px', padding: '20px', background: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Filters</h2>
        <Form.Group controlId="experienceLevel">
          <Form.Label>Experience Level</Form.Label>
          <Form.Control as="select" value={filters.experienceLevel} onChange={(e) => handleFilterChange('experienceLevel', e.target.value)}>
            <option value="">Any</option>
            <option value="Internship">Internship</option>
            <option value="Senior">Senior</option>
            <option value="Junior">Junior</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="employmentType">
          <Form.Label>Employment Type</Form.Label>
          <Form.Control as="select" value={filters.employmentType} onChange={(e) => handleFilterChange('employmentType', e.target.value)}>
            <option value="">Any</option>
            <option value="Part-time">Part-time</option>
            <option value="Full-time">Full-time</option>
          </Form.Control>
        </Form.Group>
        <Button
          style={{ width: '100%', marginTop: '20px' }}
          variant="primary"
          onClick={filterJobs}
        >
          Apply Filters
        </Button>
      </div>
      <div style={{ marginLeft: '20px' }}>
  {filteredJobs.map(job => (
    <JobCard key={job.id} job={job} />
  ))}
</div>

    </div>
  );
};

export default FilterList;
