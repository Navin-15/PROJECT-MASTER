import React from 'react'
import '../eventdetails/Popup.css';

function Popup() {
  return (
    <>

        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle bottom offcanvas</button>

            <div className="offcanvas offcanvas-bottom d-flex px-3 ms-5 mb-4" style={{height:"400px",width:"60%", borderRadius:"20px",position:"relative",left:"15%",bottom:"40px"}} tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                <div className="offcanvas-header text-center">
                    {/* <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5> */}
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body small">
                    <h2 className='fw-bold mb-3'> Terms & Conditions</h2>
                    <p>1. Tickets once booked cannot be exchanged or refunded</p>
                    <p>2. An internet handling fee per ticket may be levied. please check the total amount before payment</p>
                    <p>3. We recommended that you arrive at-least 30 minutes prior at the venue for a seamless entry</p>
                    <p>4. It is manditory to wear masks at all times and follow social distancing norms</p>
                    <p>5. Please do not purchase tickets if you feel sick</p>
                    <p>6. Unlawful resale ( or attempted unlawful resale ) of a ticket would lead to seizure or cancellation os that ticket without refund or other compensation</p>
                    <p>7. Rights of admission reserved</p>
                    <p>8. These terms and conditions are subject to change from time at the discretion of the organizer </p>
                </div>
            </div>

    </>
  )
}

export default Popup