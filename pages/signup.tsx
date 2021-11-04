import React from "react";
import { Navbar } from "../components/Layout/Navbar/Navbar";
import styles from "../styles/pages/Signup.module.scss";
import { Formik, Field } from "formik";
import { InputField } from "../components/Fields/InputField";
import { useRegisterUserMutation } from "../graphql/generated/apolloComponents";
import { MetamaskContext } from "../hooks/connectWallet";
import router from "next/router";

export default function Signup() {
  const [
    registerUserMutation,
    { data, loading, error: registerError },
  ] = useRegisterUserMutation();

  const { account } = React.useContext(MetamaskContext);
  // TODO: If no account connected - figure out if we want to redierct
  // prompt the user etc...
  if (!account) return null;

  const validate = (value: any) => {
    let errorMessage;
    // TODO: Fix this regex to support code.berlin emails
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      errorMessage = "Invalid email address";
    }
    return errorMessage;
  };

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
           const res = await registerUserMutation({
              variables: {
                inputType: {
                  email: _data.email,
                  wallet: account,
                  handle: _data.handle,
                  bio: "",
                  fullName: _data.fullName,
                  image: "",
                  isApprovedCreator: false,
                },
              },
            });
            if (res.data?.registerUser.Users && res.data?.registerUser.Users.length > 0) {
              router.replace(`/${res.data.registerUser.Users[0].handle}`)
            }
          }}
          initialValues={{
            email: "",
            fullName: "",
            handle: "",
            wallet: account,
            bio: "",
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form className={styles["register__form"]} onSubmit={handleSubmit}>
              <div className="input__group">
                <label htmlFor="">Wallet</label>
                <Field
                  type="text"
                  className="text_input"
                  value={account}
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
                  validate={validate}
                />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
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
              {data?.registerUser.ClientErrorHandleAlreadyExists && <p>{data?.registerUser.ClientErrorHandleAlreadyExists.message}</p>}
              {data?.registerUser.ClientErrorInvalidHandle && <p>{data?.registerUser.ClientErrorInvalidHandle.message}</p>}
              {data?.registerUser.ClientErrorUnknown && <p>{data?.registerUser.ClientErrorUnknown.message}</p>}

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
