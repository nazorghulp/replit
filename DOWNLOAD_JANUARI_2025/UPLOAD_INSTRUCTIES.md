# 🚀 UPLOAD INSTRUCTIES - MijnHost DirectAdmin

## 📋 STAP-VOOR-STAP UPLOAD

### 1️⃣ **Login DirectAdmin**
- Ga naar je MijnHost control panel
- Login met je gebruikersnaam en wachtwoord

### 2️⃣ **File Manager Openen**
- Klik op "File Manager" 
- Navigeer naar `public_html` directory

### 3️⃣ **Backup Maken** (Belangrijk!)
```
- Selecteer alle bestanden in public_html
- Klik "Compress" → Maak backup.zip
- Download backup naar je computer
```

### 4️⃣ **Upload Hoofdbestanden**
Upload naar `public_html/`:
- ✅ `index.html` (nieuwe versie)
- ✅ `blogs.html` (blog overzicht)
- ✅ `sitemap.xml` (Google sitemap)
- ✅ `robots.txt` (SEO robots)
- ✅ `.htaccess` (Apache config)

### 5️⃣ **Upload Assets Directory**
- Upload complete `assets/` map naar `public_html/assets/`
- Alle CSS/JS/afbeeldingen zitten hierin

### 6️⃣ **Maak Blogs Directory**
- Maak nieuwe map: `public_html/blogs/`
- Upload alle bestanden uit `blogs/` map hiernaartoe

### 7️⃣ **Controleer File Permissions**
- Bestanden: 644 (rw-r--r--)
- Directories: 755 (rwxr-xr-x)
- .htaccess: 644

## ✅ **VERIFICATIE CHECKLIST**

Na upload test deze URLs:
- [ ] `nazorghulp.nl` → Hoofdpagina
- [ ] `nazorghulp.nl/blogs` → Blog overzicht  
- [ ] `nazorghulp.nl/blogs/welkom-bij-xenra-nazorghulp-rouw-kent-geen-script` → Eerste blog
- [ ] `nazorghulp.nl/sitemap.xml` → Sitemap zichtbaar

## 🔧 **Problemen Oplossen**

**404 Errors:**
- Controleer .htaccess upload
- Verify alle bestanden in juiste directories

**CSS/JS Laden Niet:**
- Check assets/ directory permissions
- Verify alle bestanden ge-upload

**Blogs Niet Bereikbaar:**
- Controleer blogs/ directory bestaat
- Verify .htaccess rewrite rules actief

## 📞 **Ondersteuning**
Bij problemen: controleer eerst file permissions en .htaccess bestand