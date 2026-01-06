// import React from 'react'
import '../eventdetails/Survivorcult.css';
import { BsShare } from "react-icons/bs";
import survivordetailimg from '../eventsinnerimages/survivorcultdetailimage.jpg'
import like from '../eventsinnerimages/like_icon.png'
import fiyas from '../eventdetails/eventdetailsimage/faiyaaz-hussain.jpg'
import { ImTicket } from "react-icons/im";
import chevronlatest from '../eventdetails/eventdetailsimage/chevron_latest.png'

import calendar from '../eventdetails/eventdetailsimage/calendar.png'
import duration from '../eventdetails/eventdetailsimage/duration.png'
import agelimit from '../eventdetails/eventdetailsimage/age_limit.png'
import language from '../eventdetails/eventdetailsimage/language.png'
import location from '../eventdetails/eventdetailsimage/location.png'
import navigateicon from '../eventdetails/eventdetailsimage/navigate_icon.png'
import info from '../eventdetails/eventdetailsimage/info.png'
import Navbar from '../../topend/Navbar';
import Categories from '../../cat/Categories';


    
function Survivorcult() {

  return (
    <>
          <Navbar/>
          <Categories/>

        {/* <div className=" d-flex justify-content-center py-2 border border-black">*/}

            <div className="d-flex  gap-2">

            <div className=" aboutevent ">

                    <div className="survivorsticky ps-5 p-2 d-flex justify-content-between">
                        <div className="fs-3 fw-bold">Survivor's Guilt</div>
                        <div className="beshare fs-5 pt-1 px-2" style={{borderRadius:"50%",backgroundColor:"lightgrey"}}> <BsShare /> </div>
                    </div>

                    <div className="d-flex mt-4 ms-5">
                        <img src={survivordetailimg} alt="" style={{height:"100%",width:"95%",borderRadius:"15px"}} />
                    </div>  

                    <div className="container d-flex justify-content-between p-2 ms-5 my-2"style={{width:"90%"}}>
                        <div className="">
                            <span className="p-1" style={{borderRadius:"5px",color:"white",backgroundColor:"rgb(43, 49, 72)"}}>Stanup Comedy</span>
                            <span className="p-1 ms-2" style={{borderRadius:"5px",color:"white",backgroundColor:"rgb(43, 49, 72)"}}>Comedy Show</span>
                        </div>
                        {/* <div className="col-4"></div> */}
                        <div className=" d-flex gap-2">
                            <div className="">
                                <img src={like} alt="" style={{height:"24px", width:"24px"}} />
                            </div>
                        <div className=" px-1 fw-semibold">209 are intrested</div>
                        <div className="px-2"style={{borderRadius:"8px",color:"red",border:"1px solid red",cursor:"pointer"}}>I'm intrested</div>
                        </div>
                    </div> 

                    {/* <div className="bg-warning">hai
                            <h2>About The Event</h2>
                                <p>After a wildly successful run with his debut solo tour “Faiyaaz Hussain Live” <br /> <br />

                                Faiyaaz Hussain returns with a brand-new hour “Survivor’s Guilt.” A real life inspired tightly written, introspective set that also blends in moments of witty<span id="dots">...</span><span id="more"> crowdwork <br /> <br />

                                If you’ve ever laughed your way through pain or felt like an accidental adult in a world of broken systems, this one’s for you. <br /> <br />

                                Survivor’s guilt- A raw, honest, and hilariously uncomfortable ride. <br /> <br />

                                Starting June 2025.</span> </p> <br />
                            <button onclick={"myFunction()"} id="myBtn">Read more</button>    
                    </div>  */}
                    <div className="">
                        <div className=" fs-4 fw-semibold ps-2 ms-5 w-25">Artist</div>
                    </div>

                    <div className="mt-2 ms-5">

                        <div className=" p-1" style={{width:"19.7%",height:"100%"}}>
                            <img src={fiyas} alt="" style={{width:"150px",height:"200px",borderRadius:"10px",objectFit:"cover"}} />
                        </div>
                        <div className=" w-75">
                            <div className=" w-25 fs-5 fw-medium" style={{color:"rgb(64, 64, 64)",lineHeight:"25px"}}>Faiyaaz Hussain</div>
                        </div>
                        <div className=" w-75">
                            <div className=" w-25 fs-6" style={{color:"rgb(82, 82, 82)",lineHeight:"20px"}}>Actor</div>
                        </div>
                        <div className=" w-75 mt-3">
                            <div className=" fs-4 fw-semibold text-start w-25">M-Ticket</div>
                        </div>

                        <div className=" p-2 my-4 d-flex justify-content-between" style={{backgroundColor:"#FEF3EC", width:"70%",borderRadius:"13px"}}>
                            <div className=" text-center" ><ImTicket className="fs-2"/></div>
                            <div className=" py-1">
                                <div className="" style={{color:"rgb(64, 64, 64)",lineHeight:"23px",fontWeight:"normal",letterSpacing:"0.2px"}}>Contactless Ticketing & Fast-track Entry with M-ticket.</div>
                            </div>
                            <div className=" py-1">
                                <div className="" style={{color:"rgb(220, 53, 75)",lineHeight:"23px",fontWeight:"500", letterSpacing:"0.2px", cursor:"pointer"}}>Learn How</div>
                            </div>
                        </div>
{/* Terms and conditions -------------------------------------------------------------------------------------------------------------------- */}
                         {/* <button className="" style={{border:"none",backgroundColor:"transparent"}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
                            <div className=" my-2  gap-1 ">
                                <div className=" fs-4 d-flex align-items-center fw-medium" style={{cursor:"pointer"}}>
                                    <div className="">Terms & Conditions</div>
                                    <img src={chevronlatest} alt="" style={{height:"24px", width:"24px"}}/>
                                </div>
                            </div>
                        </button>

            <div className="offcanvas offcanvas-bottom d-flex px-3 ms-5 mb-4" style={{height:"380px",width:"90%", borderRadius:"15px",position:"relative",left:"20%",bottom:"150px"}} tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                <div className="offcanvas-header text-end w-25 " style={{position:"absolute", left:"75%"}}>
                    <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
                    <button type="button" className="btn-close " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body small">
                    <h2 className='fw-bold mb-4' style={{position:"relative", top:"20px"}}> Terms & Conditions</h2>
                    <p>1. Tickets once booked cannot be exchanged or refunded</p>
                    <p>2. An internet handling fee per ticket may be levied. please check the total amount before payment</p>
                    <p>3. We recommended that you arrive at-least 30 minutes prior at the venue for a seamless entry</p>
                    <p>4. It is manditory to wear masks at all times and follow social distancing norms</p>
                    <p>5. Please do not purchase tickets if you feel sick</p>
                    <p>6. Unlawful resale ( or attempted unlawful resale ) of a ticket would lead to seizure or cancellation os that ticket without refund or other compensation</p>
                    <p>7. Rights of admission reserved</p>
                    <p>8. These terms and conditions are subject to change from time at the discretion of the organizer </p>
                </div>
            </div> */}
{/* Terms and conditions -------------------------------------------------------------------------------------------------------------------- */}

                        {/* <div className="border border-black my-2 w-50 gap-1 ">
                            <div className="border border-black fs-4 d-flex align-items-center fw-medium" style={{cursor:"pointer"}}>
                                <div className="">Terms & Conditions</div>
                            
                                <img src={chevronlatest} alt="" style={{height:"24px", width:"24px"}}/>
                            
                            </div>
                        </div> */}
                        

                    </div>
            </div>
{/* ------------------------------------------------------------------------------------------------------------- */}
            <div className=" eventdetails w-75 p-1" style={{margin:"60px 10px 0px 0px",height:"100%"}}>
                <div className=" ticketdetails mt-3 ms-0" style={{width:"100%", borderRadius:"16px 16px",border:"1px solid rgb(208,213,230 )" ,padding:'20px 20px 4px' }}>

                        <div className="">

                           <div className=" ps-2 mt-3 d-flex " style={{width:"100%"}}> 
                                <img src={calendar} alt="" className='mt-1' style={{height:"20px", width:"7.1%", objectFit:"cover"}} /> <span> <div className="px-2 " style={{fontSize:"14px",paddingTop:"5px"}}>Sat 14 Jun 2025 - Sun 10 Aug 2025</div> </span> 
                           </div>
                           <div className=" ps-2 mt-3 d-flex " style={{width:"100%"}}> 
                                <img src={duration} alt="" className='mt-1' style={{height:"21px", width:"7.1%", objectFit:"cover"}} /> <span> <div className="px-2 " style={{fontSize:"14px",paddingTop:"5px"}}>1 hour 30 minutes</div> </span> 
                           </div>
                           <div className=" ps-2 mt-3 d-flex " style={{width:"100%"}}> 
                                <img src={agelimit} alt="" className='mt-1' style={{height:"22px", width:"7.1%", objectFit:"cover"}} /> <span> <div className="px-2 " style={{fontSize:"14px",paddingTop:"5px"}}>Age Limit - 18 yrs +</div> </span> 
                           </div>
                           <div className=" ps-2 mt-3 d-flex " style={{width:"100%"}}> 
                                <img src={language} alt="" className='mt-1' style={{height:"21px", width:"7.1%", objectFit:"cover"}} /> <span> <div className="px-2 " style={{fontSize:"14px",paddingTop:"5px"}}>Tamil</div> </span> 
                           </div>
                           <div className=" ps-2 my-3 d-flex " style={{width:"100%"}}> 
                                <img src={location} alt="" className='mt-1' style={{height:"22px", width:"7.1%", objectFit:"cover"}} /> <span> <div className="ps-2 " style={{fontSize:"14px",paddingTop:"5px"}}>Media the Stage: Coimbatore</div> </span> 
                                <div className="d-flex ps-1">
                                    <span> <img src={navigateicon} alt="" style={{height:"28px", width:"100%", objectFit:"cover"}} /> </span>
                                </div>
                           </div>

                        </div>

                        <div className="" style={{fontSize:"14px", lineHeight:"20px"}}>
                            <div className="text-danger w-50 ms-5" style={{cursor:"pointer"}}>View 3 Other Cities</div>
                        </div>

                        <div className="">
                            <hr style={{height:"1",width:"100%",border:"1px solid rgb(176, 177, 181)"}} />
                        </div>

                        <div className="" style={{width:"100%",height:"30px"}}>
                            <div className="d-flex" style={{backgroundColor:"#FEF3EC", width:"100%",height:"30px",borderRadius:"10px",paddingTop:"2px"}}>
                                <div className="ms-2 "> <img src={info} alt="" style={{height:"20px", width:"20px"}} /> </div>
                                <div className="pt-1 ps-1" style={{fontSize:"13px"}}>Bookings are filling fast for Coimbatore</div>
                            </div>
                        </div>

                        <div className=" mt-3">
                            <div className="d-flex justify-content-between align-items-center" style={{boxSizing:"border-box",width:"100%",height:'56px',padding:"18px,16px",background:"rgb(255, 255, 255)"}}>

                                <div className="">
                                    <div className="">
                                        <div className=" fw-semibold" style={{fontSize:"16px"}}>$499 onwards</div>
                                    </div>
                                    <div className="">
                                        <div className="text-warning fw-semibold">Filling Fast</div>
                                    </div>
                                </div>

                                <div className="">
                                    <div className=" rounded p-3" style={{backgroundColor:"#EB4E62",color:"white",cursor:"pointer"}}>
                                        <div className="text-light">Book Now</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                </div>
            </div>

        </div>

        {/* </div> */}


    </>
  )
}

export default Survivorcult