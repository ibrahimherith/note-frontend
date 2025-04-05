import Logo from "./Logo";
import HeaderInfo from "./HeaderInfo";

type CardHeaderProps = {
  title: string;
  subtitle: string;
};

const CardHeader = ({ title, subtitle }: CardHeaderProps) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Logo />
      <HeaderInfo title={title} subtitle={subtitle} />
    </div>
  );
};

export default CardHeader;
