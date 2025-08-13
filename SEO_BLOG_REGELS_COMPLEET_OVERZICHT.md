# 🔍 SEO & GOOGLE VRIENDELIJKE BLOG REGELS - COMPLEET OVERZICHT

**Voor:** Optimale zoekmachine ranking en gebruikerservaring  
**Datum:** 13 Januari 2025  
**Status:** Professionele SEO richtlijnen  

---

## 📄 **1. HTML STRUCTUUR REGELS**

### **Titel Tags (H1, H2, H3)**
```html
<!-- GOED: Logische hiërarchie -->
<h1>Hoofdtitel van Blog</h1>
<h2>Belangrijk Subtitel</h2>
<h3>Detail Onderwerp</h3>
<h2>Volgende Hoofdonderwerp</h2>
```

**Regels:**
- ✅ **1 H1 tag per pagina** - Hoofdtitel
- ✅ **H2 voor hoofdonderwerpen** - Maximaal 5-7 per artikel
- ✅ **H3 voor details** - Onder relevante H2
- ❌ **Geen H1 overslaan naar H3** - Altijd logische volgorde
- ✅ **Keywords in titels** - Natuurlijk geïntegreerd

### **Meta Tags (Essentieel)**
```html
<!-- Titel Tag -->
<title>Specifieke Titel - Bedrijfsnaam | Max 60 karakters</title>

<!-- Meta Description -->
<meta name="description" content="Bondige samenvatting 150-160 karakters die gebruikers aanspreekt en zoekwoorden bevat." />

<!-- Keywords (Optioneel) -->
<meta name="keywords" content="hoofdzoekwoord, synoniemen, gerelateerde termen" />

<!-- Canonical URL -->
<link rel="canonical" href="https://jouwdomain.nl/blog-url" />
```

**Regels:**
- ✅ **Titel 50-60 karakters** - Uniek voor elke pagina
- ✅ **Meta description 150-160 karakters** - Verleidelijk en informatief
- ✅ **Canonical URL** - Voorkomt duplicate content
- ✅ **Unieke meta's** - Geen duplicaten tussen pagina's

---

## 🌐 **2. OPEN GRAPH & SOCIAL MEDIA**

### **Facebook/Open Graph Tags**
```html
<meta property="og:type" content="article" />
<meta property="og:url" content="https://jouwdomain.nl/blog-url" />
<meta property="og:title" content="Titel voor Social Media" />
<meta property="og:description" content="Beschrijving voor delen op social media" />
<meta property="og:image" content="https://jouwdomain.nl/blog-afbeelding.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="article:author" content="Auteur Naam" />
<meta property="article:published_time" content="2025-01-13T00:00:00Z" />
```

### **Twitter Card Tags**
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Twitter Specifieke Titel" />
<meta name="twitter:description" content="Twitter beschrijving" />
<meta name="twitter:image" content="https://jouwdomain.nl/blog-afbeelding.jpg" />
```

**Regels:**
- ✅ **OG image 1200x630 pixels** - Optimale weergave
- ✅ **Alt tekst voor afbeeldingen** - Toegankelijkheid
- ✅ **Consistente branding** - Logo en kleuren
- ✅ **Verleidelijke copy** - Nodigt uit tot klikken

---

## 🔗 **3. URL STRUCTUUR REGELS**

### **SEO Vriendelijke URLs**
```
✅ GOED:
https://nazorghulp.nl/blogs/welkom-bij-xenra-nazorghulp-rouw-kent-geen-script
https://nazorghulp.nl/blogs/de-stilte-na-het-lachen-het-verhaal-van-sanne

