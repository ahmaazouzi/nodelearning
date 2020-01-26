# Node Package Manager (NPM):
## Long vs Short Commands/Flags:
- `npm -v` -> one hyphen and a letter
- `npm --version` -> two hyphens and full word.

## `package.json` File:
- Holds all dependencies (names and versions) and other info. Specifies which packages are to be updated and allow for using npm scripts.
- **`npm init`** creates a package.json file. It asks a series of questions and gives default answers to unanswered ones. Answers are used to populate basic info in the file.
**`npm -y`** or **`npm --yes`** allows you to create a package.json and doesn't ask any questions. It fills some default answers for you.
- Default values can also be set, using either **`npm config set <value>`** or **`npm set <value>`**. For example:
```sh
npm set init-author-name "ahmaazouzi" 
npm config set init-author-name "ahmaazouzi" 
```
- **`npm config ls -l`** allows you to find the names of and values of the defaults you want to set.
- **`npm get init-author-name`** allows you to get a certain default value. `init-author-name` here an example of such a value.
- **`npm config delete init-author-name`** deletes the default name you set and restores the default value that comes with npm.

## Installing and Using a Dependency:
- **`npm install lodash`** installs a package.
- When using `install`, a directory called **`node-modules`** gets created. It has all the dependencies of your project and the dependencies of your dependencies.
- **`npm install lodash --save`** installs *lodash* (a popular library) and adss it as a dependency to the current project/package?!
- **`npm install`** is used when you have a json package that has akk the dependencies you need. This command takes care of installing such dependencies. When you want to publish a package, you only need the modules you write along with the package.json where all the dependencies are marked. When a user install your package, the dependencies will be installed along with it automatically.

## Dev Dependencies:
- These are used for development rather than production such as the **gulp**. They can be installed with the following command:
**`npm install --save-dev gulp`**
- **`npm install --production`** will filter out dev dependencies so they don't get installed when running `npm install`.

## Uninstalling Dependencies:
- **`npm uninstall lodash`**.
- **`npm uninstall gulp --save-dev`** for uninstalling a dev dependency.
- **`npm rm`** does also uninstalls packages.

## Installing Specific a Version of a Package:
- **`npm install lodash@3.5.5 --save`** followed by
allows you to install version 3.5.5 (if such one exists) of the lodash library.

## Updating a Package:
- **`npm update lodash`** updates a specific package to its latest version.
- **`npm update`** updates all the dependencies to their laest versions and adds missing packages.

## Semantic Versioning:
- A package version is divided into 3 parts, for example: **1.14.22**. In this example:
	+ **Patch** is for bug fixes. It is **22** in the example
	+ **Minor version** is for small features that don't break the API.
	+ **Major Version** is for big changes that break the API.
- You will see dependency versions preceded by symbol of some sort as in **`^1.14.22`**. Different versions will be installed based on such symbol:

| Symbol | Use |
| --- | --- |
| **`^1.14.22`** | Installs the latest minor version 
| **`~1.14.22`** | Installs latest patch version
| **`1.14.22`** | Installs the exact given version
| **`*`** | Installs the latest version

## Global Modules:
- To install a module globally, use the **`-g`** flag.
- **`npm root -g`** allows you to find where global modules are installed.

## Listing Modules:
- **`npm ls`** or **`npm list`** show a list of installed modules. You can get a global version with **`-g`** flag as you already know.
- **`npm ls --depth 0`** allows you to specify the depth of dependencies.

## NPM Scripts:
- scripts are similar to bash aliases. You can for examples specify a way to start your application in similar ways that react is started for example. an example would be:
```json
  "scripts": {
    "start": "node index.js"
  }
```



