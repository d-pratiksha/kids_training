import Link from 'next/link';

const Header = () => {
  return (
    <header className="relative bg-[#FFFFFF]">
      <div className="relative flex items-center p-3 bg-white shadow-md">
        {/* Left Side (Optional Logo/Brand) */}
        <div className="flex-grow">
          <div className="text-xl font-bold"></div>
        </div>
        
        {/* Centered Navigation */}
        <nav className="flex-grow flex justify-center">
          <ul className="flex space-x-12 font-bold">
            <li>
              <a href="#" className="text-black hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:underline">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Side (Buttons) */}
        <div className="flex space-x-4 font-bold">
          <button className="hover:underline">Join as teacher</button>
          <button className="hover:underline">Log in</button>
          <button className="bg-[#FDCE29] font-bold py-2 px-4 rounded hover:bg-yellow-600">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

