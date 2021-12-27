import React, {useRef} from 'react';
function Refhook() {
let inputField = useRef(null);
const handleInput = () => {
    inputField.current.value="20";
    inputField.current.focus();
}
return (
    <div>
    <div>
    <input type="text"  ref={inputField} onClick={handleInput}  />
      <button onClick={handleInput}>
        Click me
      </button>
    </div>
   </div>
  );
}
export default Refhook;