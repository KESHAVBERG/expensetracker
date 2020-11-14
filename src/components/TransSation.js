import React, { useContext } from 'react'
import './css/transition.css'
import { GlobalContext } from '../context/GlobalState'
import {TransationList} from './transationList'

const TransSation = () => {
    const { transations } = useContext(GlobalContext);
    console.log(transations)

    return (
        <div className="TransSation">
            <h6>history</h6>
            {transations.map(trans => (
                <ul id="list" className="list" key={trans.id}>
                <TransationList trans={trans}/>
            </ul>
            ))}

        </div>
    )

}

export default TransSation
