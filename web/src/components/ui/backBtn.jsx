import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

export default function backBtn({ route }) {
  return (
    <div>
      <Link to={route}>
        <div className="flex items-center space-x-2 cursor-pointer">
          <IoArrowBack size={30} color="black" />
          <span className="text-blue-500 hover:text-blue-700 hover:underline text-lg ">
            Back
          </span>
        </div>
      </Link>
    </div>
  );
}
