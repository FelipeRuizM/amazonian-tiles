import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  BsFillXDiamondFill, 
  BsFillHouseHeartFill, 
  BsFillPersonVcardFill,
  BsFillPiggyBankFill,
  BsFillTelephoneInboundFill,
  BsFillHandThumbsUpFill
} from "react-icons/bs";

export const Icons = () => {

  const iconExample1 = <BsFillXDiamondFill style={{fontSize: '7rem'}} />;
  const iconExample2 = <BsFillHouseHeartFill style={{fontSize: '7rem'}} />;
  const iconExample3 = <BsFillPersonVcardFill style={{fontSize: '7rem'}} />;
  const iconExample4 = <BsFillPiggyBankFill style={{fontSize: '7rem'}} />;
  const iconExample5 = <BsFillTelephoneInboundFill style={{fontSize: '7rem'}} />;
  const iconExample6 = <BsFillHandThumbsUpFill style={{fontSize: '7rem'}} />;

  const iconsData = [
    {
      icon: iconExample1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in aliquam ex. Cras rutrum justo et dolor tempus, vel sodales.',
    },
    {
      icon: iconExample2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in aliquam ex. Cras rutrum justo et dolor tempus, vel sodales.',
    },
    {
      icon: iconExample3,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in aliquam ex. Cras rutrum justo et dolor tempus, vel sodales.',
    },
    {
      icon: iconExample4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in aliquam ex. Cras rutrum justo et dolor tempus, vel sodales.',
    },
    {
      icon: iconExample5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in aliquam ex. Cras rutrum justo et dolor tempus, vel sodales.',
    },
    {
      icon: iconExample6,
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