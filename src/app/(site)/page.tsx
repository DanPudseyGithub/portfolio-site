import PageBuilder from "@components/PageBuilder/PageBuilder";
import homePage from "@pageData/home";
import siteSettings from "@pageData/site";

export default function Home() {
  return <PageBuilder page={homePage} site={siteSettings} />;
}
