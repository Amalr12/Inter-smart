"use client";

import type { ReactNode } from "react";

export default function UIProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}