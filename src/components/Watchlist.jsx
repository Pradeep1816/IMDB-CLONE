import React, { useState } from "react";
import genres from "../Utility/Genre";
function Watchlist({ watchList, handleRemoveMovie }) {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <>
      <div className="m-5 h-[3rem] text-white flex flex-wrap justify-center mt-10">
        <div className="mx-5 w-[8rem] hover:cursor-pointer rounded flex items-center justify-center bg-yellow-600">
          Action
        </div>
        <div className="mx-5 w-[8rem] hover:cursor-pointer rounded flex items-center justify-center bg-yellow-600">
          Comedy
        </div>
        <div className="mx-5 w-[8rem] hover:cursor-pointer rounded flex items-center justify-center bg-yellow-600">
          Advanture
        </div>
      </div>

      <div className="flex justify-center my-12">
        <input
          className="p-3 w-[20rem] rounded bg-gray-300 outline-none"
          type="text"
          placeholder="Search Movies"
          onChange={handleSearch}
          value={search}
        />
      </div>

      <div className="overflow-hidden text-white flex items-center">
        <table className="w-full text-center">
          <thead className=" border-b-2">
            <tr>
              <th>Name</th>
              <th>Release Date</th>
              <th>Rating </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchList.length === 0 ? (
              <div className="ml-[300px] mt-24 w-[100%]">No Data</div>
            ) : (
              watchList
                .filter((movieObj) => {
                  return movieObj.title
                    .toLowerCase()
                    .includes(search.toLowerCase());
                })
                .map((movieObj, index) => (
                  <tr key={index} className="border-b-2">
                    <td className="flex items-center p-5">
                      <img
                        className="h-[11rem] w-[11rem]"
                        src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                      />
                      <div className="ml-5 flex flex-wrap">
                        {movieObj.title}
                      </div>
                    </td>
                    <td>{movieObj.release_date}</td>
                    <td>{movieObj.vote_average}</td>
                    <td>{Math.round(movieObj.popularity)}</td>
                    <td>{genres[movieObj.genre_ids[0]]}</td>
                    <td>
                      <span className="text-red-500 hover:cursor-pointer">
                        Delete
                      </span>
                    </td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
      </div>
      <div>Wat</div>
    </>
  );
}

export default Watchlist;
