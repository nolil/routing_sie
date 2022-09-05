import React from "react";
import { Links, Button } from "../components/layout-component";
import { OutLogin } from "../pages/account";
import { slide as Menu } from 'react-burger-menu'

class Burger extends React.Component {
  constructor(props) {
    super(props);
  }
  showSettings (event) {
    event.preventDefault();
  }
  out(){
   this.props.setState({...this.props.state, outLogin: true})  
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <>
      <Menu 
      disableAutoFocus
      >
      <div className="header-burger">
        <h1 className="bg-title">Nolil</h1>
        {this.props.state.login ?
          <> 
            <Button buttonName="bg-outLogin" buttonValue="выйти" buttonOnClick={() => this.out()}/>
           { this.props.state.outLogin === true ? <OutLogin state={this.props.state} setState={this.props.setState} cookies={this.props.cookies}/> : null}
            <div className="bg-user-name">account: <div className="login-true">{this.props.state.valueLogin}</div></div>
          </>
        :
          <div className="bg-login">
            <Links href="/login" linksName="bg-link" linksValue="login"/>
          </div>
        }
      </div>
      <div>
        <Links href="/account" linksName="bg-link" linksValue="account"/>
        <Links href="/" linksName="bg-link" linksValue="Home"/>
        <Links href="/blog" linksName="bg-link" linksValue="Blog"/>
        <Links href="/about" linksName="bg-link" linksValue="About"/>
        <Links href="/tests" linksName="bg-link" linksValue="Tests"/>
      </div>
      </Menu>
      
      </>
    );
  }
}

export default Burger;