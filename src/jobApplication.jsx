import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { firestore } from '../firebaseConfig';
import './JobApplicationForm.scss';


function JobApplicationForm() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    resume: yup.mixed().required(),
    coverLetter: yup.string().required(),
    agreeTerms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });
  const handleSubmit = async (values) => {
    try {
      // Save data to Firestore
      await firestore.collection('jobApplications').add(values);

      console.log('Job application submitted successfully to Firestore!');
    } catch (error) {
      console.error('Failed to submit job application to Firestore:', error.message);
    }
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        fullName: '',
        email: '',
        phone: '',
        resume: null,
        coverLetter: '',
        agreeTerms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik01">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                isValid={touched.fullName && !errors.fullName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationFormik02">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                isValid={touched.phone && !errors.phone}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationFormik04">
              <Form.Label>Resume (URL or file)</Form.Label>
              <InputGroup hasValidation>
                {/* <Form.Control
                  type="file"
                  name="resume"
                  onChange={(event) => {
                    handleChange(event);
                    // For displaying the selected file name (optional)
                    const fileName = event.currentTarget.files[0]?.name || '';
                    document.getElementById('file-name').innerText = fileName;
                  }}
                  isInvalid={!!errors.resume}
                  custom
                /> */}
<Form.Control
type="file"
name="resume"
onChange={(event) => {
handleChange(event);
// For displaying the selected file name (optional)
const fileName = event.currentTarget.files[0]?.name || '';
document.getElementById('file-name').innerText = fileName;
}}
isInvalid={!!errors.resume}
custom="true" 
/>
                <Form.Control.Feedback type="invalid">
                  {errors.resume}
                </Form.Control.Feedback>
              </InputGroup>
              <small id="file-name" className="text-muted">
                {values.resume && !errors.resume ? `Selected file: ${values.resume.name}` : 'No file selected'}
              </small>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationFormik05">
              <Form.Label>Cover Letter</Form.Label>
              <Form.Control
                as="textarea"
                name="coverLetter"
                value={values.coverLetter}
                onChange={handleChange}
                isValid={touched.coverLetter && !errors.coverLetter}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Check
              required
              name="agreeTerms"
              label="I agree to the terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.agreeTerms}
              feedback={errors.agreeTerms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>

          <Button type="submit" onClick={handleSubmit} >Submit Application</Button>
        </Form>
      )}
    </Formik>
  );
}

export default JobApplicationForm;
