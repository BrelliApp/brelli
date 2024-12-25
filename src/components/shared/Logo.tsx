import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  linkClassName?: string;
}

export const Logo = ({ className = "h-32 md:h-36", linkClassName }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center space-x-2 ${linkClassName}`}>
      <img 
        src="/lovable-uploads/85386435-d126-4d61-a198-c5f18c09a915.png" 
        alt="Brelli Logo" 
        className={className}
      />
    </Link>
  );
};