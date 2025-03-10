/*
<div id="parent">
    <div id="child">
        <h1>I am an h1 tag</h1>
    </div>
</div>

ReactElement(Object) => HTML(Browsers Understands)
*/

const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement("div", {id:"child1"}, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
    ]),
    React.createElement("div", {id:"child2"}, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
    ]),
);

/*const heading = React.createElement(
    "h1",
     {id: "heading", xyz: "abc"}, 
     "Hello World from React!");
*/
console.log(parent); //object     

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);