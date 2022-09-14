import React, { useEffect } from "react";
import { LinksBack} from "../components/layout-component";
import link from '../095-link-2.svg';

function Login({state, setState, cookies, navigate}) {
  console.log('ошибка из за froms из за постоянно обнавленния выводит ошибку нужно forms добавлять в классовый компанент')
  function authTittle(event) {
    if(!state.loginTittleViwe){
      setState({...state, loginTittleViwe: true})
    } else if(state.loginTittleViwe) {
      setState({...state, loginTittleViwe: false})
    }
  }
  function errLoginInput(event) {
    if(!state.errLoginInput){
      setState({...state, errLoginInput: true})
    } else if(state.errLoginInput) {
      setState({...state, errLoginInput: false})
    }
  }
  function errAuth(event) {
    if(!state.errAuth){
      setState({...state, errAuth: true})
    } else if(state.errAuth) {
      setState({...state, errAuth: false})
    }
  }
  function inputCangeOne(event) {
    setState({...state, valueLogin: event.target.value});
  }
  function inputCangeTwo(event) {
    setState({...state, valuePass: event.target.value});
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    if(state.valuePass && state.valueLogin){
      state.users.forEach((element) => {
        for (var key in element) {
          if((element.name === state.valueLogin) && (element.pass === state.valuePass)){
            setState({...state, login: true, nameUser: element.name, outLogin: false});
            cookies.set("login", state.valueLogin, { path: '/' });
            cookies.set("password", state.valuePass, { path: '/' });
            cookies.set("loginSaved", state.valueLogin, { path: '/' });
            cookies.set("passwordSaved", state.valuePass, { path: '/' });
            cookies.set("setLogin", true, { path: '/' }); 
            navigate("/account");
            if(cookies.get('login') === "nolil"){
              cookies.set("preLoading", false, { path: '/' }); 
            }else{
              cookies.set("preLoading", true, { path: '/' }); 
            }
          }
        }
      });
      if(state.valueLogin != cookies.get('login') && state.valueLogin != cookies.get('password')){
        setState({...state, errAuth: true})
      }
    }else if (!state.valuePass || !state.valueLogin){
      setState({...state, errLoginInput: true})
    }
  }
  return (
    <div className="page-login">
    <h2 onClick={authTittle}>Авторизация <img style={{position: "absolute"}} width="14px" height="14px" src={link} alt="link" /></h2>
      <form className="login" onSubmit={handleSubmit}>
        <label>
          <input type="login" name="login" value={state.valueLogin} onChange={inputCangeOne} placeholder='login' /><br />
          <input type="password" name="pass" value={state.valuePass} onChange={inputCangeTwo} placeholder='password' />
        </label>
        <div className="d-flex justify-content-end " >
          <input className="login-submit" type="submit" value="Submit" />
        </div>
      </form>
  
      <LinksBack linksBackValue="<- Назад"/>
      {
        state.loginTittleViwe ? 
        <div onClick={authTittle} className="login-tittle-viwe">
          <h1>внимание</h1>
          <p>
            ты долбаеб что нажал <br />
            сам чтоли не знаешь что такое <b>login</b>?
          </p>
        </div>
        :
        null
      }
      {
        state.errLoginInput == true ?
        <div onClick={errLoginInput} className="login-tittle-viwe">
          <h1>внимание</h1>
          <p>
            ты долбаеб, что забыл в писать в полях <br />
            <b>логин</b> И <b>пароль</b>
            
          </p>
        </div>
        :
        null
      }
      {
        state.errAuth == true ?
        <div onClick={errAuth} className="login-tittle-viwe">
          <h1>внимание</h1>
          <p>
            ты неверно вел<br />
            <b>логин</b> И/ИЛИ <b>пароль</b>
            
          </p>
        </div>
        :
        null
      }
    </div>  
  );
}

export { Login };