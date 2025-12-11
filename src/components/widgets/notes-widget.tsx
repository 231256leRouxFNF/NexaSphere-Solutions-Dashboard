import { useEffect, useState } from "react";
import { WidgetWrapper } from "./widget-wrapper";
import { Textarea } from "@/components/ui/textarea";

const STORAGE_KEY = "nexasphere-notes";

export function NotesWidget() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ?? "";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, notes);
  }, [notes]);

  return (
    <WidgetWrapper title="Notes Pad">
      <div className="space-y-2">
        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Capture quick thoughts, links, or reminders."
          className="min-h-[180px]"
        />
        <p className="text-xs text-muted-foreground">Saved locally for guest users.</p>
      </div>
    </WidgetWrapper>
  );
}
