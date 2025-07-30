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
    <Menu as="div" className="relative inline-block text-left min-w-full pl-3">
      <div className="min-w-full">
        <Menu.Button className="inline-flex min-w-full rounded-md bg-transparent py-2 text-sm font-semibold text-gray-200 hover:bg-gray-900 hover:bg-opacity-30">
            <div className="flex min-w-full pt-2 pb-2">
              <div className="flex-0 pl-2">
                <AiOutlineUser className="h-5 w-5 text-gray-200" aria-hidden="true" />
              </div>
              <div className="flex-1 text-left pl-6">
                {uName}
              </div>
              <div className="flex-0">
                <AiOutlineMore className="h-5 w-5 text-gray-200" aria-hidden="true" />
              </div>
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
        <Menu.Items className="absolute left-2.5 z-10 mt-[-6rem] w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <LogoutButton title='Logout' />
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}