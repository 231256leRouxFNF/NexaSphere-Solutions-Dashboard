import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useAuth } from "@/context/auth-context";

export function Header() {
  const { theme, setTheme } = useTheme();
  const { role, loginAsGuest, loginAsRegistered } = useAuth();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary" />
          <h1 className="text-xl font-bold">NexaSphere</h1>
        </Link>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="rounded-full bg-muted px-3 py-1">{role === "registered" ? "Registered" : "Guest"}</span>
          <Button variant="outline" size="sm" onClick={loginAsGuest}>Guest mode</Button>
          <Button size="sm" onClick={loginAsRegistered}>Sign up / Login</Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
