import Lottie from "@/components/Lottie/Lottie";
import animationData from "@logo/logo.json";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.Logo}>
      <Lottie animationData={animationData} />
    </div>
  );
};

export default Logo;
