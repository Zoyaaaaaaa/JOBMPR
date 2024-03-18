import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import Button from 'react-bootstrap/Button';
import { useFormikContext } from 'formik';
import "./uploadjob.scss";

const UploadJob = () => {
  const validationSchema = yup.object().shape({
    companyName: yup.string().required('Company Name is required'),
    jobTitle: yup.string().required('Job Title is required'),
    companyLogo: yup.mixed().required('Company Logo is required'),
    minPrice: yup.string().required('Min Price is required'),
    maxPrice: yup.string().required('Max Price is required'),
    salaryType: yup.string().required('Salary Type is required'),
    jobLocation: yup.string().required('Job Location is required'),
    postingDate: yup.date().required('Posting Date is required'),
    experienceLevel: yup.string().required('Experience Level is required'),
    employmentType: yup.string().required('Employment Type is required'),
    description: yup.string().required('Description is required'),
    qualifications: yup.string().required('Qualifications are required'),
  });

  const initialValues = {
    companyName: '',
    jobTitle: '',
    companyLogo: null,
    minPrice: '',
    maxPrice: '',
    salaryType: '',
    jobLocation: '',
    postingDate: new Date().toISOString().split('T')[0],
    experienceLevel: '',
    employmentType: '',
    description: '',
    qualifications: '',
  };
  
  const handleSubmit = async (values, { setSubmitting }) => {
    const filteredValues = Object.fromEntries(
      Object.entries(values).filter(([_, value]) => value !== '')
    );

    console.log('Submitted Job Data:', filteredValues);
    const formData = new FormData();
    Object.entries(filteredValues).forEach(([key, value]) => {
      formData.append(key, value);
    });

    formData.append('companyLogo', values.companyLogo);
    await postData(formData);
    setSubmitting(false);
  };

  const postData = async (formData) => {
    try {
      const response = await fetch('http://localhost:5173/uploadjob', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Data successfully saved to server!');
      } else {
        console.error('Failed to save data to server:', response.statusText);
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  const MySubmitButton = () => {
    const formik = useFormikContext();

    const onClickHandler = async (e) => {
      e.preventDefault();
      const jsonData = JSON.stringify(formik.values);
      console.log(jsonData);
    
      try {
        const response = await fetch('https://job-portal-abdc9-default-rtdb.firebaseio.com/Jobsdata.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: jsonData,
        });
    
        if (response.ok) {
          console.log('Data successfully saved to Firebase!');
        } else {
          console.error('Failed to save data to Firebase:', response.statusText);
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };
    

    return (
      <Button type="submit" disabled={formik.isSubmitting} onClick={onClickHandler}>
        Submit
      </Button>
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ setFieldValue, isSubmitting }) => (
        <Form>
          <h1>Upload Job</h1>
          <label>
            Company Name:
            <Field type="text" name="companyName" />
          </label>

          <label>
            Job Title:
            <Field type="text" name="jobTitle" />
          </label>

          <label>
            Company Logo:
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, setFieldValue)}
            />
          </label>

          <label>
            Min Price:
            <Field type="text" name="minPrice" />
          </label>

          <label>
            Max Price:
            <Field type="text" name="maxPrice" />
          </label>

          <label>
            Salary Type:
            <Field type="text" name="salaryType" />
          </label>

          <label>
            Job Location:
            <Field type="text" name="jobLocation" />
          </label>

          <label>
            Posting Date:
            <Field type="date" name="postingDate" />
          </label>

          <label>
            Experience Level:
            <Field type="text" name="experienceLevel" />
          </label>

          <label>
            Employment Type:
            <Field type="text" name="employmentType" />
          </label>

          <label>
            Description:
            <Field as="textarea" name="description" />
          </label>

          <label>
            Qualifications:
            <Field as="textarea" name="qualifications" />
          </label>

          <MySubmitButton />
        </Form>
      )}
    </Formik>
  );
};

export default UploadJob;
