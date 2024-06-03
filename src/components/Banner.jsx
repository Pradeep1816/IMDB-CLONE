import React, { useEffect, useState } from "react";
import Background from "../images/avengers.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { Movie_path } from "./constant";
import UpNext from "./UpNext";
function Banner() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(Movie_path).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  return (
    <div className="flex">
      <div className="ml-5 w-[60%]">
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          // showDots={true}
          infinite={true}
          autoPlay={true}
        >
          {movies.map((movie, index) => (
            <div
              key={index}
              className="relative h-[90vh] w-[100%] bg-cover bg-center bg-no-repeat mt-2"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
              }}
            >
              <div className="text-2xl flex items-center justify-center  absolute text-yellow-500 bottom-0 text-white bg-stone-900/60 h-22 w-[100%]">
                {movie.title}
              </div>
              <div
                className="absolute bottom-5 h-[200px] my-5 mx-5 w-[120px] bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
                }}
              ></div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="flexh-[100vh] w-[40%] text-white">
        <UpNext movies={movies}></UpNext>
      </div>
    </div>
  );
}

export default Banner;
