import React, { useContext } from 'react';
import { transaction } from './Transaction';
import { GlobalContext } from './GlobalContext';

export const TransactionList = () => {
    const context = useContext(GlobalContext);
    const { transaction } = useContext(GlobalContext);
    return (
        <>
          <h3>History</h3>
          <ul className="list">
         { transaction.map(transaction => ())}


          </ul>  
        </>
    )
}
