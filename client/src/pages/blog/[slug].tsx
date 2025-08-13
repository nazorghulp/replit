import { useParams, Link } from "wouter";
import { Clock, User, Calendar, ArrowLeft, ExternalLink, Home } from "lucide-react";
import { getBlogBySlug, getRelatedBlogs } from "@/data/blog-posts";
import BlogMeta from "@/components/seo/blog-meta";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <div>Blog niet gevonden</div>;
  }

  const blog = getBlogBySlug(slug);
  
  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-orange-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-3xl font-bold text-purple-primary mb-4">Blog niet gevonden</h1>
          <p className="text-warm-gray mb-6">De blog die je zoekt bestaat niet of is verplaatst.</p>
          <Link href="/blogs" className="inline-flex items-center gap-2 bg-purple-primary text-white px-6 py-3 rounded-xl hover:bg-purple-light transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Terug naar blogs
          </Link>
        </div>
      </div>
    );
  }

  const relatedBlogs = getRelatedBlogs(blog.id, 2);

  return (
    <>
      <head>
        <BlogMeta 
          title={blog.metaTitle}
          description={blog.metaDescription}
          image={blog.image}
          alt={blog.alt}
          slug={blog.slug}
          publishedDate={blog.publishedDate}
          author={blog.author}
          tags={blog.tags}
        />
      </head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-orange-50">
        {/* Hero Section */}
        <section className="relative py-12 lg:py-20 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/5 via-transparent to-orange-primary/5"></div>
          
          {/* Floating decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-purple-primary/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-orange-primary/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back navigation */}
            <div className="mb-8">
              <Link 
                href="/blogs" 
                className="inline-flex items-center gap-2 text-purple-primary hover:text-purple-light transition-colors font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Terug naar alle blogs
              </Link>
            </div>

            {/* Hero Image */}
            <div className="relative mb-8 lg:mb-12">
              <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl">
                <img 
                  src={blog.image}
                  alt={blog.alt}
                  className="w-full h-[300px] lg:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Blog Header */}
            <div className="text-center mb-8 lg:mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-primary mb-6 leading-tight">
                {blog.title}
              </h1>
              
              {/* Meta information */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-warm-gray mb-6">
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
                  <span className="text-sm">{blog.readTime} lezen</span>
                </div>
              </div>

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {blog.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-purple-primary/10 text-purple-primary text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="relative py-8 lg:py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-12 shadow-xl border border-white/50">
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:text-purple-primary 
                  prose-h2:text-2xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-8
                  prose-h3:text-xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-6
                  prose-p:text-warm-gray prose-p:leading-relaxed prose-p:mb-4
                  prose-ul:text-warm-gray prose-li:mb-1
                  prose-strong:text-purple-primary"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Homepage link */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <a 
                  href="https://www.nazorghulp.nl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-primary hover:text-purple-light transition-colors font-medium"
                >
                  <Home className="w-4 h-4" />
                  www.nazorghulp.nl
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <section className="relative py-12 lg:py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-purple-primary text-center mb-8 lg:mb-12">
                Gerelateerde verhalen
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {relatedBlogs.map((relatedBlog) => (
                  <Link 
                    key={relatedBlog.id}
                    href={`/blogs/${relatedBlog.slug}`}
                    className="group"
                  >
                    <article className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                      <div className="relative overflow-hidden rounded-xl mb-4">
                        <img 
                          src={relatedBlog.image}
                          alt={relatedBlog.alt}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      <h3 className="text-xl font-bold text-purple-primary mb-3 group-hover:text-purple-light transition-colors">
                        {relatedBlog.title}
                      </h3>
                      
                      <p className="text-warm-gray text-sm line-clamp-3 mb-4">
                        {relatedBlog.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 text-xs text-warm-gray">
                        <span>{relatedBlog.date}</span>
                        <span>{relatedBlog.readTime}</span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-8">
                <Link 
                  href="/blogs"
                  className="inline-flex items-center gap-2 bg-purple-primary text-white px-6 py-3 rounded-xl hover:bg-purple-light transition-colors font-medium"
                >
                  Alle blogs bekijken
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}