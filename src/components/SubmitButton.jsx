export default function SubmitButton ({label, isLoading}) {
  return (
      <button disabled={isLoading} type="submit" className="flex w-full justify-center rounded-md bg-gray-700 px-3 py-2.5 text-sm font-semibold leading-6 text-gray-400 shadow-md hover:bg-gray-600 ">{label}</button>
  );
}

