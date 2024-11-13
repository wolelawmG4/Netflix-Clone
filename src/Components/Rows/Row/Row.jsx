import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]); // Consistent naming of state setter
  const [trailerUrl, setTrailerUrl] = useState(""); // Store YouTube trailer URL
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    // This is an async function wrapped in useEffect
    const fetchMovies = async () => {
      try {
        console.log(fetchUrl); // Debugging the URL
        const request = await axios.get(fetchUrl);
        console.log(request); // Debugging the response
        setMovies(request.data.results);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchMovies(); // Call the fetchMovies function
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); // Reset trailer URL if it's already set
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v")); // Get video ID from URL
        })
        .catch((error) => console.log("Error fetching trailer:", error));
    }
  };

  // YouTube player options
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`} // Decide image path
            alt={movie.name}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`} // Conditional className
          />
        ))}
      </div>
      {
        <div style={{ padding: "40px" }}>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}{" "}
          Conditionally render YouTube player
        </div>
      }
    </div>
  );
};

export default Row;
