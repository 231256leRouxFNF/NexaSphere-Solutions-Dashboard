import type { ReactNode } from "react";
import GridLayout from "react-grid-layout";
import type { Layout, LayoutItem } from "react-grid-layout";
import "react-grid-layout/css/styles.css";

interface GridLayoutWrapperProps {
  layout: LayoutItem[];
  onLayoutChange: (layout: LayoutItem[]) => void;
  children: ReactNode;
  isDraggable?: boolean;
  isResizable?: boolean;
}

export function GridLayoutWrapper({
  layout,
  onLayoutChange,
  children,
  isDraggable = true,
  isResizable = true,
}: GridLayoutWrapperProps) {
  return (
    <GridLayout
      className="layout"
      layout={layout as Layout}
      width={1200}
      onLayoutChange={(newLayout) => onLayoutChange([...newLayout])}
      gridConfig={{
        cols: 12,
        rowHeight: 80,
        margin: [16, 16],
        containerPadding: [0, 0],
      }}
      dragConfig={{
        enabled: isDraggable,
      }}
      resizeConfig={{
        enabled: isResizable,
      }}
    >
      {children}
    </GridLayout>
  );
}
