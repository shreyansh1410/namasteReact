### Lecture 2:

package-lock.json locks the version of the dependency

contains the hash of integrity.

package.json and package-lock.json are exported, not node-modules folder.

parcel.js is installed as a Dev dependency (npm i -D parcel) but react is installed only as a dependency (we need react globally not only in development environment)

using CDN is not a good way to import react (npm i react is the correct way)

react-dom also needs to be installed

npx means install

parcel has created a local server at htpp://localhost:1234

HMR - Hot Module Replacement (update web page in real time)

What is Parcel doing:

* HMR
* File Watcher Algorithm (C++)
* BUNDLING
* MINIFY
* Cleaning our code (Tree Shaking- removing unwanted code)
* Dev and production build
* Super fast build  algorithm
* Image Optimization
* Caching while develpoment (takes time initial build but very less time when run again)
* Compatible with older versions of browsers
* HTTPS on devlopment
* .parcel-cache should be put in gitignore
* Consistent Hashing Algorithm
* Zero Config Bundler (almost nil configuration needed, just install and run commands)
* Transitive Dependencies: chain of dependencies (dependency tree)

  Browserslist package (installed by default by parcel): makes app compatible with browsers

### Lecture 3:

Modify package.json so that we can use npm run start (or npm start) instead of npx parcel index.html and similarly for npx build parcel index.html (modify package.json scripts)

Babel is used to render JSX, it converts JSX code to React code which converts to object and the object is rendered as HTML DOM in Javascript

JSX is not HTML inside javascript

Babel comes as a dependency along with parcel.

Babel reads and understands JSX code.

1 package.json and 2 package-lock.json (another is inside node_modules folder)

Using ending tags to call a function is the better way compared to usign curly brackets.

At the end of the day, everything is javascript

### Lecture 4:

JSX can only have one parent element, so all content must be wrapped in a single div. But this will create lots of divs that is why React.Fragment is used. Instead of wrapping the contents in a div, we can wrap them in React.Fragment. It comes by default in React.

To avoid writing React.Fragment, we can just use empty tags instead (shorthand).

Empty tags mean React.Fragment.

Props are passed as arguments to a function and received as parameters.

In industry, map is the best way to do functional programming instead of for loops.

Concept of VirtualDOM

Why is React fast?: On detecting any change, react only re renders those specific portions detected by diff algorithm (reconciliation). To differentiate the divs, keys are used , then it will remember what needs to be updated and what was present already. React Fibre is a new reconciliation engine.

All keys should be unique.

Index should be used as a key only if there is nothing else unique. (as a last resort)

no key( illegal ) <<<<<< index key( good practice ) << unique key ( best practice )

### Lecture 5:

state, useState, Hook, export (default and named (default can only be one)), import, arranging files in partifcular folders.

### Lecture 6:

Why do we use state variables and not global variables: beacuse React uses reconciliation and it only keeps track of state variables and not local variables

useEffect: a hook (fxn); called by giving two parameters: one is a callback function and the other a dependency array.

useState is a hook which React gives you to loacal state variables inside a functional component.

We can create multiple useEffects

First the code is rendered and then the useeffect is called. useeffect is also the best place to make API calls.

Inside the curly brackets of JSX, we can write any JS code (only expressions, not statements)

Microservice Architecture / Monolith

### Lecture 7:

Do not create a component inside another component as the component will be created everytime the page is rendered

Dont write useState inside if else or for loop.

Why is CDN a great place to store images?

Don't import packages for small things, only when things get complicated.

All the children will go into outlet.

Make a component for everything that makes our code:

* Modular
* Reusable
* Testtable
* Maintainable

Hooks used: useRouteError, useParams, routerProvider

### Lecture 8: 

Class Components

React life cycles
