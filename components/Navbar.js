import {Transition } from "@headlessui/react"
import { useState } from "react"

import Link from "next/link"


function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <nav className="shadow-md w-full z-10  bg-[#F5F5F5]">
                <div className="w-full">
                    <div className="flex items-center h-20 w-full">
                        <div className="flex items-center mx-20 justify-between w-full">
                            <div className="flex justify-center items-center flex-shrink-0">
                                <div className="relative flex items-center gap-1 h-8 w-12 ">  
                                <img src="/images/logo.png"/>
                                <span className="font-body text-[#664F34] text-xl hidden md:inline-flex ">
                                    Jaankari Ktm
                                </span>

                                </div>
                              
                           
                            </div>
                            <div className="hidden md:block">
                                    <div className="ml-10 items-baseline space-x-4">
                                     
                                        <Link
                                        href="/"
                                     
                                      
                                        className="cursor-pointer  hover:bg-blue-300 font-body text-[#213D49] hover:text-white px-3 py-2 text-xl rounded-md font-medium"
                                        >
                                              Home
                                        </Link>
                                    
                                      
                                        <Link
                                        href="/about"
                                     
                                       className="cursor-pointer  hover:bg-blue-300 font-body text-[#213D49] hover:text-white px-3 py-2 text-xl rounded-md text-sm font-medium"
                                        >
                                            About
                                          
                                        </Link>
                                       
                                        <Link
                                        
                                        href="/blog"
                                      
                                        className="cursor-pointer hover:bg-blue-300 font-body text-[#213D49] hover:text-white px-3 py-2 text-xl rounded-md  font-medium"
                                        >
                                            Blog
                                        </Link>
                                        <Link
                                           href="/contact"
                                     
                                        className="cursor-pointer hover:bg-blue-300 font-body text-[#213D49] hover:text-white px-3 py-2 text-xl rounded-md  font-medium"
                                        >
                                           Contact
                                        </Link>


                                    </div>


                                </div>

                        </div>
                        <div className="mr-10 flex md:hidden">
                            <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button" 
                            className="bg-[#664F34] inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-[#213D49] focus:outline-none"
                            aria-controls="mobile-menu"
							    aria-expanded="false"
                            >

                                <span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
                                className="flex flex-col cursor-pointer space-y-8-6 px-[80px] py-2"
							>
								<Link
									href="/home"
								
									className="cursor-pointer  font-body text-[#213D49] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Home
								</Link>
								<Link
									href="/about"
								
									className="cursor-pointer font-body text-[#213D49] block px-3 py-2 rounded-md text-base font-medium"
								>
									About
								</Link>
                                <Link
									href="/blog"
								
									className="cursor-pointer font-body text-[#213D49] hover:text-white block px-3 py-2 rounded-md text-base font-medium animate-bounce"
								>
									Blog
								</Link>
                                <Link
									href="/contact"
								
									className="cursor-pointer font-body text-[#213D49] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
								Contact
								</Link>

							
							</div>
						</div>
					)}
				</Transition>
                      

                  
            </nav>
            
        </div>
    )
}

export default Navbar
