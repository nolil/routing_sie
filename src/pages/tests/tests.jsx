import React from "react";
import { LinksBack, Links, Button } from "../../components/layout-component";
import link from '../../095-link-2.svg';

function Tests({state, setState, navigate}) {
  
  if(!state.login){
    navigate("/login")
  }else{
    return (
      <div className="page-tests">
      
          
          <>
            <div className="tests-navigation">
               <div>
                  <Button buttonValue={
                    <>
                      <img className="img-links" width="14px" height="14px" src={link} alt="link" />
                      <Links href="/tests/useState" 
                      linksValue="useState" />
                    </>
                  }/>
                  <b>useState</b> нужен для обнавление компонента и изменение разного, пример этого сщечик
               </div>
            </div>
            <LinksBack linksBackValue="<- Назад"/>
          </>
      </div>  
    );
  }
}

export { Tests };