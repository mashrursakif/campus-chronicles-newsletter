/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'lh3.googleusercontent.com',
      // },
      new URL('https://lh3.googleusercontent.com/**'),
    ],
  },
};

export default nextConfig;
