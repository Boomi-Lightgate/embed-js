import React, {
  ReactNode,
  useRef,
  useEffect,
  useLayoutEffect,
  useState,
  Fragment,
} from 'react';
import { Menu, Transition } from '@headlessui/react';
import { AiOutlineMore } from 'react-icons/ai';
import { createPortal } from 'react-dom';

interface DropdownMenuProps {
  children: ReactNode;
}

let zIndexCounter = 10000;

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [open, setOpen] = useState(false);
  const [zIndex, setZIndex] = useState(9999);

  const updatePosition = () => {
    const button = buttonRef.current;
    if (button) {
      const rect = button.getBoundingClientRect();
      const menuWidth = 192; // Tailwind min-w-48 = 12rem
      setPosition({
        top: rect.bottom + window.scrollY + 4,
        left: rect.right + window.scrollX - menuWidth,
      });
    }
  };

  useLayoutEffect(() => {
    if (open) {
      updatePosition();
      setZIndex(++zIndexCounter);
    }
  }, [open]);

  useEffect(() => {
    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);
    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, []);

  return (
    <Menu as="div" className="relative z-0">
      {({ open: isMenuOpen }) => {
        useEffect(() => {
          setOpen(isMenuOpen);
        }, [isMenuOpen]);

        return (
          <>
            <Menu.Button
              ref={buttonRef}
              className="-m-2.5 block p-2.5 text-gray-900 hover:text-gray-500 outline-none ring-white focus:outline-none cursor-pointer"
            >
              <span className="sr-only">Open options</span>
              <AiOutlineMore className="h-6 w-6" aria-hidden="true" />
            </Menu.Button>

            {typeof window !== 'undefined' &&
              createPortal(
                <Transition
                  show={isMenuOpen}
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                <Menu.Items
                  static
                  className="absolute min-w-48 origin-top-right rounded-md py-2 shadow-lg ring-2 ring-gray-200 ring-opacity-5 focus:outline-none"
                  style={{
                    top: `${position.top}px`,
                    left: `${position.left}px`,
                    zIndex,
                    backgroundColor: 'white',
                  }}
                >
                  {children}
                </Menu.Items>
                </Transition>,
                document.body
              )}
          </>
        );
      }}
    </Menu>
  );
};

export default DropdownMenu;
