import { AppHeader } from "@/components/layout/AppHeader";
import { fontSerif } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="dark">
      <body
        className={cn(
          "min-h-dvh",
          "bg-background",
          "text-foreground font-serif antialiased",
          "flex flex-col",
          fontSerif.variable,
        )}
      >
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
