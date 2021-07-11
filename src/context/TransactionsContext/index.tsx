import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../../services/api";

export const TransactionsContext = createContext<TransactionProps[]>([]);

interface TransactionProps {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

interface TransactionProviderProps {
  children: ReactNode;
}

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}
