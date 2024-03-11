import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import "./jobcard.scss"

function JobCard({ job }) {
  const { id,companyLogo, companyName, jobTitle, jobLocation } = job;
  return (
    <Link to={`/jobs/${id}`} className="job-card-link"> {/* Add Link component */}
      <Card className="job-card">
        <Card.Img className="card-img" variant="top" src={companyLogo} alt={`${companyName} Logo`} />
        <Card.Body className="card-body">
          <Card.Title className="card-title">{jobTitle}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted card-subtitle">{companyName}</Card.Subtitle>
          <Card.Text className="card-text">{jobLocation}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
// return (
//   <Card className="job-card">
//     <Card.Img className="card-img" variant="top" src={companyLogo} alt={`${companyName} Logo`} />
//     <Card.Body className="card-body">
//       <Card.Title className="card-title">{jobTitle}</Card.Title>
//       <Card.Subtitle className="mb-2 text-muted card-subtitle">{companyName}</Card.Subtitle>
//       <Card.Text className="card-text">{jobLocation}</Card.Text>
//     </Card.Body>
//   </Card>
// );
// }


function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("./jobs.json"); 
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className='cards'>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}


export default JobList;
