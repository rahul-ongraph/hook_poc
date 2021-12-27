import React from "react";
import ComA from "./ComA";

const FirstName = React.createContext();
const LastName = React.createContext();
function ContextHook() {
    return (
      <FirstName.Provider value={"Rahul"}>
         <LastName.Provider value={"Patidar"}>
        <div>
          <ComA/>
        </div>
        </LastName.Provider>
      </FirstName.Provider>
    );
  }
export default ContextHook;
export {FirstName,LastName} ;