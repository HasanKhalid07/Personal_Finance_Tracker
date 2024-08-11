import React, { createContext, useState, ReactNode } from 'react';

export const CurrencyContext = createContext({
    currency: 'USD',
    setCurrency: () => {},
    convertCurrency: (amount, fromCurrency, toCurrency) => amount,
});

export const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useState('USD');

    const convertCurrency = (amount, fromCurrency, toCurrency) => {
        const conversionRate = 134.18; // Example conversion rate
        if (fromCurrency === toCurrency) return amount;
        return fromCurrency === 'USD' ? amount * conversionRate : amount / conversionRate;
    };

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency, convertCurrency }}>
            {children}
        </CurrencyContext.Provider>
    );
};
