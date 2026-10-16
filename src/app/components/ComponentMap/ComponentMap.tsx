import Header from "@furniture/Header/Header";
import { RowWrapper, Row, Column } from "@components/Grid/Grid";
import { ColourPalette } from "@components/ColourPalette/ColourPalette";
import { TestimonialCarousel } from "@components/TestimonialCarousel/TestimonialCarousel";
import Panel from "@components/Panel/Panel";
import PanelTile from "@components/Panel/Atoms/PanelTile";

const ComponentMap: Record<string, React.FC<any>> = {
  Header: (props) => <Header {...props} />,
  Panel: (props) => (
    <Panel {...props}>
      <RowWrapper>
        {props.children?.rows.map((row: any, rowIndex: number) => (
          <Row key={rowIndex}>
            {row.columns.map((col: any, colIndex: number) => (
              <Column
                key={colIndex}
                sm={col.sm}
                md={col.md}
                lg={col.lg}
                smOrder={col.smOrder}
                mdOrder={col.mdOrder}
                lgOrder={col.lgOrder}
              >
                <PanelTile {...col.PanelTile} />
              </Column>
            ))}
          </Row>
        ))}
      </RowWrapper>
    </Panel>
  ),
  ColourPalette: (props) => <ColourPalette {...props} />,
  TestimonialCarousel: (props) => <TestimonialCarousel {...props} />,
};
export default ComponentMap;
