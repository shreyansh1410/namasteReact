# Assignment 1 solutions:

### Question 1: What is an emmet?


Emmet is a highly efficient and powerful toolkit for web developers and front-end designers that helps streamline and accelerate the process of writing HTML and CSS code. It allows you to write code using shorthand abbreviations, which are then expanded into full HTML and CSS code. This can significantly increase your productivity when creating web pages.

Emmet originated as a plugin for text editors and integrated development environments (IDEs) like Visual Studio Code, Sublime Text, and others. Here are some key features and benefits of Emmet:

1. **Abbreviations:** Emmet allows you to use abbreviations to represent HTML and CSS structures. For example, you can type `div#my-container>ul.list>li.item*3`, and Emmet will expand it into:

   ```html
   <div id="my-container">
       <ul class="list">
           <li class="item"></li>
           <li class="item"></li>
           <li class="item"></li>
       </ul>
   </div>
   ```
2. **Nested Structures:** Emmet supports nesting, so you can create complex HTML structures quickly and easily. This is especially useful for creating lists, tables, and nested elements.
3. **CSS Properties:** Emmet can also be used for generating CSS properties and values quickly. For example, `bgc:red` can be expanded to `background-color: red;`.
4. **Math Operations:** Emmet allows for simple math operations within your abbreviations. For instance, `ul>li.item*3$$` will create three list items with classes "item1," "item2," and "item3."
5. **Customization:** You can customize Emmet's behavior and abbreviations to fit your coding style and preferences.
6. **Support for Various Editors:** Emmet is available as a plugin or built-in feature in many popular code editors, making it accessible to a wide range of developers.

Emmet is especially useful for front-end developers who work with HTML and CSS on a regular basis. It helps reduce the amount of manual typing and minimizes human error while speeding up the coding process. If you're looking to improve your web development workflow, Emmet is a tool worth exploring, especially if your text editor or IDE supports it.


### Question 2: Difference between library and framework

In JavaScript, both libraries and frameworks are tools that developers use to streamline and simplify the process of building web applications. However, they serve different purposes and have distinct characteristics:

1. Library:

   - A library is a collection of pre-written functions, modules, or classes that you can use to perform specific tasks in your code.
   - Libraries are typically focused on providing specific functionality, such as DOM manipulation, AJAX requests, or animations.
   - Developers have more control over their code when using libraries because they can choose which parts of the library to include in their project and how to use them.
   - Libraries are often seen as a set of tools that you can use to enhance your code, but they don't impose a specific structure or flow on your application.

   Example JavaScript libraries include jQuery (for DOM manipulation), Axios (for making HTTP requests), and D3.js (for data visualization).
2. Framework:

   - A framework is a more comprehensive and opinionated tool that provides a structured architecture and a set of rules or conventions for building applications.
   - Frameworks often dictate the overall structure of your application, including how data is managed, how components are organized, and how the application flows.
   - Developers typically need to follow the framework's prescribed patterns and conventions, which can make development faster but may also limit flexibility.
   - Frameworks usually come with built-in features and components, which can help developers avoid reinventing the wheel for common tasks.

   Example JavaScript frameworks include Angular, React, and Vue.js (for building user interfaces), and Express.js (for building server-side applications).

In summary, the main difference between a library and a framework in JavaScript is the level of control and structure they offer. Libraries are more flexible and allow you to pick and choose specific functionalities, while frameworks provide a more structured and opinionated approach to application development. The choice between using a library or a framework depends on your project's requirements and your preferred development style.


### Question 3: What is CDN? Why do we use it?

CDN stands for Content Delivery Network. It is a distributed network of servers strategically located in multiple geographic locations around the world. The primary purpose of a CDN is to improve the performance, reliability, and availability of delivering web content, such as images, videos, stylesheets, JavaScript files, and other resources, to end-users.

Here's why CDNs are used:

1. **Faster Content Delivery:** CDNs reduce the physical distance between the user and the server delivering the content. When a user requests a resource, the CDN serves it from the server geographically closest to the user, reducing latency and speeding up content delivery. This results in faster page loading times, which is crucial for a positive user experience.
2. **Load Distribution:** CDNs distribute the load across multiple servers, which helps prevent overload on a single server and ensures that websites and applications remain responsive even during traffic spikes or DDoS attacks. This load distribution improves the scalability and availability of web services.
3. **Caching:** CDNs cache static content like images, scripts, and stylesheets on their servers. When a user requests a cached resource, it's served directly from the CDN server without requiring a round-trip to the origin server. Caching reduces the load on the origin server and further improves response times.
4. **Global Reach:** CDNs have server locations around the world, which means content can be delivered to users from a nearby server. This global reach is especially beneficial for websites with a global audience, as it ensures a consistent experience for users regardless of their location.
5. **Content Security:** CDNs often include security features like DDoS protection, web application firewall (WAF), and SSL/TLS encryption, which help safeguard websites and applications from various cyber threats and attacks.
6. **Cost Savings:** CDNs can help reduce bandwidth costs for website owners, as they offload a significant portion of the traffic from the origin server. Additionally, CDNs can optimize content delivery to reduce the data transfer costs associated with serving web content.

