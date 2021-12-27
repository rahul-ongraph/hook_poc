import React, { useEffect, useRef, useState } from 'react';
function UseEffectHook() {
    const [count, setCount] = useState(0);
    const [counts, setCounts] = useState(0);
    useEffect(()=>{
      alert("I pressed")
    },[count])
return (
    <div>
    <div>
     <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
     <div>
     <p>You clicked {counts} times</p>
     <button onClick={() => setCounts(counts + 1)}>
       Click me
     </button> 
   </div>
   </div>
  );
}
export default UseEffectHook;