import { WidgetWrapper } from "./widget-wrapper";
import { CalendarDays } from "lucide-react";

const EVENTS = [
  { id: "kickoff", title: "Project kickoff", date: "Mon, Mar 3" },
  { id: "design", title: "Design review", date: "Wed, Mar 5" },
  { id: "retro", title: "Sprint retro", date: "Fri, Mar 7" },
];

export function CalendarWidget() {
  return (
    <WidgetWrapper title="Calendar / Events">
      <div className="space-y-3">
        {EVENTS.map((event) => (
          <div key={event.id} className="flex items-center gap-3 rounded-md border p-2">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <CalendarDays className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">{event.title}</p>
              <p className="text-xs text-muted-foreground">{event.date}</p>
            </div>
          </div>
        ))}
        <p className="text-xs text-muted-foreground">
          Advanced widget: sync with calendar providers for registered users.
        </p>
      </div>
    </WidgetWrapper>
  );
}
