import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Adminsidebar from '../AdminSide/Adminsidebar';
import Adminheader from '../AdminHead/Adminheader';
import './Managetheater.css';
import { BsSearch } from "react-icons/bs";
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { Form } from 'react-bootstrap';

const ManageTheater = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [theaters, setTheaters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTheaters, setSelectedTheaters] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const menuName = location.state?.menu || "No data received";
  const theatersPerPage = 10;

  useEffect(() => {
    const fetchTheaters = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/theaters');
        setTheaters(res.data);
      } catch (error) {
        console.error("Failed to fetch theaters", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTheaters();
  }, []);

  const filteredTheaters = theaters.filter(theater =>
    theater.cinema?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLast = currentPage * theatersPerPage;
  const indexOfFirst = indexOfLast - theatersPerPage;
  const currentTheaters = filteredTheaters.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredTheaters.length / theatersPerPage);

  const handleCheckboxChange = (id) => {
    const updated = selectedTheaters.includes(id)
      ? selectedTheaters.filter(i => i !== id)
      : [...selectedTheaters, id];
    setSelectedTheaters(updated);
    setSelectAll(currentTheaters.every(t => updated.includes(t._id)));
  };

  const handleSelectAll = () => {
    if (selectAll) {
      const updated = selectedTheaters.filter(id => !currentTheaters.some(t => t._id === id));
      setSelectedTheaters(updated);
      setSelectAll(false);
    } else {
      const currentIds = currentTheaters.map(t => t._id);
      const updated = [...new Set([...selectedTheaters, ...currentIds])];
      setSelectedTheaters(updated);
      setSelectAll(true);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this theater?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/theaters/${id}`);
      setTheaters(prev => prev.filter(t => t._id !== id));
    } catch (error) {
      alert("Delete failed");
    }
  };

  const handleDeleteSelected = async () => {
    if (selectedTheaters.length === 0) return;
    if (!window.confirm(`Delete ${selectedTheaters.length} selected theaters?`)) return;
    try {
      await Promise.all(
        selectedTheaters.map(id => axios.delete(`http://localhost:5000/api/theaters/${id}`))
      );
      setTheaters(prev => prev.filter(t => !selectedTheaters.includes(t._id)));
      setSelectedTheaters([]);
    } catch (err) {
      alert("Bulk delete failed.");
    }
  };

    // Toggle switch handling
    const handleToggleStatus = async (id) => {
    try {
    // Find theater to toggle
    const theater = theaters.find(t => t._id === id);
    const newStatus = !theater.isEnabled;

    // Update backend
    await axios.patch(`http://localhost:5000/api/theaters/${id}`, { isEnabled: newStatus });

    // Re-fetch all theaters to update state instantly
    const res = await axios.get('http://localhost:5000/api/theaters');
    setTheaters(res.data);

    console.log(` Updated ${theater.cinema} to ${newStatus ? "Enabled" : "Disabled"}`);
  } catch (error) {
    console.error("Failed to update theater status", error);
    alert("Error updating theater status");
  }
};

  const handleExportPDF = () => {
    const dataToExport = theaters.filter(t => selectedTheaters.includes(t._id));
    if (dataToExport.length === 0) return alert("Please select theaters to export.");
    const doc = new jsPDF();
    doc.text("Selected Theater List", 14, 10);
    autoTable(doc, {
      startY: 20,
      head: [["Cinema", "Screens", "Show Time"]],
      body: dataToExport.map(t => [
        t.cinema,
        t.screen instanceof Array ? t.screen.join(', ') : t.screen,
        t.showTime instanceof Array ? t.showTime.join(', ') : t.showTime
      ])
    });
    doc.save("selected_theaters.pdf");
  };

  const handleExportExcel = () => {
    const dataToExport = theaters.filter(t => selectedTheaters.includes(t._id));
    if (dataToExport.length === 0) return alert("Please select theaters to export.");
    const ws = XLSX.utils.json_to_sheet(
      dataToExport.map(t => ({
        Cinema: t.cinema,
        Screens: t.screen instanceof Array ? t.screen.join(', ') : t.screen,
        ShowTime: t.showTime instanceof Array ? t.showTime.join(', ') : t.showTime
      }))
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Selected Theaters");
    XLSX.writeFile(wb, "selected_theaters.xlsx");
  };

  return (
    <>
      <div className="adminside"><Adminsidebar /></div>
      <Adminheader />
      <div className="parent">

        <div className="managetheater">
          <h5 className="text-danger fw-bold mt-1">Theater</h5>
          <span className="mt-1 ms-3">{menuName}</span>
        </div>

        <div className="manage-user-container">
          <h3 className="newform">Manage Theater</h3>

          <div className="search-bar">
            <span className='search-icon'><BsSearch /></span>
            <input
              type="text"
              placeholder="Search by cinema..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="export-buttons">
            <button className="export-btn" onClick={handleDeleteSelected} disabled={selectedTheaters.length === 0}>
              <img src="https://assets-v2.lottiefiles.com/a/e09820ea-116b-11ee-8e93-4f2a1602d144/HdbA8EJlUN.gif" alt="Delete" className="export-icon delete" />
            </button>
            <button className="export-btn" onClick={handleExportExcel}>
              <img src="https://cdn.iconscout.com/icon/free/png-256/free-microsoft-excel-icon-svg-png-download-1756310.png" alt="Excel" className="export-icon" />
            </button>

            <CSVLink
              data={theaters
                .filter(t => selectedTheaters.includes(t._id))
                .map(t => ({
                  Cinema: t.cinema,
                  Screens: Array.isArray(t.screen) ? t.screen.join(', ') : t.screen,
                  ShowTime: Array.isArray(t.showTime) ? t.showTime.join(', ') : t.showTime
                }))}
              filename="selected_theaters.csv"
              onClick={(event) => {
                if (selectedTheaters.length === 0) {
                  event.preventDefault();
                  alert("Please select theaters to export.");
                }
              }}>
              <button className="export-btn">
                <img src="https://cdn-icons-png.flaticon.com/512/8242/8242984.png" alt="CSV" className="export-icon mt-1" />
              </button>
            </CSVLink>

            <button className="export-btn" onClick={handleExportPDF}>
              <img src='https://cdn-icons-png.freepik.com/512/14180/14180779.png' alt="PDF" className="export-icon" />
            </button>
          </div>

          <div className="table-responsive">
            <table className="user-table">
              <thead>
                <tr>
                  <th><input type="checkbox" checked={selectAll} onChange={handleSelectAll} /></th>
                  <th>Theater</th>
                  <th>Screens</th>
                  <th>Show Time</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              
              <tbody>
  {loading ? (
    <tr><td colSpan="6">Loading theaters...</td></tr>
  ) : currentTheaters.length === 0 ? (
    <tr><td colSpan="6">No theaters found.</td></tr>
  ) : (
    currentTheaters.map((theater) => (
      <tr key={theater._id}>
        <td>
          <input
            type="checkbox"
            checked={selectedTheaters.includes(theater._id)}
            onChange={() => handleCheckboxChange(theater._id)}
          />
        </td>
        <td>{theater.cinema}</td>

        {/* Updated this part to show screens as comma-separated text */}
        <td>
          {Array.isArray(theater.screen) ? theater.screen.join(', ') : theater.screen}
        </td>

        {/* Show Time stays the same, as badges */}
        <td>
          {Array.isArray(theater.showTime) ? (
            theater.showTime.map((time, i) => (
              <span key={i} className="showtime-badge">{time}</span>
            ))
          ) : theater.showTime}
        </td>

        <td>
          <Form.Check
            type="switch"
            id={`status-switch-${theater._id}`}
            checked={theater.isEnabled}
            onChange={() => handleToggleStatus(theater._id)}
          />
        </td>
        <td>
          <button className="edit-btn" onClick={() => navigate("/newtheater", {
            state: { isEdit: true, entry: theater }
          })}>✏️</button>

          <button className="delete-btn" onClick={() => handleDelete(theater._id)}>🗑️</button>
        </td>
      </tr>
    ))
  )}
</tbody>

            </table>
          </div>

          <div className="pagination">
            <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>⬅️</button>
            <span className='mt-2 mx-1'>Page {currentPage} of {totalPages}</span>
            <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>➡️</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageTheater;
