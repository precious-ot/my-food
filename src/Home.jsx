import React from "react";
import { useState } from "react";
import background from './Assets/background.jpg'
import Menu from './menu.jsx'
import { Link } from 'react-router-dom';

export default function Home(url){
    const [menuBar, setMenuBar] = useState(false);
    const [nav, setNav] = useState(true);
    const [menu, setMenu] = useState(false);
    const [selected, setSelected] = useState();
    const [openMenu, setOpenMenu] = useState(true);
    const [closeMenu, setCloseMenu] = useState(false);

    const handleMenuBar = () => {
         setMenuBar(true)
         setNav(false)
         setOpenMenu(false)
         setCloseMenu(true)
    }

    const closeMenuBar = () => {
        setMenuBar(false)
        setOpenMenu(true)
        setCloseMenu(false)
    }
    
    return(
        <div className="grid bg-cover bg-center " style={{backgroundImage: `url(${background})`}}>
            <div className="px-5 pt-5 pb-10">
            <div className="block sm:flex sm:justify-end">
                <div className="grow-1 text-start sm:hidden">
                    {openMenu &&
               <button onClick={handleMenuBar}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
               </button>
            }
        {closeMenu &&
        <button onClick={closeMenuBar}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
              </svg>
              </button>
        }
               </div>
                {nav &&
                    <ul className="hidden sm:flex">
                    <li className="text-white py-3 hover:bg-indigo-950 ps-4 border-b border-zinc-500 sm:border-0 rounded-t-lg sm:ps-0 hover:text-white sm:hover:bg-transparent sm:py-0 font-semibold pe-10 sm:hover:text-blue-300" key={Option}><Link to={"/Home"} className="cursor-pointer">HOME</Link></li>
                    <li className="text-white py-3 hover:bg-indigo-950 ps-4 border-b border-zinc-500 sm:border-0 sm:ps-0 hover:text-white sm:hover:bg-transparent sm:py-0 font-semibold pe-10 sm:hover:text-blue-300" key={Option}><Link to={"/menu"} className="cursor-pointer">MENU</Link></li>
                    <li className="text-white py-3 hover:bg-indigo-950 ps-4 rounded-b-lg sm:ps-0 hover:text-white sm:hover:bg-transparent sm:py-0 font-semibold pe-10 sm:hover:text-blue-300" key={Option}><Link to={"/contact"} className="cursor-pointer">CONTACT</Link></li>
                </ul>
                }
               {menuBar &&
                <div className="grid mt-3 block text-start bg-slate-900 rounded-lg">
                    <Link to={"/Home"} key={Option} className="cursor-pointer text-white py-3 hover:bg-slate-950 ps-4 border-b border-zinc-500 sm:border-0 rounded-t-lg sm:ps-0 hover:text-white sm:hover:bg-transparent sm:py-0 font-semibold w-full pe-10 sm:hover:text-blue-300">HOME</Link>
                    <Link to={"/menu"} key={Option} className="text-white py-3 hover:bg-slate-950 ps-4 border-b border-zinc-500 sm:border-0 sm:ps-0 hover:text-white sm:hover:bg-transparent sm:py-0 font-semibold pe-10 sm:hover:text-blue-300 cursor-pointer">MENU</Link>
                    <Link to={"/contact"} key={Option} className="cursor-pointer text-white py-3 hover:bg-slate-950 ps-4 rounded-b-lg sm:ps-0 hover:text-white sm:hover:bg-transparent sm:py-0 font-semibold pe-10 sm:hover:text-blue-300">CONTACT</Link>
                </div>
                }
            </div>
            <div className="my-auto grid mt-30 py-4">
               <div className="place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="darkred" d="m5.44 7.96l.52-.53c.58-.58 1.54-.58 2.14.04l.02.03c.49.5 1.14.74 1.85.81c.97.09 1.91.61 2.53 1.55c.68 1.08.67 2.52-.04 3.59a3.322 3.322 0 0 1-5.18.55c-.56-.55-.88-1.26-.96-2c-.08-.73-.37-1.42-.88-1.93c-.58-.57-.58-1.53 0-2.11M9.64 16c-1.17 0-2.26-.45-3.07-1.28c-.7-.72-1.14-1.62-1.25-2.6c-.03-.3-.12-.69-.36-1.05C4.36 11.9 4 12.9 4 14c0 1.64.8 3.09 2.03 4H19v-1c0-3.6-2.39-6.65-5.66-7.65c.89 1.4.87 3.27-.04 4.65c-.8 1.25-2.18 2-3.66 2m5.14-8.44h1.27c.87 0 1.63.61 1.63 1.7V10h1.25V9c0-1.5-1.33-2.64-2.88-2.64h-1.27c-.83 0-1.54-.82-1.54-1.66s.71-1.46 1.54-1.46V2C13.24 2 12 3.24 12 4.78s1.24 2.78 2.78 2.78M4.5 7.55c.06-.1.14-.2.23-.3l.52-.52c.09-.09.19-.16.29-.23L4.13 5.07c.14-.27.09-.62-.13-.85a.767.767 0 0 0-1.07 0c-.14.14-.21.31-.22.49c-.18.01-.35.08-.49.22c-.29.29-.29.77 0 1.07c.23.22.57.27.85.13L4.5 7.55m13.89-3.16c.51-.51.83-1.2.83-1.97h-1.25c0 .83-.7 1.53-1.53 1.53v1.24c1.86 0 3.32 1.52 3.32 3.38V11H21V8.57a4.61 4.61 0 0 0-2.61-4.18M5 21h14c1.11 0 2-.89 2-2H3a2 2 0 0 0 2 2Z"/>
                </svg>
                </div> 
                <div className="text-white place-items-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-5 mt-0">The Luxury Resturant</h1>
                    <p className="font-semibold">Adventure of Good Food & Great Vibes!</p>
                </div>
                <div className="place-items-start mt-30 text-start max-w-xl mb-20">
                    <p className="text-slate-300 font-semibold text-lg">Join us in our cozy dining room and experience the essence of farm-to-table dining in every bite. Welcome to The Luxury resturant - where every meal is a celebration of the harvest</p>
                </div>
            </div>
            </div>
            <div className="text-white text-center bg-slate-950 fixed py-4 bottom-0 w-full left-0">
                &copy; {new Date().getFullYear()} The Luxury Resturant. All rights reserved.
            </div>
            
        </div>
    )
}