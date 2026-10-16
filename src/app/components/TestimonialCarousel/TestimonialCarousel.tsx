import Carousel from "@components/Carousel/Carousel";
import { cabin } from "@fonts/Fonts";
import { TestimonialType } from "@type/TestimonialType";
import { Row, Column } from "@components/Grid/Grid";
import { TestimonialCard } from "./TestimonialCard";
import styles from "./TestimonialCarousel.module.scss";

type TestimonialCarouselProps = {
  heading: string;
  testimonials: TestimonialType[];
};

export const TestimonialCarousel = ({ heading, testimonials }: TestimonialCarouselProps) => {
  const totalTestimonials = testimonials.length;

  // Calculate the split index: first ribbon gets the extra if odd
  const splitIndex = Math.ceil(totalTestimonials / 2);

  const firstRibbonTestimonials = testimonials.slice(0, splitIndex);
  const secondRibbonTestimonials = testimonials.slice(splitIndex);

  return (
    <section className={styles.TestimonialCarousel}>
      <header className={styles.Header}>
        <Row center>
          <Column sm={12} md={12} lg={6} startLg={4}>
            <h2 className={`${styles.Heading} ${cabin.className}`}>{heading}</h2>
          </Column>
        </Row>
      </header>
      <div className={styles.CarouselWrapper}>
        <Carousel direction="right">
          {firstRibbonTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </Carousel>
        <Carousel direction="left">
          {secondRibbonTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};
export default TestimonialCarousel;
