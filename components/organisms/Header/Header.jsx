// "use client";

// import Link from 'next/link';
// import React, { useState, useEffect, useRef } from 'react';

// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const menuRef = useRef(null);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (menuRef.current && !menuRef.current.contains(event.target)) {
//                 setIsMenuOpen(false);
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const cerrarMenu = () => setIsMenuOpen(false);

//     return (
//         <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b  border-gray-600">
//             <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//                 <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//                     <img src="./diego-aguilera-logo.svg" className="h-8" alt="diego aguilera logo"/>
//                 </a>
//                 <div className="md:order-2 md:space-x-0 rtl:space-x-reverse md:hidden">
//                     <button 
//                         data-collapse-toggle="navbar-sticky" 
//                         type="button" 
//                         className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
//                         aria-controls="navbar-sticky" 
//                         aria-expanded={isMenuOpen}
//                         onClick={toggleMenu}
//                     >
//                         {/* {isMenuOpen ? (
//                             <svg className="w-5 h-5 transition-transform transform rotate-45" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         ) : ( */}
//                             <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//                                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
//                             </svg>
//                         {/* )}  */}
//                     </button>
//                 </div> 
//                 <div 
//                     className={`items-center justify-between md:hidden w-full md:w-auto md:order-1 bg-gray-800 ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'} transition-transform duration-300 ease-in-out`} 
//                     id="navbar-sticky"
//                     ref={menuRef}
//                     style={{
//                         position: 'fixed',
//                         width: '70%',
//                         height: '100vh',
//                         top: 0,
//                         left: 0,
//                         zIndex: 1000,
//                     }}
//                 >
//                     <ul className="flex flex-col  p-4 mt-4 font-medium rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0  md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//                         <li>
//                             <Link href="/#inicio" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page" onClick={cerrarMenu}>Inicio</Link>
//                         </li>
//                         <li>
//                             <Link href="/#beneficios" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={cerrarMenu}>Beneficios</Link>
//                         </li>
//                         <li>
//                             <Link href="/#sobre-mi" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={cerrarMenu}>Sobre mi</Link>
//                         </li>
//                         <li>
//                             <Link href="/#entrenamientos" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={cerrarMenu}>Entrenamientos</Link>
//                         </li>
//                         <li>
//                             <Link href="/#sigueme" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={cerrarMenu}>Sígueme</Link>
//                         </li>
//                         <li>
//                             <Link href="/#planes" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={cerrarMenu}>Planes</Link>
//                         </li>
//                         <li>
//                             <Link href="/#contactame" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={cerrarMenu}>Contáctame</Link>
//                         </li>
//                     </ul>
//                 </div>

//                 <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
//                         <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//                             <li>
//                                 <Link href="/#inicio" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page" onClick={cerrarMenu}>Inicio</Link>
//                             </li>
//                             <li>
//                                 <Link href="/#beneficios" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={cerrarMenu}>Beneficios</Link>
//                             </li>
//                             <li>
//                                 <Link href="/#sobre-mi" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={cerrarMenu}>Sobre mi</Link>
//                             </li>
//                             <li>
//                                 <Link href="/#entrenamientos" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={cerrarMenu}>Entrenamientos</Link>
//                             </li>
//                             <li>
//                                 <Link href="/#sigueme" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={cerrarMenu}>Sígueme</Link>
//                             </li>
//                             <li>
//                                 <Link href="/#planes" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={cerrarMenu}>Planes</Link>
//                             </li>
//                             <li>
//                                 <Link href="/#contactame" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={cerrarMenu}>Contáctame</Link>
//                             </li>
//                         </ul>
//                     </div>
//             </div>
//         </nav>
//     );
// }

// export default Header;


