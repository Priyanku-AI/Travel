import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import {  faUser,} from "@fortawesome/free-solid-svg-icons";
// import logo from "../../assets/logo.svg";

function Header() {
  return (
    <header className="absolute top-12 left-5 right-5 z-10 flex items-center justify-between px-8">
      <h1 className="flex gap-1 text-white text-2xl font-bold tracking-wide hover:scale-120 transition-transform duration-300 cursor-pointer">
        <FontAwesomeIcon icon={faPlane} className="text-3xl" />V
        <span className="text-blue-400">Travel</span>
      </h1>
      <nav className="text-white">
        <div className="bg-white/20 backdrop-blur-md rounded-md px-20 py-3 shadow-mdborder border-white/20">
          <ul className="flex space-x-4 gap-4">
            <li className="hover:text-blue-400 cursor-pointer">
              Destinations <FontAwesomeIcon icon={faCircleChevronDown} />
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              Packages <FontAwesomeIcon icon={faCircleChevronDown} />
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              Experiences <FontAwesomeIcon icon={faCircleChevronDown} />
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              Blog <FontAwesomeIcon icon={faCircleChevronDown} />
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              My Trips <FontAwesomeIcon icon={faCircleChevronDown} />
            </li>
          </ul>
        </div>
      </nav>
      <div className="text-white text-2xl hover:text-blue-400 cursor-pointer flex gap-2">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </header>
  );
}

export default Header;
