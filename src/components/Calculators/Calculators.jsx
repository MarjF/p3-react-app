import React, { useReducer } from "react";
import "./Calculators.css";
import SSSContributionCalculator from "./SSSContributionCalculator";
import PhilHealthCalculator from "./PhilHealthCalculator";
import PagibigCalculator from "./PagibigCalculator";
import reducer from "./CalculatorReducer";
import { MonthlyIncomeProvider } from "../MonthlyIncomeContext";
import Footer from "../Footer/Footer";

const Calculators = () => {
  const initialState = {
    showSSSContribution: false,
    showPhilHealth: false,
    showPagibig: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSSSContributionClick = () => {
    dispatch({ type: "SHOW_SSS_CONTRIBUTION" });
  };

  const handlePhilHealthClick = () => {
    dispatch({ type: "SHOW_PHILHEALTH" });
  };

  const handlePagibigClick = () => {
    dispatch({ type: "SHOW_PAGIBIG" });
  };

  return (
    <div className="outerContainer">
      <MonthlyIncomeProvider>
        <p>
          Aside from the main Tax Calculator Philippines, we have also created
          other useful calculators for you!
        </p>
        <div className="btnContainer">
          <button
            type="button"
            className="btnCalculator btnSSSCalculator"
            onClick={handleSSSContributionClick}
          >
            SSS Contribution Calculator
          </button>
          <button
            type="button"
            className="btnCalculator btnPhilHealthCalculator"
            onClick={handlePhilHealthClick}
          >
            PhilHealth Contribution Calculator
          </button>
          <button
            type="button"
            className="btnCalculator btnPagibigCalculator"
            onClick={handlePagibigClick}
          >
            Pag - IBIG Contribution Calculator
          </button>
        </div>
        {state.showSSSContribution && <SSSContributionCalculator />}
        {state.showPhilHealth && <PhilHealthCalculator />}
        {state.showPagibig && <PagibigCalculator />}
      </MonthlyIncomeProvider>
      <Footer />
    </div>
  );
};

export default Calculators;
