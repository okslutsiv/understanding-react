const rootNode = document.getElementById("app");
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);

function App() {
  return (
    <>
      <h1>Counters</h1>
      <section>
        <Counter name="One" />
      </section>
    </>
  );
}

function Counter(props) {
  const numOfClicksRef = React.useRef({ total: 0 });
  const buttonRef = React.useRef();
  const [count, setCount] = React.useState(0);

  function handleClick() {
    numOfClicksRef.current.total = numOfClicksRef.current.total + 1;
    alert(`You've clicked ${numOfClicksRef.current.total} times.`);
    console.log(root);
  }

  console.log("running Counter");

  React.useEffect(() => {
    buttonRef.current.focus();
  }, []);

  return (
    <article>
      <h2>Counter {props.name}</h2>
      <p>You clicked {numOfClicksRef.current.total} times</p>
      <p>You setted count to be {count}</p>

      <p>
        <button className="button" onClick={handleClick} ref={buttonRef}>
          Click me to change ref current
        </button>{" "}
        <button
          className="button"
          onClick={() => setCount((count) => count + 2)}
        >
          Click me to change state
        </button>
      </p>
    </article>
  );
}
