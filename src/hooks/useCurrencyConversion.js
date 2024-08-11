import { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';

export const useCurrencyConversion = () => {
    const context = useContext(CurrencyContext);

    if (!context) {
        throw new Error('useCurrencyConversion must be used within a CurrencyProvider');
    }

    const { currency, setCurrency, convertCurrency } = context;
    return { currency, setCurrency, convertCurrency };
};
