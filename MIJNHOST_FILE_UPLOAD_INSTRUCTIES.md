# 📁 MIJNHOST FILE UPLOAD INSTRUCTIES

## Je bent op de juiste plek!

Het "Control Panel" dat je ziet is de mijnhost interface voor bestandsbeheer.

## File Manager vinden:

### Optie 1: Via System Info & Files
1. Klik op **"System Info & Files"** in het linker menu
2. Daar vind je **"File Manager"** of **"Bestandsbeheer"**

### Optie 2: Zoek functie
1. Gebruik de zoekbalk bovenin: "Search for pages"
2. Type: **"file manager"** of **"bestanden"**

### Optie 3: Direct via FTP/SFTP
Als je geen File Manager ziet:
1. Ga naar **"FTP Accounts"** in je control panel
2. Maak een FTP account aan
3. Gebruik een FTP client zoals FileZilla om bestanden te uploaden

## Upload instructies:
1. Ga naar de **`public_html`** map (dit is je website root)
2. Upload alle bestanden uit `xenra-nazorghulp-website-with-htaccess.tar.gz`
3. Pak het .tar.gz bestand uit (of upload de losse bestanden)

## Let op .htaccess:
- Het `.htaccess` bestand moet in de `public_html` root staan
- Dit bestand lost de 404 problemen op
- Het bestand is "verborgen" omdat het met een punt begint

## Test na upload:
- Ga naar nazorghulp.nl
- Test alle pagina's: /over-ons, /diensten, /faq, /contact
- Herlaad pagina's om te controleren of ze werken