import { useEffect, useState } from "react";
import { WidgetWrapper } from "./widget-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface TodoItem {
  id: string;
  label: string;
  done: boolean;
}

const STORAGE_KEY = "nexasphere-todos";

export function TodoWidget() {
  const [items, setItems] = useState<TodoItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (!text.trim()) return;
    setItems((prev) => [...prev, { id: crypto.randomUUID(), label: text.trim(), done: false }]);
    setText("");
  };

  const toggle = (id: string) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item)));
  };

  const remove = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <WidgetWrapper title="To-Do List">
      <div className="space-y-3">
        <div className="flex gap-2">
          <Input
            placeholder="Add a task"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addItem();
            }}
          />
          <Button onClick={addItem}>Add</Button>
        </div>
        <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
          {items.length === 0 && (
            <p className="text-sm text-muted-foreground">No tasks yet. Add your first one.</p>
          )}
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-2 rounded-md border px-3 py-2">
              <Checkbox checked={item.done} onCheckedChange={() => toggle(item.id)} />
              <span className={`flex-1 text-sm ${item.done ? "line-through text-muted-foreground" : ""}`}>
                {item.label}
              </span>
              <Button variant="ghost" size="sm" onClick={() => remove(item.id)}>
                Remove
              </Button>
            </div>
          ))}
        </div>
      </div>
    </WidgetWrapper>
  );
}
