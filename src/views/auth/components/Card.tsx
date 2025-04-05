import { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-[540px] h-fit p-4 py-10 mx-4 bg-white flex flex-col items-center space-y-4 rounded-lg md:p-8 md:py-12 lg:p-12 lg:mx-0">
      {children}
    </div>
  );
};

export default Card;
