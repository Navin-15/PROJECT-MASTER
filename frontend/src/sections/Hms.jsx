import React from 'react';
import hit from '/hitinnerimages/hitinnerimage.jpg';
import hittrailerimg from '/hitinnerimages/hittrailerimage.jpg';

import { FaCaretRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { MdChevronRight } from "react-icons/md";
import { BsShare } from "react-icons/bs";

import Nani from '/hitinnerimages/nani.jpg';
import sreenidhi from '/hitinnerimages/sreenidhi.jpg';
import samuthirakani from '/hitinnerimages/samuthirakani.jpg';
import suryasrinivas from '/hitinnerimages/surya-srinivas.jpg';
import prateik from '/hitinnerimages/prateik.jpg';

import sailesh from '/hitinnerimages/sailesh.jpg';
import prashanti from '/hitinnerimages/prashanti.jpg';
import mickey from '/hitinnerimages/mickey.jpg';
import sanu from '/hitinnerimages/sanu.jpg';
import srinagu from '/hitinnerimages/sri-nagendra.jpg';

import Navbar from '../topend/Navbar';
import Categories from '../cat/Categories';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom';

function Hms() {
  const navigate = useNavigate();
  const handleBookticket = () => {
    window.scrollTo(0, 0);
    navigate('/hit/buytickets');
  };

  const cast = [
    { img: Nani, name: "Nani", role: "as Arjun Sarkaar" },
    { img: sreenidhi, name: "Sreenidhi Shetty", role: "as Mrudula" },
    { img: samuthirakani, name: "Samuthirakani", role: "Actor" },
    { img: suryasrinivas, name: "Suriya Srinivas", role: "as ASP Ravi" },
    { img: prateik, name: "Prateik Babbar", role: "Actor" }
  ];

  const crew = [
    { img: sailesh, name: "Sailesh Kolanu", role: "Director, Writer" },
    { img: prashanti, name: "Prashanti Tipirneni", role: "Producer" },
    { img: mickey, name: "Mickey J. Meyer", role: "Musician" },
    { img: sanu, name: "Sanu Varghese", role: "Cinematographer" },
    { img: srinagu, name: "Sri Nagendra Tangala", role: "Production Designer" }
  ];

  return (
    <div className="bg-dark text-white">
      <Navbar />
      <Categories />

      {/* Hero Section */}
      <div className="position-relative">
        <img src={hit} alt="Movie Poster" className="img-fluid w-100 mx-auto mt-3 px-5" />
        
       

        {/* Share Button */}
        <div className="position-absolute top-0 end-0 p-3 d-flex align-items-center">
          <BsShare /> <span className="ms-2">Share</span>
        </div>

        {/* Movie Info */}
        <div className="container text-center py-4">
          <h1 className="fw-bold">HIT: The Third Case</h1>
          <div className="d-flex justify-content-center align-items-center gap-2">
            <FaStar className="text-warning" />
            <h5 className="mb-0">8.8/10</h5>
            <small>(74.7k votes)</small>
            <MdChevronRight />
            {/* <button className="btn btn-outline-light btn-sm ms-2">Rate Now</button> */}
          </div>

          <div className="mt-3">
            <span className="badge bg-secondary me-1">2D</span>
            <span className="badge bg-secondary me-1">Telugu</span>
            <span className="badge bg-secondary me-1">Hindi</span>
            <span className="badge bg-secondary me-1">Tamil</span>
            <span className="badge bg-secondary me-1">Kannada</span>
            <span className="badge bg-secondary me-1">Malayalam</span>
          </div>

          <div className="mt-2 small">
            2hr 37m · <a href="#" className="text-light text-decoration-none">Crime</a>, <a href="#" className="text-light text-decoration-none">Mystery</a>, <a href="#" className="text-light text-decoration-none">Thriller</a> · A · 1 May, 2025
          </div>

          <button className="btn btn-danger mt-3" onClick={handleBookticket}>Book Tickets</button>
        </div>
      </div>

      {/* About the Movie */}
      <div className="container py-4">
        <h4>About the Movie</h4>
        <p>
          Arjun Sarkaar joins Vizag HIT on a mission to solve a series of gritty murders. His investigation spans across India, putting him and his team in grave danger, leading to one choice: Violence.
        </p>
        <hr />
      </div>

      {/* Cast */}
      <div className="container py-4">
        <h4>Cast</h4>
        <div className="row">
          {cast.map((actor, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4">
              <img src={actor.img} className="img-fluid rounded-circle mb-2" alt={actor.name} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
              <h6 className="mb-0">{actor.name}</h6>
              <small>{actor.role}</small>
            </div>
          ))}
        </div>
      </div>

      {/* Crew */}
      <div className="container py-4">
        <h4>Crew</h4>
        <div className="row">
          {crew.map((member, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4">
              <img src={member.img} className="img-fluid rounded-circle mb-2" alt={member.name} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
              <h6 className="mb-0">{member.name}</h6>
              <small>{member.role}</small>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Hms;
