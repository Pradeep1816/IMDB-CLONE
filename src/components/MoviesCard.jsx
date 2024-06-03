import React from "react";
import { BsBookmarkPlus } from "react-icons/bs";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
function MoviesCard({
  movie,
  handleAddWatchList,
  watchlist,
  handleRemoveMovie,
}) {
  let doesExist = (movie) => {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movie.id) {
        return true;
      }
    }
    return false;
  };

  return (
    <div
      className="my-3 h-[45vh] w-[200px] bg-cover bg-center hover:scale-110 duration-200 relative"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
      }}
    >
      {doesExist(movie) ? (
        <BsFillBookmarkCheckFill
          className="absolute cursor-pointer text-white"
          style={{ fontSize: "30px", color: "yellow" }}
          onClick={() => handleRemoveMovie(movie)}
        />
      ) : (
        <BsBookmarkPlus
          className="absolute bg-stone-900/60  text-white cursor-pointer"
          style={{ fontSize: "30px" }}
          onClick={() => handleAddWatchList(movie)}
        />
      )}

      <div className=" w-full absolute  bg-stone-900/40 bottom-0  text-center text-white text-2xl">
        {movie.title}
      </div>
    </div>
  );
}

export default MoviesCard;

//https://api.themoviedb.org/3/movie/popular?api_key=ac7b85d24ff2d21eca1b9a59e14492d6&language=en-US&page=1
