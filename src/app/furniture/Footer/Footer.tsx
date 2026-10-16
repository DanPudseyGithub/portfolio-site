import { cabin, sourceCodePro } from "@fonts/Fonts";
import { Row, Column } from "@components/Grid/Grid";
import { ParticleFooterBackground } from "@/components/Particles/Particles";
import Icon from "@components/Icon/Icon";
import styles from "./Footer.module.scss";

type FooterProps = {
  heading: string;
  subheading: string;
};

const Footer = ({ heading, subheading }: FooterProps) => {
  return (
    <footer className={styles.Footer}>
      <ParticleFooterBackground />
      <Row>
        <Column sm={12} md={8} lg={8}>
          <h2 className={`${styles.Heading} ${cabin.className}`}>{heading}</h2>
          <p className={`${styles.Paragraph} ${sourceCodePro.className}`}>{subheading}</p>
          <p className={`${styles.Paragraph} ${sourceCodePro.className}`}>
            <a
              className={styles.ParagraphLink}
              href="https://gitlab.com/DPudsey/personal-site/-/tree/master/version-2?ref_type=heads"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.ParagraphLink__Text}>View source code on Gitlab</span>
              <span className={styles.ParagraphLink__Icon}>
                <Icon name="arrow-right" />
              </span>
            </a>
          </p>
        </Column>
      </Row>
    </footer>
  );
};

export default Footer;
