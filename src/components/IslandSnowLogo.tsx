'use client';

import { Row, Col, Image } from 'react-bootstrap';

const IslandSnowLogo = () => (
  <Row className="justify-content-md-center py-3">
    <Col md="auto">
      <Image
        fluid
        rounded
        className="mx-auto"
        src="/experience-islandsnow-bootstrap-logo.png"
        alt="Island Snow Hawaii Logo"
      />
    </Col>
  </Row>
);

export default IslandSnowLogo;
