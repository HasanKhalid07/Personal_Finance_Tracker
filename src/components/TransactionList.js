import React, { useContext } from 'react';
import { TransactionsContext } from '../context/TransactionContext';
import { CurrencyContext } from '../context/CurrencyContext';

const transactionListStyle = {
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    margin: 'auto'
};

const listItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #ddd'
};

const buttonStyle = {
    background: '#ff4d4d',
    border: 'none',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer'
};

const TransactionList = () => {
    const { transactions, deleteTransaction } = useContext(TransactionsContext);
    const { currency, convertCurrency } = useContext(CurrencyContext);

    return (
        <div style={transactionListStyle}>
            <h2>Transaction List</h2>
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction.id} style={listItemStyle}>
                        {transaction.description}: ${convertCurrency(transaction.amount, currency, 'USD').toFixed(2)}
                        <button onClick={() => deleteTransaction(transaction.id)} style={buttonStyle}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;
