const rootNode = document.getElementById("root");

const root = ReactDOM.createRoot(rootNode);

console.log(root);

const sayHello = () => {
  console.log("running function");
  return React.createElement("p", null, "Hello from function!");
};

const hello = React.createElement("p", null, "Hello from const!");
root.render(React.createElement(App));
let counterName = "One";

function App() {
  return React.createElement(
    "main",
    null,
    React.createElement("h1", null, "Counters"),
    React.createElement(
      "section",
      null,
      counterName === "One"
        ? React.createElement(Counter, { name: counterName })
        : React.createElement(Counter2, { name: counterName })
    ),
    React.createElement("button", null, "Click me"),
    sayHello()
  );
}

function Counter({ name }) {
  return React.createElement(
    "article",
    null,
    React.createElement("h2", null, `Counter ${name}`),
    React.createElement("p", null, "You clicked 1 time")
  );
}

function Counter2({ name }) {
  return React.createElement(
    "article",
    null,
    React.createElement("h2", null, `Counter ${name}`),
    React.createElement("p", null, "Times clicked 2")
  );
}

function rerender() {
  console.log("Rerendering...");
  counterName = "Two";
  root.render(React.createElement(App));
}

console.log(App());
