import Link from "next/link";
import { cabin, sourceCodePro } from "@fonts/Fonts";
import { Row, Column } from "@components/Grid/Grid";
import Logo from "@/furniture/Logo/Logo";
import CTA from "@components/CTA/CTA";
import { HeaderBlock, SiteSettings } from "@type/ContentTypes";
import styles from "./Header.module.scss";

type HeaderProps = Omit<HeaderBlock, "type"> & {
  site: Pick<SiteSettings, "cvUrl" | "phone" | "email" | "githubUrl" | "linkedInUrl">;
};

const Header = ({ heading, subheading, showAbout = true, site }: HeaderProps) => {
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
                <CTA theme="Klein" text="Download CV" linkType="media" link={site.cvUrl} />
              </Column>
            </Row>
          </div>
          <Row>
            <Column sm={12} lg={9}>
              <h1 className={`${styles.Heading} ${cabin.className}`}>{heading}</h1>
              <p className={`${styles.Subheading} ${sourceCodePro.className}`}>{subheading}</p>
              <p className={`${styles.Subheading} ${sourceCodePro.className}`}>
                <a className={styles.SubheadingLink} href={`tel:${site.phone.number}`}>
                  {site.phone.display}
                </a>
                <span className={styles.Separator}>|</span>
                <a className={styles.SubheadingLink} href={`mailto:${site.email}`}>
                  {site.email}
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
                  href={site.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <span className={styles.Separator}>|</span>
                <a
                  className={styles.SubheadingLink}
                  href={site.githubUrl}
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
