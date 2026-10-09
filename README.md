# expo-observe filteredParams wildcard

Minimal reproduction for `expo-observe@57.0.25`.

`filteredParams: ["*"]` is stored as a literal parameter name. It does not remove every route and query parameter.

## Run

```bash
npm install
npm run repro
```

Actual output:

```text
with params: {"routeParams":{"id":"779","tab":"timeline"},"url":"/incidents/779"}
no params: {"routeParams":{},"url":"/incidents"}
```

Expected output:

```text
with params: {"routeParams":{},"urlHidden":true}
no params: {"routeParams":{},"url":"/incidents"}
```

The script imports the file from `node_modules` because `expo-observe` does not export `src/integrations/navigationConfig.ts`. That file has only a type import. You can run it without a device or Expo Go.
