import { useContext } from 'react';
import { TransactionsContext } from '../context/TransactionContext';

export const useTransactions = () => {
    return useContext(TransactionsContext);
};
