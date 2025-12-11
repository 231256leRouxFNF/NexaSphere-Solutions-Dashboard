import type { ComponentType } from "react";
import { ClockWidget } from "@/components/widgets/clock-widget";
import { QuotesWidget } from "@/components/widgets/quotes-widget";
import { TodoWidget } from "@/components/widgets/todo-widget";
import { NotesWidget } from "@/components/widgets/notes-widget";
import { WeatherWidget } from "@/components/widgets/weather-widget";
import { HabitWidget } from "@/components/widgets/habit-widget";
import { CalendarWidget } from "@/components/widgets/calendar-widget";

export type WidgetAccess = "basic" | "advanced";

export interface WidgetDefinition {
  id: string;
  title: string;
  description: string;
  access: WidgetAccess;
  defaultSize: { w: number; h: number };
  component: ComponentType;
  tags?: string[];
}

export const widgetCatalog: WidgetDefinition[] = [
  {
    id: "clock",
    title: "Clock & Date",
    description: "Live clock with friendly date formatting.",
    access: "basic",
    defaultSize: { w: 3, h: 2 },
    component: ClockWidget,
    tags: ["time", "productivity"],
  },
  {
    id: "quotes",
    title: "Motivational Quotes",
    description: "Rotating inspirational quotes to keep focus.",
    access: "basic",
    defaultSize: { w: 4, h: 2 },
    component: QuotesWidget,
    tags: ["mindset", "motivation"],
  },
  {
    id: "todo",
    title: "To-Do List",
    description: "Lightweight tasks with persistence for guests.",
    access: "basic",
    defaultSize: { w: 4, h: 3 },
    component: TodoWidget,
    tags: ["tasks", "productivity"],
  },
  {
    id: "notes",
    title: "Notes Pad",
    description: "Quick notes stored locally for easy recall.",
    access: "basic",
    defaultSize: { w: 4, h: 3 },
    component: NotesWidget,
    tags: ["notes", "capture"],
  },
  {
    id: "weather",
    title: "Weather",
    description: "Connect to OpenWeatherMap for live conditions.",
    access: "advanced",
    defaultSize: { w: 4, h: 3 },
    component: WeatherWidget,
    tags: ["climate", "location"],
  },
  {
    id: "habits",
    title: "Habit Tracker",
    description: "Track streaks and daily commitments.",
    access: "advanced",
    defaultSize: { w: 4, h: 3 },
    component: HabitWidget,
    tags: ["health", "consistency"],
  },
  {
    id: "calendar",
    title: "Calendar / Events",
    description: "Upcoming events at a glance.",
    access: "advanced",
    defaultSize: { w: 4, h: 3 },
    component: CalendarWidget,
    tags: ["planning", "time"],
  },
];

export function getWidgetDefinition(id: string) {
  return widgetCatalog.find((widget) => widget.id === id);
}
