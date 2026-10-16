import { cabin, sourceCodePro } from "@fonts/Fonts";
import parse from "html-react-parser";
import styleNames from "@utils/styleNames";
import { Row, Column } from "@components/Grid/Grid";
import PanelText from "./Atoms/PanelText";
import PanelSkill from "./Atoms/PanelSkill";
import styles from "./Panel.module.scss";

type SiteLink = {
  linkText: string;
  url: string;
};

type ColourTheme = "Gunmetal" | "Sapphire" | "Dark" | "Light" | string;

type PanelProps = {
  isDark?: boolean;
  colourTheme?: ColourTheme;
  heading?: string;
  subheading?: string;
  projectTitle?: string;
  dates?: string;
  designSkills?: string[];
  developmentSkills?: string[];
  description?: string;
  siteLinks?: SiteLink[];
  children?: React.ReactNode;
};

const Panel = ({
  isDark = false,
  colourTheme = "Light",
  heading,
  subheading,
  projectTitle,
  dates,
  designSkills,
  developmentSkills,
  description,
  siteLinks,
  children,
}: PanelProps) => {
  const appearanceTheme = isDark ? "Dark" : "Light";

  return (
    <section
      className={styleNames(styles, [
        "Panel",
        colourTheme && `Panel--${colourTheme}`,
        appearanceTheme && `Panel--${appearanceTheme}`,
        !projectTitle && `Panel--NoHeader`,
      ])}
    >
      <Row>
        <Column sm={12} md={12} lg={9}>
          <div className={styles.PanelWrapper}>
            {heading && (
              <h2
                className={`${styleNames(styles, [
                  "Heading",
                  appearanceTheme && `Heading--${appearanceTheme}`,
                ])} ${cabin.className}`}
              >
                {heading}
              </h2>
            )}

            {subheading && (
              <p
                className={`${styleNames(styles, [
                  "Subheading",
                  appearanceTheme && `Subheading--${appearanceTheme}`,
                ])} ${cabin.className}`}
              >
                {subheading}
              </p>
            )}

            {dates && (
              <PanelText type="Dates" theme={appearanceTheme} fontClass={sourceCodePro.className}>
                {dates}
              </PanelText>
            )}

            {projectTitle && (
              <PanelText
                type="ProjectTitle"
                theme={appearanceTheme}
                fontClass={sourceCodePro.className}
              >
                {parse(projectTitle)}
              </PanelText>
            )}

            {(designSkills?.length || developmentSkills?.length) && (
              <div className={styles.AllSkillsWrapper}>
                {designSkills && (
                  <div className={styles.SkillsWrapper}>
                    {designSkills.map((skill, index) => (
                      <PanelSkill key={index} name={skill} theme="Design" />
                    ))}
                  </div>
                )}

                {developmentSkills && (
                  <div className={styles.SkillsWrapper}>
                    {developmentSkills.map((skill, index) => (
                      <PanelSkill key={index} name={skill} theme="Development" />
                    ))}
                  </div>
                )}
              </div>
            )}

            {description && (
              <PanelText
                type="Description"
                theme={appearanceTheme}
                fontClass={sourceCodePro.className}
              >
                {parse(description)}
              </PanelText>
            )}

            {siteLinks?.map(({ url, linkText }, index) => (
              <PanelText
                key={index}
                type="SiteLink"
                theme={appearanceTheme}
                fontClass={sourceCodePro.className}
              >
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {linkText}
                </a>
              </PanelText>
            ))}
          </div>
        </Column>

        <Column sm={12}>
          {children && <div className={styles.PanelTileWrapper}>{children}</div>}
        </Column>
      </Row>
    </section>
  );
};

export default Panel;
