// Sticks only second part of navbar

import React, {useState} from  "react";
import Logo from "../../images/Logo.jpg"
import Pup from "../../images/Pup.jpeg"
import Pup_photo from "../../images/Pup_photo.png"
import Alumni_assoc from "../../images/Alumni_assoc.png"
import { BsFacebook, BsSearch} from "react-icons/bs"
import { RiEarthFill } from "react-icons/ri"
// import { AiFillTwitterCircle, AiFillLinkedin} from "react-icons/ai"
// import { TiSocialYoutubeCircular } from "react-icons/ti"
// import { ImMail4 } from "react-icons/im"
// import { BiChevronDown } from "react-icons/bi"
  
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Link } from "react-router-dom";
import alumni from "../../images/alumni.jpeg"


function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  };


const NavSm = () => {
};
const NavMd = () => {
    return (
        <>
        <div className="flex items-center gap-1">
            <div className="w-24 h-24">
            <img src= {Pup_photo} alt="Main logo" className="w-full h-full"  />
            </div>
            <div className="w-40 h-24">
                <img src= {Alumni_assoc} alt="Alumni association" className="w-full h-full" />
            </div>
        </div>
        </>
    )
};
function NavLg() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between w-full pb-3 px-3">
        <Link to={'/'}>
          <div className="flex gap-0.5">

            <div className="w-50 h-36">
              <img src={Logo} alt="logo" className="w-full h-full" />
            </div>
            <div className="w-50 h-36">
              <img src={alumni} alt="logo" className="w-full h-full" />
            </div>
          </div>
        </Link>


        <div className=" flex ml-14 ">
          <div className="w-50 h-36 ">
            <img src={Pup} alt="logo" className="w-full h-full" />
          </div>
          <div className="w-40 h-36  ">
            <img src={Pup_photo} alt="logo" className="w-full h-full" />
          </div>
        </div>
      </div>

      <div className="flex sticky  z-[10] top-0 left-0  items-center justify-around py-4   bg-footercolor-800 w-full h-12">
        {/* <div className="text-white opacity-0"> <BsSearch  class/> </div> */}
        <div className="flex text-white  items-center justify-center gap-10">

          <Link to={`/signup`}>
            <h4 className="flex items-center">Become a Member (ਮੈਂਬਰ ਬਣੋ)</h4>
          </Link>

          <Menu as='div' className='relative inline-block text-left'>
            <Menu.Button className="inline-flex">Home(ਘਰ)<ChevronDownIcon className="-mr-1 mt-1 h-5 w-5" /></Menu.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-100'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-left absolute z-40 left-0 mt-2 w-56  rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={"/"}
                        className={classNames(
                          active
                            ? 'bg-gray-200 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Home(ਘਰ)
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={"/aims"}
                        className={classNames(
                          active
                            ? 'bg-gray-200 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Aims and Objectives(ਮੰਤਵ ਅਤੇ ਉਦੇਸ਼)
                      </Link>
                    )}
                  </Menu.Item>


                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-200 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Duties(ਕਰਤੱਵ)
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          {/*
                      <Link to={"/duties"}>
                          <h4 className="flex items-center"> Duties </h4>
                        </Link> */}

          {/*<Menu as='div' className='relative inline-block text-left'>
              <Menu.Button className="inline-flex">Events <ChevronDownIcon  className="-mr-1 mt-1 h-5 w-5" /></Menu.Button>
              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-100'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='origin-top-left absolute z-40 left-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none'>
                  <div className='py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active
                              ? 'bg-gray-200 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          All Events
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active
                              ? 'bg-gray-200 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Event Calendar
                        </a>
                      )}
                    </Menu.Item>
  
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active
                              ? 'bg-gray-200 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Event Recordings
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
                  
  
                   */}
          <Link to={`/projects`}>
            <h4 className="flex items-center"> Projects(ਪ੍ਰੋਜੈਕਟ) </h4>
          </Link>
          {/* <Menu as='div' className='relative inline-block text-left'>
             <Menu.Button className="inline-flex">Projects <ChevronDownIcon  className="-mr-1 mt-1 h-5 w-5" /></Menu.Button>
             <Transition
               as={Fragment}
               enter='transition ease-out duration-100'
               enterFrom='transform opacity-0 scale-95'
               enterTo='transform opacity-100 scale-100'
               leave='transition ease-in duration-100'
               leaveFrom='transform opacity-100 scale-100'
               leaveTo='transform opacity-0 scale-95'
             >
               <Menu.Items className='origin-top-left absolute z-40 left-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none'>
                 <div className='py-1'>
                   <Menu.Item>
                     {({ active }) => (
                       <Link
                         to={"/projects"}
                         className={classNames(
                           active
                             ? 'bg-gray-200 text-gray-900'
                             : 'text-gray-700',
                           'block px-4 py-2 text-sm'
                         )}
                       >
                        Upcoming
                       </Link>
                     )}
                   </Menu.Item>
                   <Menu.Item>
                     {({ active }) => (
                       <Link
                         to={"/projects"}
                         className={classNames(
                           active
                             ? 'bg-gray-200 text-gray-900'
                             : 'text-gray-700',
                           'block px-4 py-2 text-sm'
                         )}
                       >
                      Present
                       </Link>
                     )}
                   </Menu.Item>
                   <Menu.Item>
                     {({ active }) => (
                       <Link
                         to={"/projects"}
                         className={classNames(
                           active
                             ? 'bg-gray-200 text-gray-900'
                             : 'text-gray-700',
                           'block px-4 py-2 text-sm'
                         )}
                       >
                       Past
                       </Link>
                     )}
                   </Menu.Item>
                   </div>
               </Menu.Items>
             </Transition>
           </Menu> */}

          <Link to={`/terms`}>
            <h4 className="flex items-center">Contribute  (ਯੋਗਦਾਨ ਪਾਓ)</h4>
          </Link>

          {/* <Menu as='div' className='relative inline-block text-left'>
            <Menu.Button className="inline-flex">Give Back <ChevronDownIcon  className="-mr-1 mt-1 h-5 w-5" /></Menu.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-100'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
                
              <Menu.Items className='origin-top-left absolute z-40 left-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={"/terms"}
                        className={classNames(
                          active
                            ? 'bg-gray-200 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Contribute Now
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-200 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Contributors
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu> */}

          <Link to={`/search`}>
            <h4 className="flex items-center"> Search(ਖੋਜ) </h4>
          </Link>
          <Link to={`/signin`}>
            <h4 className="flex items-center">LogIn (ਲਾਗਿਨ)</h4>
          </Link>


          <Menu as='div' className='relative inline-block'>
            <Menu.Button><RiEarthFill className="text-white text-3xl mt-1  inline-block " /><span className="pl-1">Language(ਭਾਸ਼ਾ)</span></Menu.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-100'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-left absolute z-40 left-0 mt-2 w-24 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={"/"}
                        className={classNames(
                          active
                            ? 'bg-gray-200 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        ਪੰਜਾਬੀ
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={"/home"}
                        className={classNames(
                          active
                            ? 'bg-gray-200 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        English
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

      </div>


    </>
  );
} 

const Navbar = () => {
  return (
    <>
    {/* <nav className="sticky block z-[999] top-0 left-0">
        <div className="lg:hidden">
            <NavMd />
        </div>
        <div className="hidden lg:flex">
            <NavLg className="hidden lg:flex"/>
        </div>
    </nav> */}
    <NavLg className="hidden lg:flex"/>

    

    
    </>
  );
};

export default Navbar; 