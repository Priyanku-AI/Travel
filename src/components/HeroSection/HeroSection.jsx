import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function HeroSection() {
  return (
    <div className="absolute text-white top-32">
      <h1
        className="text-4xl font-bold mt-20 ml-50"
        style={{ fontFamily: "'Lemon', serif" }}
      >
        Find Your Next Adventure
      </h1>
      <div className="relative">
        <span className="absolute mt-2 left-92 top-1/2 transform -translate-y-1/2 text-white z-10">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <input
          type="text"
          placeholder="Search for destinations, experiences, or packages.."
          className="w-1/2 pl-8 pr-2 py-2 mt-4 ml-90 rounded-full bg-white/20 backdrop-blur-md border border-blue-500 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 shadow-[0_0_10px_#3b82f6,0_0_20px_#3b82f6]"
        />

        {/* <input
          type="text"
          placeholder="Search for destinations, experiences, or packages..."
          className="w-1/2 p-3 mt-4 ml-90 rounded-md bg-white/20 backdrop-blur-md border border-white/20 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
        /> */}
      </div>
      <div className="absolute left-0 rounded-full w-14 h-14 border border-white bg-white/20 flex items-center justify-center mt-6"> 
        <FontAwesomeIcon icon={faPlay} className="text-white text-xl" />
      </div> 
    </div>
  );
}

export default HeroSection;
