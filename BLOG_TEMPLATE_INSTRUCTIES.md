# Blog Template - Xenra Nazorghulp

## Standaard Blog Structuur

Elke nieuwe blog moet de volgende elementen bevatten:

### 1. Blog Data Interface
```typescript
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  isPinned?: boolean;
}
```

### 2. Standaard Homepage Link
**BELANGRIJK**: Elke blog moet onder de content automatisch een homepage link bevatten met:
- Link naar "/" (homepage)
- Tekst: "www.nazorghulp.nl"
- Home icoon van Lucide React
- Styling: gray background box met orange border-left
- Hover effect: van purple naar orange

### 3. Layout Vereisten
- **Side-by-Side Layout**: Foto links, tekst rechts op desktop (md: breakpoint)
- **Responsive**: Gestapeld op mobiel
- **Uitklapbaar**: Excerpt met "lees verder" knop
- **Consistente Styling**: Purple heading, orange accents

### 4. SEO Vereisten
- Unieke titel per blog
- Meta description
- Structured data
- Correct domain: nazorghulp.nl (niet nazorg.nl)

### 5. Blog Volgorde
- **Eerste blog**: Altijd gepinned (isPinned: true)
- **Nieuwe blogs**: Chronologische volgorde (nieuwste eerst)
- **Datum format**: "Maand YYYY" (bijv. "Augustus 2025")

## Template Code Voor Homepage Link

```jsx
{/* Homepage Link - STANDAARD ONDER ELKE BLOG */}
<div className="mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-orange-primary">
  <a 
    href="/"
    className="inline-flex items-center space-x-2 text-purple-primary hover:text-orange-primary font-semibold transition-colors duration-200 group"
  >
    <Home size={18} className="group-hover:scale-110 transition-transform duration-200" />
    <span>www.nazorghulp.nl</span>
  </a>
</div>
```

Deze instructies zorgen ervoor dat alle nieuwe blogs consistent zijn en de homepage link standaard bevatten.