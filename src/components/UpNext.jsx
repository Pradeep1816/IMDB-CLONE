import React from "react";

function UpNext({ movies }) {
  return (
    <>
      <h1 className="mx-5  text-2xl text-bold text-yellow-500">Upnext</h1>
      {movies.slice(0, 3).map((movie, index) => (
        <div key={index} className="items-center flex w-[100%]">
          <div
            className="h-[120px] my-5 mx-5 w-[100px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
            }}
          ></div>
          <div className="">{movie.title}</div>
        </div>
      ))}
    </>
  );
}

export default UpNext;
