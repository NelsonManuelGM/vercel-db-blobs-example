import { Metadata } from "next";

import ThemeContext from "@/context/styles/theme-context";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the home page!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeContext>{children}</ThemeContext>
      </body>
    </html>
  );
}
