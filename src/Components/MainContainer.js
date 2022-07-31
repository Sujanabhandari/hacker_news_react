import React from 'react';
import SearchBar from './SearchBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FetchApi from './FetchApi';
import Page from './Pagination'
import Footer from './Footer';
import NavBar from './Navbar';

function Main() {
  return (
    <Container className="main">
      <NavBar />
      <Row>
        <Col>
        {/* <SearchBar /> */}
        <FetchApi />
        </Col>
      </Row>
    {/* <Page /> */}
    <Footer />
    </Container>
  );
}

export default Main;
