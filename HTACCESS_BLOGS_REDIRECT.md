# 📋 HTACCESS REDIRECT VOOR BLOGS PAGINA

## 🔍 SITUATIE:
- ✅ Correcte blogs.html is geüpload (heeft juiste canonical URL)
- ❌ /blogs route wijst nog naar index.html (verkeerde canonical URL)
- 🔧 Oplossing: .htaccess regel toevoegen om /blogs naar blogs.html te leiden

## 📝 TOEVOEGEN AAN .HTACCESS:

Voeg deze regel toe aan je `.htaccess` bestand:

```apache
# Redirect /blogs to blogs.html for SEO
RewriteEngine On
RewriteRule ^blogs$ blogs.html [L]
```

Of als je al een .htaccess hebt, voeg alleen deze regel toe:
```apache
RewriteRule ^blogs$ blogs.html [L]
```

## 🎯 WAT DIT DOET:
- Wanneer iemand naar `/blogs` gaat → serveert `blogs.html`
- Google crawlers zien de correcte canonical URL
- Gebruikers zien nog steeds de normale SPA functionaliteit
- Geen impact op andere pagina's

## 📍 LOCATIE .HTACCESS:
- Plaats het .htaccess bestand in je `public_html/` map
- Zelfde locatie als je index.html

## ✅ TEST NA TOEVOEGING:
```bash
curl "https://nazorghulp.nl/blogs" | grep canonical
# Moet tonen: href="https://nazorghulp.nl/blogs"
```

**Dit zou het canonical URL probleem definitief oplossen!**