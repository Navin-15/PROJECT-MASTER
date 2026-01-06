import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaCaretRight,
  FaStar,
} from 'react-icons/fa';
import { MdChevronRight } from 'react-icons/md';
import { BsShare } from 'react-icons/bs';

import Thunderboltsinnerimage from '/thunderboltsinnerimages/thunderboltsinnerimage.jpg';
import Thunderboltstrailerimg from '/thunderboltsinnerimages/thunderbolts-trailerimage.jpg';

import florence from '/thunderboltsinnerimages/florence.jpg';
import sebastian from '/thunderboltsinnerimages/sebastian.jpg';
import david from '/thunderboltsinnerimages/david.jpg';
import wyatt from '/thunderboltsinnerimages/wyatt.jpg';
import olga from '/thunderboltsinnerimages/olga.jpg';
import lewis from '/thunderboltsinnerimages/lewis.jpg';
import geraldine from '/thunderboltsinnerimages/geraldine.jpg';
import chris from '/thunderboltsinnerimages/chris.jpg';
import rachel from '/thunderboltsinnerimages/rachel.jpg';
import hannah from '/thunderboltsinnerimages/hannah.jpg';
import julia from '/thunderboltsinnerimages/julia.jpg';

import jake from '/thunderboltsinnerimages/jake.jpg';
import kevin from '/thunderboltsinnerimages/kevin.jpg';
import eric from '/thunderboltsinnerimages/eric.jpg';
import davidj from '/thunderboltsinnerimages/davidj.jpg';

import Navbar from '../topend/Navbar';
import Categories from '../cat/Categories';
import Footer from '../footer/Footer';

const Thunderbolts = () => {
  const navigate = useNavigate();

  const handleBookticket = () => {
    window.scrollTo(0, 0);
    navigate('/thunderbolts/buytickets');
  };

  const cast = [
    { img: florence, name: "Florence Pugh", role: "Actor" },
    { img: sebastian, name: "Sebastian Stan", role: "Actor" },
    { img: david, name: "David Harbour", role: "Actor" },
    { img: wyatt, name: "Wyatt Russell", role: "as Mulli" },
    { img: olga, name: "Olga Kurylenko", role: "Actor" },
    { img: lewis, name: "Lewis Pullman", role: "Actor" },
    { img: geraldine, name: "Geraldine Viswanathan", role: "Actor" },
    { img: chris, name: "Chris Bauer", role: "Actor" },
    { img: rachel, name: "Rachel Weisz", role: "Actor" },
    { img: hannah, name: "Hannah John-Kamen", role: "Actor" },
    { img: julia, name: "Julia Louis-Dreyfus", role: "Actor" },
  ];

  const crew = [
    { img: jake, name: "Jake Scherier", role: "Director" },
    { img: kevin, name: "Kevin Feige", role: "Producer" },
    { img: eric, name: "Eric Pearson", role: "Writer, Screenplay" },
    { img: davidj, name: "David J. Grant", role: "Co-Producer" },
  ];

  return (
    <div className="bg-dark text-white">
      <Navbar />
      <Categories />

      {/* Hero */}
      <section className="position-relative">
        <img src={Thunderboltsinnerimage} className="img-fluid w-100 mx-auto mt-3 px-5" alt="Thunderbolts Poster" />
        

        <div className="position-absolute top-0 end-0 p-3">
          <BsShare /> <span className="ms-2">Share</span>
        </div>
        <div className="container py-4 text-center">
          <h1 className="fw-bold">Thunderbolts*</h1>
          <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
            <FaStar className="text-warning" />
            <h5 className="mb-0">8.1/10</h5>
            <small>(27.7k votes)</small>
            <MdChevronRight />
            {/* <button className="btn btn-outline-light btn-sm ms-2">Rate Now</button> */}
          </div>
          <div className="mb-2">
            {["2D", "IMAX 3D", "MX4D 3D", "IMAX 2D", "4DX 3D", "3D", "3D SCREEN X", "ICE", "ICE 3D"].map(format => (
              <span key={format} className="badge bg-secondary me-1">{format}</span>
            ))}
          </div>
          <div className="mb-2">
            {["English", "Hindi", "Telugu", "Tamil"].map(lang => (
              <span key={lang} className="badge bg-secondary me-1">{lang}</span>
            ))}
          </div>
          <div className="small mb-3">
            2hr 7m · Action, Superhero · UA13+ · 1 May, 2025
          </div>
          <button onClick={handleBookticket} className="btn btn-danger">Book Tickets</button>
        </div>
      </section>

      {/* About */}
      <section className="container py-4">
        <h4>About the Movie</h4>
        <p>Thunderbolts* are the *New Avengers who mix grit with wit as they bring a new hope to the world.</p>
        <hr />
      </section>

      {/* Cast */}
      <section className="container py-4">
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
      </section>

      {/* Crew */}
      <section className="container py-4">
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
      </section>

      <Footer />
    </div>
  );
};

export default Thunderbolts;
