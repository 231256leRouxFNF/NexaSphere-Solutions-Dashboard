import { Link } from "react-router-dom";
import type { ComponentType } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { GridLayoutWrapper } from "@/components/layout/grid-layout";
import { Button } from "@/components/ui/button";
import { RotateCcw, Trash2 } from "lucide-react";
import { useDashboardState } from "@/hooks/use-dashboard-state";
import { getWidgetDefinition } from "@/lib/widget-catalog";
import { useAuth } from "@/context/auth-context";

export function Dashboard() {
  const { role } = useAuth();
  const { widgetIds, layout, setLayout, resetLayout, removeWidget } = useDashboardState();

  const widgets = widgetIds
    .map((id) => getWidgetDefinition(id))
    .filter(Boolean);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <p className="text-muted-foreground">
              Personalized workspace with basic widgets for guests and advanced widgets for registered users.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={resetLayout}>
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset layout
            </Button>
            <Button asChild>
              <Link to="/widgets">Open widget gallery</Link>
            </Button>
          </div>
        </div>

        {role === "guest" && (
          <div className="rounded-lg border bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
            Advanced widgets (Weather, Habit Tracker, Calendar) are locked for guests. Sign up or log in to unlock them.
          </div>
        )}

        <div className="relative">
          <GridLayoutWrapper layout={layout} onLayoutChange={setLayout}>
            {widgets.map((widget) => {
              if (!widget) return null;
              const Component = widget.component as ComponentType;
              return (
                <div key={widget.id} className="group relative">
                  <Component />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeWidget(widget.id)}
                    className="absolute right-2 top-2 hidden h-8 w-8 bg-background/90 text-muted-foreground shadow group-hover:flex"
                    aria-label={`Remove ${widget.title}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              );
            })}
          </GridLayoutWrapper>
        </div>
      </div>
    </DashboardLayout>
  );
}
