import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center min-h-[calc(100vh-12rem)]">
          {/* Left Side - Image (60% on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden"
          >
            <img
              src="https://images.pexels.com/photos/7719910/pexels-photo-7719910.jpeg"
              alt="Premium sushi platter with assorted nigiri and sashimi - Photo by Lucio Panerai on Pexels"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
          </motion.div>

          {/* Right Side - Content (40% on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col justify-center space-y-6"
          >
            <div className="space-y-4">
              <p className="caption text-accent uppercase tracking-wider">Fresh Daily</p>
              <h1 className="heading-hero text-foreground">
                Authentic Japanese Sushi
              </h1>
              <p className="body-lg text-muted-foreground">
                Experience the art of traditional sushi craftsmanship. Every piece is a masterpiece.
              </p>
              <p className="body-md text-muted-foreground">Est. 2020</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 rounded-lg bg-accent text-accent-foreground hover:opacity-90 transition-opacity body-md font-semibold">
                Order Online
              </button>
              <button className="px-8 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors body-md font-semibold">
                Book a Table
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}