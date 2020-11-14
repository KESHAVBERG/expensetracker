import React, { useState, useContext, Component } from 'react';
import { GlobalContext } from '../context/GlobalState';

import "./css/Addtrans.css";

const AddTransation = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { AddItem } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        AddItem(newTransaction);
    }
    return (
        <div className="AddTransation">
            <h3>Add new transaction</h3>
            <form onSubmit ={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="number">Amount </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add</button>

            </form>
        </div>
    )
}

export default AddTransation
