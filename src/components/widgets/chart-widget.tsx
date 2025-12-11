import { WidgetWrapper } from "./widget-wrapper";

interface ChartWidgetProps {
  title: string;
}

export function ChartWidget({ title }: ChartWidgetProps) {
  // Placeholder for chart implementation
  return (
    <WidgetWrapper title={title}>
      <div className="h-[200px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-md">
        <p className="text-sm text-muted-foreground">Chart placeholder</p>
      </div>
    </WidgetWrapper>
  );
}
