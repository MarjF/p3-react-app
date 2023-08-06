import Footer from "../Footer/Footer";
import "./AboutPage.css";
import React from "react";

function AboutPage() {
  return (
    <div className="outerContainer">
      <h2>Tax Calculator Philippines</h2>
      <p>
        Tax Calculator Philippines is an online calculator you can use to easily
        compute your income tax and other miscellaneous expenses that comes with
        it.
        <br />
        <br />
        This tool is built so more Filipinos are more aware of the salary or
        monthly income tax they are paying.
        <br />
        <br />
        We are aiming to give you the precise computation as possible, but as
        you have known, tax computations are changing base on other factors.
        <br />
        <br />
        One of it is the tax table itself and others include changes on monthly
        contributions on SSS, PhilHealth and Pag-IBIG.
        <br />
        <br />
        Make sure to contact us if you have any concerns about the tool through
        taxcalculatorphilippines@gmail.com.
        <br />
        <br />
        <br />
      </p>

      <h3>Privacy Policy for Tax Calculator Philippines</h3>
      <p>
        At Tax Calculator Philippines, accessible from
        https://taxcalculatorphilippines.com, one of our main priorities is the
        privacy of our visitors. This Privacy Policy document contains types of
        information that is collected and recorded by Tax Calculator Philippines
        and how we use it.
        <br />
        <br />
        If you have additional questions or require more information about our
        Privacy Policy, do not hesitate to contact us through email at
        taxcalculatorphilippines@gmail.com
      </p>
      <br />
      <br />
      <Footer />
    </div>
  );
}
export default AboutPage;
