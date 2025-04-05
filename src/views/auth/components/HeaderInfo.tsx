import React from "react";

const HeaderInfo = ({ title, subtitle }) => {
  return (
    <div className=" text-center">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm">{subtitle}</p>
    </div>
  );
};

export default HeaderInfo;
