import React from "react";
import "./BottomContent.css";
import BirTaxTable from "../../assets/birTax-table.jpg";
import Footer from "../Footer/Footer";

const BottomContent = () => {
  return (
    <div className="botInsideContainer">
      <p className="pBottom">
        This BIR Tax Calculator helps you easily compute your income tax, add up
        your monthly contributions, and give you your total net monthly income.
        <br /> <br />
        The Tax Caculator Philipines 2023 is using the latest BIR Income Tax
        Table as well as SSS, PhilHealth and Pag-IBIG Monthy Contribution Tables
        for the computation.
      </p>
      <br />
      <h2>How to use BIR Tax Calculator 2023</h2>
      Step 1: Please enter your total monthly salary. <br />
      Step 2: Click on Calculate button. The results will be displayed below it.
      <br /> <br />
      <h2>BIR income tax table</h2>
      <p className="pBottom">
        You are probably aware of the Train Law or the Republic Act No. 10963,
        which is also known as the Tax Reform for Acceleration and Inclusion
        (TRAIN) Act.
        <br />
        <br />
        Since the implementation year, employees on both government and
        non-government sectors have experienced a big drop on tax reduction on
        their monthly pay. However, many products in the market got its price a
        bit higher.
        <br />
        <br />
        So just in case you are wondering how much tax you are paying to the
        government of the Philippines, take a look at this tax table.
      </p>
      <img className="taxTable" src={BirTaxTable} alt="BIR Tax Table" />
      <h2>How to compute income tax</h2>
      <p className="pBottom">
        Base on the tax table you've just seen, you are probably thinking that
        computation of your income tax is just looking for your monthly salary
        and deduct it directly.
        <br /> <br />
        You are close to that but there is an actual procedure on how to compute
        your income tax and you're going to learn this now.
      </p>
      <br />
      <h3>Step 1: Base on your monthly salary, get your taxable income.</h3>
      <p className="pBottom">
        Of course, you already know your monthly income. <br /> <br />
        The first thing you have to do is to get your taxable income. Okay, to
        do that, you just have to deduct your monthly contributions to SSS (or
        GSIS), PhilHealth and Pag-IBIG.
        <br /> <br />
        If you don't know yet how to compute your monthly contributions, these
        are helpful tools for that:
      </p>
      <div className="listContainer">
        <ul>
          <li>SSS Contribution Calculator</li>
          <li>PhilHealth Contribution Calculator</li>
          <li>Pag-IBIG Contribution Calculator</li>
        </ul>
      </div>
      <p className="pBottom">
        As we go along, it's better to cast an example salary so let's assume
        you are earning ₱25,000 per month.
      </p>
      <div className="innerBox">Monthly Salary: ₱25,000</div>
      <p className="pBottom">
        Base on that, your monthly contributions would be:
      </p>
      <div className="innerBox">
        <p className="pBottom">
          SSS: ₱1,125.00 <br />
          PhilHealth: ₱375 <br />
          Pag-IBIG: ₱100
        </p>
      </div>
      <p className="pBottom">
        You have to add them all up to get your total deductions.
      </p>
      <div className="innerBox">
        <p className="pBottom">
          Total Deductions = SSS + PhilHealth + Pag-IBIG
          <br />
          = ₱1,125.00 + ₱375 + ₱100
          <br />= ₱1,600
        </p>
      </div>
      <p className="pBottom">
        So what's next? Subtract your total deductions to your monthly salary,
        the result will be your taxable income.
      </p>
      <div className="innerBox">
        <p className="pBottom">
          Taxable Income = Monthly Salary - Total Deductions
          <br />
          = ₱25,000 - ₱1,600
          <br />= ₱23,400
        </p>
      </div>
      <p className="pBottom">
        Base on our sample computation, if you are earning ₱25,000/month, your
        taxable income would be ₱23,400.
      </p>
      <br />
      <h3>
        Step 2: Look into the income tax table and determine your salary column.
      </h3>
      <br />
      <p className="pBottom">
        After getting your taxable income or salary, take a look at the income
        tax table above and determine where your taxable income fall into the
        columns.
        <br />
        <br />
        As a continuation of your example, since the taxable income is ₱23,400.
        This one falls into column 2 or bracket 2 (whatever you want to call
        it).
      </p>{" "}
      <br />
      <h3>
        Step 3: Compute your income tax base on your salary, taxable income and
        income tax rate.
      </h3>
      <br />
      <p className="pBottom">
        Base on what's on the column 2, our "Prescribed Minimum Withholding Tax"
        is ₱0.00 + 20% over Compensation Level (CL). Relax, this is relatively
        easy to compute.
        <br />
        <br />
        Let's break this one by one.
        <br />
        <br />
        First we have fixed ₱0.00 tax. Other salary bracket got ₱2,500,
        ₱10,833.33, ₱40,833.33, ₱200,833.33. That's a lot of money, I would cry
        if that's my monthly tax.
        <br />
        <br />
        Second we have "+ 20% over Compensation Level (CL)".
        <br />
        <br />
        What is "Compensation Level"? In our example, it's ₱20,833. Take a look
        at the Compensation Level row of the left side. (I just wanted you to
        look to understand it, nothing special here.)
        <br />
        <br />
        What's the meaning of "20% over Compensation Level"? It means that we
        have to subtract first our taxable income to the compensation level,
        then get the 20% of that.
        <br />
        <br />
        Here's how it goes:
      </p>
      <div className="innerBox">
        <p>
          20% over Compensation Level = (Taxable Income - Compensation Level) x
          20% <br />
          = (₱23,400 - ₱20,833) x 20% <br />
          = ₱2,567 x 20% <br />= ₱513.4
        </p>
      </div>
      <p className="pBottom">
        So we got the "20% over Compensation Level". It's time to get the real{" "}
        <br /> <br />
        income tax. Base on the tax table, our income tax would be:
      </p>
      <div className="innerBox">
        <p className="pBottom">
          Income Tax = ₱0.00 + 20% over Compensation Level (CL) <br />
          = ₱0.00 + ₱513.4 <br />= ₱513.4
        </p>
      </div>
      <p className="pBottom">Voila! ₱513.4 is our income tax.</p>
      <br />
      <h3>Optional How to get your net take home pay.</h3>
      <p className="pBottom">
        To know how much money you'll really keep and take to your home after
        all the taxes and deductions, well, you just have to subtract them all.
        <br /> <br />
        From your gross salary, the salary as reflected on your employment
        contract, subtract your monthly contributions and income tax.
        <br /> <br />
        So continuing on our example above that assuming your salary is ₱25,000
        per month, a total monthly contributions worth ₱1,600 and income tax
        worth ₱513.4, here's our computation:
      </p>
      <div className="innerBox">
        <p className="pBottom">
          Net Salary = Gross Salary - Monthly Contributions - Income Tax <br />
          = ₱25,000 - ₱1,600 - ₱513.4 <br />
          = ₱25,000 - ₱2,113.4 <br />= ₱22,886.6
        </p>
      </div>
      <p className="pBottom">
        Your net-take home pay or net salary would be ₱22,886.6!
        <br /> <br />
        That's the step by step guide on how you can compute your income tax and
        get your monthly net salary.
      </p>
      <br /> <br />
      <Footer />
    </div>
  );
};

export default BottomContent;
