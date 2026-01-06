import React, { useState } from "react";
import axios from 'axios';
import Adminsidebar from '../AdminSide/Adminsidebar';
import Adminheader from '../AdminHead/Adminheader';
import "./Newuser.css";
import { useLocation, useNavigate } from "react-router-dom";

const Newuser = () => {
  const location = useLocation();
  const menuName = location.state?.menu || "No data received";
  const userToEdit = location.state?.user || null;
  const navigate = useNavigate();

  const defaultPermissions = {
    user: false,
    theater: false,
    movie: false,
    banner: false,
    booking: false,
    customer: false,
    theaterseats: false,
  };

  const initialFormState = userToEdit
    ? {
        name: userToEdit.name || "",
        email: userToEdit.email || "",
        contact: userToEdit.contact || "",
        designation: userToEdit.designation || "",
        password: "",
        confirmPassword: "",
        permissions: { ...defaultPermissions, ...userToEdit.permissions },
      }
    : {
        name: "",
        email: "",
        contact: "",
        designation: "",
        password: "",
        confirmPassword: "",
        permissions: defaultPermissions,
      };

  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateContact = (contact) => /^\d{10,}$/.test(contact);
  const validatePermissions = (permissions) =>
    Object.values(permissions).some(val => val === true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setForm(prev => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [name]: checked,
      },
    }));
    setErrors(prev => ({ ...prev, permissions: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    else if (form.name.trim().length < 3) newErrors.name = "Name must be at least 3 characters";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(form.email.trim())) newErrors.email = "Invalid email format";

    if (!form.contact.trim()) newErrors.contact = "Contact is required";
    else if (!validateContact(form.contact.trim())) newErrors.contact = "Contact must be at least 10 digits and digits only";

    if (!form.designation.trim()) newErrors.designation = "Designation is required";

    if (!userToEdit) {
      if (!form.password) newErrors.password = "Password is required";
      else if (form.password.length < 6) newErrors.password = "Password must be at least 6 characters";

      if (!form.confirmPassword) newErrors.confirmPassword = "Please confirm your password";
      else if (form.password !== form.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    }

    if (!validatePermissions(form.permissions)) {
      newErrors.permissions = "Please select at least one permission";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      if (userToEdit) {
        await axios.put(`http://localhost:5000/api/users/${userToEdit._id}`, {
          ...form,
          password: form.password || undefined,
        });
        alert("User updated successfully!");
      } else {
        await axios.post('http://localhost:5000/api/users', form);
        alert("User registered successfully!");
      }

      navigate("/manageuser");
    } catch (err) {
      console.error(err);
      setApiError(err.response?.data?.error || "Server error");
    }
  };

  const OpenSidebar = () => setOpenSidebarToggle(!openSidebarToggle);

  return (
    <>
      <div className="adminside">
        <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      </div>

      <Adminheader />
      <div className="parent">
        <div className="newusertemplate">
          <h5 className="fw-bold text-danger mt-1">USER</h5> &nbsp; &nbsp;
          <span className="mt-1">{menuName}</span>
        </div>

        <div className="form-container">
          <h3 className="newform">{userToEdit ? "Update User" : "New User Form"}</h3>

          {apiError && <div className="error">{apiError}</div>}

          <form className="styled-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input name="name" value={form.name} placeholder="Name" onChange={handleInputChange} />
                {errors.name && <small className="error">{errors.name}</small>}
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleInputChange} />
                {errors.email && <small className="error">{errors.email}</small>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Contact</label>
                <input name="contact" value={form.contact} placeholder="Contact" onChange={handleInputChange} />
                {errors.contact && <small className="error">{errors.contact}</small>}
              </div>

              <div className="form-group">
                <label>Designation</label>
                <input name="designation" value={form.designation} placeholder="Designation" onChange={handleInputChange} />
                {errors.designation && <small className="error">{errors.designation}</small>}
              </div>
            </div>

            <div className="permissions-section">
              <label>Department Permissions</label>
              <div className="checkbox-grid">
                {Object.keys(form.permissions).map((key) => (
                  <label key={key} className="checkbox-label">
                    <div>
                      <input
                        className="permissionbox"
                        type="checkbox"
                        name={key}
                        checked={form.permissions[key]}
                        onChange={handleCheckboxChange}
                      />
                    </div>
                    <div className="pt-1">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                  </label>
                ))}
              </div>
              {errors.permissions && <small className="error">{errors.permissions}</small>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleInputChange}
                />
                {errors.password && <small className="error">{errors.password}</small>}
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={form.confirmPassword}
                  onChange={handleInputChange}
                />
                {errors.confirmPassword && <small className="error">{errors.confirmPassword}</small>}
              </div>
            </div>

            <div className="form-actions">
              <button
                type="reset"
                className="cancel-btn"
                onClick={() => {
                  setForm(initialFormState);
                  setErrors({});
                  setApiError('');
                }}
              >
                Cancel
              </button>
              <button type="submit" className="submit-btn">
                {userToEdit ? "Update" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Newuser;
