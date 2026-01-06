// import React from 'react'
import {Row, Col} from 'react-bootstrap'
import comedyshows from '../assets/comedyshowimages/comedy-shows.png'
import kids from '../assets/comedyshowimages/kids-banner.png'
import music from '../assets/comedyshowimages/music-shows.jpg'
import workshop from '../assets/comedyshowimages/workshop.jpg'
import { useNavigate } from 'react-router-dom';


function Comedyshow() {

 const navigate = useNavigate();

 const handleComedyShowClick = () => {
    navigate('/events/comedyshow');
  };

  return (
    <>
        <div className=" ">
            <div className=" container py-5">

            <Col className="">
                <div className="">
                    <span className=" w-25 ms-3 pb-2 fs-4 fw-bolder ">The Best Of Live Events</span>
                </div>
            </Col>

            <Col className='col-9'>
                <div className=" d-flex py-3 px-auto gap-4">

                    <div className=" container"> 
                        <img src={comedyshows} style={{height:"100%", width:"120%", borderRadius:"10px", cursor:"pointer"}} alt="" onClick={handleComedyShowClick} />
                    </div>

                    <div className=" container">
                        <img src={kids} style={{height:"100%", width:"120%", borderRadius:"10px", cursor:"pointer"}}  alt="" />
                    </div>

                    <div className=" container"> 
                        <img src={music} style={{height:"100%", width:"120%", borderRadius:"10px", cursor:"pointer"}}  alt="" />
                    </div>

                    <div className=" container"> 
                        <img src={workshop} style={{height:"100%", width:"120%", borderRadius:"10px", cursor:"pointer"}}  alt="" />
                    </div>

                </div>  
            </Col>

        </div>
        </div>  
    </>
  )
}

export default Comedyshow