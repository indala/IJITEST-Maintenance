import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path((?!^$).*)", // Match all paths except root "/"
        destination: "/",
        permanent: false, // Use 307 instead of 308 for temporary redirects
      },
    ];
  },
};

export default nextConfig;