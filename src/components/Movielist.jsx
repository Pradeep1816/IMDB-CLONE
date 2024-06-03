import React, { useEffect, useState } from "react";
import MoviesCard from "./MoviesCard";
import axios from "axios";
import Pagination from "./Pagination";
import Banner from "./Banner";
function Movielist({ handleAddWatchList, watchlist, handleRemoveMovie }) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  //
  function pagePrevious() {
    if (pageNo == 1) {
      setPageNo(1);
    } else {
      setPageNo(pageNo - 1);
    }
  }
  function pageForward() {
    setPageNo(pageNo + 1);
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=ac7b85d24ff2d21eca1b9a59e14492d6&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [pageNo]);

  return (
    <>
      <div className="py-5 text-center text-2xl text-white">
        Trending Movies
      </div>
      <div className="flex  flex-wrap justify-evenly">
        {movies.length == 0
          ? console.log("not found")
          : movies.map((movie, index) => {
              return (
                <MoviesCard
                  key={index}
                  movie={movie}
                  handleAddWatchList={handleAddWatchList}
                  watchlist={watchlist}
                  handleRemoveMovie={handleRemoveMovie}
                ></MoviesCard>
              );
            })}
      </div>
      <div className="my-10 mx-10">
        <Pagination
          pagePrevious={pagePrevious}
          pageForward={pageForward}
          pageNo={pageNo}
        ></Pagination>
      </div>
    </>
  );
}

export default Movielist;
