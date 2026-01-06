// import React from 'react'
import '../eventsinner/Comedyshowinner.css'
import survivor from './eventsinnerimages/survivor.jpg'
import sevenplusone from './eventsinnerimages/sevenplusone.jpg'
import makamishi from './eventsinnerimages/makamishi.jpg'
import extraordinary from './eventsinnerimages/extraordinary.jpg'
import kisiko from './eventsinnerimages/kisiko.jpg'
import makamishitwo from './eventsinnerimages/makamishitwo.jpg'
import threeDA from './eventsinnerimages/3DA.jpg'
import eightby from './eventsinnerimages/eightby.jpg'
import whoareyou from './eventsinnerimages/whoareyou.jpg'
import comedyladder from './eventsinnerimages/comedyladder.jpg'
import undergroundcomedy from './eventsinnerimages/undergroundcomedy.jpg'
import chalta from './eventsinnerimages/chalta.jpg'
import Navbar from  '../topend/Navbar';
import Categories from '../cat/Categories';
import { useNavigate } from 'react-router-dom';


function Comedyshowinner() {

    const navigate = useNavigate();

    const handlesurvivorcult = () => {
    navigate('/events/comedyshow/survivorcult');
};
    const handlesevenplusone = () => {
    navigate('/events/comedyshow/sevenplusone');
};
    const handlemakkamishi = () => {
    navigate('/events/comedyshow/makkamishi');
};
    const handleextraordinary = () => {
    navigate('/events/comedyshow/extraordinary');
};
    const handlekisiko = () => {
    navigate('/events/comedyshow/kisiko');
};
    const handleletsdomakka = () => {
    navigate('/events/comedyshow/letsdomakka');
};
    const handleeightbypraveen = () => {
    navigate('/events/comedyshow/eightbypraveen');
};

  return (
    <>
          <Navbar/>
          <Categories/>
          
        <div className="" style={{background:"rgb(245, 245, 245)"}}>


            <div className="container d-flex justify-content-around">


                <div className="filter-div w-25 mt-5">

                    <div className=" p-2 my-2 fs-4 fw-bolder">Filters</div>

<section className="accordion accordion-flush" id="accordionFlushExample">

  <div className="accordion-item" style={{width:"115%"}}>
    <h2 className="accordion-header">
      <div className="d-flex justify-content-between align-items-center text-center">
            <button className="accordion-button collapsed custom-accordion-button w-75 " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Date
            </button> 
            <div className=" w-25">
                <h6 className='txt'>clear</h6>
            </div>
      </div> 
    </h2>
    <div id="flush-collapseOne" className=" accordion-collapse collapse date-div    " data-bs-parent="#accordionFlushExample">
      <div className="accordion-body  d-flex flex-wrap text-center">
        {/* <div className='overflow-hidden' style={{cursor:"pointer"}}> */}
            <p className='border border-black p-1 text-danger' style={{cursor:"pointer",height:"30px", fontSize:"14px",width:"35%"}}>Today</p>
        {/* </div> */}
        {/* <div className="ms-2 overflow-hidden" style={{cursor:"pointer"}}> */}
            <p className='border border-black p-1 ms-2 text-danger' style={{cursor:"pointer",height:"30px", fontSize:"14px",width:"35%"}}>Tomorrow</p>
        {/* </div>  */}

      {/* <div className=""> */}
            <p className='overflow-hidden border border-black p-1 text-danger' style={{marginTop:"25px", position:"relative", bottom:"25px",width:"65%",cursor:"pointer",height:"30px", fontSize:"14px"}}>This Weekend</p>
      {/* </div> */}
      
      {/* <div class="accordion-body border border-black d-flex">
        <div className="">svg</div>
        <div className="">date range</div>
        </div> */}
        </div>
    </div>
  </div>
 
  <div className="accordion-item mt-2" style={{width:"115%"}}>
    <h2 className="accordion-header">
      <div className="d-flex justify-content-between align-items-center text-center">
            <button className="accordion-button collapsed custom-accordion-button w-75" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Language
            </button> 
            <div className=" w-25">
                <h6 className='txt'>clear</h6>
            </div>
      </div> 
    </h2>
     <div id="flush-collapseTwo" className=" accordion-collapse collapse date-div" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body d-flex text-center">
        {/* <di className='overflow-hidden' style={{cursor:"pointer"}}> */}
            <p className='border border-black p-1 text-danger' style={{cursor:"pointer",height:"30px", fontSize:"14px",width:"30%"}}>English</p>
        {/* </div> */}
        {/* <div className="ms-2 overflow-hidden" style={{cursor:"pointer"}}> */}
            <p className='border border-black p-1 ms-2 text-danger' style={{cursor:"pointer",height:"30px", fontSize:"14px",width:"30%"}}>Tamil</p>
        {/* </div>  */}
        {/* <div className="ms-2 overflow-hidden" style={{cursor:"pointer"}}> */}
            <p className='border border-black p-1 ms-2 text-danger' style={{cursor:"pointer",height:"30px", fontSize:"14px",width:"30%"}}>Hindi</p>
        {/* </div>  */}

      </div>
      {/* <div className=""> */}
            <p className='overflow-hidden border border-black p-1 text-danger' style={{marginLeft:"20px", position:"relative", bottom:"20px", width:"30%",cursor:"pointer",height:"30px", fontSize:"14px"}}>Malayalam</p>
      {/* </div> */}
      
    </div>

  </div>

  <div className="accordion-item mt-2" style={{width:"115%"}}>
    <h2 className="accordion-header">
      <div className="d-flex justify-content-between align-items-center text-center">
            <button className="accordion-button collapsed custom-accordion-button w-75" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Categories
            </button> 
            <div className=" w-25"><h6 className='txt'>clear</h6></div>
      </div> 
    </h2>
    <div id="flush-collapseThree" className=" accordion-collapse collapse date-div " data-bs-parent="#accordionFlushExample">
      <div className="accordion-body  d-flex flex-wrap text-center">

        {/* <div className='overflow-hidden border border-black ' style={{cursor:"pointer",width:"100%"}}> */}
            <p className='border border-black p-1 text-danger ' style={{cursor:"pointer",height:"30px", fontSize:"14px",width:"60%"}}>Stand Up Comedy</p>
        {/* </div> */}
        {/* <div className="overflow-hidden border border-black" style={{cursor:"pointer",width:"100%"}}> */}
            <p className='border border-black p-1 text-danger' style={{cursor:"pointer",height:"30px", fontSize:"14px",width:"60%"}}>Improv Comedy</p>
        {/* </div>  */}
        {/* <div className="ms-3 overflow-hidden" style={{cursor:"pointer"}}> */}
            <p className='border border-black p-1 ms-2 text-danger' style={{cursor:"pointer",height:"30px", fontSize:"14px",width:"30%"}}>Roast</p>
        {/* </div>   */}
    
    </div>
  </div>
  </div>

  <div className="accordion-item mt-2" style={{width:"115%"}}>
    <h2 className="accordion-header">
      <div className="d-flex justify-content-between align-items-center text-center">
            <button className="accordion-button collapsed custom-accordion-button w-75" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                More Filter
            </button> 
            <div className="w-25"><h6 className='txt'>clear</h6></div>
      </div> 
    </h2>
    
    <div id="flush-collapseFour" className=" accordion-collapse collapse date-div" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body  d-flex flex-wrap text-center ">
        {/* <div className="d-flex"> */}
          {/* <div className='overflow-hidden' style={{cursor:"pointer"}}> */}
            <p className='border border-black p-1 text-danger flex-fill' style={{cursor:"pointer",width:"60%",height:"30px", fontSize:"14px"}}>Outdoor Events</p>
        {/* </div> */}
        {/* <div className="ms-2 overflow-hidden" style={{cursor:"pointer"}}> */}
            <p className='border border-black p-1 ms-2 text-danger' style={{cursor:"pointer",width:"80px",height:"30px", fontSize:"14px"}}>Fast Filling</p>
        {/* </div>  */}
        {/* </div> */}

      {/* <div className=""> */}
            <p className='overflow-hidden border border-black p-1 text-danger' style={{marginTop:"25px", position:"relative", bottom:"25px",width:"60%",cursor:"pointer",height:"30px", fontSize:"14px"}}>Online Streaming</p>
      {/* </div> */}
        </div>
    </div>
  </div>

  <div className="accordion-item mt-2 mb-2" style={{width:"115%"}}>
    <h2 className="accordion-header">
      <div className="d-flex justify-content-between align-items-center text-center">
            <button className="accordion-button collapsed custom-accordion-button w-75" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                Price
            </button> 
            <div className="w-25"><h6 className='txt'>clear</h6></div>
      </div> 
    </h2>
    <div id="flush-collapseFive" className=" accordion-collapse collapse date-div" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body d-flex text-center">
        {/* <di className='overflow-hidden' style={{cursor:"pointer"}}> */}
            <p className='border border-black p-1 text-danger' style={{cursor:"pointer",height:"30px", fontSize:"14px",width:"25%"}}>Free</p>
        {/* </div> */}
        {/* <div className="ms-2 overflow-hidden" style={{cursor:"pointer"}}> */}
            <p className='border border-black p-1 ms-2 text-danger' style={{cursor:"pointer",height:"30px", fontSize:"14px",width:"25%"}}>0 - 500</p>
        {/* </div>  */}
        {/* <div className="ms-2 overflow-hidden" style={{cursor:"pointer"}}> */}
            <p className='border border-black p-1 ms-2 text-danger' style={{cursor:"pointer",height:"30px", fontSize:"14px",width:"35%"}}>501 - 2000</p>
        {/* </div>  */}

      </div>
      {/* <div className=""> */}
            <p className='overflow-hidden border border-black p-1 text-danger text-center' style={{marginLeft:"20px", position:"relative", bottom:"25px", width:"35%",cursor:"pointer",height:"30px", fontSize:"14px"}}>Above 2000</p>
      {/* </div> */}
      
    </div>
  </div>  

</section>

                </div>

            <div className="comedyshow-div w-75 ms-5 mt-5 px-3 ">

                <div className=" p-2 my-2 fs-4 fw-bolder">Comedy Shows</div>

                <div className=" d-flex p-1  mt-2">
                    <div className=" border border-black p-2 ms-2 text-danger" style={{borderRadius:"20px",cursor:"pointer",fontSize:"12px",backgroundColor:"white"}}>
                        <div className="">Stand up Comedy</div>
                    </div>
                    <div className=" border border-black p-2 ms-2 text-danger" style={{borderRadius:"20px",cursor:"pointer",fontSize:"12px",backgroundColor:"white"}}>
                        <div className="">Improv Comedy</div>
                    </div>
                    <div className=" border border-black p-2 ms-2 text-danger" style={{borderRadius:"20px",cursor:"pointer",fontSize:"12px",backgroundColor:"white"}}>
                        <div className="">Roast</div>
                    </div>
                </div>

                <div className="  d-flex my-2 py-2 gap-1">

                  {/* <div className=" border border-black d-flex mt-3"> */}
                      <div className=" " onClick={handlesurvivorcult} style={{width:"13rem", borderRadius:"10px",cursor:"pointer"}}>
                        <div className="mx-1 my-1">
                            <img src={survivor}  alt="" style={{width:"11.7rem", borderRadius:"10px"}} />
                            <div className="survivor-div d-flex flex-column" style={{padding:"10px 0px 0px 0px"}}>
                                <div className=" p-1 fs-6 fw-bold">Survivor's Guilt</div>
                                <div className=" p-1 fw-medium">Media The Stage:...</div>
                                <div className=" p-1 text-secondary">Stand up Comedy</div>
                                <div className=" p-1 text-secondary">$499 onwards</div>
                            </div>
                        </div>
                    </div>
                    <div className=" " onClick={handlesevenplusone} style={{width:"13rem", borderRadius:"10px",cursor:"pointer"}}>
                        <div className="mx-1 my-1">
                            <img src={sevenplusone} alt="" style={{width:"11.7rem", borderRadius:"10px"}} />
                            <div className="survivor-div d-flex flex-column" style={{padding:"10px 0px 0px 0px"}}>
                                <div className=" p-1 fs-6 fw-bold">Seven plus One -Rising Stars on Tour</div>
                                <div className=" p-1 fw-medium">Media The Stage:...</div>
                                <div className=" p-1 text-secondary">Stand up Comedy</div>
                                <div className=" p-1 text-secondary">$349 onwards</div>
                            </div>
                        </div>
                    </div>
                    <div className=" " onClick={handlemakkamishi} style={{width:"13rem", borderRadius:"10px",cursor:"pointer"}}>
                        <div className="mx-1 my-1">
                            <img src={makamishi} alt="" style={{width:"11.7rem", borderRadius:"10px"}} />
                            <div className="survivor-div d-flex flex-column" style={{padding:"10px 0px 0px 0px"}}>
                                <div className=" p-1 fs-6 fw-bold">Let's do Makkamishi</div>
                                <div className=" p-1 fw-medium">Media The Stage:...</div>
                                <div className=" p-1 text-secondary">Stand up Comedy</div>
                                <div className=" p-1 text-secondary">$299 onwards</div>
                            </div>
                        </div>
                    </div>
                    <div className=" " onClick={handleextraordinary} style={{width:"13rem", borderRadius:"10px",cursor:"pointer"}}>
                        <div className="mx-1 my-1">
                            <img src={extraordinary} alt="" style={{width:"11.7rem", borderRadius:"10px"}} />
                            <div className="survivor-div d-flex flex-column" style={{padding:"10px 0px 0px 0px"}}>
                                <div className=" p-1 fs-6 fw-bold">EXTRAORDINARY - Standup Comedy Ft...</div>
                                <div className=" p-1 fw-medium">Media The Stage:...</div>
                                <div className=" p-1 text-secondary">Stand up Comedy</div>
                                <div className=" p-1 text-secondary">$399 onwards</div>
                            </div>
                        </div>
                    </div>

                  {/* </div> */}
                 
                </div>

                <div className=" d-flex my-2 py-2 gap-1">
                    <div className=" " onClick={handlekisiko} style={{width:"13rem", borderRadius:"10px",cursor:"pointer"}}>
                        <div className="mx-1 my-1">
                            <img src={kisiko} alt="" style={{width:"11.7rem", borderRadius:"10px"}} />
                            <div className="survivor-div d-flex flex-column" style={{padding:"10px 0px 0px 0px"}}>
                                <div className=" p-1 fs-6 fw-bold">Kisi Ko Batana Mat Ft.Anbhav Singh Bassi</div>
                                <div className=" p-1 fw-medium">Sanjeev Kumar...</div>
                                <div className=" p-1 text-secondary">Stand up Comedy</div>
                                <div className=" p-1 text-secondary">$999 onwards</div>
                            </div>
                        </div>
                    </div>
                    <div className=" " onClick={handleletsdomakka} style={{width:"13rem", borderRadius:"10px",cursor:"pointer"}}>
                        <div className="mx-1 my-1">
                            <img src={makamishitwo} alt="" style={{width:"11.7rem", borderRadius:"10px"}} />
                            <div className="survivor-div d-flex flex-column" style={{padding:"10px 0px 0px 0px"}}>
                                <div className=" p-1 fs-6 fw-bold">Let's do Makamishi- Standup ft.Chocku an...</div>
                                <div className=" p-1 fw-medium">Media The Stage:...</div>
                                <div className=" p-1 text-secondary">Stand up Comedy</div>
                                <div className=" p-1 text-secondary">$299 onwards</div>
                            </div>
                        </div>
                    </div>
                    <div className=" " onClick={handleeightbypraveen} style={{width:"13rem", borderRadius:"10px",cursor:"pointer"}}>
                        <div className="mx-1 my-1">
                            <img src={eightby} alt="" style={{width:"11.7rem", borderRadius:"10px"}} />
                            <div className="survivor-div d-flex flex-column" style={{padding:"10px 0px 0px 0px"}}>
                                <div className=" p-1 fs-6 fw-bold">8 by Praveen Kumar</div>
                                <div className=" p-1 fw-medium">Coindia Training Center:...</div>
                                <div className=" p-1 text-secondary">Stand up Comedy</div>
                                <div className=" p-1 text-secondary">$499 onwards</div>
                            </div>
                        </div>
                    </div>
                    <div className=" " style={{width:"13rem", borderRadius:"10px",cursor:"pointer"}}>
                        <div className="mx-1 my-1">
                            <img src={threeDA} alt="" style={{width:"11.7rem", borderRadius:"10px"}} />
                            <div className="survivor-div d-flex flex-column" style={{padding:"10px 0px 0px 0px"}}>
                                <div className=" p-1 fs-6 fw-bold">3D - A TAMIL <br /> STANDUP COMEDY...</div>
                                <div className=" p-1 fw-medium">Rotary Texcity Hall:...</div>
                                <div className=" p-1 text-secondary">Improv Comedy</div>
                                <div className=" p-1 text-secondary">$349 onwards</div>
                            </div>
                        </div>
                    </div>
                 
                </div>

                {/* <div className=" d-flex my-2 py-2 gap-1">
                    <div className=" " style={{width:"13rem", borderRadius:"10px"}}>
                        <div className="mx-1 my-1">
                            <img src={whoareyou} alt="" style={{width:"11.7rem", borderRadius:"10px"}} />
                            <div className="survivor-div d-flex flex-column" style={{padding:"10px 0px 0px 0px"}}>
                                <div className=" p-1 fs-6 fw-bold">Who Are You by Rahul Subramanian</div>
                                <div className=" p-1 fw-medium">Kumaraguru  College of...</div>
                                <div className=" p-1 text-secondary">Stand up Comedy</div>
                                <div className=" p-1 text-secondary">$799 onwards</div>
                            </div>
                        </div>
                    </div>
                    <div className=" " style={{width:"13rem", borderRadius:"10px"}}>
                        <div className="mx-1 my-1">
                            <img src={comedyladder} alt="" style={{width:"11.7rem", borderRadius:"10px"}} />
                            <div className="survivor-div d-flex flex-column" style={{padding:"10px 0px 0px 0px"}}>
                                <div className=" p-1 fs-6 fw-bold">Comedy Ladder</div>
                                <div className=" p-1 fw-medium">Multiple Venues</div>
                                <div className=" p-1 text-secondary">Stand up Comedy</div>
                                <div className=" p-1 text-secondary">$299 onwards</div>
                            </div>
                        </div>
                    </div>
                    <div className=" " style={{width:"13rem", borderRadius:"10px"}}>
                        <div className="mx-1 my-1">
                            <img src={undergroundcomedy} alt="" style={{width:"11.7rem", borderRadius:"10px"}} />
                            <div className="survivor-div d-flex flex-column" style={{padding:"10px 0px 0px 0px"}}>
                                <div className=" p-1 fs-6 fw-bold">Underground Comedy Festival</div>
                                <div className=" p-1 fw-medium">Multiple Venues</div>
                                <div className=" p-1 text-secondary">Improv Comedy</div>
                                <div className=" p-1 text-secondary">$499 onwards</div>
                            </div>
                        </div>
                    </div>
                    <div className=" " style={{width:"13rem", borderRadius:"10px"}}>
                        <div className="mx-1 my-1">
                            <img src={chalta} alt="" style={{width:"11.7rem", borderRadius:"10px"}} />
                            <div className="survivor-div d-flex flex-column" style={{padding:"10px 0px 0px 0px"}}>
                                <div className=" p-1 fs-6 fw-bold">Chalta Hai Comedy</div>
                                <div className=" p-1 fw-medium">Multiple Venues</div>
                                <div className=" p-1 text-secondary">Stand up Comedy</div>
                                <div className=" p-1 text-secondary">$499 onwards</div>
                            </div>
                        </div>
                    </div>
                 
                </div> */}

            </div>



{/* Comedy show section ------------------------------------------------------------------------------------------------------- */}  

            </div>
        </div>
    </>
  )
}

export default Comedyshowinner