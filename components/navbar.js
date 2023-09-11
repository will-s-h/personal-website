import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navBarPages = [
    ['Home', '/'],
    ['Projects', '/projects'],
    ['Writing', '/writing'],
]

export default function NavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const clickHamburger = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <header className="w-full">
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link href="/" className="flex items-center text-black dark:text-white" style={{textDecoration: 'none'}}>
                        <Image
                            priority
                            src="/images/profile.jpg"
                            height={100}
                            width={100}
                            className= "rounded-full p-3"
                            alt="profile"
                        />
                        <span className="self-center text-xl font-extralight whitespace-nowrap font-sans">William Huang</span>
                    </Link>
                    <div className="flex items-center">
                        <button onClick={clickHamburger} data-collapse-toggle="mobile-menu-2" type="button" className="relative inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg mlg:hidden focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>

                            <div id="dropdownAvatar" className={`absolute right-0 top-11 z-10 ${isNavOpen ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-30 dark:bg-gray-700 dark:divide-gray-600`}>
                                <div className="text-sm text-black dark:text-white w-max flex flex-col text-center">
                                    {navBarPages.map(([title, url], i) => (
                                        <Link key={i} href={url} className={`${i == 0 ? "rounded-t-lg" : (i == navBarPages.length - 1 ? "rounded-b-lg" : "")} px-7 py-2 text-black dark:text-white font-semibold hover:bg-slate-200 dark:hover:bg-slate-600`} style={{textDecoration: 'none'}}>
                                            {title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </button>
                    </div>
                    <nav className="hidden mlg:flex mlg:order-1" id="mobile-menu-2">
                        {navBarPages.map(([title, url], i) => (
                            <Link key={i} href={url} className="rounded-lg px-7 py-2 text-black dark:text-white font-semibold group transition duration-300 hover:scale-110" style={{textDecoration: 'none'}}>
                                {title}
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-red">
                                </span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </nav>
        </header>
    );
}