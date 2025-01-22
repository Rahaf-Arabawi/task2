import React,{useState} from "react";

 export default function Paragraph(){
 var [isVisible,setisVisible]=useState(false)
 var isVisible=()=>{
    setisVisible(!isVisible)
 }
 return( 
     <div>
        <h1>Task9</h1>
         <button onClick={isVisible}>
         Show/Hide Task
         </button>
         
     </div>
 )
 }
