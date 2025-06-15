import React, { use, useRef } from 'react';

function Navbar() {

    const navRef = useRef(null);
    const linksRef = useRef([]);
    const contactRef = useRef(null);
  return (
    <nav 
    ref={navRef} 
    className='fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2'
    >
        <div className='flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-8xl'
        >
            {["home","services", "about", "work", "contact"].map((section, index) => (
                <div key={index} ref={(el) => (linksRef.current[index] = el)}>
                    <a className='transition-all duration-300 cursor-pointer hover:text-white'>
                        {section}
                    </a>
                </div>
            )
            )}
        </div>

        <div 
        ref={contactRef}
        className='flex flex-col flex-wrap justify-between gap-8 md:flex-row'>
            <div className='font-light'>
                <p 
                className='tracking-wider text-white/50'
                >
                    Email
                </p>
                
                <p
                className='text-xl tracking-widest lowercase text-pretty'       
                >
                    IamSammadIjaz@gmail.com
                </p>
            </div>
        </div>

    </nav>
  );
}

export default Navbar;
