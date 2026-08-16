import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/fa",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
