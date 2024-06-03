import React from "react";
import { IoMdSearch } from "react-icons/io";
import { LuBookmarkPlus } from "react-icons/lu";
import Logo from "../images/imdb.png";
import { Link } from "react-router-dom";

function Navbar({ watchList }) {
  return (
    <header className="h-14 w-full flex text-white bg-stone-900 sticky top-0 z-10 ">
      <a href="/">
        <img className="h-14 ml-[50%]" src={Logo} alt="" />
      </a>

      <nav className=" h-14  items-center flex justify-around min-w-[500px] w-10/12 ml-10">
        <div className="mr-5">Menu</div>
        <div className="h-8 justify-between flex rounded-md items-center bg-white w-10/12">
          <div className="text-black ml-5">All</div>
          <input
            className="outline-0 text-black mx-1.5 grow"
            type="text"
            placeholder="Search IMdb"
          />
          <IoMdSearch className="mx-5 size-7 border-red-500 text-slate-500" />
        </div>
        <div className="ml-5">IMDbPro</div>
      </nav>
      <div className=" h-14 items-center mx-1.5 flex w-1/4 justify-evenly mr-5 min-w-96">
        <div className="w-[130px] p-2 rounded-md flex  items-center justify-evenly hover:bg-stone-800">
          <span className=" mr-[5px]">
            <LuBookmarkPlus />
          </span>
          <Link to="/watchlist">Watchlist</Link>
          {watchList.length === 0 ? (
            ""
          ) : (
            <span className="rounded-xl flex justify-center items-center text-black ml-3 h-[15px] w-[25px] bg-yellow-500">
              {watchList.length}
            </span>
          )}
        </div>
        <div>
          <Link to="/">Movielist</Link>
        </div>
        <div>Sign In</div>
        <div>Language</div>
      </div>
    </header>
  );
}

export default Navbar;
