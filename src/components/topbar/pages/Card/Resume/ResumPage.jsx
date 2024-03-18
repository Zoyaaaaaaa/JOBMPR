{/**import React from 'react';
import jsPDF from 'jspdf';

const Resume = () => {

    const handleDownload = () => {
        const content = document.getElementById("content");

        // Initialize jsPDF with landscape orientation
        const pdf = new jsPDF('l', 'pt', 'a4');

        // Set custom width by changing the page size
        pdf.internal.pageSize.setWidth(800); // Adjust the width as needed

        // Convert div content to PDF
        pdf.html(content, {
            callback: function (pdf) {
                pdf.save("div_content.pdf"); // Save the PDF with given name
            }
        });
    };

    return (
        <div>
            <div id="content">
            
                <h1>Hello, world!</h1>
                <p>This is a div content to be downloaded as PDF.</p>
            </div>
            <button onClick={handleDownload}>Download as PDF</button>
        </div>
    );
};

export default Resume;*/}
import React, { useState } from 'react';
import './Resume.scss';
import resumeBuilder from '../../../../../assets/resume-builder.png';
import jsPDF from 'jspdf';

const handleDownload = () => {
    const content = document.getElementById("content");

    // Initialize jsPDF with landscape orientation
    const pdf = new jsPDF('l', 'pt', 'a4');

    // Set custom width by changing the page size
    pdf.internal.pageSize.setWidth(800); // Adjust the width as needed

    // Convert div content to PDF
    pdf.html(content, {
        callback: function (pdf) {
            pdf.save("div_content.pdf"); // Save the PDF with given name
        }
    });
};
const Resume = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    summary: '',
    experience: '',
    education: ''
  });
  const [showResume, setShowResume] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResume(true);
  };

  return (
    <div className="resume-builder">
      {!showResume ? (
        <div className="form-and-image-container">
          <div className="form-container">
            <form className="resume-form" onSubmit={handleSubmit}>
              <label htmlFor="fullName">Full Name:</label>
              <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

              <label htmlFor="phoneNumber">Phone Number:</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />

              <label htmlFor="summary">Skills:</label>
              <textarea id="summary" name="summary" value={formData.summary} onChange={handleChange} required />

              <label htmlFor="experience">Experience:</label>
              <textarea id="experience" name="experience" value={formData.experience} onChange={handleChange} required />

              <label htmlFor="education">Education:</label>
              <textarea id="education" name="education" value={formData.education} onChange={handleChange} required />

              <button type="submit">Generate Resume</button>
            </form>
          </div>
          <img src={resumeBuilder} alt="Resume" className="resume-image" />
        </div>
      ) : ( <div className="resume ">
        <div  id='content'>
           

          <div className="resume-content">
           <div className='head-info'>
            <h1>{formData.fullName}</h1>
            <p>Email: {formData.email}</p>
            <p>Phone Number: {formData.phoneNumber}</p>
            <p>Address: {formData.address}</p>
            </div>
            <hr/>

            <h2>Skills</h2>
            <p>{formData.summary}</p>
             <hr/>

            <h2>Experience</h2>
            <p>{formData.experience}</p>

            <h2>Education</h2>
            <p>{formData.education}</p>
            <br/>
            
          </div>
          </div>
          <button onClick={handleDownload}>Download as PDF</button>
        </div>
      )}
    </div>
  );
};

export default Resume;