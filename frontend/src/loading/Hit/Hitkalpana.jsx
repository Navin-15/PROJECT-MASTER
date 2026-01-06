import React, { useState } from 'react'
// import '../loading/Movieseatselection.css'
import bicycle from '../seatimages/bicycle.jpg'
import scooter from '../seatimages/scooter.jpg'       
import auto from '../seatimages/auto.jpg'      
import smallcar from '../seatimages/smallcar.jpg'     
import flatcar from '../seatimages/flatcar.jpg'       
import van from '../seatimages/van.jpg' 
import { useNavigate } from 'react-router-dom';


function Hitkalpana() {

  const navigate = useNavigate();

    const handleSeatLayoutkalpana = () => {
    navigate('/hit/buytickets/kalpanaseatselection/kalpanacinemaseatlayout');
  };

  const [vehicleImg, setVehicleImg] = useState(bicycle)
  const [selectedSeat, setSelectedSeat] = useState(null)

  const seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const getImageBySeat = (num) => {
    if (num === 1) return bicycle
    if (num === 2) return scooter
    if (num === 3) return auto
    if (num === 4) return smallcar
    if (num >= 5 && num <= 7) return flatcar
    if (num >= 8 && num <= 10) return van
    return bicycle
  }

  const handleMouseEnter = (num) => {
    setVehicleImg(getImageBySeat(num))
  }

  const handleMouseLeave = () => {
    // keep selected seat's image visible
    if (selectedSeat !== null) {
      setVehicleImg(getImageBySeat(selectedSeat))
    } else {
      setVehicleImg(bicycle)
    }
  }

  const handleSeatClick = (num) => {
    setSelectedSeat(num)
    setVehicleImg(getImageBySeat(num))
  }

  return (
        <div className="parnt">
      <div className="childd">
        <div className="childdone">
          <div>How Many Seats?</div>
        </div>

        <div className="childdtwo">
          <div className="grandchilldone container">
            <div className="seatimgdiv">
              <img id="vechicleimg" className="vechicleimg" src={vehicleImg} alt="vehicle" />
            </div>
          </div>

          <div className="parentseatdiv mt-3 container grandchilldtwo">
            <div className="chilldseatdiv container">
              <ul className="seatunorderlist container">
                {seats.map(num => (
                  <li
                    key={num}
                    id={`pop${num}`}
                    className={`pop ms-3 ${selectedSeat === num ? 'active-seat' : ''}`}
                    onMouseEnter={() => handleMouseEnter(num)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleSeatClick(num)}
                  >
                    {num}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="colorline mt-3"></div>

          <div className="grandchilldthree mt-3 d-flex justify-content-center">
            <div className="priceinfodiv">
              <span className='category-type'>PLATINUM</span>
              <span className='category-price'>Rs.150</span>
              <span className='category-status'>Available</span>
            </div>
            <div className="priceinfodiv">
              <span className='category-type'>GOLD</span>
              <span className='category-price'>Rs.130</span>
              <span className='category-status'>Available</span>
            </div>
            <div className="priceinfodiv">
              <span className='category-type'>SILVER</span>
              <span className='category-price'>Rs.100</span>
              <span className='category-status'>Available</span>
            </div>
          </div>

          <div className="grandchilldfour mt-3 d-flex justify-content-center">
            <div onClick={handleSeatLayoutkalpana} className="selectseatbutton">
              <div className="text-light">Select Seats</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hitkalpana
