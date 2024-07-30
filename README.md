# I am learning Tailwind CSS

The `build.js` file here allows for addition of arguments when running the tailwind build command using `npm run build` as configured in the `package.json`.

The `scripts` directive of the `package.json` now contains `node build.js`.
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
  }
  "scripts": {
    "build": "node build.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

The `build.js` file allows to specify what directory to place the output CSS in. In this case, it allows for the placement of the output file inside each individual folder created with a HTML source file. The command can now be run as follows:

```sh
npm run build -- 01-setup
```

This will place the `output.css` file inside the `01-setup` folder under `dist` so that the full file location will be `01-setup/dist/output.css`

## Closing remarks
### Always read the docs🫵. It always works!
*Happy Hacking! :stuck_out_tongue_winking_eye: