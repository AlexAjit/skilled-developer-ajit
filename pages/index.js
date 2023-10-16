//next image
import Image from "next/image";

//components 
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

//FRAMER MOTION 
import {motion} from 'framer-motion';

//variants 
import {fadeIn} from '../variants';

import Typewriter from 'typewriter-effect';

const Home = () => {
  return <div className="bg-primary/60 h-full">
    {/* Text */}
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
        {/* title */}
        <motion.h1 
         variants={fadeIn ('down', 0.4)} 
         initial="hidden" 
         animate="show" 
         exit="hidden"
        className="h1">
          Hi, Here Ajit <br />
        </motion.h1>
        <motion.span className="text-accent">
        <h1 className="h1">
          <Typewriter 
          options={{
            strings: [
              "React JS Developer",
              "Next JS Developer", 
              "Full Stack Developer",
              "Web3 Developer",
              "Software Developer",
              "Gen AI"
            ],
            autoStart: true,
            loop: true,
          }}
          />
        </h1>
        </motion.span>
        {/* Subtitles */}
        <motion.p 
         variants={fadeIn ('down', 0.3)} 
         initial="hidden" 
         animate="show" 
         exit="hidden"
        className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
          I'm driven by a deep passion for software development and actively contribute to open-source projects. In addition to my academic pursuits, I'm actively engaged in community building as a volunteer at Web3 Carnival and BrowserStack....
        </motion.p>
        {/* btn */}
        <motion className="flex justify-center xl:hidden relative">
          <ProjectsBtn />
        </motion>
        <motion.div 
        variants={fadeIn ('down', 0.4)} 
        initial="hidden" 
        animate="show" 
        exit="hidden"
        className="hidden xl:flex">
          <ProjectsBtn />
        </motion.div>
      </div>
    </div>
    {/* image */}
    <div className="w-[1200px] h-full absolute right-0 bottom-0">
      {/*bg img */}
      <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-x-0"></div>
      {/*particles */}
      <ParticlesContainer />
      {/* avatar img*/}
      <motion.div 
      variants={fadeIn ('up', 0.5)} 
      initial="hidden" 
      animate="show" 
      exit="hidden"
      transition={{duration:1, ease: 'easeInOut'}}
      className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
        <Avatar />
      </motion.div>
    </div>
  </div>;
};

export default Home;
