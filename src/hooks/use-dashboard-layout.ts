import { useState, useEffect } from "react";
import type { LayoutItem } from "react-grid-layout";

const STORAGE_KEY = "dashboard-layout";

const defaultLayout: LayoutItem[] = [
  { i: "stats-1", x: 0, y: 0, w: 3, h: 2 },
  { i: "stats-2", x: 3, y: 0, w: 3, h: 2 },
  { i: "stats-3", x: 6, y: 0, w: 3, h: 2 },
  { i: "stats-4", x: 9, y: 0, w: 3, h: 2 },
  { i: "chart-1", x: 0, y: 2, w: 6, h: 4 },
  { i: "chart-2", x: 6, y: 2, w: 6, h: 4 },
  { i: "activity-1", x: 0, y: 6, w: 12, h: 3 },
];

export function useDashboardLayout() {
  const [layout, setLayout] = useState<LayoutItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultLayout;
  });

  const handleLayoutChange = (newLayout: LayoutItem[]) => {
    setLayout(newLayout);
  };

  const saveLayout = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(layout));
  };

  const resetLayout = () => {
    setLayout(defaultLayout);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultLayout));
  };

  useEffect(() => {
    saveLayout();
  }, [layout]);

  return {
    layout,
    handleLayoutChange,
    resetLayout,
  };
}
