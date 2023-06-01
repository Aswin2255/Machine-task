import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky top-0 z-20">
      <nav className="bg-white border  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://www.deepnetsoft.com/" className="flex items-center">
            <img
              src="https://www.deepnetsoft.com/images/logo.png"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
          </a>
        </div>
        
      </nav>
    </div>
  );
}

export default Navbar;
