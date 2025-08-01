# 🔧 .HTACCESS BESTAND ONTBREEKT

## Probleem geïdentificeerd:
Je website bestanden staan correct in `public_html`, maar het `.htaccess` bestand is niet zichtbaar.

## Waarom zie je het .htaccess bestand niet?
Het `.htaccess` bestand begint met een punt, waardoor het "verborgen" is in de meeste file managers.

## Oplossing in DirectAdmin:

### Stap 1: Toon verborgen bestanden
1. Zoek naar een **"View"** of **"Settings"** knop in je File Manager
2. Zoek naar optie: **"Show hidden files"** of **"Show dotfiles"**
3. Vink deze aan

### Stap 2: Als je nog steeds geen .htaccess ziet
1. Klik op **"New File"** knop
2. Maak een nieuw bestand aan met naam: `.htaccess`
3. Kopieer deze inhoud erin:

```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [QSA,L]
```

### Stap 3: Test de website
1. Ga naar nazorghulp.nl/over-ons
2. Herlaad de pagina
3. Controleer of je nog 404 errors krijgt

## Het .htaccess bestand is ESSENTIEEL voor:
- Doorsturen van alle routes naar index.html
- Oplossen van 404 errors bij page refresh
- Correct functioneren van je Single Page Application