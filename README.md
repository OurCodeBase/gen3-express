# Gen3 Express
A gen3 tool to generate express app.

## Acknowledgements
You need to know atleast basics about these things.
 - [NodeJS](https://nodejs.org/docs/latest/api/)
 - [ExpressJS](https://expressjs.com/en/5x/api.html)
 - [Embedded JS](https://ejs.co/)
 
## Installation
You can install and generate an express app using this tool in two approaches. Here I'm generating an app with name `my-app`, you can name to it anything you like.

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
To get tailwind css boilerplate, you can add `-t` or `--tailwindcss` switches or flags while generating a site.
```bash
npx gen3-express my-app --tailwindcss
```

### Usage
To add tailwindcss to your `EJS` page, use `css/tailwind.css` into a `link` tag.
```html
<link href="css/tailwind.css" rel="stylesheet">
```
Because of `tailwind` updates css file according your needs, We need to run a `tailwind` sever with command below.
```bash
npm run tailwind
```
- If you choosed tailwind css boilerplate then this server will run with `dev` keyword server.

## Documentation
To install all dependencies goto the folder and execute `npm install` command.
```bash
cd my-app
npm install
```
To start a dev server to preview page use `server` keyword.
- Keep in mind that the below command does not provide live reloading in `EJS` and `public` files.

```bash
npm run server
```
To get live reloading in `EJS` and `public` folder, create another server with `sync` keyword.
```bash
npm run sync
```
If you want to run all these servers together then you should to use this below command, this command will provide you hot reloadings in every place.
```bash
npm run dev
```

## File Tree
To know about the project structure read about files included in this code block.

```yml
.
├── app.js
├── package.json
├── public
│   ├── css
│   │   └── style.css
│   └── fonts
│       └── sans.woff
├── sync.js # configuration for hot reloadings in ejs and static files.
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
