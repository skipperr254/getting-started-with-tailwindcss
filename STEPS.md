Install Tailwind CSS via npm
```sh
npm install -D tailwindcss
```

Create a `tailwind.config.js` -- the Tailwind config file.
```sh
npx tailwindcss init
```
This is where you can customize your design like defining a color palette, spacing/sizing scale, etc.

Initially the file looks like the following:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

In the content array, you can add paths to all your template files.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

The `content` section is where you configure the paths to all your HTML templates, JavaScript components and any other source files that contain Tailwind class names.  
Paths are configured as (glob patterns)[https://en.wikipedia.org/wiki/Glob_(programming)]

Find more about the content configuration (here)[https://tailwindcss.com/docs/content-configuration]

Add the `@tailwind` directives to your main CSS file.
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

You can now start using Tailwind classes in your HTML.

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

Once done writing the classes, you will have to run the CLI tool to scan your template files for Tailwind CSS classes and then it will build your CSS. The command to build your CSS is:
```sh
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

The `-i` flag is to indicate your source CSS file while the `-o` is for indicating where the generated CSS will be located and stored. The `--watch` allows the builder to rebuild the CSS every time it detects a change in your source template files so that you don't have to run the command every single time you change your classes.

An easier and better way would be to add this command to your npm scripts and just run `npm run command` so that you don't have to type this command over and over again. In your package.json:

```json
{
  "devDependencies": {
    "tailwindcss": "^3.4.7"
  },
  "name": "getting-started-with-tailwindcss",
  "description": "Always read the docs! It actually works",
  "version": "1.0.0",
  "main": "tailwind.config.js",
  "dependencies": {
    // ...dependencies go here
  "scripts": {
    "build": "npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

You can now view your HTML file in a browser and wathc Tailwind in action. Be sure to first include the genereted CSS file in the head of your HTML file be before viewing it:

```html
<link href="./output.css" rel="stylesheet">
```

