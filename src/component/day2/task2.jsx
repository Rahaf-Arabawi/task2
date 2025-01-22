const DynamicButton = (props) => {
    return (
      <button onClick={props.onClick}>
        {props.label}
      </button>
    );
  };
  
  const App = () => {
    const handleClick = (label) => {
      alert(`You clicked on: ${label}`);
    };
  
    return (
      <div>
        <h1>Task2</h1>
        <DynamicButton label="Click Me" onClick={() => handleClick("Click Me")} />
      </div>
    );
  };
  export default App;
  