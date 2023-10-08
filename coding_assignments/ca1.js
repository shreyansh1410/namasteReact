import { createElement as ce } from "react";
import ReactDOM from "react-dom";

// const title = ce(
//     "div",
//     {
//         className: "title"
//     },
//     ce("h1", {}, "this is h1"),
//     ce("h2", {}, "this is h2"),
//     ce("h3", {}, "this is h3")
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(title);

//same thing with JSX element

// const Title2 = () => {
//     return (
//     <div>
//         <h1>This is h1</h1>
//     </div>
// )
// };

//same thing using functional component
//composition of components
//using ending tags to call a function is the better way compared to usign curly brackets
// const Title3 = () => {
//     return (
//         <div>
//             {Title2()}
//             <Title2/> 
//             <h2 key="5678">This is h2</h2>
//             <h3 key="8901">This is h3</h3>
//         </div>
//     )
// };

const Header = () => {
    return (
        <div id="header">
            <div id="logo">
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="random image from internet"></img>
            </div>
            <div id="search">
                <form>
                    <input type="search" placeholder="Search"></input>
                    <button>Submit</button>
                </form>
            </div>
            <div id="icon">
                <img src="https://cdn-  icons-png.flaticon.com/512/666/666201.png" alt="Random user image"></img>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);