import React, {useCallback, useEffect, useRef, useState} from 'react';
function CallbackHook() {
const [numbers,setNumber] = useState({num1:0,num2:0});
const[result,setResult]= useState(0);
let inputRef = useRef()
useEffect(()=>{
    console.log("===>",numbers,result)
},[numbers,result])

const  memoizedCallback = useCallback(()=>{
    setResult(numbers.num1+numbers.num2)
    console.log("result===>",result)
},[numbers,result])
return (
    <div>
    <div>
    <h2>Result:{result}</h2>
    <br />
    <input type="text" ref={inputRef}  onChange={(e)=>setNumber({num1:+e.target.value,num2:numbers.num2})} />
    <br />
    <input type="text" ref={inputRef} onChange={(e)=>setNumber({num1:numbers.num1,num2:+e.target.value})} />
    <br />
      <button onClick={memoizedCallback}>
      ADD
      </button>
    </div>
   </div>
  );
}
export default CallbackHook;