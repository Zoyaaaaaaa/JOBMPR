import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Data = () => {
  const [jobData, setJobData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://rapid-linkedin-jobs-api.p.rapidapi.com/search-jobs',
        params: {
          keywords: 'golang',
          locationId: '92000000',
          datePosted: 'anyTime',
          sort: 'mostRelevant'
        },
        headers: {
          'X-RapidAPI-Key': 'd8eaa30b37mshb0e32a673315245p16c911jsn6c2e98926d82',
          'X-RapidAPI-Host': 'rapid-linkedin-jobs-api.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setJobData(response.data);
      } catch (error) {
        console.error('Error:', error);

        if (error.response) {
          console.error('Response Data:', error.response.data);
          console.error('Response Status:', error.response.status);
        }

        setError(error.response ? error.response.data : { message: error.message });
      }
    };

    fetchData();

    return () => {
      // Cleanup code, if necessary
    };
  }, []);

  return (
    <div>
      {jobData ? (
        <div>
          {/* Render job data here */}
          {jobData.jobs.map((job) => (
            <div key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.description}</p>
              {/* Add more details based on the actual structure of the response */}
            </div>
          ))}
        </div>
      ) : (
        <p>{error ? error.message : 'Loading...'}</p>
      )}
    </div>
  );
};

export default Data;
