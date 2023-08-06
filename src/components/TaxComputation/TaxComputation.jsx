import React, { useContext, useEffect } from "react";
import "./TaxComputation.css";
import { MonthlyIncomeContext } from "../MonthlyIncomeContext";

const TaxComputation = () => {
  const { monthlyIncome, totalContributions, incomeTax, setIncomeTax } =
    useContext(MonthlyIncomeContext);

  useEffect(() => {
    const computeIncomeTax = () => {
      let deductedContribution = monthlyIncome - totalContributions;
      let calculatedIncomeTax = 0;

      if (deductedContribution > 20833.33 && deductedContribution <= 33333.33) {
        calculatedIncomeTax = (deductedContribution - 20833.33) * 0.15;
      } else if (
        deductedContribution > 33333.33 &&
        deductedContribution <= 66666.66
      ) {
        calculatedIncomeTax = (deductedContribution - 33333.33) * 0.2 + 1875;
      } else if (
        deductedContribution > 66666.66 &&
        deductedContribution <= 166666.66
      ) {
        calculatedIncomeTax =
          (deductedContribution - 66666.66) * 0.25 + 8541.66;
      } else if (
        deductedContribution > 166666.66 &&
        deductedContribution <= 666666.66
      ) {
        calculatedIncomeTax =
          (deductedContribution - 166666.66) * 0.3 + 33541.66;
      } else if (deductedContribution > 666666.66) {
        calculatedIncomeTax =
          (deductedContribution - 666666.66) * 0.35 + 183541.66;
      }

      return calculatedIncomeTax;
    };

    const updatedIncomeTax = computeIncomeTax();
    setIncomeTax(updatedIncomeTax);
  }, [monthlyIncome, totalContributions, setIncomeTax]);

  const netPayAfterTax = () => {
    return monthlyIncome - totalContributions - incomeTax;
  };

  const formatValueWithCommas = (value) => {
    if (value) {
      return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return "";
  };

  return (
    <div className="taxComputationContainer">
      <label className="innerTitleLabel">Tax Computation</label>
      <div className="spaceTax1">
        <label className="labelIncomeTax">Income Tax: </label>
        <input
          title="Income Tax"
          className="taxResult incomeTaxResult"
          type="text"
          value={incomeTax ? `₱${formatValueWithCommas(incomeTax)}` : ""}
          disabled
        />
      </div>
      <div className="spaceTax2">
        <label className="labelIncomeTax">Net Pay after Tax: </label>
        <input
          title="Net Pay after Tax"
          className="taxResult afterTaxResult"
          type="text"
          value={
            netPayAfterTax()
              ? `₱${formatValueWithCommas(netPayAfterTax())}`
              : ""
          }
          disabled
        />
      </div>
    </div>
  );
};

export default TaxComputation;