Popular CDN providers include Cloudflare, Akamai, Amazon CloudFront, and Fastly, among others. To use a CDN, website and application owners typically configure their DNS settings to point to the CDN provider's servers. This directs traffic through the CDN, allowing it to handle content delivery efficiently.


### Question 4: Why is React known as React?

React.js is often referred to simply as "React" because it is the official name and commonly used shorthand for the JavaScript library developed by Facebook. The name "React" originates from the library's primary purpose, which is to help developers build user interfaces that react to changes in data.

React was initially created by Jordan Walke, a software engineer at Facebook, and was first deployed on Facebook's newsfeed in 2011. It was later open-sourced as "React" in 2013, allowing developers outside of Facebook to use and contribute to the project.

The name "React" reflects the core concept of the library, which is to efficiently update and re-render parts of a web page when data changes, without requiring a full page reload. This reactivity is achieved through the use of a virtual DOM (Document Object Model) and a component-based architecture. Developers can define UI components that encapsulate their own rendering logic, making it easier to manage and update complex user interfaces.

React has become incredibly popular and is widely used for building dynamic and interactive web applications. Its simplicity, flexibility, and focus on component reusability have made it a cornerstone of modern front-end development, and as a result, it's commonly known simply as "React" in the developer community.


### Question 5: What is crossorigin in script tag?

The `crossorigin` attribute in a `<script>` tag is used to specify how the browser should handle cross-origin requests when loading JavaScript files. Cross-origin requests occur when a web page hosted on one domain attempts to fetch a resource, such as a script, from a different domain. Web browsers have security restrictions in place to prevent certain types of cross-origin requests for security reasons, and the `crossorigin` attribute helps define the behavior in such situations.

The `crossorigin` attribute can have several values:

1. **Anonymous (Default):** When you don't specify the `crossorigin` attribute, or you set it to "anonymous," the browser will load the script without sending any credentials (such as cookies or HTTP authentication) along with the request. This is the default behavior and is suitable for most scenarios.

   ```html
   <script src="https://example.com/scripts/myscript.js" crossorigin="anonymous"></script>
   ```
2. **Use-Credentials:** If you set the `crossorigin` attribute to "use-credentials," the browser will include credentials (e.g., cookies) with the request when fetching the script. This is typically used when you have a specific need to send authentication information to the server hosting the script.

   ```html
   <script src="https://example.com/scripts/myscript.js" crossorigin="use-credentials"></script>
   ```

The `crossorigin` attribute is most commonly used when loading external scripts hosted on different domains, and it is particularly important when dealing with features like Cross-Origin Resource Sharing (CORS). CORS is a security feature that determines whether a web page can make requests to a different domain, and the `crossorigin` attribute helps browsers enforce CORS policies when fetching resources like scripts.

In most cases, setting `crossorigin="anonymous"` is sufficient for loading external scripts, as it allows the browser to fetch the script without sending sensitive user credentials. However, if your application requires authentication to access the script, you can use `crossorigin="use-credentials"` while also configuring the server hosting the script to accept credentials from your origin.


### Question 6: Difference between React and ReactDOM

React and ReactDOM are two separate packages provided by the React ecosystem, and they serve different purposes in the process of building web applications using React.

1. **React:**

   - React, often referred to as "React Core" or simply "React," is the core library that provides the fundamental building blocks for creating user interfaces. It includes the following key concepts:
     - Components: React allows you to define reusable UI components that encapsulate the rendering logic and state management.
     - Virtual DOM: React maintains a virtual representation of the actual DOM, making it efficient to update and render changes in response to data or user interactions.
     - JSX: React uses JSX (JavaScript XML) syntax, which allows you to write UI components in a declarative manner, mixing HTML-like markup with JavaScript.
     - State and Props: React components can manage their own state and receive data from parent components via props.
     - Component Lifecycle: React components have lifecycle methods that allow you to perform actions at specific points in the component's life, such as when it's mounted or updated.
