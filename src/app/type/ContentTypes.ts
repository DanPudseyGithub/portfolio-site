import { TestimonialType } from "@type/TestimonialType";
import { IconName } from "@components/Icon/Icon";

// Content model for the page data. Shaped to map onto Sanity schema types later on.

/** Plain text that can contain inline links written as [link text](https://url) */
export type InlineText = string;

export type ContentLink = {
  text: string;
  url: string;
  /** Shows the link as disabled while the project is a work in progress */
  wip?: boolean;
};

/** A bullet point, optionally with a nested list beneath it */
export type Highlight = InlineText | { text: InlineText; items: InlineText[] };

/** A "Reading: ..." style line with an icon, e.g. what you're currently reading or watching */
export type CurrentlyItem = {
  icon: IconName;
  label: string;
  value: InlineText;
};

/** A CSS aspect ratio such as "1/1" or "3/2" */
export type AspectRatio = `${number}/${number}`;

export type ProjectMedia =
  | {
      kind: "image";
      src: string;
      alt?: string;
      /** Overrides the default 3/2 aspect ratio on mobile */
      aspectRatio?: AspectRatio;
    }
  | { kind: "video"; webm: string; mp4: string; poster: string };

export type ProjectRow = {
  media: ProjectMedia;
  /** Side the media sits on from tablet up. Media always comes first on mobile. Defaults to "left" */
  mediaPosition?: "left" | "right";
  /** "half" is a 6/6 split on desktop, "narrow" a 4/8 split. Defaults to "half" */
  mediaWidth?: "half" | "narrow";
  heading: string;
  body?: InlineText;
  highlights?: Highlight[];
  currently?: CurrentlyItem[];
  links?: ContentLink[];
};

export type PanelTheme = "Light" | "Dark" | "Sapphire" | "Gunmetal";

export type Colour = {
  name: string;
  hex: string;
  darkText?: boolean;
};

// -----------------------------
// Page builder blocks
// -----------------------------
export type HeaderBlock = {
  type: "header";
  heading: string;
  subheading: string;
  showAbout?: boolean;
};

export type PanelBlock = {
  type: "panel";
  theme: PanelTheme;
  heading?: string;
  subheading?: string;
  dates?: string;
  intro?: InlineText;
  designSkills?: string[];
  developmentSkills?: string[];
  rows: ProjectRow[];
};

export type ColourPaletteBlock = {
  type: "colourPalette";
  heading: string;
  description: string;
  colours: Colour[];
};

/** Renders the testimonials from the site settings */
export type TestimonialsBlock = {
  type: "testimonials";
};

export type Block = HeaderBlock | PanelBlock | ColourPaletteBlock | TestimonialsBlock;

export type Page = {
  blocks: Block[];
};

// -----------------------------
// Site wide settings
// -----------------------------
export type SiteSettings = {
  cvUrl: string;
  phone: { display: string; number: string };
  email: string;
  githubUrl: string;
  linkedInUrl: string;
  footer: {
    heading: string;
    body: string;
    sourceCode: ContentLink;
    clientsHeading: string;
  };
  testimonials: {
    heading: string;
    items: TestimonialType[];
  };
};
