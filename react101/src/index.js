import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import Detail from "./components/Detail"

const App=()=>{
  return(
  <div>
  <Header/> 
  <Detail/>
  </div>

  
);
}

ReactDOM.render(<App/>,document.getElementById('root'));