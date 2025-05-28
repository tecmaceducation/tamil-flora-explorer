
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">E-Flora Tamil Nadu</h3>
            <p className="text-green-200 text-sm">
              A comprehensive digital database of flowering plants, trees, and shrubs native to Tamil Nadu.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li><Link to="/plants" className="hover:text-white">Browse Plants</Link></li>
              <li><Link to="/glossary" className="hover:text-white">Glossary</Link></li>
              <li><Link to="/help" className="hover:text-white">Search Guide</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">About</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li><Link to="/about" className="hover:text-white">Project Info</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Account</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li><Link to="/login" className="hover:text-white">Login</Link></li>
              <li><Link to="/register" className="hover:text-white">Register</Link></li>
              <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-6 text-center text-sm text-green-200">
          <p>&copy; 2024 E-Flora Tamil Nadu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
