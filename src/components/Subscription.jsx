export default function ProgressBar(props) {
  let subscriptionUrl = '/dashboard';
  const lastInvoice = props.lastInvoice || 'January 31, 2024';
  const amount = props.amount || '$0.00';
  const plan = props.plan || 'Free';
  const status = props.status || 'Paid';
  const executions = props.executions || '1000';
  const data = props.data || '512 MB';
  const billing = props.billing || 'Monthly';
  const invoiceDate = props.invoiceDate || 'Febuary 29, 2024';
  return (
    <>
      <div className='flex flex-inline items-center gap-x-1 pb-2'>
        <h1 className="flex-1 text-md text-gray-700 font-semibold">Subscription</h1>
        <div className='flex-0'>
          <div className='rounded-md py-1 px-4 text-xs font-medium ring-1 ring-inset bg-boomi-chart-blue text-gray-100'>{plan}</div>
        </div>
      </div>
      <div className="bg-gray-50 border-2 border-gray-50 rounded-md">
        <dl className="px-6 py-2 text-xs leading-6">
          <div className="flex justify-between gap-x-4 py-0.5">
            <dt className="text-gray-500">Price</dt>
            <dd className="text-gray-700">{amount}</dd>
          </div>
          <div className="flex justify-between gap-x-4 py-1">
            <dt className="text-gray-500">Executions/mo</dt>
            <dd className="text-gray-700">{executions}</dd>
          </div>
          <div className="flex justify-between gap-x-4 py-0.5">
            <dt className="text-gray-500">Data/mo</dt>
            <dd className="text-gray-700">{data}</dd>
          </div>
          <div className="flex justify-between gap-x-4 py-0.5">
            <dt className="text-gray-500">Billed</dt>
            <dd className="text-gray-700">{billing}</dd>
          </div>
          <div className="flex justify-between gap-x-4 py-0.5">
            <dt className="text-gray-500">Next Invoice Date</dt>
            <dd className="text-gray-700 font-bold">{invoiceDate}</dd>
          </div>
        </dl>
      </div>
      <div className="flex min-w-full pt-2">
        <a
          href={subscriptionUrl}
          className="flex-1 text-center px-3.5 py-2.5 text-xs font-semibold text-gray-100 shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-boomi-purple xshell-next"
        >
          Manage Subscription
        </a>
      </div>

    </>
  );
}