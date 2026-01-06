import React, { useState } from 'react';
import '../Register/Register.css';
import Adminsidebar from '../AdminSide/Adminsidebar';
import Adminheader from '../AdminHead/Adminheader';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

function Register() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
    designation: '',
    permissions: []
  });
  const [errors, setErrors] = useState({});
  const [editingIndex, setEditingIndex] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([
    {
      name: 'Naveen',
      email: 'naveen123@gmail.com',
      phone: '9876543267',
      password: '********',
      designation: 'Manager',
      permissions: ['HR', 'Finance']
    },
    {
      name: 'Leo',
      email: 'loedas@gmail.com',
      phone: '7189647027',
      password: '********',
      designation: 'Developer',
      permissions: ['IT']
    },
    {
      name: 'Deva',
      email: 'devaraj@gmail.com',
      phone: '7868832369',
      password: '********',
      designation: 'Sales Executive',
      permissions: ['Sales', 'Marketing']
    },
  ]);

  const departments = ['HR', 'Sales', 'Finance', 'Marketing', 'IT'];

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handlePermissionChange = (dept) => {
    setFormData((prevData) => {
      const current = prevData.permissions;
      return {
        ...prevData,
        permissions: current.includes(dept)
          ? current.filter(p => p !== dept)
          : [...current, dept]
      };
    });
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
      isValid = false;
    }

    if (!formData.number.trim()) {
      newErrors.number = 'Phone Number is required.';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.number)) {
      newErrors.number = 'Phone Number must be 10 digits.';
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required.';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
      isValid = false;
    }

    if (!formData.designation.trim()) {
      newErrors.designation = 'Designation is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newUser = {
        ...formData,
        phone: formData.number,
      };

      if (editingIndex !== null) {
        const updatedUsers = [...registeredUsers];
        updatedUsers[editingIndex] = newUser;
        setRegisteredUsers(updatedUsers);
        setEditingIndex(null);
        alert('User updated successfully!');
      } else {
        setRegisteredUsers((prevUsers) => [...prevUsers, newUser]);
        alert('Registration successful!');
      }

      resetForm();
    } else {
      alert('Please correct the errors in the form.');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      number: '',
      password: '',
      designation: '',
      permissions: []
    });
    setErrors({});
  };

  const handleEdit = (index) => {
    const userToEdit = registeredUsers[index];
    setFormData({
      name: userToEdit.name,
      email: userToEdit.email,
      number: userToEdit.phone,
      password: userToEdit.password,
      designation: userToEdit.designation || '',
      permissions: userToEdit.permissions || []
    });
    setEditingIndex(index);
    setErrors({});
  };

  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      const updatedUsers = registeredUsers.filter((_, i) => i !== index);
      setRegisteredUsers(updatedUsers);
      if (editingIndex === index) resetForm();
      alert('User deleted successfully!');
    }
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    resetForm();
  };

  const handleDownloadExcel = () => {
  const data = registeredUsers.map(user => ({
    Name: user.name,
    Email: user.email,
    Phone: user.phone,
    Designation: user.designation,
    Permissions: user.permissions.join(', '),
    Password: '********', // hide original password
  }));

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');

  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const dataBlob = new Blob([excelBuffer], { type: 'application/octet-stream' });
  saveAs(dataBlob, 'RegisteredUsers.xlsx');
};

  return (
    <>
      <Adminheader />
      <div className="sideside">
        <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      </div>

      <div className="min-h-screen reg-div bg-gray-100 flex flex-col items-center py-8 px-1 font-sans">
        <div className="regiform py-5 sm:p-8 rounded-xl shadow-2xl w-full max-w-md mx-auto my-8 border border-gray-200 bg-secondary mt-5">
          <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-900">
            {editingIndex !== null ? 'Edit User' : 'Register Account'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5 form">
            {/* Name */}
            <div className="my-2 px-3">
              <label className="block text-sm fw-bold mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="my-2 px-3">
              <label className="block text-sm fw-bold mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Phone Number */}
            <div className="my-2 px-3">
              <label className="block text-sm fw-bold mb-1">Phone Number</label>
              <input
                type="tel"
                name="number"
                placeholder="10-digit number"
                className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.number ? 'border-red-500' : 'border-gray-300'}`}
                value={formData.number}
                onChange={handleChange}
              />
              {errors.number && <p className="text-red-600 text-xs mt-1">{errors.number}</p>}
            </div>

            {/* Password */}
            <div className="my-2 px-3">
              <label className="block text-sm fw-bold mb-1">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-600 text-xs mt-1">{errors.password}</p>}
            </div>

            {/* Designation */}
            <div className="my-2 px-3">
              <label className="block text-sm fw-bold mb-1">Designation</label>
              <input
                type="text"
                name="designation"
                placeholder="e.g. Manager, Developer"
                className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.designation ? 'border-red-500' : 'border-gray-300'}`}
                value={formData.designation}
                onChange={handleChange}
              />
              {errors.designation && <p className="text-red-600 text-xs mt-1">{errors.designation}</p>}
            </div>

            {/* Permissions */}
            <div className="my-2 px-3 w-50 d-flex flex-wrap">
              <label className="block text-sm fw-bold mb-1 mb-2 w-50">Department Permissions</label>
              <div className="grid grid-cols-2 gap-2">
                {departments.map((dept) => (
                  <label key={dept} className="inline-flex items-center space-x-2 ms-1">
                    <input
                      type="checkbox"
                      checked={formData.permissions.includes(dept)}
                      onChange={() => handlePermissionChange(dept)}
                    />
                    <span className='ms-1'>{dept}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button type="submit" className="flex-1 bg-success text-white font-bold p-2 mt-5 rounded hover:bg-green-700">
                {editingIndex !== null ? 'Update User' : 'Register'}
              </button>
              {editingIndex !== null && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="flex-1 bg-warning text-white font-bold p-2 ms-1 rounded hover:bg-yellow-600"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Registered Users Table */}
        <div className="  mt-5  rounded-xl shadow-2xl w-full max-w-6xl mx-auto border border-gray-200 overflow-x-auto bg-secondary">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">Registered Users</h2>
          {registeredUsers.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Permissions</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Password</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {registeredUsers.map((user, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-800">{user.name}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{user.email}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{user.phone}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{user.designation || '-'}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{user.permissions?.join(', ') || '-'}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">********</td>
                    <td className="py-3 px-4 text-sm">
                      <button
                        onClick={() => handleEdit(index)}
                        className="bg-warning text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-danger text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="py-6 text-center text-gray-500 text-base">No registered users yet.</p>
          )}
        </div>

        {/* Download Button */}
        <button onClick={handleDownloadExcel} className="bg-success mt-3 text-white font-bold p-3 px-8 rounded-lg hover:bg-green-700">
          Download Excel
        </button>
      </div>
    </>
  );
}

export default Register;
