import "@/globals.scss";
import GlobalPageLayout from "@templates/GlobalPageLayout/GlobalPageLayout";
import ComponentMap from "@components/ComponentMap/ComponentMap";
import aboutData from "@pageData/about.json";

const { components } = aboutData;

export default function About() {
  return (
    <>
      <GlobalPageLayout>
        {Object.values(components).map((block: any, index: number) => {
          const Component = ComponentMap[block.type];
          if (!Component) return null;
          return <Component key={index} {...block.props} />;
        })}
      </GlobalPageLayout>
    </>
  );
}
