# 🚨 BLOGS REFRESH PROBLEEM - OPLOSSING

## Probleem:
Je hebt de oude .htaccess geüpload die GEEN blogs routing regel heeft!

## Oplossing:
Download opnieuw de **website-final** map - ik heb de juiste .htaccess toegevoegd.

## Werkende regel in .htaccess:
```
RewriteRule ^blogs/?$ /blogs.html [L]
```

## Upload opnieuw:
1. Download **website-final** (nu met werkende .htaccess)
2. Upload naar nazorghulp.nl
3. Overschrijf de .htaccess
4. /blogs refresh werkt dan weer

**Let op:** Zorg dat je de .htaccess uit website-final gebruikt, niet de oude versie!