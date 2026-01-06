import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { useLocation, useNavigate } from 'react-router-dom';
import Adminsidebar from '../AdminSide/Adminsidebar';
import Adminheader from '../AdminHead/Adminheader';
import './Newtheater.css';

export default function NewTheater() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuName = location.state?.menu || "No data received";  
  const [cinema, setCinema] = useState('');
  const [screen, setScreen] = useState([]);  // changed to array
  const [showTime, setShowTime] = useState([]);
  const [errors, setErrors] = useState({});
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const showTimeOptions = [
    { value: "09:00 AM", label: "09:00 AM" },
    { value: "12:30 PM", label: "12:30 PM" },
    { value: "04:00 PM", label: "04:00 PM" },
    { value: "07:00 PM", label: "07:00 PM" },
    { value: "11:00 PM", label: "11:00 PM" },
  ];

  const screenOptions = [
    { value: "Screen - A", label: "Screen - A" },
    { value: "Screen - B", label: "Screen - B" },
    { value: "Screen - C", label: "Screen - C" },
    { value: "Screen - D", label: "Screen - D" },
    { value: "Screen - E", label: "Screen - E" },
  ];

  const isEdit = location.state?.isEdit || false;
  const editEntry = location.state?.entry || null;

  useEffect(() => {
    if (isEdit && editEntry) {
      setCinema(editEntry.cinema);

      // Map screen to react-select format
      setScreen(
        Array.isArray(editEntry.screen)
          ? editEntry.screen.map(scr => ({ value: scr, label: scr }))
          : []
      );

      setShowTime(
        Array.isArray(editEntry.showTime)
          ? editEntry.showTime.map(time => ({ value: time, label: time }))
          : []
      );
    }
  }, [isEdit, editEntry]);

  const validateForm = () => {
    const newErrors = {};
    if (!cinema.trim()) newErrors.cinema = "Theater name is required";
    if (!screen || screen.length === 0) newErrors.screen = "Select at least one screen";
    if (!showTime || showTime.length === 0) newErrors.showTime = "Select at least one show time";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const payload = {
        cinema,
        screen: screen.map(option => option.value),
        showTime: showTime.map(option => option.value)
      };

      if (isEdit) {
        await axios.put(`http://localhost:5000/api/theaters/${editEntry._id}`, payload);
        alert('Theater entry updated!');
      } else {
        await axios.post('http://localhost:5000/api/theaters', payload);
        alert('Theater entry added!');
      }

      navigate('/managetheater');

    } catch (err) {
      console.error("Error:", err);
      alert("Operation failed.");
    }
  };

  const OpenSidebar = () => setOpenSidebarToggle(!openSidebarToggle);

  return (
    <>
      <Adminheader />
      <div className="sideside">
        <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      </div>

      <div className="theater">
        <h5 className="text-danger fw-bold mt-1">Theater</h5> &nbsp; &nbsp;
        <span className="mt-1">{menuName}</span>
      </div>

      <div className="container mt-5 newtheaterformparent">
        <h3 className='text-danger'>{isEdit ? "Edit Theater Entry" : "Create New Theater"}</h3>
        <form onSubmit={handleSubmit} className='for'>
          {/* Theater Name */}
          <div className="mb-3">
            <label>Theater Name</label>
            <input
              type="text"
              value={cinema}
              onChange={(e) => setCinema(e.target.value)}
              className={`form-control ${errors.cinema ? 'is-invalid' : ''}`}
              placeholder="Enter Theater Name"
            />
            {errors.cinema && <div className="invalid-feedback">{errors.cinema}</div>}
          </div>

          {/* Screen Multi-select */}
          <div className="mb-3">
            <label>Screen Name</label>
            <Select
              isMulti
              name="screens"
              options={screenOptions}
              value={screen}
              onChange={(selectedOptions) => setScreen(selectedOptions)}
              classNamePrefix="react-select"
            />
            {errors.screen && <div className="text-danger mt-1">{errors.screen}</div>}
          </div>

          {/* Show Time Multi-select */}
          <div className="mb-3">
            <label>Show Timings</label>
            <Select
              isMulti
              name="showTimes"
              options={showTimeOptions}
              value={showTime}
              onChange={(selectedOptions) => setShowTime(selectedOptions)}
              classNamePrefix="react-select"
            />
            {errors.showTime && <div className="text-danger mt-1">{errors.showTime}</div>}
          </div>

          <button type="submit" className="create-btn">
            {isEdit ? "Update" : "Create"}
          </button>
        </form>
      </div>
    </>
  );
}
