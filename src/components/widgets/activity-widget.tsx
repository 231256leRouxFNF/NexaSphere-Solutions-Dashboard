import { WidgetWrapper } from "./widget-wrapper";

interface Activity {
  id: string;
  title: string;
  time: string;
}

interface ActivityWidgetProps {
  title: string;
  activities: Activity[];
}

export function ActivityWidget({ title, activities }: ActivityWidgetProps) {
  return (
    <WidgetWrapper title={title}>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium">{activity.title}</p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </WidgetWrapper>
  );
}
