import { GetStaticProps } from "next";
import client from "../lib/apollo-client";
import React from "react";
import { useRouter } from "next/dist/client/router";
import { Navbar } from "../components/Layout/Navbar/Navbar";
import styles from "../styles/pages/Signup.module.scss";
import { Formik, Field } from "formik";
import { InputField } from "../components/Fields/InputField";
import { ApolloProvider, useMutation } from "@apollo/client";
import { registerUserMutation } from "../graphql/user/mutations/register";

import {
  RegisterUserDocument,
  useRegisterUserMutation,
} from "../graphql/generated/apolloComponents";

export default function Signup() {
  // const [registerUser] = useMutation(registerUserMutation);

  return (
    <div className={"app " + styles["register__layout"]}>
      <Navbar />
      <div className={styles["register__hero"]}>
        <div className={styles["register__content"]}>
          <h2>Create an account</h2>
          <p>One more step to go 🎉</p>
        </div>
        <Formik
          onSubmit={async (_data) => {
            console.log(_data);
          }}
          initialValues={{
            email: "",
            fullName: "",
            handle: "",
            wallet: "",
          }}
        >
          {({ handleSubmit }) => (
            <form className={styles["register__form"]} onSubmit={handleSubmit}>
              <div className="input__group">
                <label htmlFor="">Wallet</label>
                <Field
                  type="text"
                  className="text_input"
                  value="0x0adb6821bae3c60d2262753e90a0953ff60d22627"
                  disabled
                  component={InputField}
                />
              </div>
              <hr className={styles["register__divider"]} />
              <div className="group_inputs__group">
                <div className="input__group">
                  <label htmlFor="">Full Name </label>
                  <Field
                    name="fullName"
                    type="text"
                    className="text_input"
                    placeholder="E.g Humam Abo Alraja"
                    component={InputField}
                  />
                </div>
                <div className="input__group">
                  <label htmlFor="">Username </label>
                  <Field
                    name="handle"
                    type="text"
                    className="text_input"
                    placeholder="E.g humam"
                    component={InputField}
                  />
                </div>
              </div>
              <div className="input__group">
                <label htmlFor="">E-mail Address </label>
                <Field
                  name="email"
                  type="text"
                  className="text_input"
                  placeholder="E.g humam@hashtune.co"
                  component={InputField}
                />
              </div>
              <hr className={styles["register__divider"]} />

              <div className="input__group input__group-checkbox">
                <input
                  type="checkbox"
                  name="checkbox"
                  className="checkbox_input"
                  value="check"
                  id="accept"
                />
                <label htmlFor="accept" className="checkbox_mark">
                  {" "}
                  Check here to indicate that you agree to Hashtune’s{" "}
                  <a href="">Terms of use</a>
                </label>
              </div>

              <button
                type="submit"
                className={styles["primary_button"] + " primary_button"}
              >
                Register
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
