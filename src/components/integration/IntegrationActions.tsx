import { Menu } from '@headlessui/react';
import DropdownMenu from '../ui/DropdownMenu';
import {
  AiOutlinePlayCircle,
  AiOutlineCalendar,
  AiOutlineLink,
  AiOutlineApartment,
  AiOutlineDelete,
} from 'react-icons/ai';

const IntegrationActions: React.FC<{
  onRunNow: () => void;
  onEditSchedule: () => void;
  onEditConnections: () => void;
  onEditMap: () => void;
  onDeleteIntegration: () => void;
  showMap: boolean;
}> = ({
  onRunNow,
  onEditSchedule,
  onEditConnections,
  onEditMap,
  onDeleteIntegration,
  showMap,
}) => {
  return (
    <DropdownMenu>
      <Menu.Item>
        {({ active }) => (
          <button
            onClick={onEditConnections}
            className={`${
              active ? 'bg-gray-100' : ''
            } group flex items-center w-full px-4 py-2 text-sm text-gray-600`}
          >
            <AiOutlineLink className="mr-2 h-6 w-6" />
            Edit Connections
          </button>
        )}
      </Menu.Item>
      <>
        {showMap && (
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={onEditMap}
                className={`${
                  active ? 'bg-gray-100' : ''
                } group flex items-center w-full px-4 py-2 text-sm text-gray-600`}
              >
                <AiOutlineApartment className="mr-2 h-6 w-6" />
                Edit Map
              </button>
            )}
          </Menu.Item>
        )}
      </>
      <Menu.Item>
        {({ active }) => (
          <button
            onClick={onEditSchedule}
            className={`${
              active ? 'bg-gray-100' : ''
            } group flex items-center w-full px-4 py-2 text-sm text-gray-600`}
          >
            <AiOutlineCalendar className="mr-2 h-6 w-6" />
            Edit Schedule
          </button>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <button
            onClick={onRunNow}
            className={`${
              active ? 'bg-gray-100' : ''
            } group flex items-center w-full px-4 py-2 text-sm text-gray-600`}
          >
            <AiOutlinePlayCircle className="mr-2 h-6 w-6" />
            Run Now
          </button>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <button
            onClick={onDeleteIntegration}
            className={`${
              active ? 'bg-red-100 text-red-600' : ''
            } group flex items-center w-full px-4 py-2 text-sm text-red-500`}
          >
            <AiOutlineDelete className="mr-2 h-6 w-6" />
            Delete Integration
          </button>
        )}
      </Menu.Item>
    </DropdownMenu>
  );
};

export default IntegrationActions;
