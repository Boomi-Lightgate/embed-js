
import BoomiPlugin, {RenderComponent} from './src/main';

/* 
  This is the main entry point for the Boomi Plugin.
*/
BoomiPlugin({
  baseUrl: import.meta.env.VITE_API_URL,
  accountId: import.meta.env.VITE_API_ACCOUNT_ID,
  userName: import.meta.env.VITE_API_USERNAME,
  token: import.meta.env.VITE_API_TOKEN,
  authUser: import.meta.env.VITE_API_AUTH_USER,
  accountGroup: import.meta.env.VITE_ACCOUNT_GROUP,
  configFile: '/boomi.config.js',
  theme: {
    allowThemes: false,
    defaultTheme: 'dark'
  },
  ai: {
    enabled: true,
    model: 'gpt-4o-2024-08-06',
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  },
});

/*
  Functions to handle callbacks from the simple integration component.
*/
const handleOnSuccess = (message) => {
  console.log('onSave called', message);
};
const handleOnFailure = (error) => {
  console.log('onFailure called', error);
};
const handleOnCancel = () => {
  console.log('onCancel called');
};

/* 
  Renders the full integrations component
*/
RenderComponent({
  component: 'Integrations'
});

/* 
  Example for rendering the simple integration component and setting the environment and schedules.
  This only requires the consumer ot enter connection information into the component.
  
  RenderComponent({
    component: 'SimpleIntegration',
    props: {
      integrationPackId: 'e516e7c2-b7ee-4a31-bc45-84a246634af3',
      installName: `Repsly Places sync`,
      processName: 'Repsly Places sync to Quickbooks Online Customers - Quickbooks to Boomi Hub',
      environments: {
        allowSelectEnvironments: false,
        installEnvironments: [
          { id: '4c383f59-2b34-4f9a-bd2b-a47430e623cc' }
        ]
      },
      schedules: {
        allowSelectSchedule: false,
        processSchedules: [
          { 
            environmentId: '4c383f59-2b34-4f9a-bd2b-a47430e623cc',
            schedule:{
              daysOfMonth: '1-31',
              daysOfWeek: '2,3,4,5,6',
              hours: '8-18',
              minutes: '0-59/15',
              months: '*',
              years: '*'
            },
            runOnSave: true,
            allowTestConnection: true
          }
        ]
      },
      onSuccess: handleOnSuccess,
      onFailure: handleOnFailure,
      onCancel: handleOnCancel,
    }
  });
*/