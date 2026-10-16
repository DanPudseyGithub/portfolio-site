import { sourceCodePro } from "@fonts/Fonts";
import styleNames from "@utils/styleNames";
import Icon from "@components/Icon/Icon";
import { ContentLink } from "@type/ContentTypes";
import styles from "../Panel.module.scss";

const PanelTileLink = ({ url, text, wip }: ContentLink) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styleNames(styles, ["PanelTileLink", wip && "Wip"])} ${
        sourceCodePro.className
      }`}
    >
      <span className={styles.PanelTileLink__Text}>{text}</span>
      <span className={styles.PanelTileLink__Icon}>
        <Icon name="arrow-right" />
      </span>
    </a>
  );
};

export default PanelTileLink;
