/** @type {import('next').NextConfig} */

const { env } = require("process");
const nextConfig = ({
  output: "standalone",
  env: {
    CMS_API_URL: env.CMS_API_URL,
  },
  images: {
    domains: ["45.119.86.109", "cms.malayoga.vn"],
  },
});

module.exports = nextConfig;