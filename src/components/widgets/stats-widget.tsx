import { WidgetWrapper } from "./widget-wrapper";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsWidgetProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
}

export function StatsWidget({ title, value, change, changeLabel }: StatsWidgetProps) {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;

  return (
    <WidgetWrapper title={title}>
      <div className="space-y-2">
        <div className="text-3xl font-bold">{value}</div>
        {change !== undefined && (
          <div className="flex items-center gap-1 text-sm">
            {isPositive && (
              <>
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className={cn("font-medium", "text-green-600")}>
                  +{change}%
                </span>
              </>
            )}
            {isNegative && (
              <>
                <TrendingDown className="h-4 w-4 text-red-600" />
                <span className={cn("font-medium", "text-red-600")}>
                  {change}%
                </span>
              </>
            )}
            {changeLabel && (
              <span className="text-muted-foreground">{changeLabel}</span>
            )}
          </div>
        )}
      </div>
    </WidgetWrapper>
  );
}
