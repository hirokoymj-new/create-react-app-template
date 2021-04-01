# Starter Template for React App

1. Creating React app using `create-react-app` command with `clean-cra` template.

- `clean-cra` template is to removed removes test files, icons, tags inside public html and app jsx, service worker files and unnecesary imports.

```js
npx create-react-app client --template clean-cra
```

2. Run react app

```js
yarn start
```

**Official Documents:**

- [clean-cra](https://www.npmjs.com/package/cra-template-clean-cra)
- [Create React App - Getting Start](https://create-react-app.dev/docs/getting-started)

<hr />

# jsconfig.json

- This is a VS code configuration and set up a base URL in jsconfig.json.
- This is helpful to `import` react components in nested directry structure. You can always think the begining of under the ".src" folder.

```js
{
  "compilerOptions": {
    "baseUrl": "./src"
  },
  "exclude": ["node_modules"]
}
```

**Usage**

```js
import { Title } from "TITLE/Title";

//import {Title} from "../Title/Title" // We can avoid using "../../
```

**References:**

- [jsconfig](https://code.visualstudio.com/docs/languages/jsconfig)

# Adding Custom Environment Variables

- To switch variable between local and production, I will use `.env` file and `REACT_APP_STAGE=local`
- I do not use `NODE_ENV` environment to switch the environment variables.
- Custom enviroment variables are defined in Config/config.js

**.env file**

```js
REACT_APP_STAGE = local; // Manually switch when I need to deploy in Heroku in production.
```

**Config/config.js**

```js
const config = {
  local: {
    URI: "https://localhost",
  },
  production: {
    URI: "https://production",
  },
  FIRST_NAME: "Hiroko",
  LAST_NAME: "Yamaji",
};

export default {
  ...config,
  ...config[process.env.REACT_APP_STAGE],
};
```

**Usage**

```js
import config from "Config/config";

config.URI; // DO NOT USE config.local.URI
config.FIRST_NAME;
```

**References:**

- [Adding Custom Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)
