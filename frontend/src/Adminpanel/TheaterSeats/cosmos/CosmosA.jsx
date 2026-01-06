// Final code block and un-block functions are working in this updated code. 
// last updated code [changed the (date format) and (movieName) params] for proper blockand un-blocking seats with the correct moviename's

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../Numberofseats/Seatlayout.css";

const SEAT_PRICE = {
  platinum: 150,
  gold: 130,
  silver: 100,
};

const AdminSeatlayout = () => {
  const [movies, setMovies] = useState([]);
  const [theaters, setTheaters] = useState([]);
  const [screens, setScreens] = useState([]);
  const [showTimes, setShowTimes] = useState([]);

  const [movieName, setMovieName] = useState("");
  const [theater, setTheater] = useState("");
  const [screen, setScreen] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState(new Date());

  const [blockedSeats, setBlockedSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [unblockSeats, setUnblockSeats] = useState([]);

  // Each row also stores which seats are removed
  const [rows, setRows] = useState([
    { category: "platinum", rowName: "A", seatPattern: [6, 9, 6], removedSeats: [] },
    { category: "platinum", rowName: "B", seatPattern: [6, 9, 6], removedSeats: [] },
    { category: "platinum", rowName: "C", seatPattern: [6, 9, 6], removedSeats: [] },
    { category: "platinum", rowName: "D", seatPattern: [6, 9, 6], removedSeats: [] },
    { category: "platinum", rowName: "E", seatPattern: [6, 9, 6], removedSeats: [] },
    { category: "platinum", rowName: "F", seatPattern: [6, 9, 6], removedSeats: [] },
    { category: "platinum", rowName: "G", seatPattern: [6, 9, 6], removedSeats: [] },
    
    { category: "gold", rowName: "H", seatPattern: [6,9,6], removedSeats: [] },
    { category: "gold", rowName: "I", seatPattern: [6,9,6], removedSeats: [] },
    { category: "gold", rowName: "J", seatPattern: [6,9,6], removedSeats: [] },
    { category: "gold", rowName: "K", seatPattern: [6,9,6], removedSeats: [] },
    { category: "gold", rowName: "L", seatPattern: [6,9,6], removedSeats: [] },
    { category: "gold", rowName: "M", seatPattern: [6,9,6], removedSeats: [] },
    { category: "gold", rowName: "N", seatPattern: [6,9,6], removedSeats: [] },

    { category: "silver", rowName: "O", seatPattern: [6,9,6], removedSeats: [] },
    { category: "silver", rowName: "P", seatPattern: [6,9,6], removedSeats: [] },
  ]);

  const [newCategory, setNewCategory] = useState("platinum");
  const [newRowName, setNewRowName] = useState("");
  const [newSeatPattern, setNewSeatPattern] = useState("4,4");

  // Fetch all movies
  const fetchMovies = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/movies");
      setMovies(res.data);
    } catch (err) {
      console.error("❌ Error fetching movies:", err);
    }
  };

  // Fetch blocked seats
  const fetchBlockedSeats = async () => {
    if (!theater || !movieName || !screen || !time || !date) return;
    try {
      const res = await axios.get("http://localhost:5000/api/admin/blocked-seats", {
        params: { theater, movieName, screen, time, date: date.toISOString().split('T')[0] },
      });
      setBlockedSeats(res.data);
    } catch (err) {
      console.error("❌ Error fetching blocked seats:", err);
    }
  };

  // Block seats
  const handleBlockSeats = async () => {
    if (selectedSeats.length === 0) {
      alert("⚠️ Please select seats to block!");
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/admin/block-seats", {
        theater,
        movieName,
        screen,
        time,
        // date: date.toLocaleDateString(),
        date: date.toISOString().split('T')[0], // YYYY-MM-DD
        seats: selectedSeats,
      });
      alert("✅ Seats blocked successfully!");
      setSelectedSeats([]);
      fetchBlockedSeats();
    } catch (err) {
      console.error("❌ Error blocking seats:", err);
    }
  };

  // Unblock seats
  const handleUnblockSeats = async () => {
    if (unblockSeats.length === 0) {
      alert("⚠️ Please select seats to unblock!");
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/admin/unblock-seats", {
        theater,
        movieName,
        screen,
        time,
        // date: date.toLocaleDateString(),
        date: date.toISOString().split('T')[0], // YYYY-MM-DD
        seats: unblockSeats,
      });
      alert("✅ Seats unblocked successfully!");
      setBlockedSeats((prev) => prev.filter((seat) => !unblockSeats.includes(seat)));
      setUnblockSeats([]);
    } catch (err) {
      console.error("❌ Error unblocking seats:", err);
    }
  };

  // Handle seat click
  const handleSeatClick = (row, seat) => {
    const seatId = `${row}${seat}`;
    if (blockedSeats.includes(seatId)) {
      if (unblockSeats.includes(seatId)) {
        setUnblockSeats((prev) => prev.filter((s) => s !== seatId));
      } else {
        setUnblockSeats((prev) => [...prev, seatId]);
      }
    } else {
      if (selectedSeats.includes(seatId)) {
        setSelectedSeats((prev) => prev.filter((s) => s !== seatId));
      } else {
        setSelectedSeats((prev) => [...prev, seatId]);
      }
    }
  };

  // Remove single seat (now leaves a gap)
  const handleRemoveSeat = (rowName, seatNo) => {
    setRows((prev) =>
      prev.map((row) => {
        if (row.rowName !== rowName) return row;
        return {
          ...row,
          removedSeats: [...row.removedSeats, seatNo], // store the seat number as removed
        };
      })
    );
  };

  // Seat CSS class logic
  const getSeatClass = (row, seat) => {
    const seatId = `${row}${seat}`;
    const isBlocked = blockedSeats.includes(seatId);
    const isSelected = selectedSeats.includes(seatId);
    const isUnblockSelected = unblockSeats.includes(seatId);

    if (isBlocked && isUnblockSelected) return "seatno yellow-selected";
    if (isBlocked) return "seatno orange-disabled clickable";
    if (isSelected) return "seatno selected-seat px-2 text-center";
    return "seatno availabledouble px-1 text-center";
  };

  // Add new row
  const handleAddRow = () => {
    if (!newRowName || !newSeatPattern) {
      alert("Enter valid row name and seat pattern!");
      return;
    }
    const pattern = newSeatPattern.split(",").map((n) => parseInt(n.trim(), 10));
    setRows((prev) => [
      ...prev,
      { category: newCategory, rowName: newRowName, seatPattern: pattern, removedSeats: [] },
    ]);
    setNewRowName("");
    setNewSeatPattern("4,4");
  };

  // Remove row
  const handleRemoveRow = (rowName) => {
    setRows((prev) => prev.filter((r) => r.rowName !== rowName));
  };

  // Dropdown dependencies
  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (movieName) {
      const selectedMovie = movies.find((m) => m.name === movieName);
      setTheaters(selectedMovie ? selectedMovie.theaters : []);
      setTheater("");
      setScreens([]);
      setShowTimes([]);
    }
  }, [movieName]);

  useEffect(() => {
    if (theater) {
      const selectedTheater = theaters.find((t) => t.name === theater);
      setScreens(selectedTheater ? selectedTheater.screens : []);
      setScreen("");
      setShowTimes([]);
    }
  }, [theater]);

  useEffect(() => {
    if (screen) {
      const selectedScreen = screens.find((s) => s.screenName === screen);
      setShowTimes(selectedScreen ? selectedScreen.showTimes : []);
      setTime("");
    }
  }, [screen]);

  useEffect(() => {
    fetchBlockedSeats();
  }, [theater, movieName, screen, time, date]);

  return (
    <div className="container Parentseatlayout">
      <h2 className="my-3">🎬 Admin Seat Layout</h2>

      {/* Dropdown Inputs */}
      <div className="d-flex gap-2 flex-wrap mb-3">
        <select value={movieName} onChange={(e) => setMovieName(e.target.value)}>
          <option value="">🎞 Select Movie</option>
          {movies.map((m) => (
            <option key={m._id} value={m.name}>
              {m.name}
            </option>
          ))}
        </select>

        <select value={theater} onChange={(e) => setTheater(e.target.value)} disabled={!movieName}>
          <option value="">🏛 Select Theater</option>
          {theaters.map((t, idx) => (
            <option key={idx} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>

        <select value={screen} onChange={(e) => setScreen(e.target.value)} disabled={!theater}>
          <option value="">🖥 Select Screen</option>
          {screens.map((s, idx) => (
            <option key={idx} value={s.screenName}>
              {s.screenName}
            </option>
          ))}
        </select>

        <select value={time} onChange={(e) => setTime(e.target.value)} disabled={!screen}>
          <option value="">⏰ Select Time</option>
          {showTimes.map((t, idx) => (
            <option key={idx} value={t}>
              {t}
            </option>
          ))}
        </select>

        <input type="date" onChange={(e) => setDate(new Date(e.target.value))} />
      </div>

      {/* Add Row Section */}
      <div className="d-flex gap-2 mb-3">
        <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
          <option value="platinum">Platinum</option>
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
        </select>
        <input
          placeholder="Row Name (e.g. A)"
          value={newRowName}
          onChange={(e) => setNewRowName(e.target.value)}
        />
        <input
          placeholder="Pattern (e.g. 4,4,4)"
          value={newSeatPattern}
          onChange={(e) => setNewSeatPattern(e.target.value)}
        />
        <button className="btn btn-success" onClick={handleAddRow}>
          ➕ Add Row
        </button>
      </div>

      {/* Seat Layout */}
      <div className="seeat container">
        <div className="block">
          {["platinum", "gold", "silver"].map((category) => (
            <div key={category} className={`blocklayout ${category}layout`}>
              <h5>
                Rs.{SEAT_PRICE[category]}{" "}
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h5>
              <table>
                <tbody>
                  {rows
                    .filter((r) => r.category === category)
                    .map((row) => (
                      <tr key={row.rowName} className="d-flex align-items-center">
                        <div className="seatR bg-dark">{row.rowName}</div>
                        <td className="SRow-1 ms-5 ps-5 pe-5 py-1 d-flex align-items-center">
                          {row.seatPattern.map((blockSize, blockIndex) => (
                            <div key={blockIndex} className="d-flex me-4 align-items-center">
                              {[...Array(blockSize).keys()].map((i) => {
                                const seatNo =
                                  i + 1 +
                                  row.seatPattern
                                    .slice(0, blockIndex)
                                    .reduce((a, b) => a + b, 0);

                                // Check if this seat was removed
                                if (row.removedSeats.includes(seatNo)) {
                                  return (
                                    <div
                                      key={seatNo}
                                      className="seatgap"
                                      style={{ width: "30px", height: "25px" }}
                                    ></div>
                                  );
                                }

                                return (
                                  <div className="seatempty position-relative" key={seatNo}>
                                    <a
                                      href="#"
                                      className={getSeatClass(row.rowName, seatNo)}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleSeatClick(row.rowName, seatNo);
                                      }}
                                    >
                                      {seatNo}
                                    </a>
                                    <button
                                      style={{
                                        fontSize: "10px",
                                        lineHeight: "10px",
                                        position: "absolute",
                                        top: "2px",
                                        left: "17px",
                                        padding: "1px",
                                        color: "white",
                                        backgroundColor: "red",
                                      }}
                                      onClick={() => handleRemoveSeat(row.rowName, seatNo)}
                                    >
                                      ✖
                                    </button>
                                  </div>
                                );
                              })}
                            </div>
                          ))}
                          <button
                            className="btn btn-sm btn-outline-danger ms-1"
                            onClick={() => handleRemoveRow(row.rowName)}
                          >
                            ✖
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>

      {/* Block / Unblock Buttons */}
      <div className="d-flex justify-content-center gap-3 my-3">
        <button className="btn btn-primary" onClick={handleBlockSeats}>
          Block Selected Seats
        </button>
        <button className="btn btn-warning" onClick={handleUnblockSeats}>
          Unblock Selected Seats
        </button>
      </div>
    </div>
  );
};

export default AdminSeatlayout;
