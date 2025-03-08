'use client';

import { Row, Col, Image } from 'react-bootstrap';

const FullWidthImage = () => (
  <Row className="justify-content-md-center">
    <Col md="auto">
      <Image
        fluid
        className="mx-auto"
        src="/experience-islandsnow-bootstrap-main.png"
        alt="Island Snow Image"
      />
    </Col>
  </Row>
);

export default FullWidthImage;
