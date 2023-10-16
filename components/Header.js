//next image 
import Image from "next/image";

//next link
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-80 w-full flex items-center px-20 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center py-8">
          {/* logo */}
          <div className="hidden">
          <Link href={'/'}>
            <Image src={'/logo4.png'} width={400} height={190} alt="" priority={true} />
          </Link>
         </div>   
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
