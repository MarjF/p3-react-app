import "./Calculators.css";
import sssTable from "../../assets/sssTable.jpg";
import MonthlyIncome from "../MonthlyIncome/MonthlyIncome";
import { MonthlyIncomeContext } from "../MonthlyIncomeContext";
import { useContext, useState, useEffect } from "react";
import sssComputationData from "../MonthlyContributions/SssComputationData";

const SSSContributionCalculator = () => {
  const { monthlyIncome } = useContext(MonthlyIncomeContext);
  const [sssContribution, setSSSContribution] = useState(0);

  useEffect(() => {
    const computeSSSContribution = () => {
      const matchingData = sssComputationData.find((data) => {
        const [minRange, maxRange] = data.range;
        return monthlyIncome >= minRange && monthlyIncome <= maxRange;
      });

      if (matchingData) {
        return matchingData.ee + matchingData.eeWISP;
      } else {
        return 0;
      }
    };

    setSSSContribution(computeSSSContribution());
  }, [monthlyIncome]);

  const formatValueWithCommas = (value) => {
    if (value) {
      return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return "";
  };

  return (
    <>
      <h2>SSS Contribution Calculator</h2>
      <MonthlyIncome />
      <h2 className="label">Computation Result</h2>
      <div className="sssContainer">
        <label className="labelCalculator">SSS Monthly Contribution:</label>
        <input
          title="SSS Contribution"
          className="result sssCalculatorResult"
          type="text"
          value={
            sssContribution ? `₱${formatValueWithCommas(sssContribution)}` : ""
          }
          disabled
        />
      </div>

      <p>
        As a member of the Social Security System (SSS), this SSS Contribution
        Calculator will help you conveniently compute your monthly contribution.
        <br />
        <br />
        The calculator uses the latest SSS Contribution Table for the
        computation. We are currently limited to computing the contribution for
        employed members only. Future improvements will include adding other
        membership categories.
      </p>
      <img
        className="calculatorTable"
        src={sssTable}
        alt="SSS Contribution Table"
      />
      <p className="source">Source: SSS Contribution Table</p>
    </>
  );
};

export default SSSContributionCalculator;
