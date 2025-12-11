import { useEffect, useState, type ReactNode } from "react";
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
  const [width, setWidth] = useState(() => Math.min(1200, window.innerWidth - 120));

  useEffect(() => {
    const handleResize = () => {
      setWidth(Math.min(1200, window.innerWidth - 120));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <GridLayout
      className="layout"
      layout={layout as Layout}
      width={width}
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
