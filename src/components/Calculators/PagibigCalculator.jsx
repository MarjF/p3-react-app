import React from "react";
import "./Calculators.css";
import pagibig from "../../assets/pagibig.jpg";
import MonthlyIncome from "../MonthlyIncome/MonthlyIncome";
import { MonthlyIncomeContext } from "../MonthlyIncomeContext";
import { useContext, useState, useEffect } from "react";

const PagibigCalculator = () => {
  const { monthlyIncome } = useContext(MonthlyIncomeContext);
  const [pagibigContribution, setPagibigContribution] = useState(0);

  useEffect(() => {
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
    setPagibigContribution(computePagibigContribution());
  }, [monthlyIncome]);

  const formatValueWithCommas = (value) => {
    if (value) {
      return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return "";
  };

  return (
    <>
      <h2>Pag - IBIG Contribution Calculator</h2>
      <MonthlyIncome />
      <h2 className="label">Computation Result</h2>
      <div className="sssContainer">
        <label className="labelCalculator">
          Pag - IBIG Monthly Contribution:{" "}
        </label>
        <input
          title="Pag - IBIG Contribution"
          className=" result pagibigCalculatorResult"
          type="text"
          value={
            pagibigContribution
              ? `₱${formatValueWithCommas(pagibigContribution)}`
              : ""
          }
          disabled
        />
      </div>
      <p>
        The computation on Pag-IBIG monthly contribution is pretty
        straightforward, but with this Pag-IBIG Contribution Calculator, it's
        even more simpler to compute it.
      </p>
      <img
        className="calculatorTable pagibigPic"
        src={pagibig}
        alt="Pag - IBIG Contribution Table 2023"
      />
      <p className="source">Source: SSS Contribution Table 2023</p>
    </>
  );
};

export default PagibigCalculator;
