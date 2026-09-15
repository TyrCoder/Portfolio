import type { Metadata, Viewport } from "next";
import { Archivo, Martian_Mono } from "next/font/google";
import { MotionRoot } from "@/components/motion-root";
import { site, identity } from "@/content/portfolio";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const martian = Martian_Mono({
  variable: "--font-martian",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${identity.firstName} ${identity.lastName}`,
  },
  description: site.description,
  applicationName: site.title,
  authors: [{ name: `${identity.firstName} ${identity.lastName}` }],
  creator: `${identity.firstName} ${identity.lastName}`,
  keywords: [
    "full-stack developer",
    "IT student portfolio",
    "on-the-job training",
    "TypeScript",
    "Next.js",
    identity.location,
  ],
  openGraph: {
    type: "profile",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.title,
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e8eae6" },
    { media: "(prefers-color-scheme: dark)", color: "#101316" },
  ],
  colorScheme: "light dark",
};

const plotScript = `(function(){try{var s=localStorage.getItem("plot");var m=window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.setAttribute("data-plot",s==="dark"||s==="light"?s:(m?"dark":"light"));}catch(e){document.documentElement.setAttribute("data-plot","light");}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-plot="light"
      suppressHydrationWarning
      className={`${archivo.variable} ${martian.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: plotScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-sheet text-ink">
        <MotionRoot>{children}</MotionRoot>
      </body>
    </html>
  );
}
