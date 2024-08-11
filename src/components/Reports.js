import React, { useContext } from 'react';
import { TransactionsContext } from '../context/TransactionContext';

const reportsStyle = {
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    margin: 'auto'
};

const Reports = () => {
    const { transactions } = useContext(TransactionsContext);

    // Calculate summary data
    const income = transactions.filter(t => t.type === 'Income').reduce((acc, t) => acc + t.amount, 0);
    const expense = transactions.filter(t => t.type === 'Expense').reduce((acc, t) => acc + t.amount, 0);
    const savings = transactions.filter(t => t.type === 'Saving').reduce((acc, t) => acc + t.amount, 0);

    return (
        <div style={reportsStyle}>
            <h2>Summary Report</h2>
            <p><strong>Total Income:</strong> ${income.toFixed(2)}</p>
            <p><strong>Total Expense:</strong> ${expense.toFixed(2)}</p>
            <p><strong>Total Savings:</strong> ${savings.toFixed(2)}</p>
        </div>
    );
};

export default Reports;
