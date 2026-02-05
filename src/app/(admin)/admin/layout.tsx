import { ReactNode } from "react";
import { AdminShell } from "@/components/admin/ui/admin-shell";

export default function AdminShellLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <AdminShell>{children}</AdminShell>;
}
