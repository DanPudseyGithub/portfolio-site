import { cabin } from "@fonts/Fonts";
import styleNames from "@utils/styleNames";
import styles from "./CTA.module.scss";

type CTAProps = {
  text: string;
  link: string;
  linkType?: string;
  theme: "Default" | "Klein";
};

const CTA = ({ text, link, linkType, theme = "Default" }: CTAProps) => {
  const isDownload = linkType === "media";
  const isKlein = theme === "Klein";
  return (
    <a
      className={`${styleNames(styles, ["CTA", isKlein && "CTA--Klein"])} ${cabin.className}`}
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      download={isDownload}
    >
      <div className={styles.Inner}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {text}
    </a>
  );
};
export default CTA;
