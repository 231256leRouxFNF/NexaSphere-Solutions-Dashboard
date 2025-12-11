import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { widgetCatalog } from "@/lib/widget-catalog";
import { useDashboardState } from "@/hooks/use-dashboard-state";
import { useAuth } from "@/context/auth-context";

export function WidgetGallery() {
  const { role } = useAuth();
  const { addWidget, widgetIds } = useDashboardState();

  const handleAdd = (id: string, access: "basic" | "advanced") => {
    if (access === "advanced" && role === "guest") return;
    addWidget(id);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tight">Widget Gallery</h2>
          <p className="text-muted-foreground">
            Browse widgets and add them to your dashboard. Advanced widgets unlock when you sign up or log in.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {widgetCatalog.map((widget) => {
            const isAdded = widgetIds.includes(widget.id);
            const locked = widget.access === "advanced" && role === "guest";
            return (
              <Card key={widget.id} className="flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{widget.title}</CardTitle>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        widget.access === "advanced" ? "bg-primary/10 text-primary" : "bg-muted text-foreground"
                      }`}
                    >
                      {widget.access === "advanced" ? "Advanced" : "Basic"}
                    </span>
                  </div>
                  <CardDescription>{widget.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    {widget.tags?.map((tag) => (
                      <span key={tag} className="rounded-full bg-muted px-2 py-1">{tag}</span>
                    ))}
                  </div>
                  <Button
                    disabled={isAdded || locked}
                    variant={locked ? "outline" : "default"}
                    onClick={() => handleAdd(widget.id, widget.access)}
                  >
                    {locked ? "Sign up to unlock" : isAdded ? "Added" : "Add to dashboard"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
