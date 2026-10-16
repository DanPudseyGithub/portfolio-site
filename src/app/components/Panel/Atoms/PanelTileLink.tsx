import { sourceCodePro } from "@fonts/Fonts";
import styleNames from "@utils/styleNames";
import Icon from "@components/Icon/Icon";
import { LinkType } from "@type/LinkType";
import styles from "../Panel.module.scss";

const PanelTileLink = ({ url, linkText, target, isDark }: LinkType) => {
  const isOpenInNewTab = target === "_blank";
  return (
    <a
      href={url}
      target={target}
      rel={isOpenInNewTab ? "noopener noreferrer" : undefined}
      className={`${styleNames(styles, ["PanelTileLink", isDark && "PanelTileLink--Dark"])} ${
        sourceCodePro.className
      }`}
    >
      <span className={styles.PanelTileLink__Text}>{linkText}</span>
      <span className={styles.PanelTileLink__Icon}>
        <Icon name="arrow-right" />
      </span>
    </a>
  );
};

export default PanelTileLink;
