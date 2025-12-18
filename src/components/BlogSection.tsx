import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface BlogPost {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  attribution: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    date: '24th Dec 2024',
    title: 'How Sakura Redefines Flavor Harmony in Every Bite',
    excerpt: 'Experience an orchestra of tastes as our sushi unveils a symphony of perfectly balanced flavors.',
    image: 'https://images.pexels.com/photos/8951090/pexels-photo-8951090.jpeg',
    attribution: 'Ivan S on Pexels',
    category: 'Culinary Excellence'
  },
  {
    id: 2,
    date: '20th Dec 2024',
    title: 'Unveiling the Mastery Behind Our Culinary Craftsmanship',
    excerpt: 'Explore the meticulous artistry and dedication that create Sakura\'s renowned sushi perfection.',
    image: 'https://images.pexels.com/photos/8951108/pexels-photo-8951108.jpeg',
    attribution: 'Ivan S on Pexels',
    category: 'Behind the Scenes'
  },
  {
    id: 3,
    date: '15th Dec 2024',
    title: 'Journey Through Freshness: Exquisite Sushi Selection',
    excerpt: 'Embark on a seafood adventure, guided by Sakura\'s fresh and exquisite sushi creations from the sea.',
    image: 'https://images.pexels.com/photos/20811001/pexels-photo-20811001.jpeg',
    attribution: 'Change C.C on Pexels',
    category: 'Ingredients'
  },
  {
    id: 4,
    date: '10th Dec 2024',
    title: 'The Art of Sushi: Tradition Meets Innovation',
    excerpt: 'Discover how we honor traditional Japanese techniques while embracing creative presentations.',
    image: 'https://images.unsplash.com/photo-1752095809329-5addd009f71d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw4fHxTdXNoaSUyMHBsYXRpbmclMjBwcmVzZW50YXRpb24lMkMlMjBhcnRpc3RpYyUyMGZvb2QlMjBzdHlsaW5nJTIwZm9vZCUyMGFydGlzdGljJTIwcGxhdGluZ3xlbnwwfDB8fHwxNzY1MzQ3MTg2fDA&ixlib=rb-4.1.0&q=85',
    attribution: 'Giorgio Trovato on Unsplash',
    category: 'Tradition'
  },
  {
    id: 5,
    date: '5th Dec 2024',
    title: 'The Sakura Experience: Beyond Sushi',
    excerpt: 'Immerse in Sakura\'s passion for culinary excellence, where sushi is more than a dish—it\'s an experience.',
    image: 'https://images.pexels.com/photos/9424910/pexels-photo-9424910.jpeg',
    attribution: 'Airam Dato-on on Pexels',
    category: 'Experience'
  }
];

export function BlogSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-cream/20 to-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side - Hero Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="sticky top-24">
              {/* Decorative Lines */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-accent/30" />
                <div className="w-2 h-2 rounded-full bg-accent" />
                <div className="flex-1 h-px bg-accent/30" />
              </div>

              {/* Main Heading */}
              <div className="mb-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="caption text-accent uppercase tracking-[0.3em] mb-4"
                >
                  Our Journal
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="heading-hero text-foreground mb-6"
                >
                  Behind the Scenes
                  <br />
                  <span className="text-accent">&</span> Latest News
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="body-lg text-muted-foreground leading-relaxed"
                >
                  Discover the stories, techniques, and passion that make Sakura a destination for authentic Japanese cuisine.
                </motion.p>
              </div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl group"
              >
                <div className="aspect-[4/5] relative">
                  <img
                    src="https://images.pexels.com/photos/8951083/pexels-photo-8951083.jpeg"
                    alt="Chef preparing sushi - Photo by Ivan S on Pexels"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="inline-block px-4 py-2 bg-accent/90 backdrop-blur-sm rounded-full mb-4">
                      <span className="body-sm text-accent-foreground font-semibold uppercase tracking-wider">
                        Featured Story
                      </span>
                    </div>
                    <h3 className="heading-lg text-white mb-2">
                      The Art of Perfection
                    </h3>
                    <p className="body-md text-white/80">
                      Meet our master sushi chefs
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Bottom Lines */}
              <div className="flex items-center gap-4 mt-8">
                <div className="flex-1 h-px bg-accent/30" />
                <div className="w-2 h-2 rounded-full bg-accent" />
                <div className="w-12 h-px bg-accent/30" />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Blog Posts List */}
          <div className="lg:col-span-7">
            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-accent/10 overflow-hidden hover:border-accent/30 hover:shadow-xl transition-all duration-300">
                    {/* Image */}
                    <div className="md:col-span-5 relative overflow-hidden">
                      <div className="aspect-[4/3] md:aspect-auto md:h-full relative">
                        <img
                          src={post.image}
                          alt={`${post.title} - ${post.attribution}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-accent/90 backdrop-blur-sm rounded-full text-xs font-semibold text-accent-foreground uppercase tracking-wider">
                            {post.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-center">
                      {/* Date */}
                      <div className="flex items-center gap-2 mb-4">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span className="caption text-muted-foreground uppercase tracking-wider">
                          {post.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="heading-md text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="body-md text-muted-foreground leading-relaxed mb-6">
                        {post.excerpt}
                      </p>

                      {/* Read More Link */}
                      <button className="inline-flex items-center gap-2 text-accent hover:gap-4 transition-all duration-300 body-md font-semibold group/btn">
                        <span>Read Article</span>
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* View All Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 text-center"
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-accent/30 hover:border-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl"
              >
                View All Articles
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}