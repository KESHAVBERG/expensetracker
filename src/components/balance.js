import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const Balance = () => {
const {transations} = useContext(GlobalContext);
const amount = transations.map(transation => transation.amount);
let total = 0;

amount.forEach(rupee =>{
    total += rupee;
})

console.log(total)

    return (
        <div>
            <h3>Balance</h3>
            <h4>${total}</h4>
        </div>
    )
}

export default Balance
