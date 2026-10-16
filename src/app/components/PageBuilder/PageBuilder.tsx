import Header from "@furniture/Header/Header";
import Panel from "@components/Panel/Panel";
import { ColourPalette } from "@components/ColourPalette/ColourPalette";
import { TestimonialCarousel } from "@components/TestimonialCarousel/TestimonialCarousel";
import GlobalPageLayout from "@templates/GlobalPageLayout/GlobalPageLayout";
import { Block, Page, SiteSettings } from "@type/ContentTypes";

type PageBuilderProps = {
  page: Page;
  site: SiteSettings;
};

const renderBlock = (block: Block, site: SiteSettings, key: number) => {
  switch (block.type) {
    case "header":
      return <Header key={key} {...block} site={site} />;
    case "panel":
      return <Panel key={key} {...block} />;
    case "colourPalette":
      return <ColourPalette key={key} {...block} />;
    case "testimonials":
      return (
        <TestimonialCarousel
          key={key}
          heading={site.testimonials.heading}
          testimonials={site.testimonials.items}
        />
      );
    default: {
      // Fails the type check if a block type is added without a case here
      const unhandled: never = block;
      return unhandled;
    }
  }
};

const PageBuilder = ({ page, site }: PageBuilderProps) => {
  return (
    <GlobalPageLayout footer={site.footer}>
      {page.blocks.map((block, index) => renderBlock(block, site, index))}
    </GlobalPageLayout>
  );
};

export default PageBuilder;
