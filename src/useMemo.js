import React, {useState,useMemo} from 'react';
function UsememoHook() {
const [count,setCount] = useState(0);
const[item,setItem]= useState(10);
const multiCountCountMemo = useMemo(function multiCount(){
    console.log("Hello")
    return count*5;
},[count])
return (
    <div>
    <div>
    <h2>Count:{count}</h2>
    <h2>Item:{item}</h2>
    <h2>{multiCountCountMemo}</h2>
    <br />
   <button onClick={()=>setCount(count+1)}>Update Count</button>
    <br />
    <button onClick={()=>setItem(item*5)}>Update Item</button>
    </div>
   </div>
  );
}
export default UsememoHook;