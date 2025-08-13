import { useState } from "react";
import UsageChart from "../components/UsageChart";
import Subscription from "../components/Subscription";

export default function OrganizationDashboardPage() {
  const [data, setData] = useState(null);

  const tabs = [
    { name: 'Organization', href: '#', current: true },
    { name: 'Users', href: '#', current: false, count: 1 },
    { name: 'Subscription', href: '#', current: false, count: 4 },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div
      className="min-w-full bg-white"
    >
      <div className="pt-2 w-full sm:flex sm:items-center text-left">
        <div className="sm:flex-auto pl-8">
          <div className="flex">
            <div className="flex-1">
              <h1
                className="text-xl leading-6 font-normal"
              >
                My Organization
              </h1>
            </div>
          </div>

          <div className="pt-6">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    'whitespace-nowrap border-b-4 px-1 pb-2 text-sm font-medium transition-colors',
                    tab.current
                      ? 'text-gray-700 border-blue-800'
                      : 'text-[var(--boomi-tab-fg)] border-transparent hover:text-[var(--boomi-tab-fg-active)] hover:border-[var(--boomi-tab-border)]'
                  )}
                  aria-current={tab.current ? 'page' : undefined}
                  style={{
                    // Optional: subtle active bg using your token
                    background: tab.current ? 'var(--boomi-tab-bg-active)' : 'transparent',
                  }}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div
        className="w-full min-h-full min-w-full flow-root border-t border-gray-300 overflow-x-hidden"
      >
        <div className="flex min-w-full min-h-full">
          <div className="flex-1 grid grid-cols-4 gap-4 p-6">
            <div
              className="col-span-3 rounded-md"
              style={{
                background: 'var(--boomi-card-bg)',
                boxShadow: 'var(--boomi-card-shadow)',
                border: '1px solid var(--boomi-card-border)',
              }}
            >
              <UsageChart />
            </div>

            <div
              className="rounded-md"
              style={{
                background: 'var(--boomi-card-bg)',
                boxShadow: 'var(--boomi-card-shadow)',
                border: '1px solid var(--boomi-card-border)',
              }}
            >
              <Subscription />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
