# Happiness

We build apps with "happiness" which based on webpack and makefile
[Happiness](https://github.com/weflex) are helping [WeFlex](https://github.com/weflex) to build
stuffs which are:

- React-based web application
- ReactNative-based mobile application
- module based on React or ReactNative

## Requirements

- node@latest
- yo@latest

## Install

```sh
$ npm install generator-wehappiness
```

## Usage

```sh
$ happy
```

## Distrubution

[Happiness](https://github.com/weflex) does have specified type of generated application as the following:

- app: see [templates/sources/app](app/templates/sources/app)
- mod: see [templates/sources/mod](app/templates/sources/mod)

### app

`app` type does contain a bundle of views, reset and animation libraries, which helps developers to get started
easily.

```
app/              --> all code, root directory
app/animation     --> animation module, copied from semantics-ui
app/layout        --> a module to layout
app/modules       --> the logic views
app/components    --> the shared components
app/index.html    --> the entry html page
app/index.jsx     --> the entry script, usually write routers
server/           --> server directory to be used for building and 
                      deploying to heroku and production
dist/             --> the generated code will put there
test/             --> the generated code to make unit/behavior test
makefile          --> provides some utilities
```

### mod

`mod` has simpler distruction than `app` because it doesn't contain the UI part.

```
app/              --> all code, root directory
app/index.js      --> the entry script, usually write routers
server/           --> server directory to be used for building and 
                      deploying to heroku and production
dist/             --> the generated code will put there
test/             --> the generated code to make unit/behavior test
makefile          --> provides some utilities
```

## License

MIT @ WeFlex, Inc
