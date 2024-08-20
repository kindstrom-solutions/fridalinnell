# fridalinnell

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# deploy
$ npm run deploy
```

For windows nubs:
# installs fnm (Fast Node Manager)
winget install Schniz.fnm

# configure fnm environment
fnm env --use-on-cd | Out-String | Invoke-Expression

# download and install Node.js
fnm use --install-if-missing 14

# verifies the right Node.js version is in the environment
node -v # should print `14.16.0'

# verifies the right npm version is in the environment
npm -v # should print `6.14.11
