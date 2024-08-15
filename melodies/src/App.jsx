
import Container from 'react-bootstrap/esm/Container';
import './App.scss';
import Header from './component/Header';
import ListArtis from './component/ListArtis';
import Sidebar from './component/Sidebar';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Home from './component/Home';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Container className='bg-black min-vh-100' >
        <Row className="d-flex h-100">
          <Col xs={2} className="p-0" style={{ backgroundColor: '#0E1920', height: '100vh' }} >
            <Sidebar  />
          </Col>
          <Col xs={10}  className="p-0" style={{backgroundColor:'#412C3A'}} >
            <Header />
            <Home />
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
