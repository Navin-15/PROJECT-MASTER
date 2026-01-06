import { useEffect, useState } from "react";
import DateBar from "./Datebar";
import FilterBar from "./FilterBar";
import "./Buytickets.css";
import { Col } from "react-bootstrap";
import heartoff from "../theaterselection/theaterselectionimages/heart-off.png";
import infoicon from "../theaterselection/theaterselectionimages/info-icon.png";
import mticket from "../theaterselection/theaterselectionimages/mticket.webp";
import fnb from "../theaterselection/theaterselectionimages/fnb.webp";
import Navbar from "../topend/Navbar";
import Categories from "../cat/Categories";
import Footer from "../footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TouristfamilyBuytickets() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [theaters, setTheaters] = useState([]);

  // Fetch theaters for "Tourist Family" movie
  useEffect(() => {
    const fetchTheaters = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/movies");
        const touristMovie = response.data.find(
          (m) => m.name.toLowerCase() === "tourist family"
        );

        if (!touristMovie) {
          console.warn("Tourist Family movie not found in response");
          return;
        }

        // Map enabled theaters with proper nested screen + showtime structure
        const enabledTheaters = touristMovie.theaters
          .filter((t) => t.isEnabled)
          .map((t) => ({
            cinema: t.name,
            screens: t.screens.map((s) => ({
              screenName: s.screenName,
              showTimes: s.showTimes,
            })),
          }));

        setTheaters(enabledTheaters);
      } catch (error) {
        console.error("Failed to fetch theaters", error);
      }
    };

    fetchTheaters();
    const interval = setInterval(fetchTheaters, 5000);
    return () => clearInterval(interval);
  }, []);

  // Check if showtime is in future
  const isShowtimeInFuture = (showTimeString) => {
    const now = new Date();
    const [time, meridian] = showTimeString.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (meridian === "PM" && hours !== 12) hours += 12;
    if (meridian === "AM" && hours === 12) hours = 0;

    const showTime = new Date();
    showTime.setHours(hours, minutes, 0, 0);

    return showTime > now;
  };

  // Handle seat selection click
  const handleSeatSelection = (theaterName, showTime, screen) => {
    if (!isShowtimeInFuture(showTime)) {
      setShowPopup(true);
      return;
    }

    const formattedTheater = theaterName
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/[^a-z]/g, "");

    const layoutPath = `/Touristfamily/buytickets/${formattedTheater}seatlayout`;

    navigate(layoutPath, {
      state: {
        theater: theaterName,
        time: showTime,
        screen: screen,
        movieName: "Tourist Family",
      },
    });
  };

  return (
    <>
      <Navbar />
      <Categories />

      <div className="w-75 ms-5 ps-4 ">
        <div className="py-1 ">
          <div className="ms-2 mt-2 w-25">
            <div className="name">Tourist Family</div>
          </div>
          <div className="abtthismovie mt-3 ms-2  w-25">
            <a href="#" className="outline">
              Comedy
            </a>
            <a href="#" className="outline">
              Drama
            </a>
          </div>
        </div>
      </div>

      <div className="two-component d-flex justify-content-around ">
        <DateBar /> <FilterBar />
      </div>

      <div className="">
        <div className="d-flex justify-content-end ">
          <div className="d-flex me-5 pe-5 mt-3">
            <div className="clr bg-success rounded mt-1"></div>
            <p className="ps-2 pe-2" style={{ fontSize: "8px" }}>
              AVAILABLE
            </p>
            <div className="clr bg-warning rounded mt-1 "></div>
            <p className="ps-2 pe-2" style={{ fontSize: "8px" }}>
              FAST FILLING
            </p>
            <p className="ps-3" style={{ fontSize: "8px" }}>
              SUBTITLES LANGUAGES
            </p>
          </div>
        </div>
      </div>

      {/* Theater List */}
      <div className="bg-secondary overflow-hidden">
        {theaters.map((theater, index) => (
          <div className="cinema-div" key={index}>
            <div className="theaters">
              <Col className="col-4">
                <div className="theaterone-leftcol-child1">
                  <div className="theat">
                    <div className="cinemaname-div">
                      <div className="heart-div">
                        <img
                          src={heartoff}
                          alt=""
                          style={{ height: "20px", width: "20px" }}
                        />
                      </div>
                      <div
                        className="cinemaname-div"
                        style={{ maxWidth: "275px" }}
                      >
                        <div className="cinemaname">{theater.cinema}</div>
                      </div>
                    </div>
                    <div className="info">
                      <div className="d-flex">
                        <span>
                          <img
                            src={infoicon}
                            alt=""
                            style={{ height: "16px", width: "16px" }}
                          />
                        </span>
                        <span className="infotext">INFO</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="theaterone-leftcol-child2">
                  <div className="bewarages-div">
                    <span className="m-ticketspan">
                      <img src={mticket} alt="" style={{ width: "80px" }} />
                    </span>
                  </div>
                  <div className="bewarages-div">
                    <span className="m-ticketspan">
                      <img src={fnb} alt="" style={{ width: "110px" }} />
                    </span>
                  </div>
                </div>
              </Col>

              {/* Showtimes grouped by screen */}
              <Col className="show-timing-col">
                {theater.screens.map((screen, sIdx) => (
                  <div key={sIdx} className="mb-2">
                    <div className="fw-bold">{screen.screenName}</div>
                    <div className="show-timing-div d-flex flex-wrap">
                      {screen.showTimes.map((time, i) => (
                        <div key={i} className="time-div me-2 ">
                          <div
                            className="time-holding-div"
                            onClick={() =>
                              handleSeatSelection(
                                theater.cinema,
                                time,
                                screen.screenName
                              )
                            }
                          >
                            <div className="movie-time mt-2">{time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="cancellation-div mt-3">
                  <div className="cancel-holding-div">
                    <div className="cancel">Cancellation available</div>
                  </div>
                </div>
              </Col>
            </div>
          </div>
        ))}
      </div>

      {/* Popup for past shows */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <img
              src="https://cdn-icons-png.flaticon.com/512/463/463612.png"
              alt="Show started"
              style={{ width: "80px" }}
            />
            <h5>Show already started!</h5>
            <button
              onClick={() => setShowPopup(false)}
              className="btn btn-secondary mt-2"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default TouristfamilyBuytickets;
