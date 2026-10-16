import React from "react";
import globalData from "@pageData/global.json";
import Footer from "@furniture/Footer/Footer";
import styles from "./GlobalPageLayout.module.scss";

interface GlobalPageLayoutProps {
  children: React.ReactNode;
}

const { components } = globalData;
const { Footer: FooterData } = components;

const GlobalPageLayout: React.FC<GlobalPageLayoutProps> = ({ children }) => {
  return (
    <>
      <main className={styles.Main}>{children}</main>
      <Footer heading={FooterData.heading} subheading={FooterData.subheading} />
    </>
  );
};

export default GlobalPageLayout;
