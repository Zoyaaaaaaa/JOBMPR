import axios from 'axios';
import './SearchBar.scss'; 
import { useState ,useEffect} from 'react';
import router from '../../routes/Route';
// Import your SCSS file for styling

function SearchBar() {
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [currentImage, setCurrentImage] = useState(0);
  const [jobData, setJobData] = useState([]);

  const images = [
    'https://img.freepik.com/free-vector/tiny-people-searching-business-opportunities_74855-19928.jpg',
    'https://th.bing.com/th/id/R.452134324761cba5c00c83a1d69fb520?rik=03zE6V1vIhOP6w&riu=http%3a%2f%2fimages.huffingtonpost.com%2f2016-08-12-1471031429-2271495-dreamjobaheadconcepts.jpg&ehk=nUvB4d5gjG0irvd5kdNa6CeDUYixCLigaZ3BMZT5tC8%3d&risl=&pid=ImgRaw&r=0',
    // Add more image URLs as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleJobTypeChange = (event) => {
    setJobType(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.get('https://jobs-api14.p.rapidapi.com/list', {
        params: {
          query: 'Web Developer',
          location: 'United States',
          distance: '1.0',
          language: 'en_GB',
          remoteOnly: 'false',
          datePosted: 'month',
          employmentTypes: 'fulltime;parttime;intern;contractor',
          index: '0'
        },
        headers: {
          'X-RapidAPI-Key': 'd8eaa30b37mshb0e32a673315245p16c911jsn6c2e98926d82',
          'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
        }
      });

      console.log(response.data); // Log the fetched data
      setJobData(response.data.jobs || []); // Assuming the jobs are nested under the 'jobs' property
    } catch (error) {
      console.error('Error fetching job data:', error);
    }
  };

  return (
    <>
      <div className='hero'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hero ${index + 1}`}
            style={{
              opacity: index === currentImage ? 1 : 0,
              transform: `translateX(${(index - currentImage) * 100}%)`,
            }}
          />
        ))}
        <button className="nav-button prev">
          &#8249; {/* Left arrow character */}
        </button>
        <button className="nav-button next" >
          &#8250; {/* Right arrow character */}
        </button>
      </div>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={handleLocationChange}
          className="input-location"
        />
        <input
          type="text"
          placeholder="Job Type"
          value={jobType}
          onChange={handleJobTypeChange}
          className="input-job-type"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {/* Display job data here */}
      <div className="job-list">
        {jobData.map((job) => (
          <div key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            {/* Add more job details as needed */}
          </div>
        ))}
      </div>
    </>
  );
}

export default SearchBar;