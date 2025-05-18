import type { ReactNode } from "react";

export interface AlertProps {
  children: ReactNode;
  type?: "success" | "error" | "warning" | "info";
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}
