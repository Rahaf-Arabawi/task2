import React,{useState} from "react";

 function Con(){
 const[state, setState] = useState(0);
 const  increment=()=> setState(state+1)
 const  descrement=()=> setState(state-1)
 return( 
     <div>
        <h1>Task8</h1>
         <h3>Counter</h3>
         <h3>{state}</h3>
         <button onClick={increment}>Increment</button>
         <button onClick={descrement}>Decrement</button>
     </div>
 )
 }
 export default Con;