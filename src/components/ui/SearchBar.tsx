import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { usePlugin } from '../../context/pluginContext';

interface SearchBarProps {
  componentName: string;
  searchCallback: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  componentName,
  searchCallback 
}) => {
  const { boomiConfig } = usePlugin();
  const [input, setInput] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value; 
    setInput(value);
    searchCallback(value);
  };
  return (
    <div className={`relative flex items-center pr-2 w-full max-w-sm ${boomiConfig?.[componentName]?.search?.class || ""}`}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Type to search..."
        value={input}
        onChange={handleChange}
        className={`
          block w-full rounded-md py-2 pl-3 pr-36 text-sm text-gray-700 bg-gray-50 border-2 border-gray-200
          invalid:border-pink-500 invalid:text-pink-600 focus:border-gray-300 focus:outline 
          focus:outline-gray-300 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 
          disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none 
          dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 shadow-md 
          ${boomiConfig?.[componentName]?.search?.input || ""}
        `}
      />
      <div className={`absolute rounded-md inset-y-0 right-0 flex items-center pl-2 pr-2 pointer-events-none bg-gray-300 ${boomiConfig?.[componentName]?.search?.iconContainer || ""}`}>
        <AiOutlineSearch
          aria-hidden="true"
          className={`h-5 w-5 text-gray-50 ${boomiConfig?.[componentName]?.search?.icon || ""}`}
        />
      </div>
    </div>
  );
};

export default SearchBar;
