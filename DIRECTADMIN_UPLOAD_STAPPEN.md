# 📂 DIRECTADMIN UPLOAD STAPPEN

## Je bent op de juiste plek!

Ik zie dat je in DirectAdmin File Manager bent in de nazorghulp.nl map.

## Volgende stappen:

### Stap 1: Ga naar de htpasswd map
1. Klik op de **"htpasswd"** map in de lijst
2. Dit is de equivalent van `public_html` - hier komen je website bestanden

### Stap 2: Upload je website
1. Klik op **"Upload"** knop bovenin
2. Upload het bestand: `xenra-nazorghulp-website-with-htaccess.tar.gz`
3. Of upload alle losse bestanden uit de map

### Stap 3: Uitpakken (als je .tar.gz hebt geüpload)
1. Selecteer het .tar.gz bestand
2. Zoek naar een "Extract" of "Uitpakken" optie
3. Pak uit in de huidige map (htpasswd)

### Stap 4: Controleer bestanden
Na upload/uitpakken moet je deze bestanden zien:
- `index.html`
- `assets/` map
- `.htaccess` (mogelijk verborgen - zet "Show hidden files" aan)
- Andere CSS/JS bestanden

### Stap 5: Test website
1. Ga naar nazorghulp.nl
2. Test alle pagina's: /over-ons, /diensten, /faq, /contact
3. Herlaad pagina's om 404 errors te controleren

## Let op:
Het `.htaccess` bestand is cruciaal voor het oplossen van de 404 problemen!