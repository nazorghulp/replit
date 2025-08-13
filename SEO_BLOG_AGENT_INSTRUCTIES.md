# 🤖 AI AGENT INSTRUCTIES: SEO & GOOGLE VRIENDELIJKE BLOGS

**Voor:** Elke AI Agent die SEO-geoptimaliseerde blogpagina's moet maken  
**Gebruik:** Plak deze instructies in elke nieuwe agent voor perfecte SEO blogs  
**Resultaat:** Google-vriendelijke blogs die hoog ranken  

---

## 🎯 **AGENT OPDRACHT**

Als AI agent moet je **elke blog pagina** maken volgens deze exacte specificaties. Geen uitzonderingen, elke regel moet gevolgd worden voor optimale Google ranking.

---

## 📋 **VERPLICHTE CHECKLIST - VOLG ALTIJD**

### **✅ 1. HTML DOCUMENT STRUCTUUR**

**Elke blog pagina MOET deze structuur hebben:**

```html
<!DOCTYPE html>
<html lang="nl">
<head>
    <!-- Google Analytics - ALTIJD TOEVOEGEN -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-TRACKING-ID"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-TRACKING-ID');
    </script>
    
    <!-- BASIS META TAGS - VERPLICHT -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- SEO META TAGS - UNIEK PER PAGINA -->
    <title>[UNIEKE TITEL 50-60 KARAKTERS] - Bedrijfsnaam</title>
    <meta name="description" content="[UNIEKE BESCHRIJVING 150-160 KARAKTERS MET KEYWORDS]" />
    <meta name="keywords" content="hoofdkeyword, synoniem1, synoniem2, longtail keyword" />
    <meta name="author" content="[AUTEUR NAAM]" />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
    <link rel="canonical" href="[VOLLEDIGE URL VAN DEZE PAGINA]" />
    
    <!-- OPEN GRAPH - VERPLICHT VOOR SOCIAL MEDIA -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="[VOLLEDIGE URL]" />
    <meta property="og:title" content="[SOCIAL MEDIA TITEL]" />
    <meta property="og:description" content="[SOCIAL MEDIA BESCHRIJVING]" />
    <meta property="og:image" content="[VOLLEDIGE URL NAAR AFBEELDING 1200x630]" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="article:author" content="[AUTEUR]" />
    <meta property="article:published_time" content="[ISO DATUM]" />
    
    <!-- TWITTER CARDS - VERPLICHT -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="[TWITTER TITEL]" />
    <meta name="twitter:description" content="[TWITTER BESCHRIJVING]" />
    <meta name="twitter:image" content="[AFBEELDING URL]" />
    
    <!-- STRUCTURED DATA - ALTIJD TOEVOEGEN -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "[HOOFDTITEL]",
      "description": "[ARTIKEL BESCHRIJVING]",
      "author": {
        "@type": "Person",
        "name": "[AUTEUR NAAM]"
      },
      "datePublished": "[ISO DATUM]",
      "dateModified": "[ISO DATUM]",
      "publisher": {
        "@type": "Organization",
        "name": "[BEDRIJFSNAAM]",
        "logo": {
          "@type": "ImageObject",
          "url": "[LOGO URL]"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "[VOLLEDIGE PAGINA URL]"
      },
      "image": {
        "@type": "ImageObject",
        "url": "[HOOFDAFBEELDING URL]",
        "width": 1200,
        "height": 630
      },
      "wordCount": [AANTAL WOORDEN],
      "keywords": ["keyword1", "keyword2", "keyword3"]
    }
    </script>
</head>
```

### **✅ 2. URL STRUCTUUR REGELS**

**ALTIJD deze URL structuur gebruiken:**
```
✅ CORRECT: /blogs/hoofdkeyword-beschrijvende-titel-max-7-woorden
✅ VOORBEELD: /blogs/rouwbegeleiding-kinderen-professionele-nazorg-hulp

❌ FOUT: /blog.php?id=123
❌ FOUT: /blogs/Artikel_Met_Underscores_En_CAPS
❌ FOUT: /blogs/te-lange-url-met-meer-dan-acht-woorden-wordt-slecht-voor-seo
```

