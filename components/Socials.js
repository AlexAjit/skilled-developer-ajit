//links 
import Link from "next/link";

//icons 
import { RiGithubLine, RiLinkedinLine, RiMediumLine, RiDribbbleLine, RiBehanceLine, RiPinterestLine } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
    <Link href={''} className="hover:text-accent transition-all duration-300">
    <RiGithubLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
    <RiLinkedinLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
    <RiMediumLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
    <RiDribbbleLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
    <RiBehanceLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
    <RiPinterestLine />
    </Link>
    </div>
  )
};

export default Socials;
