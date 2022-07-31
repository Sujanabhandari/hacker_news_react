import React from 'react';
import SearchBar from './SearchBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FetchApi from './FetchApi';
import Page from './Pagination'

function Main() {
  return (
    <Container className="main">
      <Row>
        <Col>
        {/* <SearchBar /> */}
        <FetchApi />
        </Col>
      </Row>
    {/* <Page /> */}

    </Container>
  );
}

export default Main;
