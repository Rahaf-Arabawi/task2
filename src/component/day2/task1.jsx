 function Greeting(props) {
  
  return <h1>Hello, {props.name}!</h1>;
}

var App =()=> {
  return (
    <div>
      <h1>Task1</h1>
      <Greeting name="Rahaf" />
    </div>
    
  );
}
export default App;