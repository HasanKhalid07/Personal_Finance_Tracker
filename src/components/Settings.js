import React, { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';

const settingsStyle = {
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    margin: 'auto'
};

const labelStyle = {
    display: 'block',
    marginBottom: '10px',
    fontWeight: 'bold'
};

const selectStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px'
};

const Settings = () => {
    const { currency, setCurrency } = useContext(CurrencyContext);

    return (
        <div style={settingsStyle}>
            <label style={labelStyle}>Select Currency:</label>
            <select value={currency} onChange={(e) => setCurrency(e.target.value)} style={selectStyle}>
                <option value="USD">USD</option>
                <option value="NPR">NPR</option>
            </select>
        </div>
    );
};

export default Settings;
