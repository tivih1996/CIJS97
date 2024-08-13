
import Container from 'react-bootstrap/esm/Container';
import './App.scss';
import Header from './component/Header';
import ListArtis from './component/ListArtis';
import Sidebar from './component/Sidebar';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';


function App() {
  return (
    <>
      <Container fluid className="p-0">
        <Row className="d-flex h-100">
          <Col xs={2} className="p-2-3" style={{ backgroundColor: '#f8f9fa', height: '100vh' }} >
            <Sidebar  />
          </Col>
          <Col xs={10}  className="p-0" >
            <Header />
            <ListArtis />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
