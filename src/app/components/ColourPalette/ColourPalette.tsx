import { cabin, sourceCodePro } from "@fonts/Fonts";
import styleNames from "@utils/styleNames";
import { Row, Column } from "@components/Grid/Grid";
import { ColourPaletteBlock } from "@type/ContentTypes";
import styles from "./ColourPalette.module.scss";

type ColourPaletteProps = Omit<ColourPaletteBlock, "type">;

export const ColourPalette = ({ heading, description, colours }: ColourPaletteProps) => {
  return (
    <section className={styles.Wrapper}>
      <header className={styles.Header}>
        <Row>
          <Column sm={12} md={12} lg={9}>
            <h2 className={`${styles.Heading} ${cabin.className}`}>{heading}</h2>
            <p className={`${styles.Description} ${sourceCodePro.className}`}>{description}</p>
          </Column>
        </Row>
      </header>
      <section className={styles.Palette}>
        {colours.map((colour, i) => (
          <div
            key={i}
            className={`${styleNames(styles, ["Swatch", colour.darkText && "Swatch--DarkText"])} ${
              sourceCodePro.className
            }`}
            style={{ backgroundColor: colour.hex }}
            data-name={colour.name}
            data-code={colour.hex}
          />
        ))}
      </section>
      <hr className={styles.Divider} />
      <hr className={styles.Divider} />
      <hr className={styles.Divider} />
    </section>
  );
};
export default ColourPalette;
