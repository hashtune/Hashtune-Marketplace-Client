import { GetStaticProps } from "next";
import client from "../lib/apollo-client";
import React from "react";
import { useRouter } from "next/dist/client/router";
import { Navbar } from "../components/Layout/Navbar/Navbar";
import styles from '../styles/pages/Signup.module.scss'


export default function Signup() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <div className={styles["register__hero"]}>
          <div className={styles["register__content"]}>
            <h2>Create an account</h2>
            <p>One more step to go 🎉</p>
          </div>
          <div className={styles["register__form"]}>
            <div className="input__group">
              <label htmlFor="">Wallet</label>
              <input type="text" className="text_input" value="0x0adb6821bae3c60d2262753e90a0953ff60d22627" disabled/>
            </div>
            <hr className={styles["register__divider"]}/>
            <div className="input__group">
              <label htmlFor="">Full Name *</label>
              <input type="text" className="text_input" placeholder="E.g Humam Abo Alraja"/>
            </div>
            <div className="input__group">
              <label htmlFor="">Username *</label>
              <input type="text" className="text_input" placeholder="E.g humam"/>
            </div>
            <div className="input__group">
              <label htmlFor="">E-mail Address *</label>
              <input type="email" className="text_input" placeholder="E.g humam@hashtune.co"/>
            </div>
            <hr className={styles["register__divider"]}/>

            <div className="input__group input__group-checkbox">
              <input type="checkbox" name="checkbox" className="checkbox_input" value="check" id="accept" /> 
              <label htmlFor="accept" className="checkbox_mark"> Check here to indicate that you agree to Hashtune’s <a href="">Terms of use</a></label>
            </div>
            
            <button className={styles["primary_button"] + " primary_button"}>Register</button>
          </div>
        </div>
      </main>
    </div>
  );
}
