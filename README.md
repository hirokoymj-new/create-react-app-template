# Starter React App Template

1. Creating React app using `create-react-app` command with `clean-cra` template.

- `clean-cra` template is to removed removes test files, icons, tags inside public html and app jsx, service worker files and unnecesary imports.

```js
npx create-react-app client --template clean-cra
```

**Official Documents:**

- [clean-cra](https://www.npmjs.com/package/cra-template-clean-cra)
- [Create React App - Getting Start](https://create-react-app.dev/docs/getting-started)

# Set up jsconfig.json

https://code.visualstudio.com/docs/languages/jsconfig

```js
{
  "compilerOptions": {
    "baseUrl": "./src"
  },
  "exclude": ["node_modules"]
}
```

## Adding Custom Environment Variables

### Official Documents

- [clean-cra](https://www.npmjs.com/package/cra-template-clean-cra)
- [Create React App - Getting Start](https://create-react-app.dev/docs/getting-started)
