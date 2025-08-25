import type { NextConfig } from "next";

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig: import("next").NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // build ke waqt ESLint errors ignore karega
  },
};

module.exports = nextConfig;
