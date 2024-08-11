import React, { createContext, useState } from 'react';

export const TransactionsContext = createContext({
    transactions: [],
    addTransaction: () => {},
    deleteTransaction: () => {},
});

export const TransactionsProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);

    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };

    const deleteTransaction = (id) => {
        setTransactions(transactions.filter(transaction => transaction.id !== id));
    };

    return (
        <TransactionsContext.Provider value={{ transactions, addTransaction, deleteTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
};
