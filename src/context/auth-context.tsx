import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type Role = "guest" | "registered";

interface AuthContextValue {
  role: Role;
  loginAsGuest: () => void;
  loginAsRegistered: () => void;
  logout: () => void;
}

const STORAGE_KEY = "nexasphere-auth-role";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Role | null;
    return stored === "registered" ? "registered" : "guest";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, role);
  }, [role]);

  const value = useMemo<AuthContextValue>(
    () => ({
      role,
      loginAsGuest: () => setRole("guest"),
      loginAsRegistered: () => setRole("registered"),
      logout: () => setRole("guest"),
    }),
    [role]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
