# Embed JS React Example

This templat utilzes Boomi Embed Js plugin and serves as an example of how to implement 
the plugin using react. The project utilizes a users.json file to house authentication information and is NOT intended to be production ready. 

DISCLAIMER: This is a working example of the plugin and is intended for demonstration purposes on how to leverage the Embed Js Plugin. This example is not intended for production use. Please follow security best practices when storing or sharing passwrods, account id's or api tokens. 

## Steps to make this plugin work:

1. Edit the .env file located within the root of this project. Add the following lines to it:

```sh
VITE_API_URL="https://api.boomi.com/partner/api/rest/v1"
VITE_API_ACCOUNT_ID=""
VITE_API_USERNAME=""
VITE_API_TOKEN=""
VITE_API_AUTH_USER=""
VITE_APP_ENV="development"
VITE_ACCOUNT_GROUP=""
VITE_OPENAI_API_KEY=""

```
Note: In order to support AI features you must provide an api token to the plugin and you need to enable the ai features within the plugin initialization. In this project the plugin is initialized within the /src/root.jsx file. You can enable the features by adding the following the the BoomiPlugin configuration:

```sh
    ai: {
        enabled: true,
        model: 'gpt-4o-2024-08-06',
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    }

```

2. From the terminal install and run the application. Type the following command:

```sh
npm i && npm run dev

```

3. In the browser window to the right, ensure the url provided is configued in Boomi under CORS for the primary account within the .env file. 

```sh
Example: https://embedjs-moyi--5173--96435430.local-credentialless.webcontainer.io

```