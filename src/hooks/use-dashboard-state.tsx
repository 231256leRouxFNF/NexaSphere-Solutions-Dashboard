import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { LayoutItem } from "react-grid-layout";
import { getWidgetDefinition, widgetCatalog } from "@/lib/widget-catalog";

const WIDGETS_KEY = "dashboard-widgets";
const LAYOUT_KEY = "dashboard-layout";

const defaultWidgetIds = ["clock", "quotes", "todo", "notes"];

function buildDefaultLayout(widgetIds: string[]): LayoutItem[] {
  const cols = 12;
  let x = 0;
  let y = 0;
  const rowHeight = 2;

  return widgetIds.map((id) => {
    const def = getWidgetDefinition(id);
    const w = def?.defaultSize.w ?? 3;
    const h = def?.defaultSize.h ?? 2;

    if (x + w > cols) {
      x = 0;
      y += rowHeight;
    }

    const item: LayoutItem = { i: id, x, y, w, h };
    x += w;
    return item;
  });
}

interface DashboardState {
  widgetIds: string[];
  layout: LayoutItem[];
  setLayout: (layout: LayoutItem[]) => void;
  addWidget: (id: string) => void;
  removeWidget: (id: string) => void;
  resetLayout: () => void;
  availableWidgets: typeof widgetCatalog;
}

const DashboardContext = createContext<DashboardState | undefined>(undefined);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [widgetIds, setWidgetIds] = useState<string[]>(() => {
    const saved = localStorage.getItem(WIDGETS_KEY);
    return saved ? JSON.parse(saved) : defaultWidgetIds;
  });

  const [layout, setLayout] = useState<LayoutItem[]>(() => {
    const saved = localStorage.getItem(LAYOUT_KEY);
    return saved ? JSON.parse(saved) : buildDefaultLayout(defaultWidgetIds);
  });

  useEffect(() => {
    localStorage.setItem(WIDGETS_KEY, JSON.stringify(widgetIds));
  }, [widgetIds]);

  useEffect(() => {
    localStorage.setItem(LAYOUT_KEY, JSON.stringify(layout));
  }, [layout]);

  useEffect(() => {
    let changed = false;
    const next = [...layout];
    widgetIds.forEach((id, index) => {
      if (!next.find((item) => item.i === id)) {
        const def = getWidgetDefinition(id);
        const w = def?.defaultSize.w ?? 3;
        const h = def?.defaultSize.h ?? 2;
        const newItem: LayoutItem = {
          i: id,
          x: (index * w) % 12,
          y: Math.floor((index * w) / 12) * 2,
          w,
          h,
        };
        next.push(newItem);
        changed = true;
      }
    });
    if (changed) {
      setLayout(next);
    }
  }, [widgetIds, layout]);

  const addWidget = (id: string) => {
    if (widgetIds.includes(id)) return;
    setWidgetIds((prev) => [...prev, id]);
  };

  const removeWidget = (id: string) => {
    setWidgetIds((prev) => prev.filter((w) => w !== id));
    setLayout((prev) => prev.filter((item) => item.i !== id));
  };

  const resetLayout = () => {
    setLayout(buildDefaultLayout(widgetIds));
  };

  const availableWidgets = useMemo(() => widgetCatalog, []);

  const value = useMemo<DashboardState>(
    () => ({
      widgetIds,
      layout,
      setLayout,
      addWidget,
      removeWidget,
      resetLayout,
      availableWidgets,
    }),
    [widgetIds, layout]
  );

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
}

export function useDashboardState() {
  const ctx = useContext(DashboardContext);
  if (!ctx) {
    throw new Error("useDashboardState must be used within DashboardProvider");
  }
  return ctx;
}
