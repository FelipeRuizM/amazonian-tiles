import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFillBugFill } from "react-icons/bs";

export const Icons = () => {

  const iconExample = <BsFillBugFill style={{fontSize: '7rem'}} />;

  const iconsData = [
    {
      icon: iconExample,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in aliquam ex. Cras rutrum justo et dolor tempus, vel sodales.',
    },
    {
      icon: iconExample,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in aliquam ex. Cras rutrum justo et dolor tempus, vel sodales.',
    },
    {
      icon: iconExample,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in aliquam ex. Cras rutrum justo et dolor tempus, vel sodales.',
    },
    {
      icon: iconExample,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in aliquam ex. Cras rutrum justo et dolor tempus, vel sodales.',
    },
    {
      icon: iconExample,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in aliquam ex. Cras rutrum justo et dolor tempus, vel sodales.',
    },
    {
      icon: iconExample,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in aliquam ex. Cras rutrum justo et dolor tempus, vel sodales.',
    },
  ];

  return (
    <section className="icon-section">
      <Container >
        <Row style={{ minHeight: '70vh', marginTop: '15vh' }} className="justify-content-center">
          {iconsData.map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <div className="icon-box text-center">
                {item.icon}
                <p style={{marginTop: '1rem'}}>{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};