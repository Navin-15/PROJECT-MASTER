// Finalized code of Displaying blocked and unblocked seats
import React, { useState, useEffect } from 'react';
import '../Seatlayout.css';
import { IoIosClose } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const SEAT_PRICE = { platinum: 150, gold: 130, silver: 100 };

const ROWS = {
  platinum: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  gold: ['H', 'I', 'J', 'K', 'L', 'M', 'N'],
  silver: ['O', 'P'],
};

const Seatlayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookedSeats, setBookedSeats] = useState([]);   // user-booked
  const [blockedSeats, setBlockedSeats] = useState([]); // admin-blocked
  const [selectedTime, setSelectedTime] = useState("");
  const [theaterName, setTheaterName] = useState("");
  const [movieName, setMovieName] = useState("");
  const [screen, setSelectedScreen] = useState("");


   const formatDate = (date) => date.toISOString().split('T')[0]; // Standard format



  useEffect(() => {
    // Retrieve navigation state
    if (location.state) {
      setTheaterName(location.state.theater || "");
      setSelectedTime(location.state.time || "");
      setMovieName(location.state.movieName || "");
      setSelectedScreen(location.state.screen || "");
      if (location.state.selectedSeats) {
        setSelectedSeats(location.state.selectedSeats);
      }
    }

    const fetchSeats = async () => {
      try {
        // const showDate = selectedDate.toLocaleDateString();
        const showDate = formatDate(selectedDate);

        // Fetch user-booked seats
        const bookingRes = await axios.get("http://localhost:5000/api/bookings", {
          params: { theater: theaterName, movieName, screen, time: selectedTime, date: showDate },
        });
        const userBooked = bookingRes.data.flatMap(b => b.seats);

        // Fetch admin-blocked seats
        const blockedRes = await axios.get("http://localhost:5000/api/admin/blocked-seats", {
          params: { theater: theaterName, movieName, screen, time: selectedTime, date: showDate },
        });
        const adminBlocked = blockedRes.data;

        // Merge
        setBookedSeats(userBooked);
        setBlockedSeats(adminBlocked);
      } catch (err) {
        console.error("❌ Error fetching seats:", err);
      }
    };

    if (theaterName && movieName && selectedTime && screen) {
      fetchSeats();
    }
  }, [theaterName, movieName, selectedDate, selectedTime, screen, location.state]);

  const handlePreviousPage = () => {
    window.scrollTo(0, 0);
    navigate(-1);
  };

  const handlepay = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat before paying.");
      return;
    }

    const summaryData = {
      movieName,
      theater: theaterName,
      selectedSeats,
      totalPrice,
      // date: selectedDate.toLocaleDateString(),
      date: formatDate(selectedDate),
      time: selectedTime,
      screen,
    };

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      navigate('/login', { state: { redirectTo: '/booking-summary', bookingData: summaryData } });
    } else {
      setBookedSeats(prev => [...prev, ...selectedSeats.map(s => s.id)]);
      setSelectedSeats([]);
      navigate('/booking-summary', { state: summaryData });
    }
  };

  const handleSeatClick = (row, seat, type) => {
    const seatId = `${row}${seat}`;
    if (bookedSeats.includes(seatId) || blockedSeats.includes(seatId)) return;

    const isSelected = selectedSeats.find(s => s.id === seatId);
    if (isSelected) {
      setSelectedSeats(prev => prev.filter(s => s.id !== seatId));
    } else {
      setSelectedSeats(prev => [...prev, { id: seatId, type, price: SEAT_PRICE[type] }]);
    }
  };

  const getSeatClass = (row, seat, type) => {
    const seatId = `${row}${seat}`;
    const isBooked = bookedSeats.includes(seatId);
    const isBlocked = blockedSeats.includes(seatId);
    const isSelected = selectedSeats.find(s => s.id === seatId);

    if (isBooked || isBlocked) return 'seatno orange-disabled';
    if (isSelected) return 'seatno selected-seat px-2 text-center';
    return 'seatno availabledouble px-1 text-center';
  };

  const totalPrice = selectedSeats.reduce((acc, seat) => acc + seat.price, 0);

  return (
    <>
      {/* Header */}
      <div className="toppy">
        <FaChevronLeft onClick={handlePreviousPage} className='fs-5' style={{ position: "absolute", top: "20px", left: "20px", cursor: "pointer" }} />
        <div className="mx-5">
          <div className="p-2">
            <a href="#" className='text-dark' style={{ textDecoration: "none" }}>{movieName}</a>
            <IoIosClose onClick={handlePreviousPage} className='fs-2' style={{ position: "absolute", right: "3rem", cursor: 'pointer' }} />
            <div className="d-flex mt-2">
              <span style={{ fontSize: "13px", fontWeight: "700", color: "rgb(88, 86, 86)" }}>{theaterName}</span>
              &nbsp;&nbsp;
              <span style={{ fontSize: "13px", fontWeight: "700", color: "rgb(88, 86, 86)" }}>{selectedDate.toLocaleDateString()}</span>
              &nbsp;&nbsp;
              <span style={{ fontSize: "13px", fontWeight: "700", backgroundColor: "rgba(58, 130, 93, 1)", padding: "8px 10px", position: "relative", bottom: "8px", color: "#fff", borderRadius: "2px" }}>{selectedTime}</span>
              &nbsp;&nbsp;
              <span style={{ fontSize: "13px", fontWeight: "700", backgroundColor: "rgba(58, 130, 93, 1)", padding: "8px 10px", position: "relative", bottom: "8px", color: "#fff", borderRadius: "2px" }}>{screen}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Seat Layout */}
      <div className="seeat container">
        <div className="block">
          {Object.keys(ROWS).map(category => (
            <div key={category} className={`blocklayout ${category}layout`}>
              <table>
                <tbody>
                  <tr>
                    <td><div className="tirename">Rs.{SEAT_PRICE[category]} {category.charAt(0).toUpperCase() + category.slice(1)}</div></td>
                  </tr>
                  {ROWS[category].map(row => (
                    <tr key={row} className='d-flex'>
                      <div className="seatR bg-dark">{row}</div>
                      <td className='SRow-1 ms-5 ps-5 pe-5 py-1'>
                        {[...Array(23).keys()].map(i => {
                          const seatNo = 23 - i;
                          if (seatNo === 17 || seatNo === 7) return <div className="seatempty" key={i}>&nbsp;</div>;
                          return (
                            <div className="seatempty" key={i}>
                              <a
                                href="#"
                                className={getSeatClass(row, seatNo, category)}
                                onClick={(e) => { e.preventDefault(); handleSeatClick(row, seatNo, category); }}
                                style={(bookedSeats.includes(`${row}${seatNo}`) || blockedSeats.includes(`${row}${seatNo}`)) ? { cursor: 'not-allowed' } : {}}
                              >
                                {seatNo}
                              </a>
                            </div>
                          );
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>

      {/* Screen */}
      <div className="parentscreendiv">
        <div className="screendiv">Screen</div>
      </div>

      {/* Legends */}
      <div className="profile w-100 d-flex justify-content-center bg-white" style={{ boxShadow: "rgba(0, 0, 0, 0.1) 4px -5px 5px 1px" }}>
        <div className="w-50 d-flex mt-2 justify-content-center">
          <div className="w-25">
            <div className="seatempty"><span className='seatno availabledouble' style={{ padding: "10px", width: "20px", height: "20px" }}></span></div>
            Available
          </div>
          <div className="w-25">
            <div className="seatempty"><span className='seatno selected-seat' style={{ padding: "10px", width: "20px", height: "20px" }}></span></div>
            Selected
          </div>
          <div className="w-25">
            <div className="seatempty"><span className='seatno orange-disabled' style={{ padding: "10px", width: "20px", height: "20px" }}></span></div>
            Booked/Blocked
          </div>
        </div>
      </div>

      {/* Pay Button */}
      <div className="d-flex justify-content-center paybutton">
        <button onClick={handlepay} className="pay btn btn-danger w-25 my-3" disabled={selectedSeats.length === 0}>
          Pay ₹{totalPrice}
        </button>
      </div>
    </>
  );
};

export default Seatlayout;