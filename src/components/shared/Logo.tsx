import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  linkClassName?: string;
}

export const Logo = ({ className = "h-32 md:h-36", linkClassName }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center space-x-2 ${linkClassName}`}>
      <img 
        src="/lovable-uploads/be9a8997-cbaa-4154-ac41-dce96076d838.png" 
        alt="Brelli Logo" 
        className={className}
      />
    </Link>
  );
};