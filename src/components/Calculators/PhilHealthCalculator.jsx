import React from "react";
import "./Calculators.css";
import philhealthTable from "../../assets/philhealthTable.jpg";
import MonthlyIncome from "../MonthlyIncome/MonthlyIncome";
import { MonthlyIncomeContext } from "../MonthlyIncomeContext";
import { useContext, useState, useEffect } from "react";

const PhilHealthCalculator = () => {
  const { monthlyIncome } = useContext(MonthlyIncomeContext);
  const [philHealthContribution, setPhilHealthContribution] = useState(0);

  useEffect(() => {
    const computePhilHealthContribution = () => {
      let philHealthContribution = 0;

      if (monthlyIncome >= 90000) {
        philHealthContribution = 4050;
      } else if (monthlyIncome >= 10000.01 && monthlyIncome <= 89999.99) {
        philHealthContribution = (monthlyIncome * 0.045) / 2;
      } else if (monthlyIncome <= 10000.0 && monthlyIncome > 0.1) {
        philHealthContribution = (10000 * 0.045) / 2;
      }

      return philHealthContribution;
    };
    setPhilHealthContribution(computePhilHealthContribution());
  }, [monthlyIncome]);

  const formatValueWithCommas = (value) => {
    if (value) {
      return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return "";
  };

  return (
    <>
      <h2>PhilHealth Contribution Calculator</h2>
      <MonthlyIncome />
      <h2 className="labelResult">Computation Result</h2>
      <div className="sssContainer">
        <label className="labelCalculator">
          PhilHealth Monthly Contribution:{" "}
        </label>
        <input
          title="PhilHealth Contribution"
          className="result philhealthCalculatorResult"
          type="text"
          value={
            philHealthContribution
              ? `₱${formatValueWithCommas(philHealthContribution)}`
              : ""
          }
          disabled
        />
      </div>
      <p>
        This <b>PhilHealth Contribution Calculator</b> is a free online tool you
        can use to easily compute your monthly contribution to PhilHeath.
        <br />
        <br />
        We are using the latest PhilHeath Contribution Table 2021 to derive the
        right result for you.
        <br />
        <br />
        Note: the contribution is still set at 3% following the announcement
        made by PhilHealth.
      </p>
      <img
        className="calculatorTable"
        src={philhealthTable}
        alt="PhilHealth Contribution Table 2023"
      />
      <p className="source">Source: PhilHealth Contribution Table 2021</p>
    </>
  );
};

export default PhilHealthCalculator;
