import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container shadow-md bg-[#F5F5F5] sticky z-50  mx-auto px-10 mb-8">
      <div className=" w-full inline-block  py-8">
        <div className="md:float-left block">
          <Link href="/">
          <div className="relative flex items-center gap-1 h-8 w-12 cursor-pointer ">  
                                <img src="/images/logo.png"/>
                                <span className="font-body text-grey text-xl hidden md:inline-flex ">
                                    JaankariKtm
                                </span>

                                </div>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents text-grey">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-[#213D49] font-body capitalize text-xl ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
