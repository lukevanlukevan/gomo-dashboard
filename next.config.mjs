/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.discordapp.com/**",
				port: "",
			},
			{
				protocol: "https",
				hostname: "placehold.co/**",
			},
		],
	},
}

export default nextConfig
