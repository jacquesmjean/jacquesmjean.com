import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jacques M. Jean",
    short_name: "JMJ",
    description: "Founder, technologist, global operator. CEO of TechFides, Founder & Chair of Levoila.",
    start_url: "/",
    display: "browser",
    background_color: "#FFFFFF",
    theme_color: "#0F1E33",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
