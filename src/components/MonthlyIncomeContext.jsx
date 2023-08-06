import React, { createContext, useState } from "react";

export const MonthlyIncomeContext = createContext();

export const MonthlyIncomeProvider = ({ children }) => {
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [totalContributions, setTotalContributions] = useState(0);
  const [incomeTax, setIncomeTax] = useState(0); // Add incomeTax state

  return (
    <MonthlyIncomeContext.Provider
      value={{
        monthlyIncome,
        setMonthlyIncome,
        totalContributions,
        setTotalContributions,
        incomeTax, // Include incomeTax in the context value
        setIncomeTax, // Include setIncomeTax in the context value
      }}
    >
      {children}
    </MonthlyIncomeContext.Provider>
  );
};
