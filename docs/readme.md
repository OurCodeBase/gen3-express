# Gen3 Express
A gen3 tool to generate express app.

> [!IMPORTANT]
> ### 1.1.4 is released
> - docs has been updated.
> - commands have been updated.
> - hot reloading servers are merged in one server.
> - parallel server runner is now highly optimised, and efficient.

## Acknowledgements
You need to know atleast basics of these technologies.
 - [NodeJS](https://nodejs.org/docs/latest/api/)
 - [ExpressJS](https://expressjs.com/en/5x/api.html)
 - [Embedded JS](https://ejs.co/)
 
## Installation
You can generate an express app using this tool in two approaches. Here I'm generating an app with name `my-app`, you can name to it anything you like.

### 1. node package extecutor
This method is highly recommended to generate an express app.
```bash
npx gen3-express my-app
```

### 2. node package manager
Generation of an express app is not recommended through npm.
```bash
npm install -g gen3-express
```
```bash
gen3-express my-app
```

## Tailwind CSS
To get tailwind css boilerplate, you can add `-t` or `--tailwindcss` switch or flag while generating a site.
```bash
npx gen3-express my-app --tailwindcss
```

### Usage
To add tailwindcss to your frontend page, use `css/tailwind.css` into a `link` tag.
```html
<link href="css/tailwind.css" rel="stylesheet">
```
We have to run a `tailwind` sever with the below command, because `tailwindcss` regularly update css file according to your needs.
```bash
npm run tailwind
```
- You can run frontend, backend and tailwind servers parallelly using `dev` keyword.

## Documentation
To install all dependencies goto the folder and execute `npm install` command.
```bash
cd my-app
npm install
```
To start a dev server to preview page use `server` keyword.
- The below command does also provide live reloading in frontend and `public` files.

```bash
npm run server
```
If you want to run all servers together (especially tailwindcss) then you should to use the below command, this command provides multiple servers parallelly.
```bash
npm run dev
```

## File Tree
To know about the project structure read about files included in this code block.
- In case of tailwindcss, the boilerplate contains additional files like `tailwind.config.js` for tailwindcss configs.

```yml
.
├── app.js
├── package.json
├── public
│   ├── css
│   │   └── style.css
│   └── fonts
│       └── sans.woff
├── nodemon.json # configs for hot reloadings in frontend and backend.
├── utils
│   └── netface.js # contains functions to show available ipv4 addresses.
└── views
    └── home.ejs
```

## Roadmap

- Custom name in `package.json` file ✅
- Excellent terminal user interface ✅
- Post this project to npmjs website. ✅
- Add Tailwind CSS support. ✅
- Use a lightweight server for EJS live reloading. ✅
- Prompt `package.json` file's details from user. ⏩ 
- Custom local template feature ⏩

## Authors
- [@OurCodeBase](https://www.github.com/OurCodeBase)

## Contributing
Contributions are always welcome!
