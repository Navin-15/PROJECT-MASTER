// import React from 'react'
import hit from '/hitinnerimages/hitinnerimage.jpg'
import hittrailerimg from '/hitinnerimages/hittrailerimage.jpg'
import { FaCaretRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { MdChevronRight } from "react-icons/md";
import { BsShare } from "react-icons/bs";
import Nani from           '/hitinnerimages/nani.jpg'
import sreenidhi from      '/hitinnerimages/sreenidhi.jpg'
import samuthirakani from  '/hitinnerimages/samuthirakani.jpg'
import suryasrinivas from  '/hitinnerimages/surya-srinivas.jpg'
import prateik from        '/hitinnerimages/prateik.jpg'

import sailesh from  '/hitinnerimages/sailesh.jpg'
import prashanti from '/hitinnerimages/prashanti.jpg'
import mickey from     '/hitinnerimages/mickey.jpg'
import sanu from '/hitinnerimages/sanu.jpg'
import srinagu from '/hitinnerimages/sri-nagendra.jpg'

function Hit() {
  return (
    <>

    <div className=" overflow-hidden">
            
        <div className="A bg-dark ">

            <section className='B'> 
                <img className='B-img ' style={{width:"100%"}} src={hit} alt="" /> 
            
                <div className="dev-one ">

                        <div className="L  "> 
                            <img className='trailerimage' src={hittrailerimg} alt="" />
                        </div>

                        <div className=" C ">
                            <FaCaretRight /> <span>Trailers(10)</span>
                        </div>
                        <section className='D'>
                            <div className=" D1 ">
                                in cinemas
                            </div>
                        </section>

                </div>

                <div className="dev-two w-50 ">
                        <h1 className='text-white fw-bold'>HIT: The Third Case</h1>
                        
                        <section>
                            <div className="rating-dev">
                                <div className="rating-content">
                                    <FaStar className='fastar' />
                                    <h5 className='rate'>8.8/10</h5>
                                    <h6 className='votes'>(74.7k votes)</h6>
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
                                    <a className='di'  href="">Telugu</a>  <span className='comma' >,</span>
                                    <a className='di' href="">Hindi</a> <span className='comma' >,</span>
                                    <a className='di' href="">Tamil</a>   <span className='comma' >,</span>
                                    <a className='di' href="">Kannada</a> <span className='comma' >,</span>
                                    <a className='di' href="">Malayalam</a>
                                </div>
                            </div>

                            <div className="duration">
                                2hr 37m 
                                <span className='dot'>.</span>
                                <a className='journer' href="">Crime</a>
                                <span className='journer-comma'>,</span>
                                <a className='journer' href="">Mystery</a>
                                <span className='dot'><strong>.</strong></span> 
                                <a className='journer' href="">Thriller</a>
                                <span className='dot'><strong>.</strong></span> 
                                A
                                <span className='dot'><strong>.</strong></span>
                                1 May,2025

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

            {/* <section className='invisible-section bg-info'>
                <div className="invisible-div-one">
                    <div className="invisible-div-left">
                        <div className="invisible-div-retro">Hit</div>
                    </div>

                    <div className="invisible-div-right">
                        <div className="invisible-button-div">
                            <button className='book-tickets-button'>
                                <div className="book-tickets-text-div">
                                <span className='book-tickets'>Book Tickets</span>
                            </div>
                            </button>
                            
                        </div>
                    </div>
                </div>
            </section> */}

            <div className="details-of-movie-div ">
                <div className="inner-details-of-movie-div">

                    <section className='component-1 d-block ' >
                        <section className='component-1-parent '>
                            <span className='component-1-child w-75 border border-black'>
                                <h4 className='about-the-movie-text'>About the Movie</h4>
                                <div className="about-movie-description ">
                                    <span>Arjun Sarkaar joins Vizag HIT on a mission to solve a series of gritty murders that he had been encountering for some time in his career. His investigation takes him to the four corners of the country, only to put him and his team in the centre of grave danger, leaving him to choose the only way out. Violence.</span>
                                </div>

                            </span>
                        </section>
                        <span className='line'>___________________________________________________________________________________________________</span>
                    </section>

                    <section className='component-2 d-block border border-black '>
                            <section className='component-2-parent '>

                                <div className="cast-div border border-black w-25">
                                    <div className="cast-child ">
                                        <h4 className='cast-text'>Cast</h4>
                                    </div>
                                </div>

                                <div className="cast-crew-div  ">
                                    <div className="cast-crew-img-div   border border-black">

                                        <div className="d-flex border border-black ms-3 p-2">
                                            <a className='anchor-image  ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={Nani} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Nani</h5>
                                            <h5 className='actor-profession'>as Arjun Sarkaar</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={sreenidhi} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Sreenidhi Shetty</h5>
                                            <h5 className='actor-profession'>Mrudula</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={samuthirakani} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Samuthirakani</h5>
                                            <h5 className='actor-profession'>Actor</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={suryasrinivas} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Suriya Srinivas</h5>
                                            <h5 className='actor-profession'>as ASP Ravi</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={prateik} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Prateik Babbar</h5>
                                            <h5 className='actor-profession'>Actor</h5>
                                        </a>
                                        </div>

                                    </div>
                                </div>
                            </section>
                    </section>

                    <section className='component-3 d-block border border-black '>
                            <section className='component-2-parent '>

                                <div className="cast-div border border-black w-25">
                                    <div className="cast-child ">
                                        <h4 className='cast-text'>Crew</h4>
                                    </div>
                                </div>

                                <div className="cast-crew-div  ">
                                    <div className="cast-crew-img-div   border border-black">

                                        <div className="d-flex border border-black ms-3 p-2">
                                            <a className='anchor-image  ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={sailesh} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>sailesh Kolanu</h5>
                                            <h5 className='actor-profession'>Director, Writer</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={prashanti} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Prashanti Tipirneni</h5>
                                            <h5 className='actor-profession'>Producer</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={mickey} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Mickey J. Meyer</h5>
                                            <h5 className='actor-profession'>Musician</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={sanu} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Sanu Varghese</h5>
                                            <h5 className='actor-profession'>Cinemotographer</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={srinagu} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Sri Nagendra Tangala</h5>
                                            <h5 className='actor-profession'>Production Designer</h5>
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

export default Hit