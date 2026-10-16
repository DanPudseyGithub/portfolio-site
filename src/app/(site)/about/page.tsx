import PageBuilder from "@components/PageBuilder/PageBuilder";
import aboutPage from "@pageData/about";
import siteSettings from "@pageData/site";

export default function About() {
  return <PageBuilder page={aboutPage} site={siteSettings} />;
}
