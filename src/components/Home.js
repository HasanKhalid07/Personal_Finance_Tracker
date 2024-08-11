import React from 'react';

const homeStyle = {
    textAlign: 'center',
    padding: '20px'
};

const h2Style = {
    color: '#333'
};

const pStyle = {
    fontSize: '18px',
    color: '#666'
};

const Home = () => {
    return (
        <div style={homeStyle}>
            <h2 style={h2Style}>Welcome to the Personal Finance Tracker</h2>
            <p style={pStyle}>Track your finances efficiently with our easy-to-use app.</p>
        </div>
    );
};

export default Home;
