import Thodaruminnerimage from '/thodaruminnerimages/thodaruminnerimage.jpg';
import Thodarumtrailerimg from '/thodaruminnerimages/thodarumtrailerimage.jpg';
import { FaCaretRight, FaStar } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";
import { BsShare } from "react-icons/bs";

import mohanlal from '/thodaruminnerimages/mohanlal.jpg';
import shobana from '/thodaruminnerimages/shobana.jpg';
import maniyanpilla from '/thodaruminnerimages/maniyanpilla.jpg';
import irshad from '/thodaruminnerimages/irshad.jpg';
import binu from '/thodaruminnerimages/binu.jpg';
import farhaan from '/thodaruminnerimages/farhaan.jpg';
import shaijo from '/thodaruminnerimages/shaijo.jpg';
import thomas from '/thodaruminnerimages/thomas.jpg';

import tharun from '/thodaruminnerimages/tharun.jpg';
import mrenjith from '/thodaruminnerimages/mrenjith.jpg';
import jakes from '/thodaruminnerimages/jakes.jpg';
import avantika from '/thodaruminnerimages/avantika.jpg';
import krsunil from '/thodaruminnerimages/krsunil.jpg';
import shaji from '/thodaruminnerimages/shaji.jpg';
import nishadh from '/thodaruminnerimages/nishadh.jpg';
import shafeeque from '/thodaruminnerimages/shafeeque.jpg';
import sameera from '/thodaruminnerimages/sameera.jpg';
import pattanam from '/thodaruminnerimages/pattanam.jpg';
import vishnu from '/thodaruminnerimages/vishnu.jpg';
import dixon from '/thodaruminnerimages/dixon.jpg';

import Navbar from '../topend/Navbar';
import Categories from '../cat/Categories';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom';

const Tms = () => {
  const navigate = useNavigate();
  const handleBookticket = () => {
    window.scrollTo(0, 0);
    navigate('/thodarum/buytickets');
  };

  const cast = [
    { img: mohanlal, name: "Mohanlal", role: "as Shanmugham" },
    { img: shobana, name: "Shobana", role: "as Lalitha Shanmugam" },
    { img: maniyanpilla, name: "Maniyan Pilla", role: "Actor" },
    { img: irshad, name: "Irshad Ali", role: "Actor" },
    { img: binu, name: "Binu Pappu", role: "as Prakash" },
    { img: farhaan, name: "Farhaan Fazil", role: "Actor" },
    { img: shaijo, name: "Shaijo Adimali", role: "Actor" },
    { img: thomas, name: "Thomas Mathew", role: "Actor" }
  ];

  const crew = [
    { img: tharun, name: "Tharun Moorthy", role: "Director, Screenplay" },
    { img: mrenjith, name: "M.Renjith", role: "Producer" },
    { img: jakes, name: "Jakes Bejoy", role: "Musician" },
    { img: avantika, name: "Avanthika Renjith", role: "Executive Producer" },
    { img: krsunil, name: "K.R.Sunil", role: "Screenplay" },
    { img: shaji, name: "Shaji Kumar", role: "Cinematographer" },
    { img: nishadh, name: "Nishadh Yusuf", role: "Editor" },
    { img: shafeeque, name: "Shafeeque V.B.", role: "Editor" },
    { img: sameera, name: "Sameera Saneesh", role: "Costume Designer" },
    { img: pattanam, name: "Pattanam Rasheed", role: "Makeup Artist" },
    { img: vishnu, name: "Vishnu Govind", role: "Audiographer" },
    { img: dixon, name: "Dixon Poduthas", role: "Production Controller" }
  ];

  return (
    <div className="bg-dark text-white">
      <Navbar />
      <Categories />

      <section className="position-relative">
        <img src={Thodaruminnerimage} className="img-fluid w-100 mx-auto mt-3 px-5" alt="Thodarum Poster" />

        

        <div className="position-absolute top-0 end-0 p-3">
          <BsShare /> <span className="ms-2">Share</span>
        </div>

        <div className="container py-4 text-center">
          <h1 className="fw-bold">Thodarum</h1>
          <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
            <FaStar className="text-warning" />
            <h5 className="mb-0">8.2/10</h5>
            <small>(1k Votes)</small>
            <MdChevronRight />
            {/* <button className="btn btn-outline-light btn-sm ms-2">Rate Now</button> */}
          </div>
          <div className="mb-2">
            <span className="badge bg-secondary me-2">2D</span>
            <span className="badge bg-secondary">Tamil</span>
          </div>
          <div className="small mb-3">
            2hr 46m · Drama, Family, Thriller · UA16+ · 9 May, 2025
          </div>
          <button onClick={handleBookticket} className="btn btn-danger">Book Tickets</button>
        </div>
      </section>

      <section className="container py-5">
        <h4>About the Movie</h4>
        <p>
          In the quiet hill town of Ranni, Pathanamthitta, Shanmughan navigates life as a humble taxi driver. His heart belongs to one thing - his old Ambassador car. To others, it may just be an ageing vehicle, but to Shanmughan, it is like a part of his family. His life, however, is a journey filled with challenges, proving just how far he is willing to go for something so dear to him.
        </p>
        <hr />
      </section>

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

export default Tms;