❌ SLECHT:
https://nazorghulp.nl/blog.php?id=123
https://nazorghulp.nl/blogs/artikel_met_underscores_en_HOOFDLETTERS
```

**Regels:**
- ✅ **Alleen kleine letters** - Consistentie
- ✅ **Streepjes in plaats van spaties** - welkom-bij-xenra
- ✅ **Zoekwoorden in URL** - Relevant voor inhoud
- ✅ **Maximaal 5-7 woorden** - Niet te lang
- ❌ **Geen speciale karakters** - Alleen a-z, 0-9, streepjes
- ✅ **Logische mapstructuur** - /blogs/artikel-naam

---

## 📱 **4. TECHNISCHE SEO REGELS**

### **Page Speed Optimalisatie**
```html
<!-- Afbeelding Optimalisatie -->
<img src="afbeelding-gecomprimeerd.webp" 
     alt="Beschrijvende alt tekst" 
     loading="lazy"
     width="800" height="600" />

<!-- CSS/JS Optimalisatie -->
<link rel="preload" href="kritische-stijlen.css" as="style" />
<script async src="niet-kritieke-scripts.js"></script>
```

**Regels:**
- ✅ **Afbeeldingen < 100KB** - WebP formaat bij voorkeur
- ✅ **Lazy loading** - Voor afbeeldingen onder de fold
- ✅ **Minified CSS/JS** - Kleinere bestanden
- ✅ **Browser caching** - Via .htaccess headers
- ✅ **GZIP compressie** - Server configuratie

### **Mobile Responsive**
```css
/* Mobile First Approach */
.blog-content {
  font-size: 16px;
  line-height: 1.6;
  padding: 1rem;
}

@media (min-width: 768px) {
  .blog-content {
    font-size: 18px;
    padding: 2rem;
  }
}
```

**Regels:**
- ✅ **Mobile first design** - Primair voor telefoons
- ✅ **Leesbare fonts** - Minimaal 16px op mobile
- ✅ **Touch targets** - Knoppen minimaal 44px
- ✅ **Viewport meta tag** - Voor correct schaling

---

## 📊 **5. STRUCTURED DATA (Schema.org)**

### **Article Schema**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Hoofdtitel van Blog Artikel",
  "description": "Korte beschrijving van het artikel",
  "author": {
    "@type": "Person",
    "name": "Auteur Naam"
  },
  "datePublished": "2025-01-13",
  "dateModified": "2025-01-13",
  "publisher": {
    "@type": "Organization",
    "name": "Xenra Nazorghulp",
    "logo": {
      "@type": "ImageObject",
      "url": "https://nazorghulp.nl/logo.jpg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://nazorghulp.nl/blog-url"
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://nazorghulp.nl/blog-afbeelding.jpg",
    "width": 1200,
    "height": 630
  }
}
```

### **BlogPosting Schema**
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Blog Titel",
  "description": "Blog beschrijving",
  "wordCount": 1500,
  "articleBody": "Volledige blog tekst...",
  "keywords": ["zoekwoord1", "zoekwoord2"],
  "author": {
    "@type": "Person",
    "name": "Auteur Naam"
  }
}
```

**Regels:**
- ✅ **Article of BlogPosting type** - Voor blog content
- ✅ **Publisher informatie** - Bedrijfsgegevens
- ✅ **Datum informatie** - Published en Modified
- ✅ **Author gegevens** - Wie heeft geschreven
- ✅ **Image specificaties** - Afbeelding metadata

---

## 🎯 **6. CONTENT OPTIMALISATIE REGELS**

### **Zoekwoord Strategie**
```
Hoofdzoekwoord: "rouwbegeleiding"
Synoniemen: "nazorg", "rouwverwerking", "verliesverwerking"
Long-tail: "rouwbegeleiding voor nabestaanden"
LSI keywords: "verdriet", "emotionele ondersteuning", "professionele hulp"
```

**Regels:**
- ✅ **1 hoofdzoekwoord per artikel** - Focus houden
- ✅ **2-3% keyword density** - Niet overspammen
- ✅ **Natuurlijke integratie** - Leesbaarheid behouden
- ✅ **Synoniemen gebruiken** - Variatie belangrijk
- ✅ **Keywords in eerste alinea** - Vroeg etablisseren

### **Content Structuur**
```
1. Verleidelijke openingszin
2. Probleem/situatie schetsen
3. Hoofdcontent met subheadings
4. Praktische tips/adviezen
5. Conclusie met call-to-action
```

**Regels:**
- ✅ **Minimaal 800 woorden** - Voor autoriteit
- ✅ **Korte alinea's** - Maximaal 3-4 zinnen
- ✅ **Bullet points** - Voor scanbare content
- ✅ **Call-to-action** - Wat moet lezer doen
- ✅ **Interne links** - Naar gerelateerde content

---

## 🔗 **7. LINKING STRATEGIE**

### **Interne Links**
```html
<!-- Context relevante links -->
<p>Voor meer informatie over <a href="/services" title="Onze diensten">onze rouwbegeleiding diensten</a> kunt u onze servicepaigna bezoeken.</p>

