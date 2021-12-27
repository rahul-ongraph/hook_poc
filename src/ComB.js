import React, { useContext } from 'react'
import { FirstName,LastName } from './useContext';

const ComB = () => {
    const fname = useContext(FirstName)
    const lname = useContext(LastName)
    return (
        <h3>My name is {fname} {lname}</h3>
    )
};
export default ComB;