export default function SubmitButton ({label, isLoading}) {
  return (
      <button 
        disabled={isLoading} 
        type="submit" 
        className="
        flex w-18 justify-center bg-blue-800
        border border-blue-800 
        text-sm font-normal leading-6 text-white "
      >
          {label}
      </button>
  );
}