<!-- Gerelateerde blog posts -->
<p>Lees ook: <a href="/blogs/ander-relevant-artikel" title="Gerelateerd artikel">Ander Relevant Artikel</a></p>
```

**Regels:**
- ✅ **3-5 interne links** - Per blog artikel
- ✅ **Relevante anchor text** - Beschrijvend
- ✅ **Title attributen** - Extra context
- ✅ **Link naar contactpagina** - Conversie mogelijkheid
- ❌ **Niet teveel links** - Maxmaal 10 per artikel

### **Externe Links**
```html
<!-- Autoritaire bronnen -->
<p>Volgens onderzoek van <a href="https://authoritative-source.com" rel="noopener noreferrer" target="_blank" title="Externe bron">het CBS</a> ervaren veel mensen rouw.</p>
```

**Regels:**
- ✅ **rel="noopener noreferrer"** - Veiligheid
- ✅ **target="_blank"** - Opent nieuwe tab
- ✅ **Alleen betrouwbare bronnen** - Autoriteit behouden
- ✅ **Maximaal 2-3 externe links** - Focus behouden

---

## 🤖 **8. TECHNICAL SEO CONFIGURATIE**

### **Robots.txt**
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

Sitemap: https://nazorghulp.nl/sitemap.xml
```

### **Sitemap.xml**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://nazorghulp.nl/blogs/artikel-url</loc>
    <lastmod>2025-01-13</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### **.htaccess SEO Rules**
```apache
# SEO Redirects
RewriteEngine On

# HTTPS Redirect
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Trailing Slash Removal
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{THE_REQUEST} /+[^?]+?/[?\s] [NC]
RewriteRule ^(.+?)/$ /$1 [R=301,L]

# Blog Routing
RewriteRule ^blogs/?$ /blogs.html [L]

# Cache Headers
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
</IfModule>
```

**Regels:**
- ✅ **HTTPS redirect** - Veilige verbinding
- ✅ **Clean URLs** - Geen trailing slashes
- ✅ **Browser caching** - Performance
- ✅ **404 handling** - Vriendelijke foutpagina's

---

## 📈 **9. GOOGLE ANALYTICS & TRACKING**

### **Google Analytics 4**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TRACKING-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-TRACKING-ID');
</script>
```

### **Event Tracking**
```javascript
// Blog artikel gelezen
gtag('event', 'article_read', {
  'article_title': 'Blog Titel',
  'article_category': 'Rouwbegeleiding',
  'engagement_time_msec': 30000
});

// Contact formulier gestart
gtag('event', 'form_start', {
  'form_name': 'contact_form',
  'source': 'blog_article'
});
```

**Regels:**
- ✅ **Privacy compliance** - Cookie consent
- ✅ **Event tracking** - Gebruikersgedrag meten
- ✅ **Conversion tracking** - Doelen definiëren
- ✅ **Page views** - Automatisch tracking

---

## ⚡ **10. PERFORMANCE OPTIMALISATIE**

### **Core Web Vitals**
```
✅ Largest Contentful Paint (LCP): < 2.5s
✅ First Input Delay (FID): < 100ms  
✅ Cumulative Layout Shift (CLS): < 0.1
```

### **Optimalisatie Technieken**
```html
<!-- Critical CSS inline -->
<style>
  /* Kritieke stijlen voor above-the-fold content */
