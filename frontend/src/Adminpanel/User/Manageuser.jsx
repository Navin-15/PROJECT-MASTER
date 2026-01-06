import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Adminsidebar from '../AdminSide/Adminsidebar';
import Adminheader from '../AdminHead/Adminheader';
import './Manageuser.css';

// import { BsSearch } from "react-icons/bs";
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';

const ManageUser = () => {
  const location = useLocation();
  const menuName = location.state?.menu || "No data received";
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingUserIndex, setEditingUserIndex] = useState(null);
  const [editedUser, setEditedUser] = useState({});
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const usersPerPage = 10;

  const OpenSidebar = () => setOpenSidebarToggle(!openSidebarToggle);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/users');
        const sorted = [...res.data].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setUsers(sorted);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch users');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.contact.includes(searchTerm) ||
    (user.designation && user.designation.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handleEdit = (index) => {
    const userToEdit = filteredUsers[index];
    navigate("/newuser", { state: { user: userToEdit, menu: menuName } });
  };

  const handleSave = async () => {
    const globalIndex = editingUserIndex;
    try {
      const updatedUser = { ...editedUser };
      await axios.put(`http://localhost:5000/api/users/${updatedUser._id}`, updatedUser);
      const updatedUsers = [...users];
      updatedUsers[globalIndex] = updatedUser;
      setUsers(updatedUsers);
      setEditingUserIndex(null);
    } catch (err) {
      alert("Failed to update user.");
    }
  };

  const handleDelete = async (index) => {
    const globalIndex = indexOfFirstUser + index;
    const userToDelete = filteredUsers[index];
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:5000/api/users/${userToDelete._id}`);
        const updatedUsers = [...users];
        updatedUsers.splice(globalIndex, 1);
        setUsers(updatedUsers);
      } catch (err) {
        alert("Failed to delete user.");
      }
    }
  };

  // PDF export function

  const handleExportPDF = () => {
  if (selectedUsers.length === 0) {
    alert("Please select at least one user to export.");
    return;
  }

  const dataToExport = users.filter(user => selectedUsers.includes(user._id));

  const doc = new jsPDF();
  doc.text('Selected User Details', 14, 10);
  autoTable(doc, {
    startY: 20,
    head: [['Name', 'Email', 'Contact', 'Designation', 'Permissions']],
    body: dataToExport.map(user => [
      user.name,
      user.email,
      user.contact,
      user.designation || 'N/A',
      Object.keys(user.permissions).filter(p => user.permissions[p]).join(', ')
    ])
  });
  doc.save('selected_users.pdf');
};

  // Excel export function   

  const handleExportExcel = () => {
  if (selectedUsers.length === 0) {
    alert("Please select at least one user to export.");
    return;
  }

  const dataToExport = users.filter(user => selectedUsers.includes(user._id));

  const ws = XLSX.utils.json_to_sheet(
    dataToExport.map(user => ({
      Name: user.name,
      Email: user.email,
      Contact: user.contact,
      Designation: user.designation || '',
      Permissions: Object.keys(user.permissions).filter(p => user.permissions[p]).join(', ')
    }))
  );
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Selected Users');
  XLSX.writeFile(wb, 'selected_users.xlsx');
};


  const handleCheckboxChange = (userId) => {
    setSelectedUsers(prev => {
      const updated = prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId];

      const currentPageUserIds = currentUsers.map(user => user._id);
      setSelectAll(currentPageUserIds.every(id => updated.includes(id)));

      return updated;
    });
  };

  const handleSelectAll = () => {
    if (selectAll) {
      const updated = selectedUsers.filter(id => !currentUsers.some(user => user._id === id));
      setSelectedUsers(updated);
      setSelectAll(false);
    } else {
      const pageUserIds = currentUsers.map(user => user._id);
      const updated = Array.from(new Set([...selectedUsers, ...pageUserIds]));
      setSelectedUsers(updated);
      setSelectAll(true);
    }
  };

  const handleDeleteSelected = async () => {
    
    if (selectedUsers.length === 0) return;

    if (!window.confirm(`Are you sure you want to delete ${selectedUsers.length} user(s)?`)) return;

    try {
      await Promise.all(
        selectedUsers.map(id => axios.delete(`http://localhost:5000/api/users/${id}`))
      );
      const updatedUsers = users.filter(user => !selectedUsers.includes(user._id));
      setUsers(updatedUsers);
      setSelectedUsers([]);
      alert("Selected users deleted successfully.");
    } catch (err) {
      alert("Failed to delete selected users.");
    }
  };

  const exportData = selectedUsers.length > 0
    ? users.filter(user => selectedUsers.includes(user._id))
    : filteredUsers;

  return (
    <>
      <div className="adminside">
        <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      </div>

      <Adminheader />

      <div className="parent">
        <div className="managetemplate">
          <h5 className="text-danger fw-bold mt-1">USER</h5>
          <span className="mt-1 ms-3">{menuName}</span>
        </div>

        <div className="manage-user-container">
          <h3 className="newform">Manage User</h3>

          {loading ? (
            <p>Loading users...</p>
          ) : error ? (
            <p className="text-danger">{error}</p>
          ) : (
            <>
              <div className="search-bar">
                {/* <span className='search-icon'><BsSearch /></span> */}
                <input
                  type="text"
                  placeholder="Search by name, email, contact or designation"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="export-buttons">
                <button
                  className="export-btn"
                  onClick={handleDeleteSelected  }
                  title="Delete selected users"
                  disabled={selectedUsers.length === 0}
                >
                  <img src="https://assets-v2.lottiefiles.com/a/e09820ea-116b-11ee-8e93-4f2a1602d144/HdbA8EJlUN.gif" alt="Delete" className="export-icon delete" />
                </button>

                <button className="export-btn" onClick={handleExportExcel}>
                  <img src="https://cdn.iconscout.com/icon/free/png-256/free-microsoft-excel-icon-svg-png-download-1756310.png" alt="Excel" className="export-icon" />
                </button>

              {/* CSV export function */}

{selectedUsers.length > 0 ? (
  <CSVLink 
    data={exportData.map(user => ({
      Name: user.name,
      Email: user.email,
      Contact: user.contact,
      Designation: user.designation || '',
      Permissions: Object.keys(user.permissions).filter(p => user.permissions[p]).join(', ')
    }))}
    filename="selected_users.csv"
  >
    <button className="export-btn">
      <img src="https://cdn-icons-png.flaticon.com/512/8242/8242984.png" alt="CSV" className="export-icon" />
    </button>
  </CSVLink>
) : (
  <button className="export-btn" onClick={() => alert("Please select at least one user to export.")} >
    <img src="https://cdn-icons-png.flaticon.com/512/8242/8242984.png" alt="CSV" className="export-icon" />
  </button>
)}
                <button className="export-btn" onClick={handleExportPDF}>
                  <img src='https://cdn-icons-png.freepik.com/512/14180/14180779.png' alt="PDF" className="export-icon" />
                </button>
              </div>

              <div className="table-responsive">
                <table className="user-table">
                  <thead>
                    <tr>
                      <th><input type="checkbox" checked={selectAll} onChange={handleSelectAll} /></th>
                      <th>Name</th>
                      <th>E-mail ID</th>
                      <th>Contact No</th>
                      <th>Designation</th>
                      <th>Permission</th>
                      <th>Password</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentUsers.length === 0 ? (
                      <tr><td colSpan="8">No users found</td></tr>
                    ) : (
                      currentUsers.map((user, idx) => {
                        const globalIndex = indexOfFirstUser + idx;
                        const isEditing = editingUserIndex === globalIndex;

                        return (
                          <tr key={user._id}>
                            <td>
                              <input
                                type="checkbox"
                                checked={selectedUsers.includes(user._id)}
                                onChange={() => handleCheckboxChange(user._id)}
                              />
                            </td>
                            <td>{isEditing ? (
                              <input type="text" value={editedUser.name} onChange={e => setEditedUser({ ...editedUser, name: e.target.value })} />
                            ) : <strong>{user.name}</strong>}</td>
                            <td>{isEditing ? (
                              <input type="email" value={editedUser.email} onChange={e => setEditedUser({ ...editedUser, email: e.target.value })} />
                            ) : user.email}</td>
                            <td>{isEditing ? (
                              <input type="text" value={editedUser.contact} onChange={e => setEditedUser({ ...editedUser, contact: e.target.value })} />
                            ) : user.contact}</td>
                            <td>{isEditing ? (
                              <input type="text" value={editedUser.designation || ''} onChange={e => setEditedUser({ ...editedUser, designation: e.target.value })} />
                            ) : user.designation || '-'}</td>
                            <td className='permission'>
                              {Object.entries(user.permissions).map(([key, val]) =>
                                val ? (
                                  <span key={key} className={`badge badge-${key}`}>
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                  </span>
                                ) : null
                              )}
                            </td>
                            <td>********</td>
                            <td className='control-btn'>
                              {isEditing ? (
                                <button className="save-btn mb-1 p-2 rounded" onClick={handleSave}>💾</button>
                              ) : (
                                <button className="edit-btn" onClick={() => handleEdit(globalIndex)}>✏️</button>
                              )}
                              <button className="delete-btn" onClick={() => handleDelete(idx)}>🗑️</button>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>

              <div className="pagination">
                <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>⬅️</button>
                <span className='mt-2 mx-1'>Page {currentPage} of {totalPages}</span>
                <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>➡️</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ManageUser;





