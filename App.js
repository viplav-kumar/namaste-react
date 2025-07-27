const heading = React.createElement(
  "h1",
  { id: "heading", className: "header" },
  "Hello World! from Viplav Kumar"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
//   ReactDOM.render(heading, document.getElementById("root"));
