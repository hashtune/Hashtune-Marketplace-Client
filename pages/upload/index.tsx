import { Navbar } from "../../components/Layout/Navbar/Navbar";
import { Formik, Field } from "formik";
import { useRegisterUserMutation } from "../../graphql/generated/apolloComponents";
import router from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/pages/Upload.module.scss";
import { Session } from "../../hooks/session";

export { getServerSideProps } from "../../hooks/session";

export default function Upload({ session }: { session: Session }) {
  return (
    <div className={"app " + styles["upload__layout"]}>
      <Navbar session={session} />
      <div className={styles["upload__hero"]}>
        <div className={styles["upload__hero-container"]}>
          <div className={styles["upload__content"]}>
            <h2>Upload your Music 🎸</h2>
            <p>
              Choose “Single” if you want your collectible song to be one of a
              kind or “Album” if you want to sell one collectible multiple times
            </p>
          </div>
          <div className={styles["upload__variant"]}>
            <div className={styles["upload__variant-container"]}>
              <div className={styles["upload__variant-type"]}>
                <Image
                  src="/dist/patterns/upload-type-pattern.png"
                  width="240"
                  height="240"
                  alt=""
                  draggable="false"
                />
                <a
                  href="/upload/single"
                  className={
                    "primary_button " + styles["upload__variant-type--button"]
                  }
                >
                  Upload Single
                </a>
              </div>
              <div
                className={styles["upload__variant-type"] + " opacity-small"}
              >
                <Image
                  src="/dist/patterns/upload-type-pattern-1.png"
                  width="240"
                  height="240"
                  alt=""
                  draggable="false"
                />
                <a
                  className={
                    "primary_button disabled-link " +
                    styles["upload__variant-type--button"]
                  }
                >
                  Upload Album
                </a>
              </div>
            </div>
          </div>
          <p className={styles["upload__rights"]}>
            We do not own your private keys and cannot access your funds without
            your confirmation.
          </p>
        </div>
      </div>
    </div>
  );
}
