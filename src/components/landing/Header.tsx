import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-gray-100">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/932df905-6d68-470b-ad5a-ca1c810ecc26.png" 
            alt="Brella Logo" 
            className="h-24 md:h-28" // Made logo bigger while reducing container padding
          />
        </Link>
        <div className="space-x-4">
          <Link to="/auth">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">Sign In</Button>
          </Link>
          <Link to="/auth">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;