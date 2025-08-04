import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement(
  "h1",
  { id: "myHeader" },
  "Namastey React 🚀"
);

const jsxHeading = <h1 id="JSXHeading">Namastey React from JSX 🚀</h1>;

const Title = () => <h3>My custom header component.</h3>;
function Footer() {
  return <h3>My custom footer component.</h3>;
}

const HeadingComponent = () => {
  return (
    <>
      <Title />
      <h2>Namastey React ~ Viplav Kumar</h2>
      {Footer()}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent></HeadingComponent>);
