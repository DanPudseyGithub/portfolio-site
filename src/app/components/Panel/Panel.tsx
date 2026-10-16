import { cabin, sourceCodePro } from "@fonts/Fonts";
import styleNames from "@utils/styleNames";
import { Row, Column, RowWrapper } from "@components/Grid/Grid";
import InlineText from "@components/InlineText/InlineText";
import { PanelBlock } from "@type/ContentTypes";
import PanelText from "./Atoms/PanelText";
import PanelSkill from "./Atoms/PanelSkill";
import PanelRow from "./Atoms/PanelRow";
import styles from "./Panel.module.scss";

type PanelProps = Omit<PanelBlock, "type">;

const Panel = ({
  theme,
  heading,
  subheading,
  dates,
  intro,
  designSkills,
  developmentSkills,
  rows,
}: PanelProps) => {
  const appearanceTheme = theme === "Light" ? "Light" : "Dark";

  return (
    <section
      className={styleNames(styles, [
        "Panel",
        `Panel--${theme}`,
        `Panel--${appearanceTheme}`,
        !intro && `Panel--NoHeader`,
      ])}
    >
      <Row>
        <Column sm={12} md={12} lg={9}>
          <div className={styles.PanelWrapper}>
            {heading && (
              <h2
                className={`${styleNames(styles, [
                  "Heading",
                  `Heading--${appearanceTheme}`,
                ])} ${cabin.className}`}
              >
                {heading}
              </h2>
            )}

            {subheading && (
              <p
                className={`${styleNames(styles, [
                  "Subheading",
                  `Subheading--${appearanceTheme}`,
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

            {intro && (
              <PanelText
                type="ProjectTitle"
                theme={appearanceTheme}
                fontClass={sourceCodePro.className}
              >
                <InlineText text={intro} />
              </PanelText>
            )}

            {Boolean(designSkills?.length || developmentSkills?.length) && (
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
          </div>
        </Column>

        <Column sm={12}>
          {rows.length > 0 && (
            <div className={styles.PanelTileWrapper}>
              <RowWrapper>
                {rows.map((row, index) => (
                  <PanelRow key={index} {...row} />
                ))}
              </RowWrapper>
            </div>
          )}
        </Column>
      </Row>
    </section>
  );
};

export default Panel;
