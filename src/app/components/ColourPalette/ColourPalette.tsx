import { cabin, sourceCodePro } from "@fonts/Fonts";
import styleNames from "@utils/styleNames";
import { Row, Column } from "@components/Grid/Grid";
import styles from "./ColourPalette.module.scss";

type ColourItem = {
  name: string;
  hex: string;
  darkText?: boolean;
};

type ColourPaletteProps = {
  heading: string;
  brandingColours: ColourItem[];
};

export const ColourPalette: React.FC<ColourPaletteProps> = ({ heading, brandingColours }) => {
  return (
    <section className={styles.Wrapper}>
      <header className={styles.Header}>
        <Row>
          <Column sm={12} md={12} lg={9}>
            <h2 className={`${styles.Heading} ${cabin.className}`}>Brand reconciliation.</h2>
            <p className={`${styles.Description} ${sourceCodePro.className}`}>{heading}</p>
          </Column>
        </Row>
      </header>
      <section className={styles.Palette}>
        {brandingColours.map((colour, i) => (
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
