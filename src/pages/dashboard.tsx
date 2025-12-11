import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { GridLayoutWrapper } from "@/components/layout/grid-layout";
import { StatsWidget } from "@/components/widgets/stats-widget";
import { ChartWidget } from "@/components/widgets/chart-widget";
import { ActivityWidget } from "@/components/widgets/activity-widget";
import { useDashboardLayout } from "@/hooks/use-dashboard-layout";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

const sampleActivities = [
  { id: "1", title: "New user registered", time: "2 minutes ago" },
  { id: "2", title: "Report generated", time: "15 minutes ago" },
  { id: "3", title: "System backup completed", time: "1 hour ago" },
];

export function Dashboard() {
  const { layout, handleLayoutChange, resetLayout } = useDashboardLayout();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <p className="text-muted-foreground">
              Welcome to your customizable dashboard
            </p>
          </div>
          <Button variant="outline" onClick={resetLayout}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset Layout
          </Button>
        </div>

        <div className="relative">
          <GridLayoutWrapper layout={layout} onLayoutChange={handleLayoutChange}>
            <div key="stats-1">
              <StatsWidget
                title="Total Revenue"
                value="$45,231.89"
                change={20.1}
                changeLabel="from last month"
              />
            </div>
            <div key="stats-2">
              <StatsWidget
                title="Active Users"
                value="2,350"
                change={15.3}
                changeLabel="from last month"
              />
            </div>
            <div key="stats-3">
              <StatsWidget
                title="Conversion Rate"
                value="12.5%"
                change={-2.4}
                changeLabel="from last month"
              />
            </div>
            <div key="stats-4">
              <StatsWidget
                title="Total Orders"
                value="573"
                change={8.7}
                changeLabel="from last month"
              />
            </div>
            <div key="chart-1">
              <ChartWidget title="Revenue Overview" />
            </div>
            <div key="chart-2">
              <ChartWidget title="User Growth" />
            </div>
            <div key="activity-1">
              <ActivityWidget title="Recent Activity" activities={sampleActivities} />
            </div>
          </GridLayoutWrapper>
        </div>
      </div>
    </DashboardLayout>
  );
}
