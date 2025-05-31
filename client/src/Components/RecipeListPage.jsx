import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "../Components/Component1.module.css";

import Component1 from "../Components/Component1";
import Component2 from "../Components/Component2";
import Component3 from "../Components/Component3";
import Component4 from "../Components/Component4";
import Component5 from "../Components/Component5";
import Component6 from "../Components/Component6";
import Component7 from "../Components/Component7";
import Component8 from "../Components/Component8";
import Component9 from "../Components/Component9";

import Footer from "./Footer";
import Header from "./Header";
import Statistics from "./Statistics";

const RecipeListPage = () => {
  const navigate = useNavigate();

  // State for Contact Form
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/contact`, contactData);


      if (response.status === 201) {
        alert("Message sent successfully!");
        setContactData({ name: "", email: "", message: "" }); // Reset form
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const buttonClicking = () => {
    navigate("/Recipeform");
  };

  return (
    <>
      <Header />
      <Header />
      <div className={styles.pagecontainer}>
        <div className={styles.recipeCardContainer}>
          <Component1 />
          <Component2 />
          <Component3 />
          <Component4 />
          <Component5 />
          <Component6 />
          <Component7 />
          <Component8 />
          <Component9 />
        </div>

        <h2 className={styles.heading2}>
          Have a delicious recipe to add?? Submit It Now!
        </h2>
        <button className={styles.button2} onClick={buttonClicking}>
          Add your Recipe
        </button>
      </div>

      <br /><br /><br /><br /><br />

      {/* Contact Form */}
      <div className={styles.formContainer}>
        <h1 className={styles.contact}>Questions or feedback? Let's Connect!</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              name="name"
              className={styles.text}
              placeholder="Name"
              value={contactData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              className={styles.emails}
              placeholder="Email"
              value={contactData.email}
              onChange={handleChange}
              required
            />
            <textarea
              rows={10}
              columns={50}
              name="message"
              className={styles.message}
              placeholder="Message"
              value={contactData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.submits}>Submit</button>
          </div>
        </form>
      </div>

      <Statistics />
      <Footer />
    </>
  );
};

export default RecipeListPage;
