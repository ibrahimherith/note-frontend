import React from "react";
import Logo from "./Logo";
import HeaderInfo from "./HeaderInfo";

const CardHeader = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Logo />
      <HeaderInfo title={title} subtitle={subtitle} />
    </div>
  );
};

export default CardHeader;
