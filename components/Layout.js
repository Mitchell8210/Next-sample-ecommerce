import React from "react";
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Nav from "./Nav";
import Meta from "./Meta";
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
          <div>
            by{" "}
            <span className={styles.creator}>
              <a
                href="https://github.com/Mitchell8210"
                target="_blank"
                rel="noreferrer noopeener"
              >
                Mitchell R.
              </a>
            </span>
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