2. **ReactDOM:**

   - ReactDOM, on the other hand, is a package that focuses on the integration of React with the actual DOM (Document Object Model) of the web browser. It provides the necessary functionality to render React components into the real DOM and manage the interaction between React and the browser's DOM.
   - ReactDOM contains methods for rendering React components into a specific DOM element and updating them as necessary when data or state changes. The key methods include `ReactDOM.render()`, `ReactDOM.hydrate()` (for server-side rendering), and `ReactDOM.unmountComponentAtNode()`.

In summary, React is the core library for building user interfaces in a declarative and component-based manner, while ReactDOM is a package that deals with the rendering of React components into the browser's DOM. You typically use both React and ReactDOM together when building web applications. React provides the component logic and structure, while ReactDOM handles the rendering of those components in the web page.


### Question 7: Difference between react.development.js and react.production.js

React provides two different versions of its JavaScript library: `react.development.js` and `react.production.js`. These versions are optimized for different stages of the development process, and they serve distinct purposes:

1. **react.development.js:**

   - This is the development version of React.
   - It includes additional warnings, error messages, and debugging information that can be helpful during development and debugging phases.
   - The development version of React is larger in size due to the extra debugging code and warnings. It is not suitable for production use because the additional code can impact performance.
   - It helps developers identify issues, such as improper use of React features, and provides more detailed error messages to aid in troubleshooting.

   When including the development version of React in your project, you typically use it during the development and testing phases to catch and address any errors or issues in your code.
2. **react.production.js:**

   - This is the production version of React.
   - It is optimized for performance and does not include the extra debugging information and warnings found in the development version.
   - The production version of React is smaller in size, which reduces the overall bundle size of your application and helps improve page load times for end-users.
   - It is intended for use in production environments where the focus is on delivering the best possible performance.

   When you are ready to deploy your application to a production server or make it accessible to users, you should switch to using the production version of React to ensure optimal performance.

The choice between these two versions of React depends on the stage of development and the deployment environment:

- During development and testing, it's common to use `react.development.js` to take advantage of the debugging features and warnings to catch and fix issues.
- When deploying your application to a production environment, you should switch to `react.production.js` to ensure that your application is as performant and efficient as possible.

You can also use build tools and configuration settings to automatically switch between these versions based on the development or production environment, so you don't have to manually change the script references in your HTML file when deploying your application.


### Question 8: What is async and defer

The way you include JavaScript files in your HTML using `<script>` tags can affect the loading and execution behavior of those scripts. There are three commonly used attributes for the `<script>` tag: `async`, `defer`, and no attribute (normal). Each of them has different implications for how the scripts are downloaded and executed.

1. **Normal (No Attribute):**

   - When you include a script without any attributes, it is fetched and executed immediately, blocking the parsing of HTML.
   - This means that the script will be fetched and executed before the browser continues parsing and rendering the rest of the HTML page.
   - It's best to include scripts at the end of the `<body>` tag to minimize their impact on page loading and rendering. However, this may not always be possible, especially for scripts that need to be loaded in the `<head>` section.

   ```html
   <script src="script.js"></script>
   ```
2. **Async Attribute:**

   - When you include the `async` attribute in the `<script>` tag, the script is fetched asynchronously while HTML parsing continues.
   - As soon as the script is downloaded, it is executed without blocking the HTML parsing. The order in which `async` scripts are executed may not be guaranteed to be sequential.
   - This is useful for scripts that don't rely on the order of execution and can run independently, such as analytics scripts.

   ```html
   <script src="script.js" async></script>
   ```
3. **Defer Attribute:**

   - When you include the `defer` attribute in the `<script>` tag, the script is fetched asynchronously, but it is executed in order and only after the HTML parsing is complete.
   - This ensures that the script is executed in the order in which it appears in the HTML document, right before the `DOMContentLoaded` event is fired.
   - `defer` is useful when you need to ensure that scripts don't interfere with the HTML parsing but should still run in a predictable order.

   ```html
   <script src="script.js" defer></script>
   ```

Choosing the appropriate attribute depends on your specific use case:

- Use `async` for scripts that can be loaded and executed independently and don't rely on the order of execution.
- Use `defer` for scripts that should be executed in order and after the HTML parsing is complete. This is often the best choice for application-specific scripts.
- For critical scripts that need to be loaded synchronously and execute immediately, you can use the normal script tag without any attributes.

In modern web development, it's common to use `defer` or `async` attributes to optimize page loading and rendering performance while ensuring that scripts are executed correctly.
