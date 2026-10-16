import { sourceCodePro } from "@/assets/fonts/Fonts";
import styleNames from "@/assets/utils/styleNames";
import styles from "../Panel.module.scss";

type PanelTextProps = {
  name: string;
  theme: "Design" | "Development";
};

const PanelText = ({ name, theme }: PanelTextProps) => {
  return (
    <span
      className={`${styleNames(styles, ["PanelSkills", theme && `PanelSkills--${theme}`])} ${
        sourceCodePro.className
      }`}
    >
      {name}
    </span>
  );
};

export default PanelText;
