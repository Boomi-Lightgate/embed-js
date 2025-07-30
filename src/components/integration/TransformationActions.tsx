import { Menu } from '@headlessui/react';
import DropdownMenu from '../ui/DropdownMenu';
import {
  AiOutlineEdit,
  AiOutlineDelete,
} from 'react-icons/ai';
const MappingFunctionActions: React.FC<{
  onEditTransformation: () => void;
  onDeleteTransformation: () => void;
}> = ({
  onEditTransformation,
  onDeleteTransformation,
}) => {
  return (
    <DropdownMenu>
      <Menu.Item>
        {({ active }) => (
          <button
            onClick={onEditTransformation}
            className={`${
              active ? 'bg-gray-100' : ''
            } group flex items-center w-full px-4 py-2 text-sm text-gray-600`}
          >
            <AiOutlineEdit className="mr-2 h-6 w-6" />
            Edit Transformation
          </button>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <button
            onClick={onDeleteTransformation}
            className={`${
              active ? 'bg-red-100 text-red-600' : ''
            } group flex items-center w-full px-4 py-2 text-sm text-red-500`}
          >
            <AiOutlineDelete className="mr-2 h-6 w-6" />
            Delete Transformation
          </button>
        )}
      </Menu.Item>
    </DropdownMenu>
  );
};

export default MappingFunctionActions;
