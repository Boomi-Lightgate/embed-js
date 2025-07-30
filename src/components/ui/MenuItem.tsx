import { Menu } from '@headlessui/react';

interface MenuItemProps {
  url: string;
  title: string;
  onClickCallback: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ url, title, onClickCallback }) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <Menu.Item>
      {({ active }) => (
        <a
          onClick={onClickCallback}
          href={url}
          className={classNames(
            active ? 'bg-gray-50' : '',
            'block px-3 py-1 text-xs leading-6 text-gray-700'
          )}
        >
          {title}
        </a>
      )}
    </Menu.Item>
  );
};

export default MenuItem;
