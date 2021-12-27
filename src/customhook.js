import {useState} from 'react'
const useCustomHook=() => {
    const [count,setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count+1)
    }
    return {
        count,
        handleIncrement
    };
}
export default useCustomHook;