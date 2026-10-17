import { cabin, sourceCodePro } from "@fonts/Fonts";
import { Row, Column } from "@components/Grid/Grid";
import { ParticleFooterBackground } from "@/components/Particles/Particles";
import Icon from "@components/Icon/Icon";
import ClientLogos from "@components/ClientLogos/ClientLogos";
import ClientLogo from "@components/ClientLogos/ClientLogo";
import { SiteSettings } from "@type/ContentTypes";
import styles from "./Footer.module.scss";

type FooterProps = SiteSettings["footer"];

const Footer = ({ heading, body, sourceCode, clientsHeading }: FooterProps) => {
  return (
    <footer className={styles.Footer}>
      <ParticleFooterBackground />
      <div className={styles.Inner}>
        <Row>
          <Column sm={12}>
            {/* Placeholder clients, swap in the real logos */}
            <ClientLogos heading={clientsHeading}>
              <ClientLogo
                logoUrl="https://danpudsey.com/assets/img/v2/logo/bbc-6-music-logo.svg"
                title="BBC 6 Music"
                description="Involved from the start of the pitch for 6Music Festival Bristol and won all their design work!"
              />
              <ClientLogo
                logoUrl="https://danpudsey.com/assets/img/v2/logo/womad-logo.svg"
                title="WOMAD Festival"
                description="Multi-year contract with WOMAD to deliver their website and extended into a freelance contract"
              />
              <ClientLogo
                logoUrl="https://danpudsey.com/assets/img/v2/logo/dyson-logo.svg"
                title="Dyson"
                description="Used Adobe Experience Manager to build multiple sites including their flagship"
              />
              <ClientLogo
                logoUrl="https://danpudsey.com/assets/img/v2/logo/bristol-habour-festival-logo.svg"
                title="Bristol Harbour Festival"
                description="Multi-year contract to deliver their website with yearly brand refreshes"
              />
              <ClientLogo
                logoUrl="https://danpudsey.com/assets/img/v2/logo/lego-logo.svg"
                title="LEGO"
                description="Multiple sites with their sub-brand The LEGO Foundation"
              />
              <ClientLogo
                logoUrl="https://danpudsey.com/assets/img/v2/bento/carbon/Carbon_Logo_White_Alpha_V001.gif"
                title="Carbon"
                description="Design work on their flagship, great brand to work with - created some nice animations on the prototype"
              />
              <ClientLogo
                logoUrl="https://danpudsey.com/assets/img/v2/logo/bristol-beacon-logo.svg"
                title="Bristol Beacon"
                description="Created an interactive map of Bristol with per ward statistics highlighting ticket purchasing"
              />
              <ClientLogo
                logoUrl="https://danpudsey.com/assets/img/v2/logo/new-scientist-logo.svg"
                title="New Scientist"
                description="Designed and developed their flagship site, mobile app and many more sub-brands and partnership sites"
              />
              <ClientLogo
                logoUrl="https://danpudsey.com/assets/img/v2/logo/the-gym-group-logo.svg"
                title="The Gym Group"
                description="Front end dev on their login, interactive map and customer dashboards"
              />
              <ClientLogo
                logoUrl="https://danpudsey.com/assets/img/v2/logo/pinsent-masons-logo.svg"
                title="Pinsent Masons"
                description="Front end development on search for their content and lawyer directory"
              />
              <ClientLogo
                logoUrl="https://danpudsey.com/assets/img/v2/logo/nhs-logo.svg"
                title="NHS"
                description="Multiple site design and build for CCGs and various NHS brands"
              />
              <ClientLogo
                logoUrl="https://danpudsey.com/assets/img/v2/logo/the-social-hub-logo.svg"
                title="The Social Hub"
                description="Led the front end on their flagship site with a complex booking engine implementation"
              />
              <ClientLogo
                logoUrl="https://danpudsey.com/assets/img/v2/logo/itn-logo.svg"
                title="ITN Business"
                description="Designed and built a custom microsite in React and Netlify"
              />
              <ClientLogo
                logoUrl="https://danpudsey.com/assets/img/v2/logo/bristol-water-logo.svg"
                title="Bristol Water"
                description="Design and development of their flagship site, and a mobile application for Refill Bristol"
              />
              <ClientLogo
                logoUrl="https://danpudsey.com/assets/img/v2/logo/measured-events-logo.svg"
                title="Measured Events"
                description="Web design and development alongside print for their backbar and POS menus"
              />
              <ClientLogo
                logoUrl="https://danpudsey.com/assets/img/v2/logo/farmers-weekly-logo.svg"
                title="Farmers Weekly"
                description="Designed and built a custom microsite in React, Sanity and Netlify"
              />
            </ClientLogos>
          </Column>
        </Row>
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
      </div>
    </footer>
  );
};

export default Footer;
