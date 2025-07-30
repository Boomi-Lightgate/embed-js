# Boomi Embed-JS

Boomi Embed-JS provides a React plugin that enables developers to quickly integrate Boomi 
integrations into their native SaaS applications. 

## Installation

Install the package with:

```sh
npm i @boomi/embed-js

or

yarn add @boomi/embed-js
```

## Setup the Plugin

The Boomi plugin needs to be initialized within your application to render the UI components. 
Follow the steps below to enable the plugin:

1. Create a html div element on the page where you wish to render the Boomi Embed-JS components. 
Ensure you provide an ID equal to "boomi". 

```html
  <body>
    <div id="boomi"></div>
  </body>
```

2. Initialize the plugin within your application. You can utilize a script tag or a separate .js 
file to initialize the plugin. See below.

index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Boomi EmbedJS</title>
  </head>
  <body>
    <div id="boomi"></div>
    <script type="module" src="./index.js"></script>
  </body>
</html>
```
index.js
```js
import BoomiPlugin from '@boomi/embed-js';
BoomiPlugin(
  baseUrl: BOOMI_PLATFORM_API_URL,
  accountId: BOOMI_ACCOUNT_ID,  
  userName: API_USERNAME,     
  token: API_PASSWORD,  
  authUser: AUTH_ACCOUNT_ID,
  accountGroup: BOOMI_ACCOUNT_GROUP_NAME, 
  configFile: '/boomi.config.js',            
  theme: {
    allowThemes: false,                       
    defaultTheme: 'dark'                      
  },
);
```

Or simply initizlize the plugin in the html using a script tag. 

index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Boomi EmbedJS</title>
  </head>
  <body>
    <div id="boomi"></div>
    <!-- initialize the boomi plugin and render a component -->
    <script type="module">
      import BoomiPlugin from '@boomi/embed-js';
      BoomiPlugin(
        baseUrl: 'https://api.boomi.com/partner/api/rest/v1',     
        accountId: 'BOOMI_ACCOUNT_ID',                   
        userName: 'BOOMI_TOKEN.someuser@somedomain.com',  
        token: 'API_TOKEN',                               
        authUser: 'AUTH_ACCOUNT_ID',                     
        accountGroup: 'My Custom Account Group',          
        configFile: '/boomi.config.js',     
      );

      RenderComponent({
        component: 'Integrations',  
        props: {            
          environments: {  
            allowSelectEnvironments: false,  
            installEnvironments: [       
              { id: '4c383f59-2b34-4f9a-bd2b-a47430e623cc' }
            ]
          }
        }
      });
    </script>
  </body>
</html>
```

In a React Component should be initialized at the root level of the application. Example Root component, see our example git 
repository to download this working example:

./src/components/root.jsx
```js
mport { useEffect, useRef} from 'react';
import { Outlet, useLocation} from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext';
import SideNav from './components/SideNav';
import './main.css';
import BoomiPlugin from '@boomi/embed-js';

export default function Root() {
  const { user } = useAuthContext();
  const initialized = useRef(false);
  const location = useLocation();


  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
  
      const boomiAccountId = user?.boomi_account_id;
      console.log("Boomi Account:", boomiAccountId);
  
      if (!boomiAccountId) {
        console.warn("Boomi account ID is missing. Skipping BoomiPlugin initialization.");
        return;
      }
  
      BoomiPlugin({
        baseUrl: import.meta.env.VITE_API_URL,
        accountId: import.meta.env.VITE_API_ACCOUNT_ID,
        userName: import.meta.env.VITE_API_USERNAME,
        token: import.meta.env.VITE_API_TOKEN,
        authUser: boomiAccountId,
        accountGroup: import.meta.env.VITE_ACCOUNT_GROUP,
        configFile: '/boomi.config.js',
        theme: {
          allowThemes: false,
          defaultTheme: 'dark'
        },
      });
    }
  }, [user]);
  
  return (
    <div>
      <SideNav />
      <div className="lg:pl-72 bg-gray-200">
        <Outlet key={location.pathname} />
      </div>
    </div>
  );
}
```

To render a plugin component in react use the following. This example renders the full Integrations
component:

./src/components/Integrations.jsx
```js
import { useEffect, useRef } from "react";
import { RenderComponent } from "@boomi/embed-js";
import { useLocation} from "react-router-dom";

export default function IntegrationsPage() {
  const initialized = useRef(false);
  const location = useLocation();
  
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      RenderComponent({
        component: 'Integrations'
      });
    }
  }, []);
  
  return (
    <div id="boomi" key={location.pathname}></div>
  );
}
```

The authContext of the example react app carries the authAccountId, which is the accountId
of a child account in Boomi. 

./src/context/authContext.jsx
```js
import { createContext, useReducer, useEffect, useCallback } from 'react'

export const AuthContext = createContext()
export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { 
    user: null
  })

  useEffect(() => {
    const lgData = JSON.parse(localStorage.getItem('lgData'))
    if (lgData?.user) {
      dispatch({ type: 'LOGIN', payload: lgData.user })
    }
  }, [])

  const getUser = useCallback(() => {
    return state.user
  }, [state.user])

  return (
    <AuthContext.Provider value={{ ...state, dispatch, getUser }}>
      {children}
    </AuthContext.Provider>
  )
}
```
## Override Styling

The Embed-JS Plugin allows you to fully customize the look and feel of each component. This is done
using a module js file. In the root of your project create a file named: boomi.cofig.js. When configuring the plugin 
you can set the path to this file as noted above. For the full list of supported configurations for each component please
visit the [Boomi Embed-JS Reference](https://help.boomi.com/docs/Atomsphere/Platform/

./boomi.config.js
```js
export const boomiConfig = {
  container:{
    class: 'bg-gray-200'
  }, 
  integrations: {
    body:{
      class: 'bg-gray-200'
    },
    integration:{
      icon: 'text-green-400',
    },
    header:{
      show: true,
      title: 'My Installed Integrations',
      description: 'The list below shows your current list of integrations.',
      class: 'w-full min-h-full min-w-full flow-root border-gray-900 bg-gray-50 pb-2',
      titleClass: 'pb-2 pt-4 text-3xl' 
    },
    search:{
      show: false,
      input: 'bg-gray-50',
      icon: 'text-blue-300 w-5 h-5'
    },
    viewTypeButton:{
      show: true,
      default: 'table',
    },
    addButton: {
      show: false
    }, 
    viewTypeButton:{
      show: false
    }
  } 
};
```






