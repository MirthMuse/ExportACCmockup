import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
}

export default function SEO({ 
  title = "Alberto's Crystal Cafe | Serving West Texas Since 1974", 
  description = "Alberto's Crystal Cafe in Big Spring, Texas. Serving West Texas since 1974.",
  path = ""
}: SEOProps) {
  const url = `https://albertoscrystalcafe.com${path}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness"],
    "name": "Alberto's Crystal Cafe",
    "image": "https://albertoscrystalcafe.com/og-image.jpg",
    "logo": "https://albertoscrystalcafe.com/alberto-logo.webp",
    "url": "https://albertoscrystalcafe.com",
    "telephone": "+14322672310",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2401 S Gregg St",
      "addressLocality": "Big Spring",
      "addressRegion": "TX",
      "postalCode": "79720",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.2285,
      "longitude": -101.4725
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "06:00",
        "closes": "22:00"
      }
    ],
    "servesCuisine": "American, Mexican",
    "priceRange": "$",
    "hasMenu": "https://albertos-big-spring.com/menu",
    "hasMap": "https://www.google.com/maps/place/?q=place_id:ChIJ31zhSQoj-YYROzD6h_frRXc",
    "sameAs": [
      "https://www.google.com/maps/place/?q=place_id:ChIJ31zhSQoj-YYROzD6h_frRXc"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://albertoscrystalcafe.com/og-image.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://albertoscrystalcafe.com/og-image.jpg" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
