import { Link } from "wouter";
import { Clock, User, Calendar, BookOpen, ArrowRight } from "lucide-react";
import HeadMeta from "@/components/seo/head-meta";
import { blogPosts } from "@/data/blog-posts";

export default function BlogsOverview() {
  // Keep blogs in the exact order from blog-posts.ts - no sorting needed
  const sortedBlogs = blogPosts;

  return (
    <>
      <HeadMeta 
        title="Blogs - Verhalen over Rouw en Herstel | Cenra Nederland"
        description="Lees inspirerende verhalen over rouwverwerking en herstel. Ontdek hoe anderen omgaan met verlies en vind herkenning in hun ervaringen bij Cenra Nederland."
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-orange-50">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/5 via-transparent to-orange-primary/5"></div>
          
          {/* Floating decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-purple-primary/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-orange-primary/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-purple-light/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-primary via-purple-light to-orange-primary bg-clip-text text-transparent mb-6 leading-tight">
              Verhalen van Moed en Herstel
            </h1>
            
            <p className="text-lg lg:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed mb-8">
              Ontdek inspirerende verhalen van mensen die door rouw heengingen en stapje voor stapje hun weg vonden naar herstel. 
              Elk verhaal is een bron van herkenning, hoop en moed.
            </p>

            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-primary/20 to-purple-primary/20 backdrop-blur-lg rounded-2xl px-8 py-4 border border-white/40 shadow-xl">
              <BookOpen className="w-6 h-6 text-orange-primary" />
              <span className="text-dark-gray font-bold text-lg">Echte verhalen, echte hoop</span>
            </div>
          </div>
        </section>

        {/* Blogs Grid */}
        <section className="relative py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:gap-12">
              {sortedBlogs.map((blog, index) => (
                <article 
                  key={blog.id}
                  className={`relative group ${index === 0 && blog.isPinned ? 'lg:col-span-full' : ''}`}
                >
                  {/* Pinned badges */}
                  {blog.isPinned && (
                    <div className="absolute -top-4 left-6 z-10">
                      <div className="bg-gradient-to-r from-orange-primary to-orange-light text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl flex items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        {blog.slug === "welkom-bij-xenra-nazorghulp-rouw-kent-geen-script" ? "WELKOMSTVERHAAL" : "UITGELICHT"}
                      </div>
                    </div>
                  )}

                  <Link href={`/blogs/${blog.slug}`}>
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border border-white/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
                      <div className={`grid ${index === 0 && blog.isPinned ? 'lg:grid-cols-2' : 'md:grid-cols-2'} gap-0`}>
                        {/* Image */}
                        <div className={`relative overflow-hidden ${index === 0 && blog.isPinned ? 'order-2 lg:order-1' : 'order-1'}`}>
                          <img 
                            src={blog.image}
                            alt={blog.alt}
                            className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                              index === 0 && blog.isPinned ? 'h-64 lg:h-full' : 'h-64'
                            }`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className={`p-6 lg:p-8 flex flex-col justify-center ${index === 0 && blog.isPinned ? 'order-1 lg:order-2' : 'order-2'}`}>
                          {/* Meta information */}
                          <div className="flex flex-wrap items-center gap-4 text-warm-gray mb-4">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              <span className="text-sm font-medium">{blog.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">{blog.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm">{blog.readTime}</span>
                            </div>
                          </div>

                          {/* Title */}
                          <h2 className={`font-bold text-purple-primary mb-4 group-hover:text-purple-light transition-colors leading-tight ${
                            index === 0 && blog.isPinned ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'
                          }`}>
                            {blog.title}
                          </h2>

                          {/* Excerpt */}
                          <p className="text-warm-gray leading-relaxed mb-6 line-clamp-3">
                            {blog.excerpt}
                          </p>

                          {/* Tags */}
                          {blog.tags && blog.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-6">
                              {blog.tags.slice(0, 3).map((tag) => (
                                <span 
                                  key={tag}
                                  className="px-3 py-1 bg-purple-primary/10 text-purple-primary text-xs font-medium rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Read more button */}
                          <div className="flex items-center gap-2 text-purple-primary font-medium group-hover:text-purple-light transition-colors">
                            <span>Lees het volledige verhaal</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-white via-purple-50/50 to-orange-50/30 rounded-2xl lg:rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/60 backdrop-blur-sm">
              <h2 className="text-2xl lg:text-3xl font-bold text-purple-primary mb-4">
                Herken je jezelf in deze verhalen?
              </h2>
              <p className="text-warm-gray text-lg mb-6 leading-relaxed">
                Bij Cenra Nederland begrijpen we dat iedereen zijn eigen verhaal heeft. 
                Wij zijn er om jou te helpen jouw verhaal vorm te geven, in jouw tempo en op jouw manier.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-purple-primary text-white px-8 py-4 rounded-xl hover:bg-purple-light transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
              >
                Neem contact op
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Cenra Nederland Blog",
          "description": "Verhalen over rouwverwerking en herstel",
          "url": "https://nazorghulp.nl/blogs",
          "publisher": {
            "@type": "Organization",
            "name": "Cenra Nederland",
            "logo": {
              "@type": "ImageObject",
              "url": "https://nazorghulp.nl/logo.png"
            }
          },
          "blogPost": blogPosts.map(blog => ({
            "@type": "BlogPosting",
            "headline": blog.title,
            "description": blog.excerpt,
            "url": `https://nazorghulp.nl/blogs/${blog.slug}`,
            "datePublished": blog.publishedDate,
            "author": {
              "@type": "Person",
              "name": blog.author
            },
            "image": {
              "@type": "ImageObject",
              "url": `https://nazorghulp.nl${blog.image}`,
              "description": blog.alt
            }
          }))
        })}
      </script>
    </>
  );
}