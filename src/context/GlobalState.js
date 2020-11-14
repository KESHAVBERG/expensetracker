import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
const initState = {
    transations:
        [
            { id: 1, text: 'cake', amount: -90 },
            { id: 2, text: 'chips', amount: -10 },
            { id: 3, text: 'salary', amount: 990 },
            { id: 4, text: 'iphone', amount: -1000 },
        ]
}

export const GlobalContext = createContext(initState);


export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initState);

    function deleteItems(id) {
        dispatch({
            type: "delete_item",
            payload: id
        })
    }

    function AddItem(transtion) {
        dispatch({
            type: "add_item",
            payload: transtion
        })
    }
    return (
        <GlobalContext.Provider value={{
            transations: state.transations,
            deleteItems,
            AddItem
        }}>
            {children}
        </GlobalContext.Provider>
    )
}