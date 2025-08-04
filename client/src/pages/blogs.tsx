import { useState } from "react";
import { ChevronDown, ChevronUp, Clock, User, Calendar, BookOpen, Sparkles } from "lucide-react";
import HeadMeta from "@/components/seo/head-meta";

// Blog data interface
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

// Sample blog data - eerste blog wordt gepinned (vast)
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Verwelkoming op onze Blog - Samen door het Rouwproces",
    excerpt: "Welkom op de blog van Xenra Nazorghulp. Hier delen we waardevolle inzichten, verhalen en praktische tips voor nabestaanden die door het rouwproces gaan. Rouw is een persoonlijke reis die iedereen anders ervaart.",
    content: `
      <p>Welkom op de blog van Xenra Nazorghulp. Hier delen we waardevolle inzichten, verhalen en praktische tips voor nabestaanden die door het rouwproces gaan. Rouw is een persoonlijke reis die iedereen anders ervaart.</p>
      
      <p>In onze blog vind je:</p>
      <ul>
        <li><strong>Praktische Tips:</strong> Concrete adviezen voor het omgaan met dagelijkse uitdagingen tijdens het rouwproces</li>
        <li><strong>Persoonlijke Verhalen:</strong> Inspirerende verhalen van mensen die hun eigen rouwproces hebben doorlopen</li>
        <li><strong>Professionele Inzichten:</strong> Adviezen van onze ervaren rouwbegeleiders</li>
        <li><strong>Seizoensgebonden Ondersteuning:</strong> Speciale aandacht voor moeilijke periodes zoals feestdagen en jubilea</li>
      </ul>
      
      <p>Ons doel is om je te ondersteunen met herkenbare informatie en een gevoel van verbondenheid. Je staat er niet alleen voor. Bij Xenra Nazorghulp begrijpen we dat rouw tijd nodig heeft en dat iedereen zijn eigen tempo heeft.</p>
      
      <p>Heb je vragen naar aanleiding van een blog artikel? Neem gerust contact met ons op. We zijn er om je te helpen op jouw unieke reis door het rouwproces.</p>
      
      <p><em>Met warme groeten,<br/>Het team van Xenra Nazorghulp</em></p>
    `,
    author: "Xenra Team",
    date: "5 Augustus 2025",
    readTime: "3 min",
    image: "/api/placeholder/800/400",
    isPinned: true
  }
];

function BlogCard({ post }: { post: BlogPost }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${post.isPinned ? 'border-4 border-orange-primary' : ''}`}>
      {post.isPinned && (
        <div className="bg-orange-primary text-white px-6 py-2 text-center font-bold uppercase tracking-wide">
          📌 Uitgelichte Blog
        </div>
      )}
      
      {/* Blog Image */}
      <div className="relative h-64 bg-gradient-to-r from-purple-primary to-purple-soft">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-4 left-6 right-6">
          <div className="flex items-center space-x-4 text-white text-sm">
            <span className="flex items-center space-x-1">
              <Calendar size={16} />
              <span>{post.date}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </span>
            <span className="flex items-center space-x-1">
              <User size={16} />
              <span>{post.author}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-primary mb-4 leading-tight">
          {post.title}
        </h2>
        
        {/* Preview Content */}
        <div className="text-gray-700 leading-relaxed mb-6">
          {!isExpanded ? (
            <>
              <p className="mb-4">{post.excerpt}</p>
              <button
                onClick={toggleExpansion}
                className="inline-flex items-center space-x-2 text-orange-primary hover:text-orange-dark font-semibold transition-colors duration-200 group"
              >
                <span>lees verder</span>
                <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform duration-200" />
              </button>
            </>
          ) : (
            <>
              <div 
                className="prose prose-lg max-w-none mb-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              <button
                onClick={toggleExpansion}
                className="inline-flex items-center space-x-2 text-orange-primary hover:text-orange-dark font-semibold transition-colors duration-200 group"
              >
                <span>inklapppen</span>
                <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform duration-200" />
              </button>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Blogs() {
  const pinnedPosts = blogPosts.filter(post => post.isPinned);
  const regularPosts = blogPosts.filter(post => !post.isPinned).sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Xenra Nazorghulp Blog",
    "description": "Inzichten, tips en verhalen over het rouwproces",
    "url": "https://nazorg.nl/blogs",
    "publisher": {
      "@type": "Organization",
      "name": "Xenra Nazorghulp"
    }
  };

  return (
    <div className="min-h-screen">
      <HeadMeta 
        title="Blogs & Verhalen - Xenra Nazorghulp"
        description="Ontdek waardevolle artikelen, persoonlijke verhalen en professionele inzichten die je kunnen helpen tijdens je rouwproces. Praktische ondersteuning en verbondenheid."
        keywords="rouwbegeleiding blog, nazorg verhalen, rouw tips, verlies verwerken, rouwproces inzichten"
        url="https://nazorg.nl/blogs"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(91, 33, 182, 0.8), rgba(251, 146, 60, 0.6)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200')`
          }}
        >
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 border border-white/20">
                <BookOpen size={64} className="text-orange-light" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Blogs & <span className="text-orange-light">Verhalen</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Inzichten, tips en verhalen over het rouwproces
            </p>
            
            <div className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
              Ontdek waardevolle artikelen, persoonlijke verhalen en professionele inzichten die je kunnen helpen tijdens je rouwproces. Onze blogs bieden praktische ondersteuning en een gevoel van verbondenheid.
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-8 h-8 text-orange-light/30">
              <Sparkles size={32} />
            </div>
            <div className="absolute bottom-1/3 right-1/4 w-6 h-6 text-white/20">
              <BookOpen size={24} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Pinned Blogs Section */}
        {pinnedPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-purple-primary mb-8 text-center">
              Uitgelichte Blog
            </h2>
            <div className="space-y-12">
              {pinnedPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}

        {/* Regular Blogs Section */}
        {regularPosts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-purple-primary mb-8 text-center">
              Recente Blogs
            </h2>
            <div className="space-y-12">
              {regularPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {blogPosts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-purple-primary mb-4">
              Binnenkort meer blogs
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              We werken aan het toevoegen van meer waardevolle inhoud. 
              Kom binnenkort terug voor nieuwe artikelen en inzichten.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-purple-primary to-purple-soft rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Hulp nodig bij je rouwproces?
          </h3>
          <p className="mb-6 opacity-90">
            Onze professionele rouwbegeleiders staan klaar om je persoonlijk te ondersteunen.
          </p>
          <a
            href="/contact"
            className="inline-block bg-orange-primary hover:bg-orange-dark text-white font-bold py-3 px-8 rounded-full transition-colors duration-200"
          >
            Neem Contact Op
          </a>
        </div>
      </section>
    </div>
  );
}