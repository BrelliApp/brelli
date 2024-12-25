import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-gray-100">
      <div className="container mx-auto px-4 py-0 flex justify-between items-center h-16">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/6f2d3831-5c77-4de5-8539-3fc416666a37.png" 
            alt="Brelli Logo" 
            className="h-12 md:h-16" // Keeping the recently adjusted size
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