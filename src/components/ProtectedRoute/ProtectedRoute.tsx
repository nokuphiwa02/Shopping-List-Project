
import type { ReactNode } from "react";
import { Navigate } from "react-router";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const storedUser = localStorage.getItem("user");

  if (!storedUser) {
    return <Navigate to="/login" replace />;
  }

  try {
    const user = JSON.parse(storedUser);

    if (!user || typeof user !== "object") {
      localStorage.removeItem("user");
      return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
  } catch {
    localStorage.removeItem("user");
    return <Navigate to="/login" replace />;
  }
};
