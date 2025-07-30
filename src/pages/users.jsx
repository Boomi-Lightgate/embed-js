import { useState} from "react";

export default function UsersPage() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [data, setData] = useState(null);

  const tabs = [
    { name: 'Organization', href: '#', current: true },
    { name: 'Users', href: '#', current: false, count: 1 },
    { name: 'Subscription', href: '#', current: false, count: 4 },
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div className="min-w-full bg-gray-50">
      <div className="pt-6 w-full sm:flex sm:items-center text-left">
        <div className="sm:flex-auto pl-8">
          <div className="flex pb-4">
            <div className="flex-1">
              <h1 className="text-3xl leading-6 font-normal text-gray-700">Users</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-full min-w-full flow-root border-t-1 border-gray-900 bg-gray-200 overflow-x-hidden">
        <div className="flex min-w-full min-h-full">
          <div className="flex-1 grid grid-cols-4 gap-4 p-6">

          </div>
        </div>
      </div>
    </div>
  );
}