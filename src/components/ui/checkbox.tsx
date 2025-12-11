import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked, onChange, onCheckedChange, ...props }, ref) => {
    return (
      <label className={"inline-flex items-center gap-2 cursor-pointer select-none text-sm"}>
        <input
          ref={ref}
          type="checkbox"
          className="sr-only"
          checked={!!checked}
          onChange={(event) => {
            onChange?.(event);
            onCheckedChange?.(event.target.checked);
          }}
          {...props}
        />
        <span
          className={cn(
            "flex h-5 w-5 items-center justify-center rounded border border-input bg-background",
            checked ? "bg-primary text-primary-foreground" : "",
            className
          )}
          aria-hidden
        >
          {checked ? <Check className="h-4 w-4" /> : null}
        </span>
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
