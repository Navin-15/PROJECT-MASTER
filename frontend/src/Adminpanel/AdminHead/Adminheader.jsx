
import React, { useContext } from 'react'; 
import '../AdminHead/Adminheader.css'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';


function Adminheader({OpenSidebar}) {
  const { username, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // logout();
    navigate('/admin');
  };

  return (
    <header className='header'>
        <div className='menu-icon '>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        {/* <div className='header-left '>
            <BsSearch  className='icon'/>
        </div> */}
        {/* <div className='header-right'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
        </div> */}

        {/* <h4 className=" admi">Admin Panel</h4> */}

      {/* {username && (
        <div className="d-flex align-items-center  gap-3">
          <div className="username-box">{username}</div> */}
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        {/* </div>
       )} */}
    </header>
  )
}

export default Adminheader