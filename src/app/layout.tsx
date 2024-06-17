import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/style.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://authhero.net"),
  title: "AuthHero - A open source auth0 compatible authentication server",
  description:
    "An open source authentiation server that is compatible with Auht0. Setup your self hosted authentication service in minutes. Host for free with CloudFlare.",
  openGraph: {
    title: "AuthHero - A open source auth0 compatible authentication server",
    description:
      "An open source authentiation server that is compatible with Auht0. Setup your self hosted authentication service in minutes. Host for free with CloudFlare.",
    url: "https://authhero.net",
    siteName: "Next.js",
    images: [
      {
        url: "",
        width: 1800,
        height: 1600,
        alt: "AuthHero - a open source auth0 compatible authentication server",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [{ url: "/favicon/favicon-32x32.png" }],
    apple: [{ url: "/favicon/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
