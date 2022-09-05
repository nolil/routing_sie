import React, { useState } from "react";
import { LinksBack, Button } from "./components/layout-component";

export default function useStateTests() {
  var i = 0;
  var data = { nam: i, bl: true, ml: 5 };
  const [state, setState] = useState(data);
  function setPlus() {
    setState({
      ...state,
      nam: (state.nam += 1),
      ml: (state.ml -= 1),
    });
    if (!state.bl) {
      setState({
        ...state,
        bl: true,
      });
    }
  }
  function setMinus() {
    setState({
      ...state,
      nam: (state.nam -= 1),
      ml: (state.ml += 1),
    });
    if (state.bl) {
      setState({
        ...state,
        bl: false,
      });
    }
  }
  return (
    <div className="page">
      <h1 className={"d-flex justify-content-center "}>
        {state.nam} {state.bl.toString()}
      </h1>
      <div className="test-useState justify-content-center">
        <Button buttonOnClick={setPlus} buttonValue="установить +1 " />
        <Button buttonOnClick={setMinus} buttonValue="установить -1 " />
        <Button
          buttonOnClick={() => setState(data)}
          buttonValue="  изменить состояние по умолчанию "
        />

        {state.bl && state.ml <= 5 && state.ml > 0 ? (
          <div>молодец еще {state.ml}</div>
        ) : null}

        {state.bl && state.ml === 0 ? <div>о</div> : null}

        {state.nam <= -10 ? <div>долбаеб?</div> : null}
      </div>
      <LinksBack linksBackValue="<- Назад" />
    </div>
  );
}
