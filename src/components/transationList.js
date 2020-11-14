import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
export const TransationList = ({ trans }) => {
    const { deleteItems } = useContext(GlobalContext);
    return (

        <li className="minus">
            {trans.text}
            <span className={trans.amount < 0 ? "minusAmount" : "plus"}>
                {trans.amount < 0 ? null : '+'}$
                {trans.amount}
            </span>
            <button className="delete" onClick={() => deleteItems(trans.id)}>X</button>
        </li>

    )
}
export default TransationList;