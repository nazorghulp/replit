interface BlogMetaProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  slug: string;
  publishedDate: string;
  author: string;
  tags?: string[];
}

export default function BlogMeta({ 
  title, 
  description, 
  image, 
  alt, 
  slug, 
  publishedDate, 
  author,
  tags = []
}: BlogMetaProps) {
  const canonicalUrl = `https://nazorghulp.nl/blogs/${slug}`;
  const imageUrl = `https://nazorghulp.nl${image}`;

  return (
    <>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content={tags.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={alt} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Kazenra Nederland" />
      <meta property="article:published_time" content={publishedDate} />
      <meta property="article:author" content={author} />
      <meta property="article:section" content="Rouwbegeleiding" />
      {tags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={alt} />
      
      {/* Structured Data for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": description,
          "image": {
            "@type": "ImageObject",
            "url": imageUrl,
            "description": alt
          },
          "author": {
            "@type": "Person",
            "name": author
          },
          "publisher": {
            "@type": "Organization",
            "name": "Kazenra Nederland",
            "logo": {
              "@type": "ImageObject",
              "url": "https://nazorghulp.nl/logo.png"
            }
          },
          "datePublished": publishedDate,
          "dateModified": publishedDate,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl
          },
          "keywords": tags.join(', '),
          "articleSection": "Rouwbegeleiding",
          "about": [
            {
              "@type": "Thing",
              "name": "Rouwbegeleiding"
            },
            {
              "@type": "Thing", 
              "name": "Nazorg"
            }
          ],
          "inLanguage": "nl-NL"
        })}
      </script>
    </>
  );
}