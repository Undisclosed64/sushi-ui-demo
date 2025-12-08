import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function SplitScreenHero() {
  return (
    <section className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[calc(100vh-12rem)]">
          {/* Left Side - Image (50% on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[700px] rounded-none lg:rounded-l-lg overflow-hidden"
          >
            <img
              src="https://images.pexels.com/photos/7719910/pexels-photo-7719910.jpeg"
              alt="Premium sushi platter with assorted nigiri and sashimi - Photo by Lucio Panerai on Pexels"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
          </motion.div>

          {/* Right Side - Content (50% on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-16 flex flex-col justify-center space-y-8 py-12 lg:py-0"
          >
            <div className="space-y-6">
              <p className="caption text-accent uppercase tracking-wider">Fresh Daily • Est. 2020</p>
              <h1 className="heading-hero text-foreground">
                Authentic Japanese Sushi
              </h1>
              <p className="body-lg text-muted-foreground max-w-xl">
                Experience the art of traditional sushi craftsmanship. Every piece is a masterpiece, 
                carefully prepared by our master chef using the finest seasonal ingredients.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Order Online
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Book a Table
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}