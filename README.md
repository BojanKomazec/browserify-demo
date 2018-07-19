# browserify-demo
Demo website which uses Browserify to pull in NPM modules.

# Installation:
```
> npm install -g browserify
C:\Users\xxx\AppData\Roaming\npm\browserify -> C:\Users\xxx\AppData\Roaming\npm\node_modules\browserify\bin\cmd.js
+ browserify@16.2.2
added 136 packages from 186 contributors in 57.453s
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

```
> browserify main.js -o bundle.js
```

# References:

http://browserify.org/

# Additional notes

## *uniq* package installation

```
C:\dev\github\browserify-demo>npm install uniq
npm WARN saveError ENOENT: no such file or directory, open 'C:\dev\github\browserify-demo\package.json'
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN enoent ENOENT: no such file or directory, open 'C:\dev\github\browserify-demo\package.json'
npm WARN browserify-demo No description
npm WARN browserify-demo No repository field.
npm WARN browserify-demo No README data
npm WARN browserify-demo No license field.

+ uniq@1.0.1
added 1 package from 1 contributor and audited 1 package in 2.448s
found 0 vulnerabilities
```

*package-lock.json* is added to the repository but *node_modules* not.