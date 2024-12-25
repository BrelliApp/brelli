import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  linkClassName?: string;
}

export const Logo = ({ className = "h-32 md:h-36", linkClassName }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center space-x-2 ${linkClassName}`}>
      <img 
        src="/lovable-uploads/932df905-6d68-470b-ad5a-ca1c810ecc26.png" 
        alt="Brella Logo" 
        className={className}
      />
    </Link>
  );
};