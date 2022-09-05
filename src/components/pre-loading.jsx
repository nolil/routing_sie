import React, { useState, useEffect } from "react";

const PreLoading: React.FC = ({loading}) => {
  const [asyncData, setAsyncData] = useState();
    
    useEffect(() => {
        setTimeout(() => {
            setAsyncData("something");
        }, 1000);
    }, []);

  return (
    <>
    {!asyncData ?
      <div className="pre-loading">Loading...</div>
    : 
      null
    }
    {loading}
    </>
  );
}
export { PreLoading };