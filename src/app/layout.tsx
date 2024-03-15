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
          "min-h-screen",
          "bg-background",
          "text-foreground font-serif",
          fontSerif.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
