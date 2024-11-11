import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { RiCompassDiscoverFill  } from "react-icons/ri";
import { PiMusicNotesPlusBold } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { SlPlaylist } from "react-icons/sl";
import { LogoPath } from './Variables';



function Navbar() {
    const links = [
        {
            "title": "Home",
            "link": "/home",
            "icon": <FaHome />
        },
        {
            "title": "Discover",
            "link": "/discover",
            "icon": <FaMusic />
        },
        {
            "title": "Albums",
            "link": "/albums",
            "icon": <FaMicrophone />
        },
        {
            "title": "Podcast",
            "link": "/podcast",
            "icon": <RiCompassDiscoverFill />
        },
    ]

  return (
    <div className='bg-zinc-800 w-1/5 h-screen p-4'>
    
          <img src={LogoPath} className='mx-auto w-16' alt='logo' />
       <div>
            <ul >
                {links.map((item,key)=> (
                    <Link key={key} className=' mt-2 py-2 px-2 flex items-center hover:bg-gray-700 transition-all space-x-2' to={item.link}> 
                        {item.icon}
                        <p> {item.title} </p> 
                    </Link>
                ))}
            </ul>
       </div>

       <div className='mt-10 '>
            <h1 className='mb-4'> LIBRARY</h1>  
            <ul >
                <li className='mt-4 mb-5 items-center flex space-x-3'> 
                    <PiMusicNotesPlusBold /> 
                    <p>Recently added</p>
                </li>
                <li className='mt-4 mb-5 items-center flex space-x-3'> 
                    <FaHeart />
                    <p> Favorite Songs </p>
                </li>
            </ul>
        </div>

        <div className='mt-10 mb-5 '>
                <h1 className='mb-4'>   PLAYLIST   </h1>
                <ul>
                    <li className='mt-4 mln-5 items-center flex space-x-3'>
                        <SlPlaylist />
                        <p>playlist title</p>
                    </li>
                    <li className='mt-4 mln-5 items-center flex space-x-3'>
                        <SlPlaylist />
                        <p>playlist title</p>
                    </li>
                </ul>
        </div>
    </div>
    )

}

export default Navbar