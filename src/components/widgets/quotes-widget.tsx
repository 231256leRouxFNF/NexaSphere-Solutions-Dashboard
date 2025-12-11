import { useEffect, useMemo, useState } from "react";
import { WidgetWrapper } from "./widget-wrapper";

const QUOTES = [
  "Success is the sum of small efforts, repeated day in and day out.",
  "Discipline is the bridge between goals and accomplishment.",
  "Action is the foundational key to all success.",
  "Your future is created by what you do today, not tomorrow.",
  "Focus on being productive instead of busy.",
];

function getRandomIndex(length: number) {
  return Math.floor(Math.random() * length);
}

export function QuotesWidget() {
  const [index, setIndex] = useState(() => getRandomIndex(QUOTES.length));

  const quote = useMemo(() => QUOTES[index], [index]);

  useEffect(() => {
    const timer = setInterval(() => setIndex(getRandomIndex(QUOTES.length)), 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <WidgetWrapper title="Motivational Quotes">
      <div className="space-y-3">
        <p className="text-lg leading-relaxed">“{quote}”</p>
        <p className="text-xs text-muted-foreground">Updated every 15 seconds</p>
      </div>
    </WidgetWrapper>
  );
}
