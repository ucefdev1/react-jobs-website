import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-xl font-bold">UCEF JOBS</h2>
            <p>&copy; 2024 Ucef Jobs. All rights reserved.</p>
          </div>
          <div className="text-center md:text-right">
            <ul className="list-none flex justify-center md:justify-end space-x-6">
              <li>
                <a href="/" className="hover:text-gray-400">Home</a>
              </li>
              <li>
                <a href="/jobs" className="hover:text-gray-400">Jobs</a>
              </li>
              <li>
                <a href="/add-job" className="hover:text-gray-400">Add Job</a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="mt-4 text-center">
          <p>Follow us on:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
