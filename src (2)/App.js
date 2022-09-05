import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/router";
import React, { useState, useEffect } from "react";
import Cookies from 'universal-cookie';
//import TodoList from "./todoList";

function App(){
  const cookies = new Cookies();
  const [state, setState] = useState({
    login: false,
    valueLogin: null,
    valuePass: null,
    users: [ 
      {
        name: "nolil",
        pass: "00"
      },
      {
        name: "vova",
        pass: "11"
      },
      {
        name: "dima",
        pass: "12"
      },
      {
        name: "diana",
        pass: "love"
      },
    ]
  });
  useEffect(() => {
    if(state.login === false && cookies.get('valueLogin') !== ''){
      setState({...state, login: cookies.get('setLogin'), valueLogin: cookies.get('login'), valuePass: cookies.get('password')});
        
    }
  }, []);
  
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Router state={state} setState={setState} cookies={cookies}/>
      </BrowserRouter>
    </div>
  );
}
export default App;