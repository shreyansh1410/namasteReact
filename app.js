import React from "react";
import ReactDOM from "react-dom/client";

// const heading1 = React.createElement("h1", {
//     id: "heading1"
// }, "Heading 1 of parcel");

// const heading2 = React.createElement("h2", {
//     id: "heading2"
// }, "Heading 2");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const container = React.createElement("div",{
//     id: "container"
// }, [heading1, heading2]);

// root.render(container);

//react element written in JSX
const Title = (
    <h1 id="title" key="h1">
        Namaste React!
    </h1>
);


//Functional Components
//return statement can be avoided
//there can only be 1 parent in one tag (only one div tag)
const HeaderComponent = () => {
    return (
        <div>
            {Title}
            <h2>Namaste React functional component</h2>
            <h2>This is an h2 tag</h2>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);