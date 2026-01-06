import Tfamily from '/touristfamilyinnerimages/tourist-family-innerimage.jpg'
import Tfamilytrailerimg from '/touristfamilyinnerimages/tourist-family-trailerimage.jpg'
import { FaCaretRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { MdChevronRight } from "react-icons/md";
import { BsShare } from "react-icons/bs";
import sasikumar from '/touristfamilyinnerimages/sasikumar.jpg'
import simran from '/touristfamilyinnerimages/simran.jpg'
import mithun from '/touristfamilyinnerimages/mithun.jpg'
import kamalesh from '/touristfamilyinnerimages/kamalesh.jpg'
import babu from '/touristfamilyinnerimages/yogi-babu.jpg'
import baskar from '/touristfamilyinnerimages/ms-baskar.jpg'
import bagavathi from '/touristfamilyinnerimages/bagavathi.jpg'
import elango from '/touristfamilyinnerimages/elango.jpg'
import yoga from '/touristfamilyinnerimages/yogalakshmi.jpg'

import abishan from '/touristfamilyinnerimages/abishan.jpg'
import yuvaraj from '/touristfamilyinnerimages/yuvaraj.jpg'
import magesh from '/touristfamilyinnerimages/magesh.jpg'
import sean from '/touristfamilyinnerimages/sean.jpg'
import aravind from '/touristfamilyinnerimages/aravind.jpg'
import barath from '/touristfamilyinnerimages/barath.jpg'

function TouristFamily() {

  return (
    <>

        <div className="overflow-hidden">
            
            <div className="A bg-dark">

            <section className='B'> 
                <img className='B-img ' style={{width:"100%"}} src={Tfamily} alt="" /> 
            
                <div className="dev-one ">

                        <div className="L  "> 
                            <img className='trailerimage' src={Tfamilytrailerimg} alt="" />
                        </div>

                        <div className=" Tfamilytrailerdiv ">
                            <FaCaretRight /> <span>Trailer</span>
                        </div>
                        <section className='D'>
                            <div className=" D1 ">
                                in cinemas
                            </div>
                        </section>

                </div>

                <div className="dev-two w-50 ">
                        <h1 className='text-white fw-bold'>Tourist Family</h1>
                        
                        <section>
                            <div className="rating-dev">
                                <div className="rating-content">
                                    <FaStar className='fastar' />
                                    <h5 className='rate'>9.5/10</h5>
                                    <h6 className='votes'>(48.1k votes)</h6>
                                    <MdChevronRight className='right-aro-img' />
                                </div>
                                <button className='butt'>
                                    <span className='butt-span'>Rate now</span>
                                </button>
                            </div>
                        </section>

                        <div className="movie-about-div ">
                            <div className="dimention-lang-div ">
                                <div className="diment-lang">
                                    <a className='di' href="">2D</a>
                                </div>
                                <div className="diment-lang">
                                    <a className='di'  href="">Tamil</a>  <span className='comma' ></span>
                                   
                                </div>
                            </div>

                            <div className="duration">
                                2hr 8m 
                                <span className='dot'>.</span>
                                <a className='journer' href="">Comedy</a>
                                <span className='journer-comma'>,</span>
                                <a className='journer' href="">Drama</a>
                                <span className='journer-comma'>,</span>
                                <a className='journer' href="">Family</a>
                                <span className='dot'>.</span> 
                                U
                                <span className='dot'>.</span>
                                1 May, 2025

                            </div>
                        </div>

                        <div className="book-tickets-div">
                            <div className="book-tickets-button-div">
                                <button className='book-tickets-button'>
                                    <div className="book-tickets-text-div">
                                        <span className='book-tickets'>Book Tickets</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                </div>

                <div className="dev-three ">
                    <section className='share-section'>
                        <div className="section-dev">
                            <div className="share-img-div">
                                <BsShare />
                            </div>
                            <div className="share-text-div">Share</div>
                        </div>
                    </section>
                </div>

            </section>

            
            <div className="details-of-movie-div ">
                <div className="inner-details-of-movie-div">

                    <section className='component-1 d-block ' >
                        <section className='component-1-parent '>
                            <span className='component-1-child w-75 '>
                                <h4 className='about-the-movie-text'>About the Movie</h4>
                                <div className="about-movie-description ">
                                    <span>A quirky Sri Lankan family, seeking a fresh start in India, transforms a disconnected neighborhood into a vibrant community with their infectious love and kindness.</span>
                                </div>

                            </span>
                        </section>
                        <span className='line'>___________________________________________________________________________________________________</span>
                    </section>

                    <section className='component-2 d-block'>
                            <section className='component-2-parent '>

                                <div className="cast-div w-25">
                                    <div className="cast-child ">
                                        <h4 className='cast-text'>Cast</h4>
                                    </div>
                                </div>

                                <div className="cast-crew-div  ">
                                    <div className="cast-crew-img-div">

                                        <div className="d-flex ms-3 p-2">

                                            <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={sasikumar} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>M. Sasikumar</h5>
                                            <h5 className='actor-profession'>as Tharmadas</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={simran} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Simran Bagga</h5>
                                            <h5 className='actor-profession'>as Vasanthy</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={mithun} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Mithun Jai Sankar</h5>
                                            <h5 className='actor-profession'>as Nithushan</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={kamalesh} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Kamalesh <br />jegan</h5>
                                            <h5 className='actor-profession'>as Mulli</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={babu} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Yogi Babu</h5>
                                            <h5 className='actor-profession'>as Prakash</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={baskar} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>MS baskar</h5>
                                            <h5 className='actor-profession'>as Richard</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={bagavathi} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Bagavathi Perumal</h5>
                                            <h5 className='actor-profession'>as Ragavan</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={elango} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Elango Kumaravel</h5>
                                            <h5 className='actor-profession'>as Gunasekar</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={yoga} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Yogalakshmi</h5>
                                            <h5 className='actor-profession'>as Kural</h5>
                                        </a>


                                        </div>

                                    </div>
                                </div>
                            </section>
                    </section>

                    <section className='component-3 d-block '>
                            <section className='component-2-parent '>

                                <div className="cast-div w-25">
                                    <div className="cast-child ">
                                        <h4 className='cast-text'>Crew</h4>
                                    </div>
                                </div>

                                <div className="cast-crew-div  ">
                                    <div className="cast-crew-img-div">

                                        <div className="d-flex ms-3 p-2">
                                            <a className='anchor-image  ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={abishan} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Abishan Jeevinth</h5>
                                            <h5 className='actor-profession'>Director, Writer</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={yuvaraj} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Yuvaraj Ganeshan</h5>
                                            <h5 className='actor-profession'>Producer</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={magesh} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Magesh Raj Pasilian</h5>
                                            <h5 className='actor-profession'>Producer</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={sean} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Sean Roldan</h5>
                                            <h5 className='actor-profession'>Musician</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={aravind} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Aravind Viaswnathan</h5>
                                            <h5 className='actor-profession'>Cinemotography</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={barath} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Barath Vikraman</h5>
                                            <h5 className='actor-profession'>Editor</h5>
                                        </a>

                                        </div>

                                    </div>
                                </div>
                            </section>
                    </section>

                    
                    <section className='component-4 d-block' ></section>
                    <section className='component-5 d-block' ></section>
                </div>
            </div>

        </div>
        </div>

    </>
  )
}

export default TouristFamily