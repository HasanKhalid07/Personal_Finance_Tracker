import React, { useState, useRef } from 'react';
import { useTransactions } from '../hooks/useTransaction'; // Ensure this hook is correctly implemented

const formStyle = {
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    margin: 'auto'
};

const selectStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px'
};

const inputStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px'
};

const buttonStyle = {
    background: '#4CAF50',
    border: 'none',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer'
};

const AddTransaction = () => {
    const { addTransaction } = useTransactions();
    const [type, setType] = useState('Income');
    const descriptionRef = useRef(null);
    const amountRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const description = descriptionRef.current.value;
        const amount = parseFloat(amountRef.current.value);

        if (!description || isNaN(amount) || amount <= 0) {
            alert('Please provide a valid description and amount.');
            return;
        }

        const newTransaction = {
            id: Date.now(),
            type,
            description,
            amount,
        };
        addTransaction(newTransaction);

        descriptionRef.current.value = '';
        amountRef.current.value = '';
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <label>
                Type:
                <select value={type} onChange={(e) => setType(e.target.value)} style={selectStyle}>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                    <option value="Saving">Saving</option>
                </select>
            </label>
            <label>
                Description:
                <input type="text" ref={descriptionRef} placeholder="Description" style={inputStyle} />
            </label>
            <label>
                Amount:
                <input type="number" ref={amountRef} placeholder="Amount" style={inputStyle} />
            </label>
            <button type="submit" style={buttonStyle}>Add Transaction</button>
        </form>
    );
};

export default AddTransaction;
