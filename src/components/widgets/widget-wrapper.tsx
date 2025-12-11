import type { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GripVertical } from "lucide-react";

interface WidgetWrapperProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function WidgetWrapper({ title, children, className }: WidgetWrapperProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <GripVertical className="h-4 w-4 text-muted-foreground cursor-move" />
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
