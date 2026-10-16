import { cabin, sourceCodePro } from "@fonts/Fonts";
import { Row, Column } from "@components/Grid/Grid";
import { ParticleFooterBackground } from "@/components/Particles/Particles";
import Icon from "@components/Icon/Icon";
import { SiteSettings } from "@type/ContentTypes";
import styles from "./Footer.module.scss";

type FooterProps = SiteSettings["footer"];

const Footer = ({ heading, body, sourceCode }: FooterProps) => {
  return (
    <footer className={styles.Footer}>
      <ParticleFooterBackground />
      <Row>
        <Column sm={12} md={8} lg={8}>
          <h2 className={`${styles.Heading} ${cabin.className}`}>{heading}</h2>
          <p className={`${styles.Paragraph} ${sourceCodePro.className}`}>{body}</p>
          <p className={`${styles.Paragraph} ${sourceCodePro.className}`}>
            <a
              className={styles.ParagraphLink}
              href={sourceCode.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.ParagraphLink__Text}>{sourceCode.text}</span>
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