"use client";

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach((section) => {
                if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                    setActiveSection(section.getAttribute('id'));
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="./diego-aguilera-logo.svg" className="h-8" alt="diego aguilera logo" />
                </a>
                <div className="md:order-2 md:space-x-0 rtl:space-x-reverse md:hidden">
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen}
                        onClick={toggleMenu}
                    >
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div
                    className={`items-center justify-between md:hidden w-full md:w-auto md:order-1 bg-gray-800 ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'} transition-transform duration-300 ease-in-out`}
                    id="navbar-sticky"
                    ref={menuRef}
                    style={{
                        position: 'fixed',
                        width: '70%',
                        height: '100vh',
                        top: 0,
                        left: 0,
                        zIndex: 1000,
                    }}
                >
                    <ul className="flex flex-col p-4 mt-4 font-medium rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="/#inicio" onClick={(e) => handleMenuItemClick(e, 'inicio')} className={`block py-2 px-3 ${activeSection === 'inicio' ? 'text-blue-700' : 'text-white'}`} aria-current="page">Inicio</Link>
                        </li>
                        <li>
                            <Link href="/#beneficios" onClick={(e) => handleMenuItemClick(e, 'beneficios')} className={`block py-2 px-3 ${activeSection === 'beneficios' ? 'text-blue-700' : 'text-white'}`}>Beneficios</Link>
                        </li>
                        <li>
                            <Link href="/#sobre-mi" onClick={(e) => handleMenuItemClick(e, 'sobre-mi')} className={`block py-2 px-3 ${activeSection === 'sobre-mi' ? 'text-blue-700' : 'text-white'}`}>Sobre mi</Link>
                        </li>
                        <li>
                            <Link href="/#entrenamientos" onClick={(e) => handleMenuItemClick(e, 'entrenamientos')} className={`block py-2 px-3 ${activeSection === 'entrenamientos' ? 'text-blue-700' : 'text-white'}`}>Entrenamientos</Link>
                        </li>
                        <li>
                            <Link href="/#sigueme" onClick={(e) => handleMenuItemClick(e, 'sigueme')} className={`block py-2 px-3 ${activeSection === 'sigueme' ? 'text-blue-700' : 'text-white'}`}>Sígueme</Link>
                        </li>
                        <li>
                            <Link href="/#planes" onClick={(e) => handleMenuItemClick(e, 'planes')} className={`block py-2 px-3 ${activeSection === 'planes' ? 'text-blue-700' : 'text-white'}`}>Planes</Link>
                        </li>
                        <li>
                            <Link href="/#contactame" onClick={(e) => handleMenuItemClick(e, 'contactame')} className={`block py-2 px-3 ${activeSection === 'contactame' ? 'text-blue-700' : 'text-white'}`}>Contáctame</Link>
                        </li>
                    </ul>
                </div>

                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="/#inicio" onClick={(e) => handleMenuItemClick(e, 'inicio')} className={`block py-2 px-3 ${activeSection === 'inicio' ? 'text-blue-700' : 'text-white'}`} aria-current="page">Inicio</Link>
                        </li>
                        <li>
                            <Link href="/#beneficios" onClick={(e) => handleMenuItemClick(e, 'beneficios')} className={`block py-2 px-3 ${activeSection === 'beneficios' ? 'text-blue-700' : 'text-white'}`}>Beneficios</Link>
                        </li>
                        <li>
                            <Link href="/#sobre-mi" onClick={(e) => handleMenuItemClick(e, 'sobre-mi')} className={`block py-2 px-3 ${activeSection === 'sobre-mi' ? 'text-blue-700' : 'text-white'}`}>Sobre mi</Link>
                        </li>
                        <li>
                            <Link href="/#entrenamientos" onClick={(e) => handleMenuItemClick(e, 'entrenamientos')} className={`block py-2 px-3 ${activeSection === 'entrenamientos' ? 'text-blue-700' : 'text-white'}`}>Entrenamientos</Link>
                        </li>
                        <li>
                            <Link href="/#sigueme" onClick={(e) => handleMenuItemClick(e, 'sigueme')} className={`block py-2 px-3 ${activeSection === 'sigueme' ? 'text-blue-700' : 'text-white'}`}>Sígueme</Link>
                        </li>
                        <li>
                            <Link href="/#planes" onClick={(e) => handleMenuItemClick(e, 'planes')} className={`block py-2 px-3 ${activeSection === 'planes' ? 'text-blue-700' : 'text-white'}`}>Planes</Link>
                        </li>
                        <li>
                            <Link href="/#contactame" onClick={(e) => handleMenuItemClick(e, 'contactame')} className={`block py-2 px-3 ${activeSection === 'contactame' ? 'text-blue-700' : 'text-white'}`}>Contáctame</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;