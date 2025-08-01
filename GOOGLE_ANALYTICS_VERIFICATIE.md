# 📊 GOOGLE ANALYTICS DOMEIN VERIFICATIE

## Probleem:
Google Analytics meldt dat nazorg.nl niet geverifieerd is als gecontroleerd domein.

## Huidige situatie:
✅ Google Tag Manager is correct geïnstalleerd (`GTM-PGCV5HH4`)
✅ Code staat in de website header
❌ Domein nazorg.nl is niet geverifieerd in Google Analytics

## Oplossing:

### Stap 1: Domein toevoegen in Google Analytics
1. Ga naar je Google Analytics account
2. Klik op **Admin** (tandwiel icoon)
3. Ga naar **Account** > **Account Settings**
4. Scroll naar **"Advanced Settings"**
5. Klik op **"Data collection and modification"**
6. Voeg `nazorg.nl` toe als geverifieerd domein

### Stap 2: Domein verificatie methodes
Je kunt kiezen uit verschillende verificatie methodes:

**Optie A: HTML tag verificatie**
- Google geeft je een meta tag
- Voeg deze toe aan de `<head>` van je website

**Optie B: HTML bestand upload**
- Download een verificatiebestand van Google
- Upload dit naar je website root (`public_html`)

**Optie C: DNS verificatie**
- Voeg een TXT record toe aan je DNS instellingen

### Stap 3: Na verificatie
- Wacht 24-48 uur voor volledige synchronisatie
- Controleer of data binnenkomt in Google Analytics

## Waarom gebeurt dit?
Google Analytics controleert of je eigenaar bent van het domein om misbruik te voorkomen. Zonder verificatie worden geen gegevens verzameld.