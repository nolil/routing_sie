import React from "react";
import { LinksBack} from "../components/layout-component";



function Login({state, setState, cookies, navigate}) {
  function handleChange(event) {
    setState({...state, valueLogin: event.target.value});
  }
  function handleChangePass(event) {
    setState({...state, valuePass: event.target.value});
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    state.users.forEach((element) => {
      for (var key in element) {
        if((element.name === state.valueLogin) && (element.pass === state.valuePass || state.login === cookies.get('setLogin'))){
          setState({...state, login: true, nameUser: element.name, outLogin: false});
          cookies.set("login", state.valueLogin, { path: '/' });
          cookies.set("password", state.valuePass, { path: '/' });
          cookies.set("setLogin", true, { path: '/' }); 
          navigate("/account");
        }
      }
    });
  }
  return (
    <div className="page-login">
    <h2>Авторизация</h2>
      <form className="login" onSubmit={handleSubmit}>
        <label>
          <input type="login" name="login" value={state.valueLogin} onChange={handleChange} placeholder='login' /><br />
          <input type="password" name="pass" value={state.valuePass} onChange={handleChangePass} placeholder='password' />
        </label>
        <div className="d-flex justify-content-end " >
          <input className="login-submit" type="submit" value="Submit" />
        </div>
      </form>
  
      <LinksBack linksBackValue="<- Назад"/>
    </div>  
  );
}

export { Login };