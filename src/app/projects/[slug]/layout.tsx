import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Details | Hasan Imran Nazir",
  description:
    "Detailed view of projects by Hasan Imran Nazir, showcasing technology stack, features, challenges, and future improvements.",
};

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
