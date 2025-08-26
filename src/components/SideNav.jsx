import { Fragment, useEffect, useState, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  AiOutlineHome,
  AiOutlineClose,
  AiOutlineDeploymentUnit,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { AuthContext } from '../context/authContext';
import AjaxLoader from './AjaxLoader';
import UserDropdown from "./UserDropdown";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SideNav() {
  const { getUser } = useContext(AuthContext);
  const user = getUser();
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [navigation, setNavigation] = useState([]);

  const menuList = [
    {
      index: 0,
      object: 'organization',
      permission: 'read',
      name: 'Organization',
      to: "/dashboard",
      icon: AiOutlineHome
    },
    {
      index: 2,
      object: 'integration',
      permission: 'read',
      name: 'Integrations',
      to: '/integrations',
      icon: AiOutlineDeploymentUnit
    },
  ];

  useEffect(() => {
    setNavigation(menuList);
  }, []);

  return (
    <>
      {/* Mobile drawer */}
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
            <div className="fixed inset-0 bg-slate-900/30" />
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
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <AiOutlineClose className="h-6 w-6 text-slate-600" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>

                {/* Mobile sidebar content */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 border-r border-slate-200">
                  <div className="flex h-16 shrink-0 items-center">
                    <img src="/xsell-tech-logo.png" alt="Logo" className="h-10 w-auto" />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation
                            .sort((a, b) => (a.index > b.index ? 1 : -1))
                            .map((item) => (
                              <li key={item.to} className="group">
                                <NavLink
                                  to={item.to}
                                  className={({ isActive }) =>
                                    classNames(
                                      isActive
                                        ? 'xshell-sidenav-link xshell-sidenav-link--active'
                                        : 'xshell-sidenav-link'
                                    )
                                  }
                                >
                                  <item.icon className="h-5 w-5 shrink-0" />
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

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col border-r border-slate-200 xshell-sidenav">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6">
          <div className="flex h-16 shrink-0 items-center pt-4">
            <img src="/xsell-tech-logo.png" alt="Logo" className="h-24 w-auto" />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {!isLoading &&
                    navigation.map((item) => (
                      <li key={item.to} className="group">
                        <NavLink
                          to={item.to}
                          className={({ isActive }) =>
                            classNames(
                              isActive
                                ? 'xshell-sidenav-link xshell-sidenav-link--active'
                                : 'xshell-sidenav-link'
                            )
                          }
                        >
                          <item.icon className="h-5 w-5 shrink-0" />
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                  {isLoading && (
                    <div className="flex justify-center items-center py-4">
                      <AjaxLoader
                        color="bg-brand"
                        opac_one="opacity-50"
                        opac_two="opacity-75"
                        opac_three=""
                      />
                    </div>
                  )}
                </ul>
              </li>
              <li className="-mx-6 mt-auto pr-2">
                <UserDropdown />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
