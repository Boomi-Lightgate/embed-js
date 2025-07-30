import React from 'react';
import {
  AiOutlineWarning,
  AiOutlineCheck,
  AiOutlineFrown,
} from 'react-icons/ai';

export type NotificationProps = {
  type: 'Error' | 'Warning' | 'Success';
  message: string;
};

const Notification: React.FC<NotificationProps> = ({ type, message }) => {
  let bgColor = '';
  let textColor = '';
  let Icon;

  switch (type) {
    case 'Warning':
      bgColor = 'var(--plugin-warning-background)';
      textColor = 'var(--plugin-warning-foreground)';
      Icon = AiOutlineWarning;
      break;
    case 'Success':
      bgColor = 'var(--plugin-success-background)';
      textColor = 'var(--plugin-success-foreground)';
      Icon = AiOutlineCheck;
      break;
    case 'Error':
    default:
      bgColor = 'var(--plugin-error-background)';
      textColor = 'var(--plugin-error-foreground)';
      Icon = AiOutlineFrown;
      break;
  }

  return (
    <div
      className="rounded p-4 pt-3 mb-4 flex items-start gap-2"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <Icon className="mt-0.5 text-lg" />
      <p className="text-sm font-medium">{type}: {message}</p>
    </div>
  );
};

export default Notification;
