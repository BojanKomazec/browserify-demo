# browserify-demo
Demo website which uses Browserify to pull in NPM modules.

# Installation:

To install `browserify` globally we can use:
```
> npm install -g browserify
C:\Users\xxx\AppData\Roaming\npm\browserify -> C:\Users\xxx\AppData\Roaming\npm\node_modules\browserify\bin\cmd.js
+ browserify@16.2.2
added 136 packages from 186 contributors in 57.453s
```

To uninstall global installation use:
```
> npm uninstall -g browserify
```

Browserify is a development tool and it is actually better to install it locally
so each project can use its own copy and so version of it. Also, if we add it to
`package.json` (via `--save-dev`) anyone who clones this project and runs
`npm install` will automatically get the right version installed.

Before we install it locally, we should first initialize Node project (create
`package.json`) with:

```
> npm init
```

We can now install Browserify locally:

```
> npm install browserify --save-dev
```

`package.json` now contains:

```
"devDependencies": {
    "browserify": "^16.2.2"
}
```


# Standard command line options:

```
> browserify
Usage: browserify [entry files] {OPTIONS}

Standard Options:

    --outfile, -o  Write the browserify bundle to this file.
                   If unspecified, browserify prints to stdout.

    --require, -r  A module name or file to bundle.require()
                   Optionally use a colon separator to set the target.

      --entry, -e  An entry point of your app

     --ignore, -i  Replace a file with an empty stub. Files can be globs.

    --exclude, -u  Omit a file from the output bundle. Files can be globs.

   --external, -x  Reference a file from another bundle. Files can be globs.

  --transform, -t  Use a transform module on top-level files.

    --command, -c  Use a transform command on top-level files.

  --standalone -s  Generate a UMD bundle for the supplied export name.
                   This bundle works with other module systems and sets the name
                   given as a window global if no module system is found.

       --debug -d  Enable source maps that allow you to debug your files
                   separately.

       --help, -h  Show this message

For advanced options, type `browserify --help advanced`.

Specify a parameter.
```

# Creating a bundle file

Our `main.js` contains line:

```
let unique = require('uniq');
```

So far we haven't installed `uniq` package so creating a bundle fails:
```
C:\dev\github\browserify-demo\browserify-demo>browserify main.js -o bundle.js
Error: Cannot find module 'uniq' from 'C:\dev\github\browserify-demo\browserify-demo'
    at C:\Users\komazec\AppData\Roaming\npm\node_modules\browserify\node_modules\browser-resolve\node_modules\resolve\lib\async.js:46:17
    at process (C:\Users\komazec\AppData\Roaming\npm\node_modules\browserify\node_modules\browser-resolve\node_modules\resolve\lib\async.js:173:43)
    at ondir (C:\Users\komazec\AppData\Roaming\npm\node_modules\browserify\node_modules\browser-resolve\node_modules\resolve\lib\async.js:188:17)
    at load (C:\Users\komazec\AppData\Roaming\npm\node_modules\browserify\node_modules\browser-resolve\node_modules\resolve\lib\async.js:69:43)
    at onex (C:\Users\komazec\AppData\Roaming\npm\node_modules\browserify\node_modules\browser-resolve\node_modules\resolve\lib\async.js:92:31)
    at C:\Users\komazec\AppData\Roaming\npm\node_modules\browserify\node_modules\browser-resolve\node_modules\resolve\lib\async.js:22:47
    at FSReqWrap.oncomplete (fs.js:158:21)
```

As the authors of the initial version of the app, we want to add this dependency
to `package.json` so when anyone clones this project and runs `npm install` 
they get `uniq` installed together with `browserify` (and other eventual
dependecies). `uniq` is not a development dependency (it has to be shipped 
together with other files in release) so we'll omit `--save-dev`. As of npm 
5.0.0, installed packages are added as a dependency by default so  we don't have
to use `--save` option.

```
> npm install uniq
```
`package.json` now contains:

```
"devDependencies": {
    "browserify": "^16.2.2"
},
"dependencies": {
    "uniq": "^1.0.1"
}
```

If we try to create a bundle now, we'll get the following error:

```
> browserify main.js -o bundle.js
'browserify' is not recognized as an internal or external command,
operable program or batch file.
```

This happens because Browserify's binary is not accessible from the current
directory (Browserify is not installed globally so its path is not added to
PATH environment variable). Its location is `\node_modules\.bin`. We don't
want to execute it from there as we'd have to use relative paths for any of its
file arguments. We can use `npx`:

```
> npx browserify main.js -o bundle.js
```

...or (better) we can define our custom command in `scripts` section of
`package.json`:

```
"scripts" : {
    "browserify" : "browserify",
    "bundle" : "browserify main.js -o bundle.js"
}
```

The first script (`"browserify"`) simply enables running locally installed 
`Browserify` via `npm run browserify`. This first comand is used in the second
one (`"bundle"`).

We can now create a bundle by executing our command:

```
> npm run bundle

> browserify-demo@1.0.0 bundle C:\dev\github\browserify-demo\browserify-demo
> browserify main.js -o bundle.js
```

`bundle.js` is now created and we can load `index.html` in the browser.


# References:

http://browserify.org/

# Additional notes

*package-lock.json* has to be added to the repository but *node_modules* should
not, together with the build/bundle output file (`bundle.js`).