import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./Banner.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const Banner = () => {
  const [movie, setMovies] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchTopRatedMovies);
        setMovies(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container className="banner_content">
        <Row>
          <Col xs={12} md={8}>
            <h1 className="banner_title">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner_buttons">
              <Button className="banner_button play">Play</Button>
              <Button className="banner_button play">My List</Button>
            </div>
            <h1 className="banner_description">
              {truncate(movie?.overview, 150)}
            </h1>
          </Col>
        </Row>
      </Container>
      <div className="banner_fadeBotton" />
    </div>
  );
};

export default Banner;
