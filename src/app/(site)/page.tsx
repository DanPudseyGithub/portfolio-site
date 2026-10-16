import "@/globals.scss";
import GlobalPageLayout from "@/templates/GlobalPageLayout/GlobalPageLayout";
import ComponentMap from "@components/ComponentMap/ComponentMap";
import homePageData from "@pageData/home.json";

const { components } = homePageData;

export default function Home() {
  return (
    <GlobalPageLayout>
      {Object.values(components).map((block: any, index: number) => {
        const Component = ComponentMap[block.type];
        if (!Component) return null;
        return <Component key={index} {...block.props} />;
      })}
    </GlobalPageLayout>
  );
}
