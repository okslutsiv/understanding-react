import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);

console.log(root);
const sayHello = () => {
  console.log("running function");
  return _jsx("p", {
    children: "Hello from function!",
  });
};

const hello = _jsx("p", {
  children: "Hello from const!",
});

root.render(_jsx(App, {}));

let counterName = "One";
function App() {
  const counterOne = _jsx(Counter, {
    name: counterName,
  });
  const counterTwo = _jsx(Counter2, {
    name: counterName,
  });
  return _jsxs("main", {
    children: [
      _jsx("h1", {
        children: "Counters",
      }),
      _jsxs("section", {
        children: [
          counterName === "One" ? counterOne : counterTwo,
          _jsx("button", {
            children: "Click me",
          }),
          sayHello(),
        ],
      }),
    ],
  });
}
function Counter({ name }) {
  return _jsxs("article", {
    children: [
      _jsxs("h2", {
        children: ["Counter ", name],
      }),
      _jsx("p", {
        children: "You clicked 1 time",
      }),
    ],
  });
}
function Counter2({ name }) {
  return _jsxs("article", {
    children: [
      _jsxs("h2", {
        children: ["Counter ", name],
      }),
      _jsx("p", {
        children: "Times clicked 2",
      }),
    ],
  });
}
function rerender() {
  console.log("Rerendering...");
  counterName = "Two";
  root.render(_jsx(App, {}));
}
console.log(App());
