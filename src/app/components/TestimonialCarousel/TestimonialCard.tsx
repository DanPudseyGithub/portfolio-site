import Image from "next/image";
import { cabin, fraunces, sourceCodePro } from "@fonts/Fonts";
import { TestimonialType } from "@type/TestimonialType";
import styles from "./TestimonialCarousel.module.scss";

export const TestimonialCard = ({
  id,
  rating,
  quote,
  cite,
  imageUrl,
  author,
  role,
}: TestimonialType) => {
  return (
    <article key={id} className={styles.Card}>
      <header>
        <span className={`${styles.QuoteIcon} ${fraunces.className}`}>“</span>
        <p className={`${styles.Rating} ${cabin.className}`}>{rating}</p>
        <blockquote className={`${styles.Quote} ${cabin.className}`} cite={cite}>
          {quote}
        </blockquote>
      </header>
      <footer className={styles.Footer}>
        {imageUrl && (
          <div className={styles.ProfilePicture}>
            <Image src={imageUrl} width={100} height={100} alt={author} />
          </div>
        )}
        <div>
          <p className={`${styles.Author} ${sourceCodePro.className}`}>{author}</p>
          {role && <p className={`${styles.Role} ${sourceCodePro.className}`}>{role}</p>}
        </div>
      </footer>
    </article>
  );
};
export default TestimonialCard;
