import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.theorg.com" },
      { protocol: "https", hostname: "1.bp.blogspot.com" },
      { protocol: "https", hostname: "logoimg.careerjet.net" },
      { protocol: "https", hostname: "turntable.kagiso.io" },
      { protocol: "https", hostname: "www.startupresearcher.com" },
      { protocol: "https", hostname: "www.bonisa.ro" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/product-info", destination: "/#tent-manufacturing", permanent: true },
      { source: "/buy-a-tent", destination: "/#buy-a-tent", permanent: true },
      { source: "/rent-a-tent", destination: "/#tent-hire", permanent: true },
      { source: "/equipment-hire", destination: "/#eventing-king", permanent: true },
      { source: "/septic-tanks-toilets-and-fridges", destination: "/#loo-king", permanent: true },
      { source: "/gallery", destination: "/#projects", permanent: true },
      { source: "/clients", destination: "/#clients", permanent: true },
      { source: "/tarps", destination: "/#tarps-pvc", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
