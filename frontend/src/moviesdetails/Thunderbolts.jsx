import Thunderboltsinnerimage from '/thunderboltsinnerimages/thunderboltsinnerimage.jpg'
import Thunderboltstrailerimg from '/thunderboltsinnerimages/thunderbolts-trailerimage.jpg'
import { FaCaretRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { MdChevronRight } from "react-icons/md";
import { BsShare } from "react-icons/bs";
import florence from'/thunderboltsinnerimages/florence.jpg'
import sebastian from  '/thunderboltsinnerimages/sebastian.jpg'
import david from  '/thunderboltsinnerimages/david.jpg'
import wyatt from'/thunderboltsinnerimages/wyatt.jpg'
import olga from    '/thunderboltsinnerimages/olga.jpg'
import lewis from  '/thunderboltsinnerimages/lewis.jpg'
import geraldine from'/thunderboltsinnerimages/geraldine.jpg'
import chris from  '/thunderboltsinnerimages/chris.jpg'
import rachel from    '/thunderboltsinnerimages/rachel.jpg'
import hannah from    '/thunderboltsinnerimages/hannah.jpg'
import julia from    '/thunderboltsinnerimages/julia.jpg'

import jake from '/thunderboltsinnerimages/jake.jpg'
import kevin from '/thunderboltsinnerimages/kevin.jpg'
import eric from  '/thunderboltsinnerimages/eric.jpg'
import davidj from    '/thunderboltsinnerimages/davidj.jpg'

function Thunderbolts() {
  return (
    <>

        <div className="overflow-hidden">
            
            <div className="A bg-dark">

            <section className='B'> 
                <img className='B-img ' style={{width:"100%"}} src={Thunderboltsinnerimage} alt="" /> 
            
                <div className="dev-one ">

                        <div className="L  "> 
                            <img className='trailerimage' src={Thunderboltstrailerimg} alt="" />
                        </div>

                        <div className=" Tbolttrailerdiv ">
                            <FaCaretRight /> <span>Trailer(5)</span>
                        </div>
                        <section className='D'>
                            <div className=" D1 ">
                                in cinemas
                            </div>
                        </section>

                </div>

                <div className="dev-two w-50 ">
                        <h1 className='text-white fw-bold'>Thunderbolts*</h1>
                        
                        <section>
                            <div className="rating-dev">
                                <div className="rating-content">
                                    <FaStar className='fastar' />
                                    <h5 className='rate'>8.1/10</h5>
                                    <h6 className='votes'>(27.7k Votes)</h6>
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
                                    <a className='di' href="">2D</a>  <span className='comma' >,</span>      
                                    <a className='di' href="">IMAX 3D</a> <span className='comma' >,</span>
                                    <a className='di' href="">MX4D 3D</a> <span className='comma' >,</span>
                                    <a className='di' href="">IMAX 2D</a> <span className='comma' >,</span>
                                    <a className='di' href="">4DX 3D</a> <span className='comma' >,</span>
                                    <a className='di' href="">3D</a> <span className='comma' >,</span>
                                    <a className='di' href="">3D SCREEN X</a> <span className='comma' >,</span>
                                    <a className='di' href="">ICE</a> <span className='comma' >,</span>
                                    <a className='di' href="">ICE 3D</a> <span className='comma' >,</span>
                                </div>
                                <div className="diment-lang">
                                    <a className='di'  href="">English</a>  <span className='comma' ></span>
                                    <a className='di' href="">Hindi</a> <span className='comma' >,</span>
                                    <a className='di' href="">Telugu</a>   <span className='comma' >,</span>
                                    <a className='di' href="">Tamil</a>
                                </div>
                            </div>

                            <div className="duration">
                                2hr 7m 
                                <span className='dot'>.</span>
                                <a className='journer' href="">Action</a>
                                <span className='journer-comma'>,</span>
                                <a className='journer' href="">Superhero</a>
                               
                                <span className='dot'>.</span> 
                                UA13+
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
                                    <span>Thunderbolts* are the *New Avengers who mix grit with wit as they bring a new hope to the world.</span>
                                </div>

                            </span>
                        </section>
                        <span className='line'>___________________________________________________________________________________________________</span>
                    </section>

                    <section className='component-2 d-block '>
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

                                                    <img className='pooja' src={florence} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Florence Pugh</h5>
                                            <h5 className='actor-profession'>Actor</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={sebastian} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Sebastian Stan</h5>
                                            <h5 className='actor-profession'>Actor</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={david} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>David Harbour</h5>
                                            <h5 className='actor-profession'>Actor</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={wyatt} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Wyatt Russell</h5>
                                            <h5 className='actor-profession'>as Mulli</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={olga} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Olaga Kurylenko</h5>
                                            <h5 className='actor-profession'>Actor</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={lewis} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Lewis Pullman</h5>
                                            <h5 className='actor-profession'>Actor</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={geraldine} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Geraldine Viswanathan</h5>
                                            <h5 className='actor-profession'>Actor</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={chris} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Chris Bauer</h5>
                                            <h5 className='actor-profession'>Actor</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={rachel} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Rachel Weizs</h5>
                                            <h5 className='actor-profession'>Actor</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={hannah} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Hannah John-Kamen</h5>
                                            <h5 className='actor-profession'>Actor</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={julia} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Julia Louis-Dreyfus</h5>
                                            <h5 className='actor-profession'>Actor</h5>
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

                                        <div className="d-flex  ms-3 p-2">
                                            <a className='anchor-image  ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={jake} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Jake Scherier</h5>
                                            <h5 className='actor-profession'>Director</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={kevin} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Kevin Feige</h5>
                                            <h5 className='actor-profession'>Producer</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={eric} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>Eric Pearson</h5>
                                            <h5 className='actor-profession'>Writer, Screenplay</h5>
                                        </a>

                                        <a className='anchor-image ' href="">
                                            <div className="small-image-div">
                                                <div className="small-image-div-2">

                                                    <img className='pooja' src={davidj} alt="" />

                                                </div>
                                            </div>
                                            <h5 className='actor-name'>David j. Grant</h5>
                                            <h5 className='actor-profession'>Co-Producer</h5>
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

export default Thunderbolts