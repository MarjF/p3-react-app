import React from "react";
import "./Index.css";
import Navbar from "./Navbar/Navbar";
import MonthlyIncome from "./MonthlyIncome/MonthlyIncome";
import TaxComputation from "./TaxComputation/TaxComputation";
import MonthlyContributions from "./MonthlyContributions/MonthlyContributions";
import TotalDeduction from "./TotalDeduction/TotalDeduction";
import { MonthlyIncomeProvider } from "./MonthlyIncomeContext";
import BottomContent from "./BottomContent/BottomContent";

const Mainpage = () => {
  return (
    <div className="innerContainer">
      <MonthlyIncomeProvider>
        <h1 className="title">Tax Calculator Philippines 2023</h1>
        <MonthlyIncome />
        <h1 className="labelResult labelCompResult">Computation Result</h1>
        <TaxComputation />
        <MonthlyContributions />
        <TotalDeduction />
      </MonthlyIncomeProvider>
      <BottomContent />
    </div>
  );
};

export default Mainpage;
