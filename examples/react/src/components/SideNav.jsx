import { Fragment, useEffect, useState, useContext} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AiOutlineHome, 
         AiOutlineClose, 
         AiOutlineTeam,
         AiOutlineDeploymentUnit} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { AuthContext } from '../context/authContext';
import AjaxLoader from './AjaxLoader';
import UserDropdown from "./UserDropdown";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SideNav() {
  const { getUser } = useContext(AuthContext)
  const user = getUser()
  console.log("user: ", user);
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [navigation, setNavigation] = useState([]);
  const menuList = [
    { index: 0, object: 'organization', permission: 'read', name: 'Organization', to: "/dashboard", icon: AiOutlineHome },
    ...(user?.isAdmin
      ? [{ index: 1, object: 'user', permission: 'read', name: 'Users', to: '/users', icon: AiOutlineTeam }]
      : []),
    { index: 2, object: 'integration', permission: 'read', name: 'Integrations', to: '/integrations', icon: AiOutlineDeploymentUnit },
  ]
  useEffect(() => {
    setNavigation(menuList);
  }, []);

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                      <span className="sr-only">Close sidebar</span>
                      <AiOutlineClose className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                  <div className="flex h-16 shrink-0 items-center">
                    <a href="/" className="pl-1.5 pt-0.5">
                      <span className=" text-gray-100 text-2xl">OEM+</span>
                    </a>
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                            {navigation.sort((a, b) => (a.index > b.index) ? 1 : -1).map((item) => (
                              <li key={item.to} className="group">
                                <NavLink key={item.name} to={item.to} className={({isActive}) => (isActive ?'text-gray-200 bg-gray-600 bg-opacity-60 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold' : 'group-hover:bg-gray-600 group-hover:text-gray-200 group-hover:bg-opacity-30 text-gray-400 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold')} >
                                    <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                    {item.name}
                                </NavLink>
                              </li>
                            ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-700">
          <div className="flex h-16 shrink-0 items-center">
            <a href="/" className="pl-1.5 pt-0.5">
              <span className=" text-gray-100 text-2xl">OEM+</span>
            </a>
          </div>
          <nav className="flex flex-1 flex-col pt-0 mt-0">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {!isLoading && navigation.length > 0 && (
                    <>
                      {navigation.map((item) => (
                        <li key={item.to} className="group">
                          <NavLink key={item.name} to={item.to} className={({isActive}) => (isActive ?'text-gray-200 bg-gray-600 bg-opacity-60 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold' : 'group-hover:bg-gray-600 group-hover:text-gray-200 group-hover:bg-opacity-30 text-gray-400 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold')} >
                              <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                              {item.name}
                          </NavLink>
                        </li>
                      ))}
                    </>
                  )}
                  {isLoading && (
                    <div className="flex justify-center items-center">
                      <AjaxLoader color="bg-boomi-purple" opac_one="opacity-50" opac_two="opacity-75" opac_three="" />
                    </div>
                  )}
                </ul>
              </li>
              <li className="-mx-6 mt-auto pr-2">
                <UserDropdown/>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}