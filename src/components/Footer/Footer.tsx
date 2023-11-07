import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';

function Footer() {

    const navigate = useNavigate();

  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link onClick={() => navigate('/contactanos')}>Contáctanos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Nuestras Redes</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Ubicaciones</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Ayuda
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <p className="text-center mt-2 mb-2">Blablablabla</p>
    </>
  );
}

export default Footer;