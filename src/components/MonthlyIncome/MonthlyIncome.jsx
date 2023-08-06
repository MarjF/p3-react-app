import React, { useContext, useState } from "react";
import { MonthlyIncomeContext } from "../MonthlyIncomeContext";
import "./MonthlyIncome.css";

const MonthlyIncome = () => {
  const { setMonthlyIncome } = useContext(MonthlyIncomeContext);
  const [inputValue, setInputValue] = useState("");

  const handleClear = () => {
    setInputValue("");
    setMonthlyIncome(0);
  };

  const handleGenerate = () => {
    setMonthlyIncome(parseFloat(inputValue.replace(/₱/g, "")) || 0);
  };

  const handleFormSubmit = (e) => {
    console.log("submit");
    e.preventDefault(); // To prevent the default form submission behavior
    handleGenerate(); // Calling the handleGenerate function when the form is submitted
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <div className="monthlyIncomeContainer">
      <form onSubmit={handleFormSubmit}>
        <label className="labelIncome">Monthly Income</label>
        <input
          title="Monthly Income"
          placeholder="Please enter your monthly income"
          className="monthlyIncome"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="button" className="btn btnClear" onClick={handleClear}>
          Clear
        </button>
        <button type="submit" className="btn btnGenerate">
          Generate
        </button>
      </form>
    </div>
  );
};

export default MonthlyIncome;
