import React, { useEffect } from 'react';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { usePlugin } from '../../context/pluginContext';

type SwalNotificationProps = {
  type: 'error' | 'warning' | 'success';
  title: string;
  description: string;
  showCancel: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

const SwalNotification: React.FC<SwalNotificationProps> = ({
  type,
  title,
  description,
  showCancel,
  confirmButtonText,
  cancelButtonText,
  onConfirm,
  onCancel,
}) => {
  const { boomiConfig } = usePlugin();

  useEffect(() => {
    const confirmBg = boomiConfig?.notification?.confirm?.backgroundClass ?? '#e5e8eb'; // blue-600
    const confirmColor = boomiConfig?.notification?.confirm?.class ?? '#000000';
    const cancelBg = boomiConfig?.notification?.cancel?.backgroundClass ?? '#d1d5dc'; // gray-400
    const cancelColor = boomiConfig?.notification?.cancel?.class ?? '#000000';

    Swal.fire({
      title,
      text: description,
      icon: type,
      showCancelButton: showCancel,
      confirmButtonText: boomiConfig?.notification?.confirm?.label || confirmButtonText || 'OK',
      cancelButtonText: boomiConfig?.notification?.cancel?.label || cancelButtonText || 'Cancel',
      customClass: {
        confirmButton: 'custom-confirm-button',
        cancelButton: 'custom-cancel-button',
      },
      didOpen: () => {
        const confirmBtn = document.querySelector('.swal2-confirm') as HTMLElement;
        const cancelBtn = document.querySelector('.swal2-cancel') as HTMLElement;

        if (confirmBtn) {
          confirmBtn.style.backgroundColor = confirmBg;
          confirmBtn.style.color = confirmColor;
        }

        if (cancelBtn) {
          cancelBtn.style.backgroundColor = cancelBg;
          cancelBtn.style.color = cancelColor;
        }
      },
    }).then((result: SweetAlertResult) => {
      if (result.isConfirmed && onConfirm) {
        onConfirm();
      } else if ((result.isDenied || result.isDismissed) && onCancel) {
        onCancel();
      }
    });
  }, []);

  return null;
};

export default SwalNotification;
