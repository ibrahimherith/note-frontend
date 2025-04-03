import React from "react";

const CardFooter = ({ info, link, linkinfo }) => {
  return (
    <div className="w-full space-y-4">
      <hr className="border-gray-200" />
      <div className=" w-full">
        <p className="mb-2 text-center text-sm">Au ingia kwa:</p>
        <button className="flex w-full items-center justify-center p-2 bg-white border border-gray-300 text-sm text-gray-900 rounded-lg">
          <img src="/assets/images/icon-google.svg" alt="Google" />
          <span className="ml-2 font-semibold">Google</span>
        </button>
      </div>
      <div className="text-center text-sm">
        {info}
        <a href={link} className="font-semibold">
          {linkinfo}
        </a>
      </div>
    </div>
  );
};

export default CardFooter;
