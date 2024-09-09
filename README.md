# Gen3 Express
A gen3 tool to generate get started express app.

## Acknowledgements
You need to know atleast basics about these things.
 - [NodeJS](https://nodejs.org/docs/latest/api/)
 - [ExpressJS](https://expressjs.com/en/5x/api.html)
 - [Embedded JS](https://ejs.co/)
 
## Features

- Minimal and Useful 💫
- JS Hot Reloadings 🚀
- EJS and Static Hot Reloadings 📜
- Cross Platform ⚔
- NPX (no need to install extra stuff) 🥙
## Installation
You can install and generate an express app using this tool in two approaches. Here I'm generating an app with name `my-app`, you can name to it anything you like.

### 1. node package extecutor
This method is highly recommended to generate an express app.
```bash
npx https://www.github.com/OurCodeBase/gen3-express my-app
```


### 2. node package manager
Generation of an express app is not recommended through npm.
```bash
npm install -gen3 https://www.github.com/OurCodeBase/gen3-express.git
```
```bash
gen3-express my-app
```

## Documentation
To install all dev dependencies goto the folder and hit `npm install` command.
```bash
cd my-app
npm install
```
To start a dev server to preview page use `server` word.
> [!NOTE]  
> This does not include EJS and static files live (hot) reloading.
```bash
npm run server
```
To start a dev server to live preview EJS page use `sync` word.
```bash
npm run sync
```
If you want to run all these servers together then you should to use this below command, this command will provide you hot reloadings in every place.
```bash
npm run server & npm run server
```

## File Cases
To know about the product or project structure read about files included in this code block.

```bash
.
├── app.js # this core file handles express functions and server.
├── nets.js # this file provides functions to display available ip addresses on your network.
├── package.json # package file handles dependencies, and details about the product.
├── public # this folder contains public data like fonts, css and multimedia.
│   ├── fonts
│   │   └── sans.woff
│   └── style.css
├── sync.js # this file is needed to configure hot reloadings in ejs and static files.
└── views # this folder contains ejs or html files to render contents.
    └── home.ejs # this file is the landing page of the product.
```

## Milestone

- Custom name in `package.json` file
- Excellent terminal user interface
- Prompt `package.json` file's details from user.
- Post this project to npmjs website.

## Authors
- [@OurCodeBase](https://www.github.com/OurCodeBase)

## Contributing
Contributions are always welcome!
