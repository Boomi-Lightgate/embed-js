import React, { useState } from "react";
import { AiOutlineCaretDown, 
         AiOutlineCaretUp,
         AiOutlineNotification, 
         AiOutlineUser,
         AiOutlineSetting  } from "react-icons/ai";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="sticky top-0 z-50">
        <nav className="bg-boomi-black ">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex lg:flex-1">
                  <a href="/" className="pl-1.5 pt-0.5">
                    <span className=" text-gray-100 text-xl">OEM+</span>
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button type="button" className="relative flex max-w-xs items-center rounded-full text-sm text-gray-500 p-1">
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">View notifications</span>
                    <AiOutlineNotification className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <Link to="/settings" className="relative flex max-w-xs items-center rounded-full text-sm group-hover:text-gray-300 group text-gray-500 p-1">
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only group-hover:text-gray-300">View notifications</span>
                    <AiOutlineSetting className="h-6 w-6 group-hover:text-gray-300" aria-hidden="true" />
                  </Link>
                  <div className="relative">
                    <div>
                      <button type="button" className="relative flex max-w-xs items-center rounded-full text-sm text-gray-500 p-1" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <span className="absolute -inset-1.5"></span>
                        <span className="sr-only">Open user menu</span>
                        <AiOutlineUser className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="relative">
                    <button onClick={() => setIsOpen((prev) => !prev)} type="button" className="-m-1.5 flex items-center p-1.5" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                      <span className="sr-only">Open user menu</span>
                      <span className="hidden lg:flex lg:items-center">
                        <span className="ml-4 text-sm font-semibold leading-6 text-gray-300" aria-hidden="true">{props.full_name}</span>
                        {!isOpen ? (
                          <AiOutlineCaretDown className="ml-2 h-3 w-3 text-gray-200" aria-hidden="true" />
                        ) : (
                          <AiOutlineCaretUp className="ml-2 h-3 w-3 text-gray-200" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="absolute right-0 z-10 mt-2.5 w-44 origin-top-right rounded-md bg-boomi-black py-2 shadow-lg" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                        <LogoutButton title={title} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}