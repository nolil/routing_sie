import React, { useState, useEffect } from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
let offLoading;

const PreLoading: React.FC = ({loading}) => {
  const [asyncData, setAsyncData] = useState();
    
    useEffect(() => {
        setTimeout(() => {
            setAsyncData("something");
        }, 2000);
    }, []);
  return (
    <>
    {!asyncData && cookies.get('preLoading') === "true" ?
      <div className="pre-loading">Loading...</div>
    : 
      null
    }
    {loading}
    </>
  );
}
export { PreLoading };