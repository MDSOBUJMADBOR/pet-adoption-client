/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ], 
  }, 

  serverExternalPackages: ['@better-auth/kysely-adapter', 'kysely']
  
};

export default nextConfig;
