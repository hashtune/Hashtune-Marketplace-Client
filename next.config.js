/** @type {import('next').NextConfig} */
const path = require('path')
const withPWA = require("next-pwa")

module.exports = withPWA({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'global.css')],
  },
  pwa: {
    dest: "public",
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    register: true,
  }
})