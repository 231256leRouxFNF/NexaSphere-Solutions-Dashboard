import { WidgetWrapper } from "./widget-wrapper";
import { Button } from "@/components/ui/button";
import { Cloud, MapPin } from "lucide-react";

export function WeatherWidget() {
  return (
    <WidgetWrapper title="Weather">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Cloud className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-lg font-semibold">Connect OpenWeatherMap</p>
            <p className="text-sm text-muted-foreground">
              Plug in your API key to show real-time conditions.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>Location not set</span>
        </div>
        <Button variant="outline" size="sm">Configure</Button>
        <p className="text-xs text-muted-foreground">
          Advanced widget: available for registered users.
        </p>
      </div>
    </WidgetWrapper>
  );
}
