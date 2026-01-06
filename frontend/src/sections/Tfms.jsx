import React from 'react';
import { FaCaretRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { MdChevronRight } from "react-icons/md";
import { BsShare } from "react-icons/bs";

import Navbar from '../topend/Navbar';
import Categories from '../cat/Categories';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom';

import Tfamily from '/touristfamilyinnerimages/tourist-family-innerimage.jpg';
import Tfamilytrailerimg from '/touristfamilyinnerimages/tourist-family-trailerimage.jpg';

import sasikumar from '/touristfamilyinnerimages/sasikumar.jpg';
import simran from '/touristfamilyinnerimages/simran.jpg';
import mithun from '/touristfamilyinnerimages/mithun.jpg';
import kamalesh from '/touristfamilyinnerimages/kamalesh.jpg';
import babu from '/touristfamilyinnerimages/yogi-babu.jpg';
import baskar from '/touristfamilyinnerimages/ms-baskar.jpg';
import bagavathi from '/touristfamilyinnerimages/bagavathi.jpg';
import elango from '/touristfamilyinnerimages/elango.jpg';
import yoga from '/touristfamilyinnerimages/yogalakshmi.jpg';

import abishan from '/touristfamilyinnerimages/abishan.jpg';
import yuvaraj from '/touristfamilyinnerimages/yuvaraj.jpg';
import magesh from '/touristfamilyinnerimages/magesh.jpg';
import sean from '/touristfamilyinnerimages/sean.jpg';
import aravind from '/touristfamilyinnerimages/aravind.jpg';
import barath from '/touristfamilyinnerimages/barath.jpg';

function Tfms() {
  const navigate = useNavigate();
  const handleBookticket = () => {
    window.scrollTo(0, 0);
    navigate('/touristfamily/buytickets');
  };

  const cast = [
    { img: sasikumar, name: "M. Sasikumar", role: "as Tharmadas" },
    { img: simran, name: "Simran Bagga", role: "as Vasanthy" },
    { img: mithun, name: "Mithun Jai Sankar", role: "as Nithushan" },
    { img: kamalesh, name: "Kamalesh Jegan", role: "as Mulli" },
    { img: babu, name: "Yogi Babu", role: "as Prakash" },
    { img: baskar, name: "MS Baskar", role: "as Richard" },
    { img: bagavathi, name: "Bagavathi Perumal", role: "as Ragavan" },
    { img: elango, name: "Elango Kumaravel", role: "as Gunasekar" },
    { img: yoga, name: "Yogalakshmi", role: "as Kural" },
  ];

  const crew = [
    { img: abishan, name: "Abishan Jeevinth", role: "Director, Writer" },
    { img: yuvaraj, name: "Yuvaraj Ganeshan", role: "Producer" },
    { img: magesh, name: "Magesh Raj Pasilian", role: "Producer" },
    { img: sean, name: "Sean Roldan", role: "Musician" },
    { img: aravind, name: "Aravind Viaswnathan", role: "Cinematographer" },
    { img: barath, name: "Barath Vikraman", role: "Editor" },
  ];

  return (
    <div className="bg-dark text-white overflow-hidden">
      <Navbar />
      <Categories />

      {/* Hero Image */}
      <div className="position-relative">
        <img src={Tfamily} className="img-fluid w-100 mx-auto mt-3 px-5" alt="Tourist Family Poster" />

        

        <div className="position-absolute top-0 end-0 p-3 d-flex align-items-center">
          <BsShare /><span className="ms-2">Share</span>
        </div>

        {/* Movie Details */}
        <div className="container text-center py-4">
          <h1 className="fw-bold">Tourist Family</h1>
          <div className="d-flex justify-content-center align-items-center gap-2">
            <FaStar className="text-warning" />
            <h5 className="mb-0">9.5/10</h5>
            <small>(48.1k votes)</small>
            <MdChevronRight />
            {/* <button className="btn btn-outline-light btn-sm ms-2">Rate Now</button> */}
          </div>
          <div className="mt-3">
            <span className="badge bg-secondary me-1">2D</span>
            <span className="badge bg-secondary me-1">Tamil</span>
          </div>
          <div className="mt-2 small">
            2hr 8m · <a href="#" className="text-light text-decoration-none">Comedy</a>, <a href="#" className="text-light text-decoration-none">Drama</a>, <a href="#" className="text-light text-decoration-none">Family</a> · U · 1 May, 2025
          </div>
          <button className="btn btn-danger mt-3" onClick={handleBookticket}>Book Tickets</button>
        </div>
      </div>

      {/* About the Movie */}
      <div className="container py-4">
        <h4>About the Movie</h4>
        <p>
          A quirky Sri Lankan family, seeking a fresh start in India, transforms a disconnected neighborhood into a vibrant community with their infectious love and kindness.
        </p>
        <hr />
      </div>

      {/* Cast */}
      <div className="container py-4">
        <h4>Cast</h4>
        <div className="row">
          {cast.map((actor, i) => (
            <div key={i} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4">
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
          {crew.map((person, i) => (
            <div key={i} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4">
              <img src={person.img} className="img-fluid rounded-circle mb-2" alt={person.name} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
              <h6 className="mb-0">{person.name}</h6>
              <small>{person.role}</small>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Tfms;
