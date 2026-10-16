import Link from "next/link";
import { cabin, sourceCodePro } from "@fonts/Fonts";
import { Row, Column } from "@components/Grid/Grid";
import Logo from "@/furniture/Logo/Logo";
import CTA from "@components/CTA/CTA";
import styles from "./Header.module.scss";

type HeaderProps = {
  siteHeading: string;
  subheading: string;
  showAbout?: boolean;
};

const Header = ({ siteHeading, subheading, showAbout = true }: HeaderProps) => {
  return (
    <header className={styles.Header}>
      <Row>
        <Column sm={12}>
          <div className={styles.HeaderWrapper}>
            <Row height="inherit">
              <Column sm={12} md={6} lg={6} justifySm="center" justifyMd="start" alignMd="end">
                <Link href="/" className={styles.LogoLink}>
                  <Logo />
                </Link>
              </Column>
              <Column sm={12} md={6} lg={6} justifySm="center" justifyMd="end" alignMd="end">
                <CTA
                  theme="Klein"
                  text="Download CV"
                  linkType="media"
                  link="https://danpudsey.com/assets/pdf/Dan_Pudsey_CV_DP_V01_04092025.pdf"
                />
              </Column>
            </Row>
          </div>
          <Row>
            <Column sm={12} lg={9}>
              <h1 className={`${styles.Heading} ${cabin.className}`}>{siteHeading}</h1>
              <p className={`${styles.Subheading} ${sourceCodePro.className}`}>{subheading}</p>
              <p className={`${styles.Subheading} ${sourceCodePro.className}`}>
                <a className={styles.SubheadingLink} href="tel:+447970943399">
                  07970 943399
                </a>
                <span className={styles.Separator}>|</span>
                <a className={styles.SubheadingLink} href="mailto:dan@danpudsey.com">
                  dan@danpudsey.com
                </a>
                {showAbout && (
                  <>
                    <span className={styles.Separator}>|</span>
                    <Link href="/about" className={styles.SubheadingLink}>
                      About
                    </Link>
                  </>
                )}
                <span className={styles.Separator}>|</span>
                <a
                  className={styles.SubheadingLink}
                  href="https://github.com/DanPudseyGithub/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Git
                </a>
              </p>
            </Column>
          </Row>
        </Column>
      </Row>
    </header>
  );
};

export default Header;
