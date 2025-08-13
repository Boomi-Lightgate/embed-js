import { Fragment, useEffect, useMemo, useState, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  AiOutlineHome,
  AiOutlineClose,
  AiOutlineTeam,
  AiOutlineDeploymentUnit,
} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import AjaxLoader from './AjaxLoader'
import UserDropdown from './UserDropdown'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SideNav() {
  const { getUser } = useContext(AuthContext)
  const user = getUser()

  const [isLoading, setIsLoading] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [navigation, setNavigation] = useState([])

  const menuList = useMemo(
    () => [
      { index: 0, object: 'organization', permission: 'read', name: 'Organization', to: '/dashboard', icon: AiOutlineHome },
      { index: 2, object: 'integration', permission: 'read', name: 'Integrations', to: '/integrations', icon: AiOutlineDeploymentUnit },
    ],
    [user?.isAdmin]
  )

  useEffect(() => {
    setNavigation(menuList)
  }, [menuList])

  const sortedNav = useMemo(
    () => [...navigation].sort((a, b) => (a.index > b.index ? 1 : -1)),
    [navigation]
  )

  return (
    <>
      {/* Mobile sidebar */}
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
            {/* Use modal overlay token */}
            <div className="fixed inset-0" style={{ background: 'var(--boomi-modal-overlay-bg)' }} />
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
              <Dialog.Panel
                className={classNames(
                  'relative mr-16 flex w-full max-w-xs flex-1',
                )}
              >
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
                      <AiOutlineClose className="h-6 w-6" style={{ color: 'var(--boomi-menu-fg)' }} aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>

                {/* Sidebar panel uses menu tokens */}
                <div
                  className="flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-2"
                >
                  <div className="flex h-16 shrink-0 items-center">
                    <a href="/" className="pl-1.5 pt-0.5">
                      <span className="text-2xl" style={{ color: 'var(--boomi-header-fg-color)' }}>OEM+</span>
                    </a>
                  </div>

                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {sortedNav.map((item) => (
                            <li key={item.to} className="group">
                              <NavLink
                                key={item.name}
                                to={item.to}
                                className={({ isActive }) =>
                                  classNames(
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                    // default state
                                    'transition-colors',
                                    // active vs hover via tokens
                                    isActive
                                      ? 'bg-[var(--boomi-menu-item-bg-hover)] text-[var(--boomi-menu-item-fg-hover)]'
                                      : 'text-[var(--boomi-menu-item-fg)] hover:bg-[var(--boomi-menu-item-bg-hover)] hover:text-[var(--boomi-menu-item-fg-hover)]'
                                  )
                                }
                              >
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

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col bg-gray-200 border border-gray-400">
        <div
          className="flex grow flex-col gap-y-5 overflow-y-auto px-6"
          style={{
            // Use menu tokens rather than a fixed gradient
            background: 'var(--boomi-menu-bg)',
            color: 'var(--boomi-menu-fg)',
            borderRight: '1px solid var(--boomi-menu-border)',
          }}
        >
          <div className="flex h-16 shrink-0 items-center">
          <img
              src="RA-PLEX-lockup-logo-color.svg"
              alt="Rockwell Automation"
            />
          </div>

          <nav className="flex flex-1 flex-col pt-0 mt-0">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {!isLoading && sortedNav.length > 0 && (
                    <>
                      {sortedNav.map((item) => (
                        <li key={item.to} className="group">
                          <NavLink
                            key={item.name}
                            to={item.to}
                            className={({ isActive }) =>
                              classNames(
                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors',
                                isActive
                                  ? 'bg-blue-800 text-white'
                                  : 'text-gray-800 hover:bg-blue-800 hover:text-white'
                              )
                            }
                          >
                            <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                            {item.name}
                          </NavLink>
                        </li>
                      ))}
                    </>
                  )}

                  {isLoading && (
                    <div className="flex justify-center items-center">
                      <AjaxLoader
                        color="bg-blue-800"
                        opac_one="opacity-20"
                        opac_two="opacity-50"
                        opac_three="opacity-80"
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
  )
}
