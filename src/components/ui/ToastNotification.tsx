import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { usePlugin } from '../../context/pluginContext';

type ToastNotificationProps = {
  type: 'error' | 'warning' | 'success' | 'info' | 'question';
  content: string;
};

const ToastNotification: React.FC<ToastNotificationProps> = ({ type, content }) => {
  const { boomiConfig } = usePlugin();

  const defaultStyles: Record<string, { background: string; color: string }> = {
    success: { background: '#22c55e', color: '#fff' },
    error: { background: '#ef4444', color: '#fff' },
    warning: { background: '#fde047', color: '#000' },
    info: { background: '#3b82f6', color: '#fff' },
    question: { background: '#4b5563', color: '#fff' },
  };

  useEffect(() => {
    const background = boomiConfig?.notification?.[type]?.background ?? defaultStyles[type].background;
    const color = boomiConfig?.notification?.[type]?.color ?? defaultStyles[type].color;

    const Toast = Swal.mixin({
      toast: true,
      position: boomiConfig?.notification?.position ?? 'top',
      iconColor: color,
      background,
      color,
      width: '600px',
      showConfirmButton: boomiConfig?.notification?.showConfirm ?? false,
      timer: boomiConfig?.notification?.timer ?? 2000,
      timerProgressBar: boomiConfig?.notification?.showTimerProgressBar ?? true,
    });

    Toast.fire({
      icon: type,
      title: content,
    });
  }, [type, content, boomiConfig]);

  return null;
};

export default ToastNotification;
