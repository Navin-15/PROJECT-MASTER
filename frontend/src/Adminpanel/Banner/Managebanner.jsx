import React, { useEffect, useState } from "react";
import axios from "axios";
import Adminsidebar from "../AdminSide/Adminsidebar";
import Adminheader from "../AdminHead/Adminheader";
import "./Managebanner.css";
import { useLocation } from "react-router-dom";

const Managebanner = () => {
  const [banners, setBanners] = useState([]);
  const [editingBanner, setEditingBanner] = useState(null);
  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const location = useLocation();
  const menuName = location.state?.menu || "No data received";

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const fetchBanners = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/banners");
      setBanners(res.data);
    } catch (err) {
      console.error("❌ Error fetching banners:", err);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this banner?")) {
      try {
        await axios.delete(`http://localhost:5000/api/banners/${id}`);
        fetchBanners();
      } catch (err) {
        console.error("❌ Error deleting banner:", err);
      }
    }
  };

  const handleEdit = (banner) => {
    setEditingBanner(banner._id);
    setNewName(banner.name);
    setNewImage(null);
  };

  const handleSaveEdit = async (id) => {
    try {
      let imageToUpload = banners.find((b) => b._id === id).image;
      if (newImage) {
        imageToUpload = await convertToBase64(newImage);
      }

      await axios.put(`http://localhost:5000/api/banners/${id}`, {
        name: newName,
        image: imageToUpload,
      });

      setEditingBanner(null);
      setNewName("");
      setNewImage(null);
      fetchBanners();
    } catch (err) {
      console.error("❌ Error updating banner:", err);
    }
  };

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleToggleEnabled = async (id, currentStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/banners/${id}`, {
        enabled: !currentStatus,
      });
      fetchBanners();
    } catch (err) {
      console.error("❌ Error toggling enabled status:", err);
    }
  };

  return (
    <>
      <Adminheader />
      <div className="sideside">
        <Adminsidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
      </div>

      <div className="banner">
        <h5 className="text-danger fw-bold mt-2">Banner</h5> &nbsp; &nbsp;
        <span className="mt-2">{menuName}</span>
      </div>

      <div className="manage-banner">
        <h3 className="text-danger">Manage Banners</h3>
        <table className="banner-table table table-striped table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Actions</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {banners.map((banner) => (
              <tr key={banner._id}>
                {editingBanner === banner._id ? (
                  <>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={(e) => setNewImage(e.target.files[0])}
                      />
                    </td>
                    <td colSpan={2}>
                      <button
                        className="btn btn-success me-2"
                        onClick={() => handleSaveEdit(banner._id)}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={() => setEditingBanner(null)}
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{banner.name}</td>
                    <td>
                      <img src={banner.image} alt={banner.name} width="120" />
                    </td>
                    <td>
                      <button
                        className="btn btn-primary me-2"
                        onClick={() => handleEdit(banner)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(banner._id)}
                      >
                        Delete
                      </button>
                    </td>

                    <td>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`switch-${banner._id}`}
                          checked={banner.enabled}
                          onChange={() =>
                            handleToggleEnabled(banner._id, banner.enabled)
                          }
                        />
                        {/* <label
                          className="form-check-label"
                          htmlFor={`switch-${banner._id}`}
                        >
                          {banner.enabled ? "Enabled" : "Disabled"}
                        </label> */}
                      </div>
                    </td>

                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Managebanner;
