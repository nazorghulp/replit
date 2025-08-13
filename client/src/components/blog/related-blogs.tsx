import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/data/blog-posts";

interface RelatedBlogsProps {
  blogs: BlogPost[];
}

export default function RelatedBlogs({ blogs }: RelatedBlogsProps) {
  if (blogs.length === 0) return null;

  return (
    <section className="relative py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-purple-primary text-center mb-8 lg:mb-12">
          Gerelateerde verhalen
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {blogs.map((blog) => (
            <Link 
              key={blog.id}
              href={`/blogs/${blog.slug}`}
              className="group"
            >
              <article className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src={blog.image}
                    alt={blog.alt}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-purple-primary mb-3 group-hover:text-purple-light transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-warm-gray text-sm line-clamp-3 mb-4">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-warm-gray mb-4">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>

                <div className="flex items-center gap-2 text-purple-primary font-medium group-hover:text-purple-light transition-colors">
                  <span className="text-sm">Lees verder</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}