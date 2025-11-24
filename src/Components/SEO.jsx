import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, image, url }) => {
	const siteTitle = "Prabhjeet Singh | Full Stack Developer"; // Default Title
	const siteDescription =
		"Full Stack Developer specializing in PERN stack, React, and modern web technologies. View my portfolio and projects."; // Default Description
	const siteUrl = "https://prabhjeet-portfolio.vercel.app/"; // CHANGE THIS to your actual live link

	return (
		<Helmet>
			{/* Standard Metadata */}
			<title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
			<meta name="description" content={description || siteDescription} />
			<meta
				name="keywords"
				content={
					keywords ||
					"Full Stack Developer, React, Node.js, Portfolio, Web Development"
				}
			/>
			<meta name="author" content="Prabhjeet Singh" />
			<link rel="canonical" href={url || siteUrl} />

			{/* Open Graph / Facebook (Makes your link look good when shared) */}
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title || siteTitle} />
			<meta
				property="og:description"
				content={description || siteDescription}
			/>
			<meta
				property="og:image"
				content={image || `${siteUrl}/preview-image.png`}
			/>
			<meta property="og:url" content={url || siteUrl} />

			{/* Twitter Card */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title || siteTitle} />
			<meta
				name="twitter:description"
				content={description || siteDescription}
			/>
			<meta
				name="twitter:image"
				content={image || `${siteUrl}/preview-image.png`}
			/>

			{/* Structured Data (JSON-LD) - The Secret Weapon for Google */}
			<script type="application/ld+json">
				{JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Person",
					name: "Prabhjeet Singh Sandhu",
					url: siteUrl,
					sameAs: [
						"https://github.com/Prabhjeet2005",
						"https://www.linkedin.com/in/prabhjeetsandhu/", // ADD YOUR LINKEDIN
					],
					jobTitle: "Full Stack Developer",
					worksFor: {
						"@type": "Organization",
						name: "Freelance",
					},
					description: description || siteDescription,
				})}
			</script>
		</Helmet>
	);
};

export default SEO;
