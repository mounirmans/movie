import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 p-4 mt-4">
      <div className="container mx-auto text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} MovieApp. All rights reserved.</p>
        <p>
          <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            Data provided by TMDb
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;