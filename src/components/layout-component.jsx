import { Link, Outlet } from "react-router-dom";
import BurgerMenu from "./burger";
import { 
  Container, 
  Nav, 
  Navbar
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styleComponent.css';

// Кастомная Кнопка
function Button({buttonValue, type="button", buttonOnClick, buttonName, buttonStyle, disabled }) {
  return(
    <button
    // тип кнопки
    type={type}
    // Ручные Стили
    style={buttonStyle}
    // Стили
    className={"button " + buttonName } 
    // Выключить Кнопку
    disabled={disabled}
    
    onClick={buttonOnClick}
    >
      {buttonValue}
    </button>
    )
}
// Кастомная Ссылка  react-router
function Links( {href = "/", linksValue = "Ссылка", linksName} ) {
  return(
    <Link 
      className={"links " + linksName}  
      to={href}
    >
      {linksValue}
    </Link>
    )
}
function LinksBack( {linksBackValue = "<- Назад", linksBack, buttonName, linksName} ) {
  return(
    <div className={"d-flex justify-content-end " + linksBack } >
      <Button buttonName={"links-back " + buttonName} buttonValue={
        <Links className={linksName} href={-1} linksValue={linksBackValue} />
      } />
    </div>
    );
}

// haeder
function HeaderNavBlack({state, setState}) {
  function HeaderLinks({ href, linksName = "nav-link", linksValue }) {
    return(
      <Links href={href} linksName={linksName} linksValue={linksValue} />
    )
  }
  
  const nameBrand = <>nolil<div className="navbar-brand-description">developing blog</div></>;
  function login(){
    if(state.login){
     return(
       <>
         <span className="login-true">
            зареган
         </span> {state.valueLogin}
       </>
       ) 
    }else{
      return(
       <>
          не зареган
       </>
      )
    }
  }
  function loginAndAccount() {
    if(!state.login){
      return("/login")
    }else{
      return("/account")
    }
  }
  function loginTittle () {
    if(!state.login){
      return("login")
    }else{
      return("account")
    }
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <HeaderLinks href="hostes" linksName="navbar-brand" linksValue={nameBrand}/>
          <Nav className="me-auto">
            <HeaderLinks linksValue="home" />
            <HeaderLinks href="/blog" linksValue="blog" />
            <HeaderLinks href="/about" linksValue="about" />
            <HeaderLinks href="/tests" linksValue="tests" />
            <HeaderLinks href={loginAndAccount()} linksValue={
              <>
                <div>{loginTittle()}</div>
                <small className="login-nav-link" style={{fontSize: '10px'}}>{login()} </small>
              </>
            } />
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
function Footer() {
  
  return (
      <footer>
        <Container className="footer-container">
          <div className="poly-conteiner">
            <Links href="/privacy-policy" linksName="links-privacy-policy" linksValue="privacy-policy" /> 
            <Links href="/" linksValue={<>&copy; nolilSite</>} />
          </div>
        </Container>
      </footer>
  );
}

function LayoutIndex({state, setState, cookies}) {
  return(
    <>
      <HeaderNavBlack state={state} setState={setState}/> 
        <Container>
          <BurgerMenu state={state} setState={setState} cookies={cookies}/>
          <Outlet />
        </Container>
        <Footer />
      </>
    
    );
}

export { LayoutIndex, Links, LinksBack, Button};