import React, { useContext } from "react";
import "./TotalDeduction.css";
import { MonthlyIncomeContext } from "../MonthlyIncomeContext";

const TotalDeduction = () => {
  const { monthlyIncome, incomeTax, totalContributions } =
    useContext(MonthlyIncomeContext);

  const computeTotalDeductions = () => {
    const totalDeduction = incomeTax + totalContributions;
    return totalDeduction;
  };

  const netPayAfterDeductions = () => {
    return monthlyIncome - computeTotalDeductions();
  };

  const formatValueWithCommas = (value) => {
    if (value) {
      return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return "";
  };

  return (
    <div className="totalDeductionContainer">
      <div className="innerTotalInput">
        <h4>Total Deductions:</h4>
        <input
          title="Total Deductions"
          className="finalResult totalDeductionsInput"
          type="text"
          value={
            computeTotalDeductions()
              ? `₱${formatValueWithCommas(computeTotalDeductions())}`
              : ""
          }
          disabled
        />
      </div>
      <br />
      <div className="innerTotalInput">
        <h4>Net Pay after Deductions:</h4>
        <input
          title="Net Pay after Deductions"
          className="finalResult payAfterDeductionsInput"
          type="text"
          value={
            netPayAfterDeductions()
              ? `₱${formatValueWithCommas(netPayAfterDeductions())}`
              : ""
          }
          disabled
        />
      </div>
    </div>
  );
};

export default TotalDeduction;
