import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, canonical, image, schema }) => {
  const siteName = "Acuity Pest Control";
  const siteUrl = "https://www.acuitypestcontrols.com";
  const defaultImage = "https://www.acuitypestcontrols.com/logo.png";

  const finalTitle = title || "Acuity Pest Control Services in Bangalore";

  const finalDescription =
    description ||
    "Professional pest control services in Bangalore for homes, offices and commercial properties.";

  const finalCanonical = canonical || siteUrl;
  const finalImage = image || defaultImage;

  return (
    <Helmet>
      <title>{finalTitle}</title>

      <meta name="description" content={finalDescription} />

      {keywords && <meta name="keywords" content={keywords} />}

      <link rel="canonical" href={finalCanonical} />

      <meta name="robots" content="index, follow, max-image-preview:large" />

      <meta property="og:type" content="website" />

      <meta property="og:site_name" content={siteName} />

      <meta property="og:title" content={finalTitle} />

      <meta property="og:description" content={finalDescription} />

      <meta property="og:url" content={finalCanonical} />

      <meta property="og:image" content={finalImage} />

      <meta property="og:image:alt" content={finalTitle} />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={finalTitle} />

      <meta name="twitter:description" content={finalDescription} />

      <meta name="twitter:image" content={finalImage} />

      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
