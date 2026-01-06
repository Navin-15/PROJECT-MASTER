import React, { useState } from "react";
import './adminsidebar.css';
import {
  FaHome,
  FaThList,
  FaBoxOpen,
  FaUser,
  FaImage,
  FaComment,
  FaShoppingCart,
  FaCog,
  FaChevronDown,
  FaChevronRight,
  FaChair
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import adminlogo from '../../../images/BookMyShow.png';
import { useAuth } from '../AuthContext';

const AdminSidebar = () => {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [expandedSubMenu, setExpandedSubMenu] = useState(null);
  const navigate = useNavigate();

  const { user } = useAuth();

  const handleMenuToggle = (menu) => {
    setExpandedMenu(prev => (prev === menu ? null : menu));
    setExpandedSubMenu(null); // Collapse submenus when switching top-level menu
  };

  return (
    <div className="Adminslider">
      <div className="Adminlogodiv">
        <img src={adminlogo} className="adminlogo" alt="Admin Logo" />
      </div>

      <ul className="adminUl">
        {/* Dashboard */}
        <li style={menuItemStyle} onClick={() => navigate("/dashboard")}>
          <FaHome style={iconStyle} />
          <span>Dashboard</span>
        </li>

        {/* User */}
        {user?.permissions?.user && (
          <>
            <li style={menuItemStyle} onClick={() => handleMenuToggle("user")}>
              <FaUser style={iconStyle} />
              <span>User {expandedMenu === "user" ? <FaChevronDown /> : <FaChevronRight />}</span>
            </li>
            {expandedMenu === "user" && (
              <>
                <li style={submenuItemStyle} onClick={() => navigate("/newuser")}>New User</li>
                <li style={submenuItemStyle} onClick={() => navigate("/manageuser")}>Manage User</li>
              </>
            )}
          </>
        )}

        {/* Theater */}
        {user?.permissions?.theater && (
          <>
            <li style={menuItemStyle} onClick={() => handleMenuToggle("theater")}>
              <FaThList style={iconStyle} />
              <span>Theater {expandedMenu === "theater" ? <FaChevronDown /> : <FaChevronRight />}</span>
            </li>
            {expandedMenu === "theater" && (
              <>
                <li style={submenuItemStyle} onClick={() => navigate("/newtheater")}>New Theater</li>
                <li style={submenuItemStyle} onClick={() => navigate("/managetheater")}>Manage Theater</li>
              </>
            )}
          </>
        )}

        {/* Movie */}
        {user?.permissions?.movie && (
          <>
            <li style={menuItemStyle} onClick={() => handleMenuToggle("movie")}>
              <FaBoxOpen style={iconStyle} />
              <span>Movie {expandedMenu === "movie" ? <FaChevronDown /> : <FaChevronRight />}</span>
            </li>
            {expandedMenu === "movie" && (
              <>
                <li style={submenuItemStyle} onClick={() => navigate("/newmovie")}>New Movie</li>
                <li style={submenuItemStyle} onClick={() => navigate("/managemovie")}>Manage Movie</li>
              </>
            )}
          </>
        )}

        {/* Banner */}
        {user?.permissions?.banner && (
          <>
            <li style={menuItemStyle} onClick={() => handleMenuToggle("banner")}>
              <FaImage style={iconStyle} />
              <span>Banner {expandedMenu === "banner" ? <FaChevronDown /> : <FaChevronRight />}</span>
            </li>
            {expandedMenu === "banner" && (
              <>
                <li style={submenuItemStyle} onClick={() => navigate("/newbanner")}>New Banner</li>
                <li style={submenuItemStyle} onClick={() => navigate("/managebanner")}>Manage Banner</li>
              </>
            )}
          </>
        )}

        {/* Customer */}
        {/* {user?.permissions?.customer && (
          <>
            <li style={menuItemStyle} onClick={() => handleMenuToggle("customer")}>
              <FaUser style={iconStyle} />
              <span>Customer {expandedMenu === "customer" ? <FaChevronDown /> : <FaChevronRight />}</span>
            </li>
            {expandedMenu === "customer" && (
              <li style={submenuItemStyle} onClick={() => navigate("/managecustomer")}>Manage Customer</li>
            )}
          </>
        )} */}

        {/* NEW: Theater Seats */}
        {user?.permissions?.theaterseats && (
          <>
            <li style={menuItemStyle} onClick={() => handleMenuToggle("theaterseats")}>
              <FaChair style={iconStyle} />
              <span>Theater Seats {expandedMenu === "theaterseats" ? <FaChevronDown /> : <FaChevronRight />}</span>
            </li>
            {expandedMenu === "theaterseats" && (
              <>
                {/* Theater Management */}
                <li style={submenuItemStyle}onClick={() =>  navigate(`/theater-seats`)}>
                  Management {expandedSubMenu === "cosmos" ? <FaChevronDown /> : <FaChevronRight />}
                </li>
                {expandedSubMenu === "cosmos" && renderScreens("cosmos-cinemas")}    
              </>
            )}
          </>
        )}
      </ul>
    </div>
  );
};

// Styles
const menuItemStyle = {
  padding: "12px 20px",
  color: "#fff",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  marginLeft: "20px",
};

const submenuItemStyle = {
  padding: "8px 40px",
  cursor: "pointer",
  color: "#fff",
  fontSize: "14px",
  marginLeft: "40px",
};

const nestedSubmenuStyle = {
  padding: "6px 60px",
  cursor: "pointer",
  color: "#ddd",
  fontSize: "13px",
};

const iconStyle = {
  marginRight: "10px",
};

export default AdminSidebar;
