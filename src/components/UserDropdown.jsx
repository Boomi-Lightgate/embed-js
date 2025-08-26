import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { AiOutlineMore, AiOutlineUser } from "react-icons/ai";
import LogoutButton from "./LogoutButton";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function UserDropdown() {
  const lgData = JSON.parse(localStorage.getItem('lgData'));
  let uName = "";
  if (lgData){
    uName = lgData.first_name + " " + lgData.last_name;
  }

  return (
    <Menu as="div" className="relative inline-block text-left w-full">
      <div className="w-full">
        <Menu.Button className="inline-flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
          <div className="flex flex-1 items-center">
            <AiOutlineUser className="h-5 w-5 text-slate-500" aria-hidden="true" />
            <span className="ml-3 flex-1 text-left">{uName}</span>
            <AiOutlineMore className="h-5 w-5 text-slate-500" aria-hidden="true" />
          </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95 translate-y-2"
        enterTo="transform opacity-100 scale-100 translate-y-0"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100 translate-y-0"
        leaveTo="transform opacity-0 scale-95 translate-y-2"
      >
        <Menu.Items className="absolute right-0 bottom-12 z-10 mt-2 w-48 origin-bottom-right divide-y divide-slate-100 rounded-md bg-white shadow-lg ring-1 ring-slate-200 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active ? "bg-slate-100 text-brand" : "text-slate-700",
                    "block px-4 py-2 text-sm cursor-pointer"
                  )}
                >
                  <LogoutButton title="Logout" />
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
