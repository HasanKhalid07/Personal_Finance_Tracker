import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ensure Navbar.js exists
import Home from './components/Home'; // Ensure Home.js exists
import AddTransaction from './components/AddTransaction'; // Ensure AddTransaction.js exists
import TransactionList from './components/TransactionList'; // Ensure TransactionList.js exists
import Reports from './components/Reports'; // Ensure Reports.js exists
import Settings from './components/Settings'; // Ensure Settings.js exists
import { TransactionsProvider } from './context/TransactionContext'; // Ensure TransactionsContext.js exists
import { CurrencyProvider } from './context/CurrencyContext'; // Ensure CurrencyContext.js exists

function App() {
    return (
        <Router>
            <CurrencyProvider>
                <TransactionsProvider>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/add-transaction" element={<AddTransaction />} />
                        <Route path="/transactions" element={<TransactionList />} />
                        <Route path="/reports" element={<Reports />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </TransactionsProvider>
            </CurrencyProvider>
        </Router>
    );
}

export default App;
