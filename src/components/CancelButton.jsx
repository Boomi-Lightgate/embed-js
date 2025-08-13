export default function CancelButton ({label, isLoading, onClick}) {
  return (
    <button 
      type="button"
      formNoValidate
      onClick={onClick}
      disabled={isLoading} 
      className="
        flex w-18 justify-center bg-white
        border border-blue-800 
        text-sm font-normal leading-6 text-blue-800 "
      >
        {label}
    </button>
  );
}

