import { Page } from "@type/ContentTypes";

const aboutPage: Page = {
  blocks: [
    {
      type: "header",
      heading: "About Me",
      subheading: "From Bristol, 39 years of age, lover of the extra curricular.",
      showAbout: false,
    },
    {
      type: "panel",
      theme: "Dark",
      rows: [
        {
          media: {
            kind: "image",
            src: "https://danpudsey.com/assets/img/v2/profile-pictures/dan-pudsey-profile-picture.jpg",
            aspectRatio: "1/1",
          },
          mediaWidth: "narrow",
          heading: "Dan Pudsey",
          body: "I love working in teams, very social, big fan of fancy dress, 80s retro, Russian constructivist art, palm trees & banana coladas.",
          currently: [
            { icon: "book", label: "Reading", value: "The Ends of the World by Peter Brannen" },
            {
              icon: "headphones",
              label: "Listening to",
              value: "Frances the Mute by The Mars Volta",
            },
            { icon: "pen", label: "Writing", value: "Space Cult" },
            { icon: "tv", label: "Watching", value: "Pluribus" },
          ],
        },
      ],
    },
    {
      type: "testimonials",
    },
  ],
};

export default aboutPage;
