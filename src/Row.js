import axios from "./axios";
import { useEffect, useState } from "react";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movies) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movies?.name || movies?.original_name || movies?.title || movies?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => alert('Oops! Trailer is not available.'));
    }
    console.log(movies);
  };

  

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movie.map((movies) => (
          <img
            onClick={() => handleClick(movies)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movies.id}
            src={`${base_url}${
              isLargeRow ? movies.poster_path : movies.backdrop_path
            }`}
            alt={movies.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
