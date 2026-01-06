import React from 'react';
import { Container, Row, Col, InputGroup, Button, Badge } from 'react-bootstrap';
import { SlArrowLeft } from 'react-icons/sl';
import { RiCloseFill } from 'react-icons/ri';
import { IoIosHeart } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const moviesData = [
  {
    language: 'Tamil',
    items: [
      { title: 'Billa (UA)', rating: 95 },
      { title: 'Gangers (UA13)', rating: 80 },
      { title: 'Good Bad Ugly (UA16)', rating: 84 },
      { title: 'HIT: The Third Case (Tamil) (A)' },
      { title: 'Retro (UA16)' },
      { title: 'Sachein', rating: 96 },
      { title: 'Sumo (U)', rating: 54 },
      { title: 'Ten Hours (UA)', rating: 77 },
      { title: 'Thunderbolts*', dimensions: ['3D','2D'] },
      { title: 'Tourist Family (U)' },
      { title: 'Vaali (A)', rating: 81 },
      { title: 'Vallamai (UA13)', rating: 96 },
      { title: 'Veera Dheera Sooran -Part 2 (UA13)', rating: 84 },
      { title: 'Veeram (Tamil) (U)', rating: 77 },
      { title: 'Vinnaithaandi Varuvaaya (UA)', rating: 90 },
    ]
  },
  {
    language: 'English',
    items: [
      { title: 'A MineCraft Movie', rating: 83, dimensions: ['3D','IMAX3D'] },
      { title: 'Conclave (UA/13)', rating: 84 },
      { title: 'Dog Man (U)', rating: 83 },
      { title: 'Flow (U)', rating: 90 },
      { title: 'Interstellar (13+)', rating: 96 },
      { title: 'Mission Impossible (UA)', rating: 91 },
      { title: 'Paddington in Peru (U)', rating: 85 },
      { title: 'Sinners', rating: 84, dimensions: ['IMAX 2D','2D'] },
      { title: 'The Chosen: Last Supper (UA13)', rating: 94 },
      { title: 'Thunderbolts*', dimensions: ['3D','IMAX 3D'] },
      { title: 'Until Dawn (A)', rating: 80 },
    ]
  },
  {
    language: 'Telugu',
    items: [
      { title: 'Chaurya Paatam (UA/13)', rating: 89 },
      { title: 'HIT The Third Case (A)'},
      { title: 'Retro (UA16)' },
      { title: 'Sarangapani Jathakam (UA13)', rating: 83 },
    ]
  },
  {
    language: 'Hindi',
    items: [
      { title: 'Andaz Apna Apna (U)', rating: 96 },
      { title: 'Ground Zero (UA)', rating: 86},
      { title: 'Kesari Chapter 2 (UA16)', rating: 93 },
      { title: 'Phule (U)', rating: 94 },
      { title: 'Rab Ne Bana Di Jodi (U)', rating: 87 },
      { title: 'Raid 2 (UA7)' },
    ]
  },
  {
    language: 'Marathi',
    items: [
      { title: 'Devamanus (UA16)', rating: 96 },
    ]
  },
  {
    language: 'Malayalam',
    items: [
      { title: 'Alappuzha (UA7)', rating: 82 },
      { title: 'Thudarum (UA16)', rating: 95 },
    ]
  },
  // Add Telugu, Hindi, Marathi, Malayalam, etc.
];

function Innerinput() {
  const navigate = useNavigate();
  const GoBack = () => {
    window.scrollTo(0, 0);
    navigate(-1);
  };

  return (
    <Container fluid className="py-3">
      <InputGroup className="mb-3">
        <Button variant="outline-secondary" onClick={GoBack}><SlArrowLeft /></Button>
        <input
          type="search"
          className="form-control"
          placeholder="Search for Movies, Events, plays, Sports and Activities"
        />
        <Button variant="outline-secondary" onClick={GoBack}><RiCloseFill /></Button>
      </InputGroup>

      <div className="d-flex flex-wrap mb-3 gap-2">
        <Badge bg="secondary" className="clickable">Filter</Badge>
        {['Tamil','English','Telugu','Hindi','Marathi','Malayalam'].map(lang => (
          <Badge key={lang} bg="light" text="dark" className="clickable">{lang}</Badge>
        ))}
        <Badge bg="light" text="dark" className="clickable">+1 more</Badge>
      </div>

      {moviesData.map(section => (
        <div key={section.language} className="mb-4">
          <h5 className="mb-3">{section.language}</h5>
          <Row xs={1} sm={2} md={3} lg={4} className="g-3">
            {section.items.map((m,i) => (
              <Col key={i}>
                <div className="d-flex align-items-center justify-content-between p-2 border rounded h-100">
                  <div className="flex-grow-1">
                    <a href="#" className="text-decoration-none">{m.title}</a>
                  </div>
                  {m.rating && <IoIosHeart className="text-danger ms-2" />}
                  {m.rating && <Badge bg="success" className="ms-2">{m.rating}%</Badge>}
                </div>
                {m.dimensions && (
                  <div className="mt-1">
                    {m.dimensions.map(d => (
                      <Badge bg="info" key={d} className="me-1">{d}</Badge>
                    ))}
                  </div>
                )}
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default Innerinput;




