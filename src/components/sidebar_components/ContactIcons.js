import { BiLogoGmail } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function ContactIcons() {
  return (
    <div className="flex flex-row justify-around mt-6 w-[18rem]">
      <a
        href="mailto: amanbhagat.191@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <BiLogoGmail className="size-[1.25em] opacity-70 hover:opacity-90" />
      </a>
      <a
        href="https://www.linkedin.com/in/aman-bhagat-350a19256/"
        target="_blank"
        rel="noreferrer"
      >
        <IoLogoLinkedin className="size-[1.25em] opacity-70 hover:opacity-90" />
      </a>
      <a
        href="https://x.com/AmanBha66696817"
        target="_blank"
        rel="noreferrer"
      >
        <FaXTwitter className="size-[1.10em] opacity-70 hover:opacity-90" />
      </a>
      <a href="https://github.com/AmanAB-9162" target="_blank" rel="noreferrer">
        <FaGithub className="size-[1.10em] opacity-70 hover:opacity-90" />
      </a>
      <a
        href="https://leetcode.com/u/A_9162_B/"
        target="_blank"
        rel="noreferrer"
      >
        <SiLeetcode className="size-[1.10em] opacity-70 hover:opacity-90" />
      </a>
    </div>
  );
}
