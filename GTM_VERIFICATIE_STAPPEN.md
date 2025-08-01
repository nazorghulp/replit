# 🏷️ GOOGLE TAG MANAGER VERIFICATIE

## Probleem volgens Google:
- Foutopsporingsvenster kan geen verbinding maken met nazorg.nl
- Domain verificatie ontbreekt

## Snelle oplossing:

### Stap 1: Preview opnieuw proberen
1. Ga terug naar je Tag Manager
2. Klik op **"Opnieuw proberen"** 
3. Test of de verbinding nu werkt

### Stap 2: Als het nog niet werkt - Domain verificatie
1. Ga naar **Admin** in je Tag Manager account
2. Klik op **Account Settings**
3. Voeg `nazorg.nl` toe als geverifieerd domein

### Stap 3: Alternatief - Publiceer de container
1. Ga terug naar je GTM workspace
2. Klik op **"Submit"** rechtsboven
3. Publiceer je container
4. Test dan opnieuw

## Waarschijnlijke oorzaak:
Je Tag Manager container `GTM-PGCV5HH4` is correct geïnstalleerd op de website, maar het preview/debug venster heeft domein verificatie nodig.

## Test of GTM werkt:
1. Ga naar nazorg.nl
2. Open browser Developer Tools (F12)
3. Ga naar Console tab
4. Type: `dataLayer`
5. Als je een array ziet, werkt GTM correct

Het tracking zelf werkt waarschijnlijk al, alleen het preview venster heeft verificatie nodig.