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
* Cleaning our code
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
