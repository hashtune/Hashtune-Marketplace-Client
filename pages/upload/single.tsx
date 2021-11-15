import { Navbar } from "../../components/Layout/Navbar/Navbar";
import { Formik, Field } from "formik";
import { useRegisterUserMutation } from "../../graphql/generated/apolloComponents";
import router from "next/router";
import Image from "next/image";
import styles from "../../styles/pages/Single.module.scss";
import { InputField } from "../../components/Fields/InputField";
import DropFileInput from "../../components/Forms/DropFileInput/DropFileInput";

export default function Single() {
  const onFileChange = (files: any) => {
    console.log(files);
  };
  return (
    <div className={"app " + styles["single__layout"]}>
      <Navbar />
      <div className={styles["single__container"]}>
        <div
          className={styles["single__section"] + " " + styles["single__form"]}
        >
          <h1>Upload your Music 🎸</h1>
          <Formik onSubmit={async (_data) => {}} initialValues={{}}>
            {({ handleSubmit, errors, touched }) => (
              <form
                className={styles["register__form"]}
                onSubmit={handleSubmit}
              >
                <DropFileInput onFileChange={(files) => onFileChange(files)} />
                <hr className={styles["register__divider"]} />
                <div className="group_inputs__group">
                  <div className="input__group">
                    <label htmlFor="">Placeholder </label>
                    <Field
                      name="Placeholder"
                      type="text"
                      className="text_input"
                      placeholder="E.g Placeholder"
                      component={InputField}
                    />
                  </div>
                  <div className="input__group">
                    <label htmlFor="">Placeholder </label>
                    <Field
                      name="Placeholder"
                      type="text"
                      className="text_input"
                      placeholder="E.g humam"
                      component={InputField}
                    />
                  </div>
                </div>
                <div className="input__group">
                  <label htmlFor="">Placeholder </label>
                  <Field
                    name="Placeholder"
                    type="text"
                    className="text_input"
                    placeholder="E.g Placeholder"
                    component={InputField}
                    // validate={validate}
                  />
                  {/* {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null} */}
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
                {/* {data?.registerUser.ClientErrorHandleAlreadyExists && <p>{data?.registerUser.ClientErrorHandleAlreadyExists.message}</p>}
              {data?.registerUser.ClientErrorInvalidHandle && <p>{data?.registerUser.ClientErrorInvalidHandle.message}</p>}
              {data?.registerUser.ClientErrorUnknown && <p>{data?.registerUser.ClientErrorUnknown.message}</p>} */}

                <button
                  type="submit"
                  className={styles["primary_button"] + " primary_button"}
                >
                  Placeholder
                </button>
              </form>
            )}
          </Formik>
        </div>
        <div
          className={
            styles["single__section"] + " " + styles["single__preview"]
          }
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
          laboriosam debitis, corrupti veniam obcaecati optio esse, omnis porro
          facere delectus ipsum assumenda velit voluptatibus veritatis amet
          quibusdam dolorum tempora autem!
        </div>
      </div>
    </div>
  );
}
