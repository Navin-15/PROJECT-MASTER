import React from 'react';
import ret from '/retroinnerimages/retro-innerimage.jpg';
import retrotrailerimg from '/retroinnerimages/retro-trailerimg.jpg';
import { FaCaretRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { MdChevronRight } from "react-icons/md";
import { BsShare } from "react-icons/bs";
import pooja from '/retroinnerimages/pooja-hegde.jpg';
import suriya from '/retroinnerimages/suriya-sivakumar.jpg';
import prakashraj from '/retroinnerimages/prakash-raj.jpg';
import joju from '/retroinnerimages/joju.jpg';
import nassar from '/retroinnerimages/nassar.jpg';
import karthik from '/retroinnerimages/karthik-subbaraj.jpg';
import jyothika from '/retroinnerimages/jyothika.jpg';
import sana from '/retroinnerimages/sana.jpg';
import shreyaas from '/retroinnerimages/shreyaas-krishna.jpg';
import shafique from '/retroinnerimages/shafique-muhammed-ali.jpg';

import Navbar from '../topend/Navbar';
import Categories from '../cat/Categories';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom';

function Rms() {
  const navigate = useNavigate();
  const handleBookticket = () => {
    window.scrollTo(0, 0);
    navigate('/retro/buytickets');
  };

  const cast = [
    { img: pooja, name: "Pooja Hegde" },
    { img: suriya, name: "Suriya" },
    { img: prakashraj, name: "Prakash Raj" },
    { img: joju, name: "Joju George" },
    { img: nassar, name: "Naasar" }
  ];

  const crew = [
    { img: karthik, name: "Karthik Subbaraj", role: "Director" },
    { img: suriya, name: "Suriya", role: "Producer" },
    { img: jyothika, name: "Jyothika", role: "Producer" },
    { img: sana, name: "Santhosh Narayanan", role: "Musician" },
    { img: shreyaas, name: "Shreyaas Krishna", role: "Cinematographer" },
    { img: shafique, name: "Shafique Muhammed Ali", role: "Editor" }
  ];

  return (
    <>
      <div className="overflow-hidden bg-dark text-white">
        <Navbar />
        <Categories />

        <div className="position-relative">
          <img src={ret} alt="poster" className="img-fluid w-100 mx-auto mt-3 px-5" style={{ }} /> 

          {/* Share Button */}
          <div className="position-absolute top-0 end-0 m-3 d-flex align-items-center">
            <BsShare />
            <span className="ms-1">Share</span>
          </div>

          {/* Title, Rating, Details */}
          <div className="container text-center py-4">
            <h1 className="fw-bold">Retro</h1>
            <div className="d-flex justify-content-center align-items-center gap-2">
              <FaStar className="text-warning" />
              <h5 className="mb-0">7.5/10</h5>
              <small>(48.1k votes)</small>
              <MdChevronRight />
              {/* <button className="btn btn-outline-light btn-sm ms-2">Rate Now</button> */}
            </div>
            <div className="mt-3">
              <span className="badge bg-secondary me-1">2D</span>
              <span className="badge bg-secondary me-1">Tamil</span>
              <span className="badge bg-secondary me-1">Kannada</span>
              <span className="badge bg-secondary me-1">Hindi</span>
              <span className="badge bg-secondary">Telugu</span>
            </div>
            <div className="mt-2 small">
              2hr 48m · <a href="#" className="text-light text-decoration-none">Action</a>, <a href="#" className="text-light text-decoration-none">Thriller</a> · UA16+ · 1 May, 2025
            </div>
            <button className="btn btn-danger mt-3" onClick={handleBookticket}>Book Tickets</button>
          </div>
        </div>

        {/* About Movie */}
        <div className="container py-4">
          <h4>About the Movie</h4>
          <p>
            A gangster, caught between his love for his wife and the shadows of his violent past, attempts to turn over a new leaf. But walking away isn`t as easy as it seems. As buried secrets resurface and enemies close in, his journey toward peace spirals into chaos. Blending raw emotion with high-octane action, this is a story of love, redemption, and the haunting pull of a life once lived.
          </p>
          <hr />
        </div>

        {/* Cast Section */}
        <div className="container py-4">
          <h4>Cast</h4>
          <div className="row">
            {cast.map((actor, i) => (
              <div key={i} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4 ">
                <img src={actor.img} className="img-fluid rounded-circle mb-2 " alt={actor.name} style={{ height: '100px'}} />
                <h6 className="mb-0">{actor.name}</h6>
                <small>Actor</small>
              </div>
            ))}
          </div>
        </div>

        {/* Crew Section */}
        <div className="container py-4">
          <h4>Crew</h4>
          <div className="row">
            {crew.map((member, i) => (
              <div key={i} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4">
                <img src={member.img} className="img-fluid rounded-circle mb-2" alt={member.name} style={{ height: '100px'}} />
                <h6 className="mb-0">{member.name}</h6>
                <small>{member.role}</small>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Rms;
