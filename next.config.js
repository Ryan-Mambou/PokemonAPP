/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.pokemon.com',
          port: '',
          pathname: '/assets/**',
        },
      ],
      domains: ['pokeapi.co', 'assets.pokemon.com'],
      },
}

module.exports = nextConfig
