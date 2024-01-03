const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
});


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  modularizeImports: {
    "@mui/material": {
      transform: "@mui/material/{{member}}",
    },
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
    "@mui/styles": {
      transform: "@mui/styles/{{member}}",
    },
    "@mui/lab": {
      transform: "@mui/lab/{{member}}",
    },
    notistack: {
      transform: "notistack/{{member}}",
    },
  },
  images: {
    domains: ['cdn.bfldr.com', 'placebeard.it'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placebeard.it",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = withPWA(nextConfig);

