# sNow demo app

Demo - https://hs950559.github.io/snow/

## Project Setup

```
npm i
ng serve -o
ng lint // linting errors
ng test
```

## Build & deploy

```
npm install -g angular-cli-ghpages
ng build --prod --base-href "https://hs950559.github.io/snow/"
ngh --dir=dist/snow --message="My First deploy"

All done!
https://hs950559.github.io/snow/
```

## Features

- Lazy loading user list module
- Lint free ( ng lint )
- User listing
- Search
- Pagination
- Testing in progress ( tun with `ng test`)
- Sorting
- RWD ( responsive web design )
- Deployed on github
