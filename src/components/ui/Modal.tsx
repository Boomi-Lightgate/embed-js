import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';

const Modal: React.FC<{
  isOpen: boolean;
  title: string;
  description: string;
  children: React.ReactNode;
  onClose: () => void;
  onSubmit?: () => void;
  submitLabel?: string;
  width?: string;
  editableTitle?: boolean;
  onEditTitleSubmit?: (newTitle: string) => void;
}> = ({
  isOpen,
  title,
  description,
  children,
  onClose,
  onSubmit,
  submitLabel = 'Submit',
  width,
  editableTitle = false,
  onEditTitleSubmit,
}) => {
  const [editingTitle, setEditingTitle] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setEditedTitle(title);
  }, [title]);

  useEffect(() => {
    if (editingTitle) {
      inputRef.current?.focus();
    }
  }, [editingTitle]);

  const handleTitleSubmit = () => {
    setEditingTitle(false);
    if (editedTitle.trim() && editedTitle !== title && onEditTitleSubmit) {
      onEditTitleSubmit(editedTitle.trim());
    } else {
      setEditedTitle(title);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 flex items-center justify-center px-4 backdrop-blur-sm">
      <div className={`bg-white rounded-xl shadow-lg ${width || 'w-full max-w-2xl'} p-6 relative`}>
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="flex items-center justify-between mb-4">
          {editingTitle ? (
            <input
              ref={inputRef}
              className="text-xl font-semibold border px-2 py-1 rounded w-full"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              onBlur={handleTitleSubmit}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleTitleSubmit();
                if (e.key === 'Escape') {
                  setEditedTitle(title);
                  setEditingTitle(false);
                }
              }}
            />
          ) : (
            <h2 className="text-xl font-semibold flex items-center gap-2">
              {title}
              {editableTitle && (
                <button
                  onClick={() => setEditingTitle(true)}
                  className="text-gray-400 hover:text-gray-600"
                  title="Edit title"
                >
                  <AiOutlineEdit size={18} />
                </button>
              )}
            </h2>
          )}
        </div>

        <h4 className="text-md font-normal mb-4">{description}</h4>
        <div className="space-y-4">{children}</div>

        <div className="mt-6 flex justify-end space-x-2">
          <button
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
            onClick={onSubmit}
          >
            {submitLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
