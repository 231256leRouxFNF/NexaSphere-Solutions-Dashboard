import { WidgetWrapper } from "./widget-wrapper";
import { Progress } from "@/components/ui/progress";

const HABITS = [
  { id: "water", label: "Drink 2L water", streak: 5, completion: 70 },
  { id: "deep-work", label: "2h deep work", streak: 3, completion: 40 },
  { id: "steps", label: "8k steps", streak: 10, completion: 90 },
];

export function HabitWidget() {
  return (
    <WidgetWrapper title="Habit Tracker">
      <div className="space-y-3">
        {HABITS.map((habit) => (
          <div key={habit.id} className="space-y-1 rounded-md border p-2">
            <div className="flex items-center justify-between text-sm font-medium">
              <span>{habit.label}</span>
              <span className="text-muted-foreground">{habit.streak}-day streak</span>
            </div>
            <Progress value={habit.completion} />
          </div>
        ))}
        <p className="text-xs text-muted-foreground">
          Advanced widget: progress persists for registered users in production.
        </p>
      </div>
    </WidgetWrapper>
  );
}
