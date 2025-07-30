import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect
} from 'react';

interface ButtonProps {
  toggle: boolean;
  primary: boolean;
  viewLoc?: string;
  iconOnly?: boolean;
  icon?: React.ReactNode;
  onIcon?: React.ReactNode;
  onClass?: string;
  showIcon?: boolean;
  label?: string;
  isLoading?: boolean;
  buttonClass?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  hoverText?: string;

}

const Button: React.FC<ButtonProps> = ({
  toggle,
  primary = true,
  viewLoc,
  icon,
  onIcon,
  onClass,
  showIcon,
  label,
  isLoading,
  buttonClass,
  disabled = false,
  onClick,
  hoverText,
  iconOnly = false, // default to false
}) => {
  const [pressed, setPressed] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    if (toggle && viewLoc) {
      const stored = localStorage.getItem(viewLoc || 'plugin-table');
      setPressed(stored === 'on');
    }
  }, [viewLoc, toggle]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || isLoading) return;

    if (toggle && viewLoc) {
      const newPressed = !pressed;
      setPressed(newPressed);
      localStorage.setItem(viewLoc, newPressed ? 'on' : 'off');
    }
    onClick?.(e);
  };

  const isPressed = pressed && toggle;

  const baseClass =
    'flex items-center justify-center rounded-md text-sm font-semibold relative transition-all duration-150 cursor-pointer';

  const themeClass = primary
    ? 'bg-indigo-500 text-white hover:bg-indigo-600 hover:text-white'
    : 'bg-indigo-400 text-white hover:bg-indigo-500 hover:text-white';

  const disabledClass = 'opacity-50 cursor-not-allowed hover:bg-indigo-400';

  const iconOnlyClass = iconOnly
    ? 'bg-transparent p-1 shadow-none rounded-full'
    : 'px-3 py-2 shadow-sm';

  const effectiveClass = [
    baseClass,
    !iconOnly && themeClass,
    iconOnlyClass,
    buttonClass,
    isPressed && onClass,
    (disabled || isLoading) && disabledClass,
  ]
    .filter(Boolean)
    .join(' ');

  const effectiveIcon = isPressed && onIcon ? onIcon : icon;

  return (
    <div
      className="relative inline-block z-[0]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hoverText && hovered && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 rounded text-xs text-white bg-black whitespace-nowrap z-10">
          {hoverText}
        </div>
      )}
      <button
        onClick={handleClick}
        className={effectiveClass}
        disabled={disabled || isLoading}
        type="button"
      >
        {showIcon && effectiveIcon && <span>{effectiveIcon}</span>}
        {!iconOnly && label && <span className="ml-1">{label}</span>}
      </button>
    </div>
  );
};

export default Button;
