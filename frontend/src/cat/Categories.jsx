import React from 'react'

function Categories() {
  return (
    <>
        <div className="main-cat-div d-none d-md-block">
            <div className="sub-cat-div">
                <div className=" contain-div ">
                    <div className="cat-content-div">

                        <div className="left-content-div">
                            <div className="left-anchors">
                                <a className='left-anc' href="">Movies</a>
                                <a className='left-anc' href="">Stream</a>
                                <a className='left-anc' href="">Events</a>
                                <a className='left-anc' href="">Plays</a>
                                <a className='left-anc' href="">Sports</a>
                                <a className='left-anc' href="">Activities</a>
                            </div>
                        </div>

                        <div className="right-content-div">
                            <div className="right-anchors">
                                <a className='right-anc ' href="">ListYourShow</a>
                                <a className='right-anc ' href="">Corporates</a>
                                <a className='right-anc ' href="">Offers</a>
                                <a className='right-anc ' href="">Gift cards</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Categories