**URL REGELS:**
- Alleen kleine letters a-z
- Alleen streepjes tussen woorden
- Hoofdkeyword als eerste woord
- Maximaal 7 woorden
- Geen speciale karakters (!@#$%^&*)

### **✅ 3. CONTENT STRUCTUUR - VERPLICHT**

**Elke blog MOET deze HTML structuur hebben:**

```html
<body>
<main>
    <!-- H1 - ALTIJD 1 PER PAGINA -->
    <h1>[HOOFDTITEL MET HOOFDKEYWORD]</h1>
    
    <!-- INTRO PARAGRAAF - MET HOOFDKEYWORD -->
    <p>[Eerste alinea met hoofdkeyword in eerste 100 woorden]</p>
    
    <!-- H2 SECTIES - 4-6 STUKS -->
    <h2>[Eerste belangrijke subtitel]</h2>
    <p>[Content met synoniemen en gerelateerde keywords]</p>
    <p>[Korte alinea's - maximaal 4 zinnen]</p>
    
    <h2>[Tweede belangrijke subtitel]</h2>
    <p>[Meer content met natuurlijke keyword variaties]</p>
    
    <!-- H3 SUBSECTIES - ONDER H2 -->
    <h3>[Detail onderwerp]</h3>
    <p>[Specifieke informatie]</p>
    
    <!-- AFBEELDINGEN - MET ALT TEXT -->
    <img src="[GEOPTIMALISEERDE AFBEELDING < 100KB]" 
         alt="[BESCHRIJVENDE ALT TEXT MET KEYWORD]"
         loading="lazy"
         width="800" height="600" />
    
    <!-- INTERNE LINKS - 3-5 STUKS -->
    <p>Lees ook onze <a href="/gerelateerde-pagina" title="Beschrijving">gerelateerde informatie</a>.</p>
    
    <!-- CALL TO ACTION - VERPLICHT -->
    <h2>Hulp nodig?</h2>
    <p>Neem contact op voor <a href="/contact" title="Contact">persoonlijke begeleiding</a>.</p>
    
</main>
</body>
```

### **✅ 4. KEYWORD OPTIMALISATIE REGELS**

**Voor elke blog pagina:**

1. **Hoofdkeyword** - 1 per artikel
2. **Keyword density** - 2-3% van totale woorden
3. **Keyword plaatsing:**
   - In H1 tag
   - In eerste alinea (eerste 100 woorden)
   - In minimaal 1 H2 tag
   - In meta title
   - In meta description
   - In URL
   - In alt text van hoofdafbeelding

4. **Synoniemen gebruiken** - 5-8 variaties van hoofdkeyword
5. **Long-tail keywords** - 2-3 langere zinnen
6. **LSI keywords** - Gerelateerde termen

### **✅ 5. AFBEELDING OPTIMALISATIE - VERPLICHT**

**Elke afbeelding MOET:**
```html
<img src="afbeelding-keyword-beschrijving.webp" 
     alt="Beschrijvende alt text met hoofdkeyword" 
     loading="lazy"
     width="[ECHTE BREEDTE]" 
     height="[ECHTE HOOGTE]" />
```

**AFBEELDING REGELS:**
- WebP formaat (of JPG gecomprimeerd)
- Maximaal 100KB bestandsgrootte
- Alt text met keywords (natuurlijk)
- Lazy loading voor performance
- Width/height attributen voor CLS

### **✅ 6. LINKING STRATEGIE - VERPLICHT**

**Interne links (3-5 per artikel):**
```html
<a href="/gerelateerde-pagina" title="Beschrijving">Anchor text met keyword</a>
```

**Externe links (maximaal 2-3):**
```html
<a href="https://betrouwbare-bron.com" 
   rel="noopener noreferrer" 
   target="_blank" 
   title="Externe bron">Autoritaire bron</a>
```

### **✅ 7. PERFORMANCE REGELS - ALTIJD**

**CSS/JS Optimalisatie:**
```html
<!-- Kritieke CSS inline -->
<style>
[Kritieke stijlen voor above-the-fold content]
</style>

<!-- Non-kritieke CSS async laden -->
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">

<!-- JavaScript async -->
<script async src="non-critical.js"></script>
```

**PERFORMANCE DOELEN:**
- Page load time < 2 seconden
- LCP (Largest Contentful Paint) < 2.5s
- CLS (Cumulative Layout Shift) < 0.1
- Mobiele score > 90

---

## 🎯 **AGENT WORKFLOW - VOLG DEZE STAPPEN**

### **STAP 1: KEYWORD RESEARCH**
```
1. Bepaal hoofdkeyword voor artikel
2. Vind 5-8 synoniemen
3. Verzamel 2-3 long-tail variaties
4. Noteer 10-15 LSI keywords
```

### **STAP 2: URL CREATIE**
```
1. Begin met hoofdkeyword
2. Voeg beschrijvende woorden toe
3. Maximaal 7 woorden totaal
4. Controleer: alleen kleine letters + streepjes
5. Test: /blogs/[jouw-seo-url]
```

### **STAP 3: META TAGS SCHRIJVEN**
```
1. Title: [Hoofdkeyword] - [Beschrijving] - [Bedrijf] (50-60 chars)
2. Description: Verleidelijke tekst met hoofdkeyword (150-160 chars)
3. Keywords: hoofdkeyword, synoniem1, synoniem2, longtail
4. Canonical: Volledige URL van deze pagina
```

### **STAP 4: CONTENT STRUCTUUR**
```
1. H1 met hoofdkeyword
2. Intro alinea met hoofdkeyword (eerste 100 woorden)
3. 4-6 H2 secties
4. H3 subsecties waar nodig
5. Minimaal 800 woorden totaal
6. Korte alinea's (3-4 zinnen max)
```

### **STAP 5: AFBEELDING OPTIMALISATIE**
```
1. Comprimeer naar < 100KB
2. WebP formaat gebruiken
3. Alt text met keywords
4. Lazy loading toevoegen
5. Width/height attributen
```

### **STAP 6: LINKING IMPLEMENTATIE**
```
1. 3-5 interne links naar relevante pagina's
2. Maximaal 2-3 externe links naar autoritaire bronnen
3. Relevante anchor text
4. Title attributen toevoegen
```

### **STAP 7: STRUCTURED DATA**
```
1. Article schema toevoegen
2. Author informatie
3. Publisher gegevens
4. Published/modified dates
5. Image metadata
```

### **STAP 8: FINAL CHECK**
```
□ H1 tag uniek en met hoofdkeyword
□ Meta title 50-60 karakters
□ Meta description 150-160 karakters  
□ URL SEO vriendelijk
□ Alt texten voor alle afbeeldingen
□ Minimaal 800 woorden
□ 3-5 interne links
□ Canonical URL correct
□ Open Graph compleet
□ Schema.org markup toegevoegd
□ Performance geoptimaliseerd
```

---

## 🚀 **PRAKTISCHE VOORBEELDEN**

### **VOORBEELD 1: Rouwbegeleiding Blog**

**URL:** `/blogs/rouwbegeleiding-kinderen-professionele-nazorg-hulp`

**Meta Title:** `Rouwbegeleiding voor Kinderen - Professionele Nazorg Hulp - Xenra`

**Meta Description:** `Professionele rouwbegeleiding voor kinderen. Ervaren begeleiders helpen bij verliesverwerking. Direct starten, geen wachtlijst. Bel 085-401 92 65.`

**H1:** `Rouwbegeleiding voor Kinderen: Professionele Nazorg en Hulp`

**Eerste alinea:** `Rouwbegeleiding voor kinderen vraagt om specialistische aanpak. Bij verlies hebben kinderen andere behoeften dan volwassenen. Onze ervaren rouwbegeleiders weten hoe kinderen rouw verwerken en bieden passende ondersteuning.`

### **VOORBEELD 2: Verliesverwerking Blog**

**URL:** `/blogs/verliesverwerking-stappen-professionele-ondersteuning-rouw`

**H-structuur:**
- H1: Verliesverwerking: 5 Belangrijke Stappen met Professionele Ondersteuning
- H2: Wat is Verliesverwerking?
- H2: De 5 Stappen van Rouwverwerking
- H3: Stap 1: Ontkenning en Shock
- H3: Stap 2: Woede en Frustratie
- H2: Wanneer Professionele Hulp Nodig Is
- H2: Onze Aanpak bij Verliesverwerking

---

## ⚡ **GEAVANCEERDE AGENT INSTRUCTIES**

### **AI AGENT BESLISSINGSREGELS:**

**ALS** gebruiker vraagt om blog over [onderwerp]:
1. **DAN** zoek hoofdkeyword gerelateerd aan onderwerp
2. **EN** maak URL volgens schema: `/blogs/hoofdkeyword-beschrijving-max-7-woorden`
3. **EN** schrijf meta title met hoofdkeyword + bedrijfsnaam
4. **EN** maak H1 met hoofdkeyword vooraan
5. **EN** plaats hoofdkeyword in eerste alinea
6. **EN** voeg alle verplichte meta tags toe
7. **EN** implementeer structured data
8. **EN** optimaliseer voor performance

### **FOUTCORRECTIE REGELS:**

**ALS** meta title > 60 karakters: **DAN** verkort tot maximaal 60
**ALS** meta description > 160 karakters: **DAN** verkort tot maximaal 160  
**ALS** geen H1 tag: **DAN** voeg H1 toe met hoofdkeyword
**ALS** URL heeft hoofdletters: **DAN** verander naar kleine letters
**ALS** afbeelding > 100KB: **DAN** comprimeer of waarschuw
**ALS** geen alt text: **DAN** voeg beschrijvende alt text toe
**ALS** geen interne links: **DAN** voeg minimaal 3 relevante links toe

### **KWALITEITSCONTROLE:**

**Voor elke gegenereerde blog controleer:**
1. Alle verplichte HTML elementen aanwezig
2. Keywords natuurlijk geïntegreerd (niet gespammed)
3. Content leesbaar en waardevol
4. Alle links werken
5. Structured data geldig
6. Performance geoptimaliseerd
7. Mobile responsive

---

## ✅ **AGENT SUCCESPROOF FORMULE**

**Volg ALTIJD deze formule voor gegarandeerd succes:**

```
SEO BLOG = 
    UNIEKE URL + 
    COMPLETE META TAGS + 
    H1/H2/H3 STRUCTUUR + 
    KEYWORD OPTIMALISATIE + 
    INTERNE LINKING + 
    GEOPTIMALISEERDE AFBEELDINGEN + 
    STRUCTURED DATA + 
    PERFORMANCE OPTIMALISATIE
```

**GEEN blog pagina zonder:**
- [x] Unieke meta title & description
- [x] H1 tag met hoofdkeyword  
- [x] Canonical URL
- [x] Open Graph tags
- [x] Schema.org markup
- [x] Alt teksten op afbeeldingen
- [x] Interne links (3-5)
- [x] Performance optimalisaties

---

## 🎯 **FINAL AGENT COMMAND**

**Als je deze instructies volgt, creëer je ALTIJD:**
✅ Google-vriendelijke blogs die hoog ranken  
✅ Perfecte technische SEO implementatie  
✅ Gebruiksvriendelijke content structuur  
✅ Snelle laadtijden en goede performance  
✅ Social media geoptimaliseerde pagina's  

**Deze instructies zijn foolproof - elke AI agent die dit volgt maakt perfecte SEO blogs!**