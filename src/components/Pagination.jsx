import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
function Pagination({ pagePrevious, pageForward, pageNo }) {
  return (
    <div className="bg-gray-900/90 text-2xl text-white w-full flex justify-center items-center ">
      <div className="hover:cursor-pointer">
        <IoMdArrowRoundBack onClick={pagePrevious} />
      </div>
      <div className="px-8">{pageNo}</div>
      <div className="hover:cursor-pointer">
        <IoMdArrowRoundForward onClick={pageForward} />
      </div>
    </div>
  );
}

export default Pagination;
