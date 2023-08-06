import React, { useContext, useEffect, useState } from "react";
import { MonthlyIncomeContext } from "../MonthlyIncomeContext";
import sssComputationData from "./SssComputationData";
import "./MonthlyContributions.css";

const MonthlyContributions = () => {
  const { monthlyIncome, totalContributions, setTotalContributions } =
    useContext(MonthlyIncomeContext);

  const [sssContribution, setSSSContribution] = useState(0);
  const [philHealthContribution, setPhilHealthContribution] = useState(0);
  const [pagibigContribution, setPagibigContribution] = useState(0);

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

  const computePagibigContribution = () => {
    let pagibigContribution = 0;
    const maxMonthlyCompensation = 5000;

    if (monthlyIncome > 5000) {
      pagibigContribution = maxMonthlyCompensation * 0.02;
    } else if (monthlyIncome > 1500 && monthlyIncome <= 5000) {
      pagibigContribution = monthlyIncome * 0.02;
    } else if (monthlyIncome <= 1500) {
      pagibigContribution = monthlyIncome * 0.01;
    }

    return pagibigContribution;
  };

  const formatValueWithCommas = (value) => {
    if (value) {
      return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return "";
  };

  useEffect(() => {
    setSSSContribution(computeSSSContribution());
    setPhilHealthContribution(computePhilHealthContribution());
    setPagibigContribution(computePagibigContribution());

    const calculatedTotalContributions =
      computeSSSContribution() +
      computePhilHealthContribution() +
      computePagibigContribution();

    setTotalContributions(calculatedTotalContributions);
  }, [monthlyIncome]);

  return (
    <div className="totalContributionsContainer">
      <label className="innerTitleLabel">Monthly Contributions</label>
      <div className="space">
        <label className="labelContributions">SSS: </label>
        <input
          title="SSS Contribution"
          className="totalResult sssResult"
          type="text"
          value={
            computeSSSContribution()
              ? `₱${formatValueWithCommas(sssContribution)}`
              : ""
          }
          disabled
        />
      </div>
      <div className="space">
        <label className="labelContributions">PhilHealth: </label>
        <input
          title="PhilHealth Contribution"
          className="totalResult philhealthResult"
          type="text"
          value={
            computePhilHealthContribution()
              ? `₱${formatValueWithCommas(philHealthContribution)}`
              : ""
          }
          disabled
        />
      </div>
      <div className="space">
        <label className="labelContributions">Pag - IBIG: </label>
        <input
          title="Pag-IBIG Contribution"
          className="totalResult pagibigResult"
          type="text"
          value={
            computePagibigContribution()
              ? `₱${formatValueWithCommas(pagibigContribution)}`
              : ""
          }
          disabled
        />
      </div>
      <div className="space">
        <label className="labeltotalContributions">Total Contributions:</label>
        <input
          title="Total Contributions"
          className="totalResult totalContributionsResult"
          type="text"
          value={
            totalContributions
              ? `₱${formatValueWithCommas(totalContributions)}`
              : ""
          }
          disabled
        />
      </div>
    </div>
  );
};

export default MonthlyContributions;
