import Retro from '/images/retro.jpg';
import Family from '/images/family.jpg';
import Hit from '/images/hit.jpg';
import Thunderbolds from '/images/Thunderbolds.jpg';
import Thodarum from '/images/thodarum.jpg';
import { useNavigate } from 'react-router-dom';
import '../moviecat/RecomendedMovies.css';

function RecomendedMovies() {
  const navigate = useNavigate();

  const movieRoutes = {
    retro: () => navigate('/retro'),
    family: () => navigate('/touristfamily'),
    hit: () => navigate('/hit'),
    thunderbolts: () => navigate('/thunderbolts'),
    thodarum: () => navigate('/thodarum'),
  };

  return (
    <div className="recommended-wrapper container-fluid py-4 imageholdingwrapdiv">
      <h4 className="text-start ps-3 ps-md-5 mb-4 fw-semibold">Recommended Movies</h4>
      <div className="row justify-content-center gx-4 gy-4 imageholdingdiv">
        {[{
          img: Retro, title: "Retro", genres: "Action/Thriller", onClick: movieRoutes.retro
        }, {
          img: Family, title: "Tourist Family", genres: "Comedy/Drama/Family", onClick: movieRoutes.family
        }, {
          img: Hit, title: "HIT: The Third Case", genres: "Crime/Mystery/Thriller", onClick: movieRoutes.hit
        }, {
          img: Thunderbolds, title: "Thunderbolts*", genres: "Action/Adventure/Sci-Fi/Superhero", onClick: movieRoutes.thunderbolts
        }, {
          img: Thodarum, title: "Thodarum", genres: "Drama/Family/Thriller", onClick: movieRoutes.thodarum
        }].map((movie, idx) => (
          <div key={idx} className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 ">
            <div className="movie-card" onClick={() => { window.scrollTo(0, 0); movie.onClick(); }}>
              <img src={movie.img} alt={movie.title} className="img-fluid rounded-3 movie-img mt-2" />
              <h6 className="fw-bold mt-2 movie-nam">{movie.title}</h6>
              <p className="text-muted movie-genres">{movie.genres}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecomendedMovies;

