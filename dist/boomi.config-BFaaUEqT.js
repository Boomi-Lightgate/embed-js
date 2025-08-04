const t = {
  integrations: {
    integration: {
      icon: "text-purple-400"
    },
    header: {
      show: !0,
      class: "w-full min-h-full min-w-full flow-root border-gray-700 bg-red-500",
      titleClass: "text-3xl leading-6 font-normal text-gray-700",
      descriptionClass: "text-gray-500 text-sm"
    },
    viewTypeButton: {
      show: !1,
      default: "table"
    }
  },
  form: {
    connectorForm: {
      url: {
        validation: "^https://[a-zA-Z0-9-]+.[a-zA-Z]{2,}/?$"
      }
    }
  }
};
export {
  t as boomiConfig
};
