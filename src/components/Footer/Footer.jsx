import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <div className="text-white absolute bottom-5 left-11 flex gap-4">
            <FaFacebookF className="text-xl" />
            <FaInstagram className="text-xl" />
            <FaYoutube className="text-xl" />
            <FaSquareXTwitter className="text-xl" />
        </div>
    )
}

export default Footer
