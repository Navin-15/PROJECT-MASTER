import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IoIosSearch } from 'react-icons/io';
import { ImTarget } from 'react-icons/im';
import Mumbai from '/images/mumbai.png';
import NCR from '/images/ncr.png';
import Bang from '/images/bang.png';
import Hyd from '/images/hyd.png';
import Chd from '/images/chd.png';
import Ahd from '/images/ahd.png';
import Chen from '/images/chen.png';
import Pune from '/images/pune.png';
import Kolk from '/images/kolk.png';
import Koch from '/images/koch.jpeg';

function Cities({ onCitySelect }) {
  const cities = [
    { name: 'Mumbai', img: Mumbai },
    { name: 'Delhi-NCR', img: NCR },
    { name: 'Bengaluru', img: Bang },
    { name: 'Hyderabad', img: Hyd },
    { name: 'Chandigarh', img: Chd },
    { name: 'Ahmedabad', img: Ahd },
    { name: 'Chennai', img: Chen },
    { name: 'Pune', img: Pune },
    { name: 'Kolkata', img: Kolk },
    { name: 'Kochi', img: Koch },
  ];

  return (
    <Container className="py-4">
      {/* Search + Detect */}
      <Row className="mb-4">
        <Col xs={12} sm={8} md={9}>
          <div className="input-group">
            <span className="input-group-text"><IoIosSearch /></span>
            <input type="text" className="form-control" placeholder="Search for your city" />
          </div>
        </Col>
        <Col xs={12} sm={4} md={3} className="mt-2 mt-sm-0">
          <button className="btn btn-outline-primary w-100">
            <ImTarget className="me-2" /> Detect my location
          </button>
        </Col>
      </Row>

      {/* Popular Cities */}
      <h5 className="mb-3">Popular Cities</h5>
      <Row xs={2} sm={3} md={5} lg={5} className="g-3">
        {cities.map((city) => (
          <Col key={city.name}>
            <div
              className="text-center city-card p-2"
              onClick={() => onCitySelect(city.name)}
              style={{ cursor: 'pointer' }}
            >
              <img src={city.img} alt={city.name} className="img-fluid rounded mb-2" />
              <div>{city.name}</div>
            </div>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-4">
        <button className="btn btn-link">View All Cities</button>
      </div>
    </Container>
  );
}

export default Cities;
