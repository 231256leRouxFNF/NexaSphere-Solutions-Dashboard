import { useEffect, useState } from "react";
import { WidgetWrapper } from "./widget-wrapper";

export function ClockWidget() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const date = now.toLocaleDateString([], { weekday: "long", month: "short", day: "numeric" });

  return (
    <WidgetWrapper title="Clock & Date">
      <div className="flex flex-col gap-1">
        <div className="text-4xl font-semibold leading-tight">{time}</div>
        <div className="text-sm text-muted-foreground">{date}</div>
      </div>
    </WidgetWrapper>
  );
}
