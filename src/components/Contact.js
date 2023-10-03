import React, { useState } from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    address2: '',
    city: '',
    postalCode: '',
    details: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="contact-section">
      <Container>
        <Row className="justify-content-md-center" style={{marginTop: '15vh'}}>
          <Col xs={12} md={8}>
            <h2>Contact Form</h2>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder='John'
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder='Doe'
                    required
                  />
                </Form.Group>
              </Row>

              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder='1234 Main St'
                  required
                />
              </Form.Group>

              <Form.Group controlId="address2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control
                  type="text"
                  name="address2"
                  value={formData.address2}
                  onChange={handleChange}
                  placeholder='Apartment, studio, or floor'
                />
              </Form.Group>

              <Row className="mb-3">

                <Form.Group as={Col} controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder='Victoria'
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="postalCode">
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    placeholder='V1V-1V1'
                    required
                  />
                </Form.Group>

              </Row>

              <Form.Group as={Col} controlId="phoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder='(123) 456-7890'
                  required
                />
              </Form.Group>

              <Form.Group controlId="details">
                <Form.Label>Details</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" style={{marginTop: '4vh', marginBottom: '4vh'}}>
                Call me back
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}