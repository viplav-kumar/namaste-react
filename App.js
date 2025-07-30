/**
 *
 * <div id="grandParent">
 *      <div id="parent1">
 *          <h3 id="child11">I am 1st H3 Tag of Parent-1</h3>
 *          <h3 id="child12">I am 2nd H3 Tag of Parent-1</h3>
 *      </div>
 *      <div id="parent2">
 *          <h3 id="child21">I am 1st H3 Tag of Parent-2</h3>
 *          <h3 id="child22">I am 2nd H3 Tag of Parent-2</h3>
 *      </div>
 * </div>
 *
 *
 */
import React from "react";
import ReactDOM from "react-dom/client";

const myDom = React.createElement("div", { id: "grandParent" }, [
  React.createElement("div", { id: "parent1", key: 1 }, [
    React.createElement("h3", { id: "child11", key: 1 }, "Hello Viplav!! 🚀"),
    React.createElement(
      "h3",
      { id: "child12", key: 2 },
      "I am 2nd H3 Tag of Parent-1"
    ),
  ]),
  React.createElement("div", { id: "parent2", key: 2 }, [
    React.createElement(
      "h3",
      { id: "child21", key: 1 },
      "I am 1st H3 Tag of Parent-2"
    ),
    React.createElement("h3", { id: "child22", key: 2 }, "Bye Viplav!!"),
  ]),
]);

console.log(myDom);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myDom);
//   ReactDOM.render(heading, document.getElementById("root"));
