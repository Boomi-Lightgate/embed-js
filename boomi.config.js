import { de } from "@faker-js/faker";

// boomi.config.js
export const boomiConfig = {
  integrations: {
    integration:{
      icon: 'text-purple-400',
    },
    header:{
      show: true,
      class: 'w-full min-h-full min-w-full flow-root border-gray-700 bg-white',
      titleClass: 'text-3xl leading-6 font-normal text-black  ',
      descriptionClass: 'text-gray-500 text-sm', 
    },
    viewTypeButton:{
      show: false,
      default: 'table'
    },
  },
  form: {
    connectorForm: {
      url: {
        validation: '^https:\/\/[a-zA-Z0-9-]+\.[a-zA-Z]{2,}\/?$'
      }
    }
  } 
};