</style>

<!-- Non-critical CSS async -->
<link rel="preload" href="non-critical.css" as="style" onload="this.onload=null;this.rel='stylesheet'">

<!-- JavaScript async/defer -->
<script async src="non-critical.js"></script>
<script defer src="after-content.js"></script>
```

**Regels:**
- ✅ **Afbeelding optimalisatie** - WebP, compressie
- ✅ **CSS minificatie** - Kleinere bestanden  
- ✅ **JavaScript optimalisatie** - Async loading
- ✅ **Server response** - < 200ms ideaal
- ✅ **CDN gebruik** - Voor statische bestanden

---

## ✅ **11. CHECKLIST VOOR ELKE BLOG**

### **Voor Publicatie:**
- [ ] H1 tag uniek en beschrijvend
- [ ] Meta title 50-60 karakters
- [ ] Meta description 150-160 karakters
- [ ] URL SEO vriendelijk
- [ ] Alt teksten voor alle afbeeldingen
- [ ] Minimaal 800 woorden content
- [ ] 3-5 interne links
- [ ] Canonical URL ingesteld
- [ ] Open Graph tags compleet
- [ ] Schema.org markup toegevoegd
- [ ] Mobile responsive getest

### **Na Publicatie:**
- [ ] Google Search Console submit
- [ ] Social media delen
- [ ] Interne linking van andere pagina's
- [ ] Performance testen (PageSpeed)
- [ ] Analytics tracking controleren

---

## 🎯 **12. GEAVANCEERDE SEO TECHNIEKEN**

### **Featured Snippets Optimalisatie**
```html
<!-- Voor FAQ snippets -->
<div itemscope itemtype="https://schema.org/FAQPage">
  <div itemscope itemtype="https://schema.org/Question" itemprop="mainEntity">
    <h3 itemprop="name">Hoe lang duurt rouwbegeleiding?</h3>
    <div itemscope itemtype="https://schema.org/Answer" itemprop="acceptedAnswer">
      <div itemprop="text">
        <p>Rouwbegeleiding duurt gemiddeld 6-12 sessies...</p>
      </div>
    </div>
  </div>
</div>
```

### **Local SEO voor Service**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Xenra Nazorghulp",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "NL"
  },
  "telephone": "085-401 92 65",
  "areaServed": "Nederland",
  "serviceArea": "Nederland"
}
```

**Regels:**
- ✅ **FAQ schema** - Voor featured snippets
- ✅ **Local business markup** - Voor lokale zoekopdrachten
- ✅ **Breadcrumb schema** - Voor navigatie
- ✅ **Review schema** - Voor testimonials

---

## 🔍 **EINDRESULTAAT: PERFECT SEO BLOG**

### **Technische Excellentie:**
- ✅ **Page Speed < 0.5s** - Ultra snel
- ✅ **Mobile Score 100%** - Perfect responsive
- ✅ **SEO Score 100%** - Alle regels gevolgd
- ✅ **Toegankelijkheid AA** - Voor iedereen bereikbaar

### **Content Kwaliteit:**
- ✅ **Unieke, waardevolle content** - Niet gekopieerd
- ✅ **Natuurlijke keyword integratie** - Leesbaar
- ✅ **Logische structuur** - Gemakkelijk te scannen
- ✅ **Call-to-action** - Conversie gericht

### **Google Vriendelijk:**
- ✅ **Alle meta tags** - Compleet ingevuld
- ✅ **Structured data** - Machine leesbaar
- ✅ **Clean URLs** - Gebruiksvriendelijk
- ✅ **Internal linking** - Goede site architectuur

**Met deze regels krijg je maximale Google ranking en gebruikerservaring!**