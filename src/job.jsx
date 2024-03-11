// YourComponent.jsx
import React from 'react';
import JobDescription from './jobdescription/jobdes'; // Adjust the path as needed

function YourComponent() {
  // Your logic to fetch job details
  const getJob = async (jobId) => {
    try {
      // Implement your logic to fetch job details from the server or data source
      const response = await fetch(`/api/jobs/${jobId}`);
      const jobDetails = await response.json();
      return jobDetails;
    } catch (error) {
      console.error('Error fetching job details:', error);
      throw error;
    }
  };

  return (
    <div>
      {/* Use JobDescription and pass getJob as a prop */}
      <JobDescription getJob={getJob} />
    </div>
  );
}

export default YourComponent;
