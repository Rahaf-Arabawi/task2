import React from "react";

const ProductCard = (props) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", width: "300px", margin: "10px" }}>
      <h4>{props.UserName}</h4>
      <h4>{props.Email}</h4>
      <h4>{props.Age}</h4>
    </div>
  );
};


const App = () => {
  return (
    <div>
        <h1>Task4</h1>
       <ProductCard UserName="Rahaf"
        Email="rahaf@gamil.com"
        Age="21" />
        
       
       
      
    </div>
  );
};

export default App;





 