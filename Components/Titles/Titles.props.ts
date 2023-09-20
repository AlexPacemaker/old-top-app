import { ReactNode } from "react";

export interface ITitlesProps {
  tag: "h1" | "h2" | "h3";
  children: ReactNode;
}
