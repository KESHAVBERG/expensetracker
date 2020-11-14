import React from 'react'

import './App.css';
import Header from "./components/header"
import Balance from "./components/balance";
import IncomeExpence from "./components/incomeExpense";
import TransSation from './components/TransSation'
import AddTransation from './components/AddTransation'

import { GlobalProvider } from './context/GlobalState'


function App() {
  return (
    <div className="App">
      <GlobalProvider>

        <Header />
        <Balance />
        <IncomeExpence />
        <TransSation />
        <AddTransation />
      </GlobalProvider>
    </div>


  );
}

export default App;
