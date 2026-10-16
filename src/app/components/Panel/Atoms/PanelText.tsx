import styleNames from "@/assets/utils/styleNames";
import styles from "../Panel.module.scss";

type PanelTextProps = {
  type: "ProjectTitle" | "Dates" | "Skills" | "Description" | "SiteLink";
  theme: "Light" | "Dark" | "Gunmetal";
  children: React.ReactNode;
  fontClass?: string;
};

const PanelText = ({ type, theme, children, fontClass }: PanelTextProps) => {
  return (
    <p className={`${styleNames(styles, [type, theme && `${type}--${theme}`])} ${fontClass ?? ""}`}>
      {children}
    </p>
  );
};

export default PanelText;
