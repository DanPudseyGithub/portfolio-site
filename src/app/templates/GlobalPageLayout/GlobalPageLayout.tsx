import React from "react";
import Footer from "@furniture/Footer/Footer";
import { SiteSettings } from "@type/ContentTypes";
import styles from "./GlobalPageLayout.module.scss";

interface GlobalPageLayoutProps {
  footer: SiteSettings["footer"];
  children: React.ReactNode;
}

const GlobalPageLayout: React.FC<GlobalPageLayoutProps> = ({ footer, children }) => {
  return (
    <>
      <main className={styles.Main}>{children}</main>
      <Footer {...footer} />
    </>
  );
};

export default GlobalPageLayout;
