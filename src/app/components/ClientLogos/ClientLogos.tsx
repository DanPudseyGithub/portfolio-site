import { cabin } from "@fonts/Fonts";
import styles from "./ClientLogos.module.scss";

type ClientLogosProps = {
  heading: string;
  /** ClientLogo components */
  children: React.ReactNode;
};

const ClientLogos = ({ heading, children }: ClientLogosProps) => {
  return (
    <section className={styles.ClientLogos}>
      <h2 className={`${styles.Heading} ${cabin.className}`}>{heading}</h2>
      <ul className={styles.List}>{children}</ul>
    </section>
  );
};

export default ClientLogos;
