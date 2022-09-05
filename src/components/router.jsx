import React from "react";
import { LayoutIndex } from './layout-component';
import { Routes, Route, useNavigate } from "react-router-dom";

//pages
import { Index } from '../pages/index';
import { Home } from '../pages/home';
import { Blog } from '../pages/blog';
import { About } from '../pages/about';
import { PrivacyPolicy } from '../pages/Privacy-policy';
import { Notfound } from '../pages/notfound';
import { Tests } from '../pages/tests/tests';
import { Login } from '../pages/login';
import { Account } from '../pages/account';

//tests-component
import UseStateTests from '../useStateTests';

import '../pages/pagesStyle.css';


function Router({state, setState, cookies}) {
  const navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route path="/hostes" element={<Index />} />
        <Route path="/" element={<LayoutIndex state={state} setState={setState} cookies={cookies}/>}>
            <Route index element={<Home />} />
            <Route path="/hostes" element={<Index />} />
            <Route path="/blog" element={<Blog title="hello" descriprion="ну блять да" />} />
            <Route path="/about" element={<About />} />
            <Route path="/tests" element={<Tests state={state} setState={setState} navigate={navigate} />} />
            <Route path="/tests/useState" element={<UseStateTests state={state} setState={setState} />} />} 
            <Route path="/login" element={<Login state={state} setState={setState} cookies={cookies} navigate={navigate}/>} />
            <Route path="/account" element={<Account state={state} setState={setState} navigate={navigate} cookies={cookies}/>} />
            <Route path="*" element={<Notfound />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </>
  );
}

export { Router };
