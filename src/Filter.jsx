import React, { useState, useEffect } from "react";
import JobCard from "./jobcard/jobcard";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FilterList = () => {
  const [filters, setFilters] = useState({
    experienceLevel: '',
    employmentType: '',
    jobLocation: '',
    salaryRange: { min: '', max: '' },
  });
  const [jobData, setJobData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const response = await fetch("./jobs.json");
      const data = await response.json();
      setJobData(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    const updatedFilteredJobs = jobData.filter(job => (
      (filters.experienceLevel === '' || job.experienceLevel === filters.experienceLevel) &&
      (filters.employmentType === '' || job.employmentType === filters.employmentType) &&
      (filters.jobLocation === '' || job.jobLocation === filters.jobLocation) &&
      (filters.salaryRange.min === '' || parseInt(job.minPrice, 10) >= parseInt(filters.salaryRange.min, 10)) &&
      (filters.salaryRange.max === '' || parseInt(job.maxPrice, 10) <= parseInt(filters.salaryRange.max, 10))
    ));
    setFilteredJobs(updatedFilteredJobs);
  }, [filters, jobData]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [filterType]: value }));
  };

  const handleSalaryRangeChange = ({ min, max }) => {
    setFilters(prevFilters => ({ ...prevFilters, salaryRange: { min, max } }));
  };

  const applyFilters = () => {
    console.log('Applying Filters:', filters);
    // Add your logic to update UI or perform other actions based on filters
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
            <option value="All">All</option>
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

        {/* Use RangeExample component for salary range */}
        <RangeExample onSalaryRangeChange={handleSalaryRangeChange} />

        {/* Apply Filters button */}
        <Button
          style={{ width: '100%', marginTop: '20px' }}
          variant="primary"
          onClick={applyFilters}
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

function RangeExample({ onSalaryRangeChange }) {
  const handleRangeChange = (e) => {
    const [min, max] = e.target.value.split('-');
    onSalaryRangeChange({ min, max });
  };

  return (
    <Form.Group controlId="salaryRange">
      <Form.Label>Salary Range</Form.Label>
      <Form.Control type="range" onChange={handleRangeChange} />
    </Form.Group>
  );
}

export default FilterList;
