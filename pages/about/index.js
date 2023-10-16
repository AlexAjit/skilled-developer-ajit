import React, { useState } from "react";

import Typewriter from 'typewriter-effect';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import {BsArrowRight} from 'react-icons/bs'

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
      {
        title: 'Web3',
      },
    ],
  },
  {
    title: 'Education',
    info: [
      {
        title: 'University',
        stage: 'Mumbai University',
      },
      {
        title: 'Course',
        stage: 'Bachlore of computer science in inforamtion technology',
      },
      {
        title: 'Grades',
        stage: 'A'
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Frontend Developer - QuickWeb Technologies',
        stage: '2021 - 2022',
      },
      {
        title: 'Volunterring at - BrowserStack and Web3Carnival',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - Petauve',
        stage: '2023 - Ongoing',
      },
    ],
  },
  // {
  //   title: 'credentials',
  //   info: [
  //     {
  //       title: 'Web Development - ABC University, LA, CA',
  //       stage: '2011',
  //     },
  //     {
  //       title: 'Computer Science Diploma - AV Technical Institute',
  //       stage: '2009',
  //     },
  //     {
  //       title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
  //       stage: '2006',
  //     },
  //   ],
  // },
];

//components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

//framer 
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';
import { icons } from "react-icons";

//counters 
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return(
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div 
      variants={fadeIn('right', 0.2)} 
      initial="hidden" 
      animate="show" 
      exit="hidden" 
      className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/*text*/}
          <div className='flex-1 flex flex-col justify-center'>
            <motion.h2 
            className="h2 flex justify-center"
            variants={fadeIn('right', 0.2)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            >
              Skilled   <motion.span className="text-accent justify-center">
        <h1 className="h1">
          <Typewriter 
          options={{
            strings: [
              "Developer",
              "Hacker", 
              "Coder",
            ],
            autoStart: true,
            loop: true,
          }}
          />
        </h1>
        </motion.span>
            </motion.h2>
            <motion.h2 
            className="h2 flex"
            variants={fadeIn('right', 0.2)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" >Developing a strong applications.</motion.h2>
            <motion.p 
             variants={fadeIn('right', 0.4)} 
             initial="hidden" 
             animate="show" 
             exit="hidden" 
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
              10 years ago, I began freelancing as a edveloper. Since than, I've done remote work fro agencies, counsulted for startups, and collaborated on digital products for business and consumer use.
            </motion.p>
            {/* counters */}
            <motion.div 
             variants={fadeIn('right', 0.6)} 
             initial="hidden" 
             animate="show" 
             exit="hidden" 
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
              <div className="flex flex-1 xl:gap-x-6">
              <button className='btn rounded-full border border-white/50 max-w-[230px] px-10 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
                <span className='group-hover:-tra nslate-y-[120%] group-hover:opacity-0 transition-all duration-300'>
                  Let's connect
                </span>
                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
              </button>
                {/* experience */}
                {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={10} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Years of experience
                  </div>
                </div> */}
                {/* clients */}
                {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={250} duration={5} /> +
                  </div>
                  <div className="text-as uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Satisfied clients
                  </div>
                </div> */}
                {/*Projects*/}
                {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={450} duration={5} /> +
                  </div>
                  <div className="text-as uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Finished projects
                  </div>
                </div> */}
                {/*awards*/}
                {/* <div className="relative flex-1">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={8} duration={5} /> +
                  </div>
                  <div className="text-as uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Winning awards
                  </div>
                </div> */}
              </div>
            </motion.div>
          </div>
        {/*info*/}
          <motion.div 
           variants={fadeIn('left', 0.4)} 
           initial="hidden" 
           animate="show" 
           exit="hidden" 
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
            <div className="flex gap-x-4 xl:gap-x-18 mx-auto xl:mx-0 mb-4">
              {aboutData.map((item, itemIndex) => {
                return (
                  <div 
                  key={itemIndex} 
                  className={` ${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`} 
                  onClick={() => setIndex(itemIndex)}
                  >
                  {item.title}
                  </div>
                ); 
              })}
            </div>

            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-center">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div className="text-2xl text-white">{icon}</div>
                      );
                    })}
                  </div>
                </div>
              )
            })}
          </div>
          </motion.div>
      </div>
    </div>
  )
};

export default About;
