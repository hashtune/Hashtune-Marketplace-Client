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
              <input type="text" value="0x0adb6821bae3c60d2262753e90a0953ff" disabled/>
            </div>
            <hr />
            <div className="input__group">
              <label htmlFor="">Full Name *</label>
              <input type="text" placeholder="E.g Humam Abo Alraja"/>
            </div>
            <div className="input__group">
              <label htmlFor="">Username *</label>
              <input type="text" placeholder="E.g humam"/>
            </div>
            <div className="input__group">
              <label htmlFor="">E-mail Address *</label>
              <input type="email" placeholder="E.g humam@hashtune.co"/>
            </div>
            <div className="input__group">
              <input type="checkbox" name="checkbox" value="check" id="agree" /> I have read and agree to the Terms and Conditions and Privacy Policy
            </div>
            
            <button className="btn">Register</button>
          </div>
        </div>
      </main>
    </div>
  );
}
