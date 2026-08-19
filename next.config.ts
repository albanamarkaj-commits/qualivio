import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // The GVP inspections report was briefly published under
        // /regulatory-updates before moving to Articles. Keep the old URL working.
        source: "/regulatory-updates/health-canada-gvp-inspections-2026",
        destination: "/insights/health-canada-gvp-inspections-2026",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
