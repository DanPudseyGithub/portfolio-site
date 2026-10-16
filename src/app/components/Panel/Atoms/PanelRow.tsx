import { Row, Column } from "@components/Grid/Grid";
import { ProjectRow } from "@type/ContentTypes";
import { PanelCopyTile, PanelMediaTile } from "./PanelTile";

// Media always comes first on mobile, then sits on the chosen side from tablet up
const PanelRow = ({
  media,
  mediaPosition = "left",
  mediaWidth = "half",
  heading,
  body,
  highlights,
  links,
}: ProjectRow) => {
  const isNarrow = mediaWidth === "narrow";
  const mediaOrder = mediaPosition === "left" ? 1 : 2;
  const copyOrder = mediaPosition === "left" ? 2 : 1;

  return (
    <Row>
      <Column
        sm={12}
        md={6}
        lg={isNarrow ? 4 : 6}
        smOrder={1}
        mdOrder={mediaOrder}
        lgOrder={mediaOrder}
      >
        <PanelMediaTile media={media} alt={heading} />
      </Column>
      <Column
        sm={12}
        md={6}
        lg={isNarrow ? 8 : 6}
        smOrder={2}
        mdOrder={copyOrder}
        lgOrder={copyOrder}
      >
        <PanelCopyTile heading={heading} body={body} highlights={highlights} links={links} />
      </Column>
    </Row>
  );
};

export default PanelRow;
