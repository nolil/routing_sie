import { LinksBack, Links, Button } from "../components/layout-component";
function OutLogin({cookies, setState, state}){
    console.log(state);
    if(state.login){
      cookies.remove('login')
      cookies.remove('password')
      cookies.remove('setLogin')
      
      setState({...state, login: false})
    }
  }
function Account({state, setState, navigate, cookies}) {
  if(!state.login){
    navigate("/login")
  }else{
    return (
      <div className="page-login">
      <h1>Это твой аккаунт: {state.valueLogin}</h1>
      <h1>Это твой пароль: {state.valuePass}</h1>
      <div>теперь ты можешь попасть в <Links href="/tests" linksValue={<u>tests</u>} /> и его категории</div>
        <Button buttonValue="выйти из аккаунта" buttonOnClick={() => OutLogin({cookies, setState, state})}/>
        <LinksBack linksBackValue="<- Назад"/>
      </div>  
    );
  }
}

export { Account, OutLogin };
