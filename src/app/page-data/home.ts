import { Page } from "@type/ContentTypes";

const homePage: Page = {
  blocks: [
    {
      type: "header",
      heading: "London-based front end developer & digital designer.",
      subheading:
        "I bridge the gap between design and code, delivering products that are visually polished and technically robust. I prioritise accessibility, scalability, and performance to create digital experiences that stand the test of time.",
    },
    {
      type: "panel",
      theme: "Dark",
      heading: "Turtle Lasagne",
      subheading: "Design agency",
      dates: "November 2025 - Present",
      intro:
        "I design and build websites and brands for small and medium-sized businesses, from first sketches in Figma to the finished site. I work across branding, UX, custom WordPress development and front-end builds in Astro and TypeScript, giving clients one person who owns the whole journey.",
      designSkills: ["Web design", "Branding", "Figma"],
      developmentSkills: ["Web development", "React", "SCSS", "PHP", "WordPress", "CMS"],
      rows: [
        {
          media: {
            kind: "image",
            src: "https://danpudsey.com/assets/img/v2/bento/carbon/Carbon_Logo_White_Alpha_V001.gif",
          },
          mediaWidth: "narrow",
          heading: "Web design",
          highlights: [
            "Designed 3 new page templates for desktop, tablet and mobile that work across breakpoints rather than just shrinking.",
            "Built interactive components in Figma (states, variants and prototyped interactions) so the external dev agency could see exactly how things should behave, not just how they should look.",
            "Ran iterative review rounds with the client through to sign-off, keeping stakeholders aligned and the project moving.",
          ],
          links: [
            {
              text: "Live site",
              url: "https://carbonmoves.com/",
            },
          ],
        },
        {
          media: {
            kind: "image",
            src: "https://danpudsey.com/assets/img/v2/bento/measured/measured-events.webp",
          },
          mediaPosition: "right",
          heading: "Branding, web design and development",
          highlights: [
            "Created a distinct sub-brand for the private events arm of an established company.",
            "Designed and built a page template and reusable components in WordPress, so the marketing team could create and update event pages themselves without developer help.",
            "Worked with the marketing team on brand guidelines for social, email and print.",
          ],
          links: [
            {
              text: "WIP",
              url: "https://measured.events/",
              wip: true,
            },
          ],
        },
        {
          media: {
            kind: "image",
            src: "https://danpudsey.com/assets/img/v2/bento/uncommon-editorial/uncommon-editorial-graphic.webp",
          },
          mediaWidth: "narrow",
          heading: "Branding and CMS powered site",
          highlights: [
            "Established the brand identity for a boutique journalism agency, giving a small team a confident, editorial presence that stands up against larger competitors.",
            "Designed a bold, Saul Bass-inspired hero illustration that sets the tone of the site and makes it instantly memorable.",
            "Built a custom WordPress CMS so the team can publish and manage their work independently.",
          ],
          links: [
            {
              text: "Live site",
              url: "https://uncommoneditorial.com/",
            },
          ],
        },
      ],
    },
    {
      type: "panel",
      theme: "Sapphire",
      heading: "New Scientist.",
      subheading: "Part of DMG Media",
      dates: "March 2021 - November 2025",
      intro:
        "I lead the UX, design, and front end development of New Scientist. Including the flagship [website](https://www.newscientist.com/) and [app](https://apps.apple.com/us/app/new-scientist/id671845403), integrating [Piano](https://www.piano.io/) subscription journeys, checkout, and paywalls. Delivered multiple sub-brand redesigns in various CMSs and React SPA microsites for commercial partners. Mentored 2 front end developers. Established best practices to improve code quality.",
      designSkills: [
        "User research",
        "UX Design",
        "Visual design",
        "Figma",
        "Prototyping",
        "Guerrilla testing",
        "User testing",
      ],
      developmentSkills: [
        "Twig",
        "Vanilla JS",
        "React",
        "SCSS",
        "Piano",
        "Angular",
        "PHP",
        "WordPress",
        "Thinkific",
        "Sanity",
        "Contentful",
      ],
      rows: [
        {
          media: {
            kind: "image",
            src: "https://danpudsey.com/assets/img/v2/bento/new-scientist/iphone-icon-close-up.png",
          },
          mediaWidth: "narrow",
          heading: "Mobile app design",
          highlights: [
            "Researched competitors to spot gaps and opportunities.",
            "Designed wireframes and tested low/high-fidelity prototypes with real users.",
            "Created a design system for typography, layout, and components.",
            "Worked with [Pugpig](https://www.pugpig.com/) to bring designs to life and ship the app.",
            "Wrote detailed content feed specs to ensure smooth delivery.",
          ],
          links: [
            {
              text: "iPhone App",
              url: "https://apps.apple.com/us/app/new-scientist/id671845403",
            },
            {
              text: "Android App",
              url: "https://play.google.com/store/apps/details?id=com.newscientist.mobile&hl=en_GB",
            },
          ],
        },
        {
          media: {
            kind: "image",
            src: "https://danpudsey.com/assets/img/v2/bento/new-scientist/new-scientist-website.webp",
          },
          mediaPosition: "right",
          heading: "Flagship website design & build",
          highlights: [
            "Redesigned site structure to improve UX, hierarchy, and navigation.",
            "Built a design system used across teams.",
            "Introduced processes to streamline workflows and collaboration.",
            "Kept stakeholders engaged and aligned throughout delivery.",
            "Mentored developers to deliver a fast, SEO-friendly, premium product.",
          ],
          links: [
            {
              text: "Live site",
              url: "https://newscientist.com/",
            },
          ],
        },
        {
          media: {
            kind: "image",
            src: "https://danpudsey.com/assets/img/v2/bento/new-scientist/curiosity-engine.webp",
          },
          heading: "Curiosity Engine AI implementation",
          highlights: [
            "Refined the design output from a third party AI tool called Miso which read the New Scientist back catalogue to produce answers in the NS tone of voice.",
            "Used the JavaScript SDK to build the custom implementation.",
          ],
          links: [
            {
              text: "Use the Curiosity Engine",
              url: "https://www.newscientist.com/curiosity-engine/",
            },
          ],
        },
        {
          media: {
            kind: "image",
            src: "https://danpudsey.com/assets/img/v2/bento/new-scientist/new-scientist-academy.png",
          },
          mediaWidth: "narrow",
          heading: "Academy courses design and build",
          highlights: [
            "Designed and built New Scientist Academy course site in Thinkific CMS.",
            "Extended the design system to balance consistency with sub-brand identity.",
            "Implemented the build using Shopify's Liquid templating system.",
            "Delivered a polished, easy-to-use course experience for learners.",
          ],
          links: [
            {
              text: "Live site",
              url: "https://academy.newscientist.com/",
            },
          ],
        },
      ],
    },
    {
      type: "colourPalette",
      heading: "Brand reconciliation.",
      description:
        "When I joined NS, the brand was split between print and digital, with multiple sources of truth. I unified the brand across both, overhauled the colour palette and typography, and created a central hub for sharing assets.",
      colours: [
        {
          name: "Night",
          hex: "#131414",
        },
        {
          name: "Liquorice",
          hex: "#25171f",
        },
        {
          name: "Bat",
          hex: "#242424",
        },
        {
          name: "Eerie",
          hex: "#262521",
        },
        {
          name: "Dustbin",
          hex: "#262727",
        },
        {
          name: "Oil",
          hex: "#211f1f",
        },
        {
          name: "Raisin",
          hex: "#1f202b",
        },
        {
          name: "Jet",
          hex: "#313131",
        },
        {
          name: "Road",
          hex: "#757575",
        },
        {
          name: "Charcoal",
          hex: "#5e6366",
        },
        {
          name: "Pavement",
          hex: "#575756",
        },
        {
          name: "Oxford Blue",
          hex: "#0d0d2c",
        },
        {
          name: "Deep Navy",
          hex: "#002a3b",
        },
        {
          name: "Regal Blue",
          hex: "#011d2e",
        },
        {
          name: "Night Sea",
          hex: "#0d1d41",
        },
        {
          name: "Midnight Green",
          hex: "#032f37",
        },
        {
          name: "Aubergine",
          hex: "#190d2c",
        },
        {
          name: "Tyrian Purple",
          hex: "#400626",
        },
        {
          name: "Dark Cherry",
          hex: "#7a0f4a",
        },
        {
          name: "Fire Engine",
          hex: "#b50304",
        },
        {
          name: "Blood Orange",
          hex: "#d04900",
        },
        {
          name: "Coral Orange",
          hex: "#ff7b5c",
        },
        {
          name: "Safety Orange",
          hex: "#ff7300",
          darkText: true,
        },
        {
          name: "Pumpkin",
          hex: "#ff843e",
          darkText: true,
        },
        {
          name: "Bronze",
          hex: "#cc7d00",
          darkText: true,
        },
        {
          name: "Apricot",
          hex: "#f39600",
          darkText: true,
        },
        {
          name: "Light Coral",
          hex: "#eb9494",
          darkText: true,
        },
        {
          name: "Peach",
          hex: "#ffbc96",
          darkText: true,
        },
        {
          name: "Amber",
          hex: "#ffbf1a",
          darkText: true,
        },
        {
          name: "Flaxseed",
          hex: "#fbcb05",
          darkText: true,
        },
        {
          name: "Matcha Green",
          hex: "#b6ec92",
          darkText: true,
        },
        {
          name: "Moss Green",
          hex: "#498363",
        },
        {
          name: "Turquoise",
          hex: "#00dac6",
          darkText: true,
        },
        {
          name: "Columbia Blue",
          hex: "#b7ccd3",
          darkText: true,
        },
        {
          name: "Periwinkle",
          hex: "#d5daed",
          darkText: true,
        },
        {
          name: "Mushroom",
          hex: "#f4eee4",
          darkText: true,
        },
        {
          name: "Silver",
          hex: "#c8c7c7",
          darkText: true,
        },
        {
          name: "Lavender",
          hex: "#ffedeb",
          darkText: true,
        },
        {
          name: "Platinum",
          hex: "#e5e6e8",
          darkText: true,
        },
        {
          name: "Factory Smoke",
          hex: "#f5f5f5",
          darkText: true,
        },
      ],
    },
    {
      type: "panel",
      theme: "Sapphire",
      rows: [
        {
          media: {
            kind: "image",
            src: "https://danpudsey.com/assets/img/v2/bento/new-scientist/tours-search-and-filter.png",
          },
          mediaWidth: "narrow",
          heading: "Search & filter for Discovery Tours",
          highlights: [
            "Streamlined a cluttered landing page into a searchable tours page.",
            "Designed and built a powerful search and filter system.",
            "Created user-friendly interfaces for browsing tours.",
            "Used REST APIs to deliver a fast, dynamic front-end.",
            "Wrote the technical specification for the CMS.",
          ],
          links: [
            {
              text: "Visit tours",
              url: "https://www.newscientist.com/tours/",
            },
          ],
        },
        {
          media: {
            kind: "video",
            webm: "https://danpudsey.com/assets/img/v2/bento/new-scientist/games-animation.webm",
            mp4: "https://danpudsey.com/assets/img/v2/bento/new-scientist/games-animation.mp4",
            poster: "https://danpudsey.com/assets/img/v2/bento/new-scientist/games-poster.png",
          },
          mediaPosition: "right",
          heading: "Create a hub for games",
          highlights: [
            "Created a hub on the site and app for New Scientist Games.",
            "Built a [Lottie](https://lottiefiles.com/) implementation system, which didn't get used but is ready for the future.",
            "Ensured performant animations with .webm and .mp4 fallbacks.",
          ],
          links: [
            {
              text: "Visit the hub",
              url: "https://www.newscientist.com/games/",
            },
          ],
        },
        {
          media: {
            kind: "image",
            src: "https://danpudsey.com/assets/img/v2/bento/new-scientist/LEGO-dinosaur.png",
          },
          mediaWidth: "narrow",
          heading: "Microsites",
          highlights: [
            "Built a reusable Next.js boilerplate and component system for microsites.",
            "Themed sites to keep visual consistency while adding brand personality.",
            "Enhanced experience with smooth page transitions.",
            {
              text: "Check them out!",
              items: [
                "[LEGO](https://build-the-change.newscientist.com/)",
                "[CoLab](https://colab.newscientist.com/)",
                "[DOW Chemicals](https://dow.colab.newscientist.com/)",
                "[Future of Farming](https://future-of-farming.colab.newscientist.com/)",
                "[ITN Business](https://vaccineschangingtheworld.itn.colab.newscientist.com/)",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "panel",
      theme: "Gunmetal",
      heading: "The Social Hub.",
      subheading: "For Rufus Leonard",
      dates: "2019 - 2020",
      intro:
        "Led an enterprise-level project at pace for design agency Rufus Leonard (now [Frog](https://www.frog.co/)). This project was end to end, our in-house design team putting together a completely new brand, UI design, and I led the front end build on a new tech stack including a beta release of [Optimizely's content delivery API](https://docs.developers.optimizely.com/content-management-system/v1.5.0-content-delivery-api/docs/content-delivery-api).",
      designSkills: [
        "Sketch",
        "InVision",
        "Zeplin",
        "Animation",
        "Responsive design",
        "Page transitions",
      ],
      developmentSkills: [
        "React",
        "Redux",
        "Episerver",
        "SCSS",
        "Webpack",
        "REST APIs",
        "JSON",
        "SSR",
      ],
      rows: [
        {
          media: {
            kind: "image",
            src: "https://danpudsey.com/assets/img/v2/bento/rufus-leonard/the-student-hotel-cinema.jpg",
          },
          mediaWidth: "narrow",
          heading: "Front end development",
          highlights: [
            "Architected the site using React and Redux.",
            "Built a Storybook component library for design consistency.",
            "Tested with Jest and Cypress to ensure reliability.",
            "Collaborated with Optimizely on their new content API during beta.",
            "Delivered a robust, scalable front-end at enterprise level.",
          ],
          links: [
            {
              text: "Go to site",
              url: "https://thesocialhub.co/",
            },
          ],
        },
        {
          media: {
            kind: "image",
            src: "https://danpudsey.com/assets/img/v2/bento/rufus-leonard/the-student-hotel-laundry-room.jpg",
          },
          mediaPosition: "right",
          heading: "Animation and motion",
          highlights: [
            "Partnered with designers to add playful motion across the site.",
            "Designed seamless page transitions for a polished user journey.",
            "Brought the new brand to life through motion and interaction.",
          ],
        },
        {
          media: {
            kind: "image",
            src: "https://danpudsey.com/assets/img/v2/bento/rufus-leonard/the-student-hotel-social-space.jpg",
          },
          mediaWidth: "narrow",
          heading: "Team management",
          highlights: [
            "Led a front-end team to deliver high-quality work at pace.",
            "Drove velocity to meet tight contract deadlines on a major project.",
            "Facilitated communication between developers and stakeholders.",
            "Applied agile practices to keep the team focused and efficient.",
          ],
        },
      ],
    },
    {
      type: "testimonials",
    },
  ],
};

export default homePage;
