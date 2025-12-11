import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";

export function LandingPage() {
  const navigate = useNavigate();
  const { loginAsGuest, loginAsRegistered } = useAuth();

  const handleGuest = () => {
    loginAsGuest();
    navigate("/dashboard");
  };

  const handleRegistered = () => {
    loginAsRegistered();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-primary" />
            <span className="text-2xl font-bold">NexaSphere</span>
          </div>
          <Button variant="outline" asChild>
            <Link to="/dashboard">Skip to dashboard</Link>
          </Button>
        </header>

        <main className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-wide text-primary">Multi-Purpose Client Dashboard</p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              A customizable control center for NexaSphere clients.
            </h1>
            <p className="text-lg text-muted-foreground">
              Personalize your workspace, switch themes, and access real-time insights. Guests get essentials;
              registered users unlock advanced widgets and persistent storage.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" onClick={handleRegistered}>
                Sign up / Log in
              </Button>
              <Button size="lg" variant="outline" onClick={handleGuest}>
                Continue as guest
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <Link to="/widgets">Browse widget gallery</Link>
              </Button>
            </div>
            <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              <li className="rounded-lg border bg-background p-3">Drag-and-drop grid powered by react-grid-layout.</li>
              <li className="rounded-lg border bg-background p-3">Light/Dark theming with instant toggle.</li>
              <li className="rounded-lg border bg-background p-3">Basic widgets for guests with local storage.</li>
              <li className="rounded-lg border bg-background p-3">Advanced widgets unlocked for registered users.</li>
            </ul>
          </div>

          <div className="rounded-2xl border bg-background/80 p-6 shadow-lg">
            <div className="mb-4 text-sm font-medium text-muted-foreground">Preview</div>
            <div className="space-y-3">
              <div className="flex justify-between rounded-lg border px-4 py-3">
                <span className="text-sm font-medium">Clock & Date</span>
                <span className="text-sm text-muted-foreground">Basic</span>
              </div>
              <div className="flex justify-between rounded-lg border px-4 py-3">
                <span className="text-sm font-medium">Weather</span>
                <span className="text-sm text-primary">Advanced</span>
              </div>
              <div className="flex justify-between rounded-lg border px-4 py-3">
                <span className="text-sm font-medium">Notes Pad</span>
                <span className="text-sm text-muted-foreground">Basic</span>
              </div>
              <div className="flex justify-between rounded-lg border px-4 py-3">
                <span className="text-sm font-medium">Habit Tracker</span>
                <span className="text-sm text-primary">Advanced</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
