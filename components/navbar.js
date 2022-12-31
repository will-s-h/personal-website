import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
    return (
        <header class="w-full">
            <nav class="border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link href="/" class="flex items-center text-black" style={{textDecoration: 'none'}}>
                        <Image
                            priority
                            src="/images/profile.jpg"
                            height={100}
                            width={100}
                            class= "rounded-full p-3"
                            alt="profile"
                        />
                        <span class="self-center text-xl font-light whitespace-nowrap font-sans">William Huang</span>
                    </Link>
                    <div class="flex items-center">
                        <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <nav class="hidden lg:flex lg:order-1" id="mobile-menu-2">
                        {[
                            ['Home', '/'],
                            ['About', '/about'],
                            ['Projects', '/projects'],
                            ['Writing', '/posts'],
                        ].map(([title, url]) => (
                            <Link href={url} className="rounded-lg px-7 py-2 text-black font-light group transition duration-300 hover:scale-110" style={{textDecoration: 'none'}}>
                                {title}
                                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-red">
                                </span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </nav>
        </header>
    );
}