import { cabin, sourceCodePro } from "@fonts/Fonts";
import { Row, Column } from "@components/Grid/Grid";
import { ParticleFooterBackground } from "@/components/Particles/Particles";
import Icon from "@components/Icon/Icon";
import ClientLogos from "@components/ClientLogos/ClientLogos";
import ClientLogo from "@components/ClientLogos/ClientLogo";
import { SiteSettings } from "@type/ContentTypes";
import styles from "./Footer.module.scss";
import bbc6MusicLogo from "@images/client-logos/bbc-6-music-logo.svg?url";
import womadLogo from "@images/client-logos/womad-logo.svg?url";
import dysonLogo from "@images/client-logos/dyson-logo.svg?url";
import bristolHarbourFestivalLogo from "@images/client-logos/bristol-habour-festival-logo.svg?url";
import legoLogo from "@images/client-logos/lego-logo.svg?url";
import carbonLogo from "@images/client-logos/Carbon_Logo_White_Alpha_V001.gif";
import bristolBeaconLogo from "@images/client-logos/bristol-beacon-logo.svg?url";
import newScientistLogo from "@images/client-logos/new-scientist-logo.svg?url";
import theGymGroupLogo from "@images/client-logos/the-gym-group-logo.svg?url";
import pinsentMasonsLogo from "@images/client-logos/pinsent-masons-logo.svg?url";
import nhsLogo from "@images/client-logos/nhs-logo.svg?url";
import theSocialHubLogo from "@images/client-logos/the-social-hub-logo.svg?url";
import itnLogo from "@images/client-logos/itn-logo.svg?url";
import bristolWaterLogo from "@images/client-logos/bristol-water-logo.svg?url";
import measuredEventsLogo from "@images/client-logos/measured-events-logo.svg?url";
import farmersWeeklyLogo from "@images/client-logos/farmers-weekly-logo.svg?url";

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
                logoUrl={bbc6MusicLogo}
                title="BBC 6 Music"
                description="Involved from the start of the pitch for 6Music Festival Bristol and won all their design work!"
              />
              <ClientLogo
                logoUrl={womadLogo}
                title="WOMAD Festival"
                description="Multi-year contract with WOMAD to deliver their website and extended into a freelance contract"
              />
              <ClientLogo
                logoUrl={dysonLogo}
                title="Dyson"
                description="Used Adobe Experience Manager to build multiple sites including their flagship"
              />
              <ClientLogo
                logoUrl={bristolHarbourFestivalLogo}
                title="Bristol Harbour Festival"
                description="Multi-year contract to deliver their website with yearly brand refreshes"
              />
              <ClientLogo
                logoUrl={legoLogo}
                title="LEGO"
                description="Multiple sites with their sub-brand The LEGO Foundation"
              />
              <ClientLogo
                logoUrl={carbonLogo.src}
                title="Carbon"
                description="Design work on their flagship, great brand to work with - created some nice animations on the prototype"
              />
              <ClientLogo
                logoUrl={bristolBeaconLogo}
                title="Bristol Beacon"
                description="Created an interactive map of Bristol with per ward statistics highlighting ticket purchasing"
              />
              <ClientLogo
                logoUrl={newScientistLogo}
                title="New Scientist"
                description="Designed and developed their flagship site, mobile app and many more sub-brands and partnership sites"
              />
              <ClientLogo
                logoUrl={theGymGroupLogo}
                title="The Gym Group"
                description="Front end dev on their login, interactive map and customer dashboards"
              />
              <ClientLogo
                logoUrl={pinsentMasonsLogo}
                title="Pinsent Masons"
                description="Front end development on search for their content and lawyer directory"
              />
              <ClientLogo
                logoUrl={nhsLogo}
                title="NHS"
                description="Multiple site design and build for CCGs and various NHS brands"
              />
              <ClientLogo
                logoUrl={theSocialHubLogo}
                title="The Social Hub"
                description="Led the front end on their flagship site with a complex booking engine implementation"
              />
              <ClientLogo
                logoUrl={itnLogo}
                title="ITN Business"
                description="Designed and built a custom microsite in React and Netlify"
              />
              <ClientLogo
                logoUrl={bristolWaterLogo}
                title="Bristol Water"
                description="Design and development of their flagship site, and a mobile application for Refill Bristol"
              />
              <ClientLogo
                logoUrl={measuredEventsLogo}
                title="Measured Events"
                description="Web design and development alongside print for their backbar and POS menus"
              />
              <ClientLogo
                logoUrl={farmersWeeklyLogo}
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
