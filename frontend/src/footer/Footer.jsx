import React from 'react'
import { BsHeadset } from "react-icons/bs";
import { IoTicketSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import bookmyshowlogo from '/images/bookmyshow.png';
import './footer.css';

function Footer() {
  return (
    <div className="footerdiv px-3 py-4">

      {/* Top Icons Section */}
      <div className="border border-white p-4 d-flex flex-column flex-md-row justify-content-around align-items-center gap-4">
        <div className="text-center">
          <BsHeadset className='footerimage' />
          <div className="footertext mt-2">24/7 CUSTOMER CARE</div>
        </div>
        <div className="text-center">
          <IoTicketSharp className='footerimage' />
          <div className="footertext mt-2">RESEND BOOKING CONFIRMATION</div>
        </div>
        <div className="text-center">
          <IoIosMail className='footerimage' />
          <div className="footertext mt-2">SUBSCRIBE TO THE NEWSLETTER</div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="border border-white py-4 mt-3 d-flex justify-content-center align-items-center">
        <img className='lo-go img-fluid' src={bookmyshowlogo} alt="BookMyShow Logo" style={{ maxHeight: '40px' }} />
      </div>

      {/* Copyright */}
      <div className="border border-white p-3 mt-3">
        <div className="container text-center small">
          Copyright 2025 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
          <br />
          The content and images used on this site are copyright protected and copyrights vest with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.
        </div>
      </div>
    </div>
  );
}

export default Footer;
