import { de } from "@faker-js/faker";

// boomi.config.js
export const boomiConfig = {
  integrations: {
    integration:{
      icon: 'text-shy-500',
      title: 'text-shy-600',
    },
    editButton: {
      class: 'text-sky-600 hover:text-sky-700',
    },
    addButton: {
      show: true,
      class: 'bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded',
      icon: 'text-white',
      label: 'Add Integration'
    },
    header:{
      show: true,
      class: 'w-full min-h-full min-w-full flow-root border-sky-600 border-2 bg-white',
      titleClass: 'text-3xl leading-6 font-normal text-gray-700',
      descriptionClass: 'text-gray-500 text-sm', 
    },
    viewTypeButton:{
      show: false,
      default: 'table'
    },
  }
};