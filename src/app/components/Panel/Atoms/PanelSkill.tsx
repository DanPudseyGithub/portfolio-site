import { sourceCodePro } from "@/assets/fonts/Fonts";
import styleNames from "@/assets/utils/styleNames";
import styles from "../Panel.module.scss";

type PanelSkillProps = {
  name: string;
  theme: "Design" | "Development";
};

const PanelSkill = ({ name, theme }: PanelSkillProps) => {
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

export default PanelSkill;
