import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

import "./css/icomeExp.css"


const IcomeExpence = () => {
    const { transations } = useContext(GlobalContext);
    const amount = transations.map(transation => transation.amount);
    let  expense = 0;
    let income = 0;

  amount.forEach(penny =>{
      if (penny <0){
          expense += penny
      }
      if (penny >0){
          income += penny
      }
  })

    console.log(income,expense)


    return (
        <div className="IcomeExpence">
            <div id="income">
                <h4>Income</h4>
                <h6>${income}</h6>
            </div>
            <div id="expence">
                <h4>expence</h4>
                <h6>${expense}</h6>
            </div>
        </div>
    )
}

export default IcomeExpence