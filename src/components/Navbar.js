import React from 'react';
import { Link } from 'react-router-dom';

const navbarStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
};

const ulStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0',
    display: 'flex'
};

const liStyle = {
    marginLeft: '20px'
};

const aStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px'
};

const Navbar = () => {
    return (
        <nav style={navbarStyle}>
            <h1>Personal Finance Tracker</h1>
            <ul style={ulStyle}>
                <li style={liStyle}><Link to="/" style={aStyle}>Home</Link></li>
                <li style={liStyle}><Link to="/add-transaction" style={aStyle}>Add Transaction</Link></li>
                <li style={liStyle}><Link to="/transactions" style={aStyle}>Transaction List</Link></li>
                <li style={liStyle}><Link to="/reports" style={aStyle}>Reports</Link></li>
                <li style={liStyle}><Link to="/settings" style={aStyle}>Settings</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
