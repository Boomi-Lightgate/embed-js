import { useState} from "react";
import UsageChart from "../components/UsageChart";
import Subscription from "../components/Subscription";

export default function OrganizationDashboardPage() {
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
          <div className="flex">
            <div className="flex-1">
              <h1 className="text-3xl leading-6 font-normal text-gray-700">My Organization</h1>
            </div>
          </div>

          <div className="pt-6">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? 'border-boomi-purple text-boomi-purple'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'whitespace-nowrap border-b-4 px-1 pb-4 text-sm font-medium'
                  )}
                  aria-current={tab.current ? 'page' : undefined}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="w-full min-h-full min-w-full flow-root border-t-1 border-gray-900 bg-gray-200 overflow-x-hidden">
        <>
          <div className="flex min-w-full min-h-full">
            <div className="flex-1 grid grid-cols-4 gap-4 p-6">
              <div className="col-span-3"><UsageChart /></div>
              <div><Subscription /></div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}