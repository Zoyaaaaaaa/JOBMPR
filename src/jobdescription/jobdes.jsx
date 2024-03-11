// // JobDescription.jsx

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import './jobdes.scss';

// function JobDescription({ jobs }) {
//   const { jobId } = useParams();

  
//   if (!jobs || jobs.length === 0) {
//     return <div>No jobs available</div>;
//   }

//   const job = jobs.find((job) => job.id === parseInt(jobId));

//   if (!job) {
//     return <div>Job not found</div>;
//   }

//   const {
//     companyName,
//     jobTitle,
//     companyLogo,
//     minPrice,
//     maxPrice,
//     salaryType,
//     jobLocation,
//     postingDate,
//     experienceLevel,
//     employmentType,
//     description,
//   } = job;

//   return (
//     <div className="job-description">
//       <div className="header">
//         <img src={companyLogo} alt={`${companyName} Logo`} />
//         <div className="header-info">
//           <h2>{jobTitle}</h2>
//           <p className="company">{companyName}</p>
//           <p className="location">{jobLocation}</p>
//         </div>
//       </div>

//       <div className="details">
//         <div className="salary">
//           <h3>Salary Range</h3>
//           <p>{`$${minPrice} - $${maxPrice} ${salaryType}`}</p>
//         </div>
//         <div className="posting-date">
//           <h3>Posting Date</h3>
//           <p>{postingDate}</p>
//         </div>
//         <div className="experience">
//           <h3>Experience Level</h3>
//           <p>{experienceLevel}</p>
//         </div>
//         <div className="employment-type">
//           <h3>Employment Type</h3>
//           <p>{employmentType}</p>
//         </div>
//       </div>

//       <div className="description">
//         <h3>Description</h3>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

// export default JobDescription;
// JobDescription.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './jobdes.scss';

function JobDescription({ getJob }) {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    // Fetch job details when the component mounts
    const fetchJobDetails = async () => {
      try {
        const jobDetails = await getJob(jobId);
        setJob(jobDetails);
      } catch (error) {
        console.error('Error fetching job details:', error);
        setJob(null);
      }
    };

    fetchJobDetails();
  }, [getJob, jobId]);

  if (!job) {
    return <div>Loading...</div>;
  }

  const {
    companyName,
    jobTitle,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    employmentType,
    description,
  } = job;

  return (
    <div className="job-description">
      {/* Display job details here */}
      <h1>{jobTitle}</h1>
      {/* ... (rest of the component remains the same) */}
      <p className="company">{companyName}</p>
           <p className="location">{jobLocation}</p>
        </div>

//       <div className="details">
//         <div className="salary">
//           <h3>Salary Range</h3>
//           <p>{`$${minPrice} - $${maxPrice} ${salaryType}`}</p>
//         </div>
//         <div className="posting-date">
//           <h3>Posting Date</h3>
//           <p>{postingDate}</p>
//         </div>
//         <div className="experience">
//           <h3>Experience Level</h3>
//           <p>{experienceLevel}</p>
//         </div>
//         <div className="employment-type">
//           <h3>Employment Type</h3>
//           <p>{employmentType}</p>
//         </div>
//       </div>

//       <div className="description">
//         <h3>Description</h3>
//         <p>{description}</p>
   //   </div>
    //</div>
  );
}

export default JobDescription;
