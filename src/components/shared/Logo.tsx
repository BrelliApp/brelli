import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  linkClassName?: string;
}

export const Logo = ({ className = "h-32 md:h-36", linkClassName }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center space-x-2 ${linkClassName}`}>
      <img 
        src="/lovable-uploads/6f2d3831-5c77-4de5-8539-3fc416666a37.png" 
        alt="Brelli Logo" 
        className={className}
      />
    </Link>
  );
};