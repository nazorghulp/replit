# Xenra Nazorghulp - Deployment Instructies voor mijnhost

## Overzicht
Deze website is volledig klaar voor hosting bij mijnhost. Alle bestanden zijn geoptimaliseerd en klaar voor upload.

## Bestandsstructuur voor Upload

### Voor cPanel File Manager:
1. Upload alle bestanden uit de `dist/public/` map naar de **public_html** map van je hosting
2. Upload het `dist/index.js` bestand naar een **aparte map** (bijv. `/home/yourusername/app/`)

### Benodigde bestanden voor public_html:
```
public_html/
├── index.html                 (hoofdpagina)
├── sitemap.xml               (SEO sitemap)
├── robots.txt                (SEO robots)
├── assets/                   (alle CSS, JS en afbeeldingen)
│   ├── index-GVcVBpWv.css   (gestylede CSS)
│   ├── index-LY1JRWO2.js    (geoptimaliseerde JavaScript)
│   └── [afbeeldingen]/       (alle website afbeeldingen)
```

## Hosting Configuratie

### Node.js Applicatie (optioneel):
- Als je interactieve features wilt (contact formulier), upload `dist/index.js`
- Configureer Node.js app in cPanel om te draaien op poort 3000
- Set environment variabelen in cPanel

### Alleen Statische Website:
- Upload alleen de `dist/public/` inhoud naar `public_html/`
- De website werkt volledig zonder server-side code
- Contact formulier zal email client openen

## SEO & Analytics
✅ Google Tag Manager geïnstalleerd (GTM-PGCV5HH4)
✅ Sitemap.xml aanwezig voor zoekmachines
✅ Robots.txt geoptimaliseerd
✅ Meta tags volledig geoptimaliseerd
✅ Schema.org structured data geïmplementeerd

## Browser Compatibiliteit
✅ Moderne browsers (Chrome, Firefox, Safari, Edge)
✅ Mobiel & tablet responsive design
✅ Progressive Enhancement

## Performance
✅ Geoptimaliseerde afbeeldingen
✅ Geminified CSS & JavaScript  
✅ Lazy loading voor afbeeldingen
✅ Efficient caching headers

## Volgende Stappen
1. Upload `dist/public/*` naar `public_html/` via cPanel File Manager
2. Test de website op je tijdelijke mijnhost URL
3. Configureer DNS voor nazorg.nl naar je hosting
4. Test alle pagina's en functionaliteit

## Support
Alle technische implementaties zijn gedocumenteerd in het project.
De website is volledig responsive en SEO-geoptimaliseerd.