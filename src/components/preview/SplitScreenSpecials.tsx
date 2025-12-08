import { motion } from 'framer-motion';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface DishCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  badge?: string;
  attribution: string;
  delay: number;
}

function DishCard({ image, title, description, price, badge, attribution, delay }: DishCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="overflow-hidden hover:border-accent transition-colors group h-full">
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={attribution}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {badge && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-accent text-accent-foreground">{badge}</Badge>
            </div>
          )}
        </div>
        <CardHeader>
          <CardTitle className="heading-md">{title}</CardTitle>
          <CardDescription className="body-sm">{description}</CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center justify-between">
          <p className="body-lg font-semibold text-accent">{price}</p>
          <Button variant="ghost" size="sm" className="text-accent hover:text-accent">
            Details →
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export function SplitScreenSpecials() {
  const specials = [
    {
      image: 'https://images.pexels.com/photos/32482535/pexels-photo-32482535.jpeg',
      title: 'Omakase Set',
      description: "Chef's selection of 12 premium nigiri pieces featuring the finest seasonal ingredients",
      price: '$45',
      badge: 'Chef Special',
      attribution: 'Salmon nigiri sushi - Photo by Schena Maria Karlec on Pexels',
    },
    {
      image: 'https://images.unsplash.com/photo-1729544807821-0ae6fa70b274?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyNXx8RHJhZ29uJTIwcm9sbCUyMHN1c2hpJTIwd2l0aCUyMGVlbCUyMGFuZCUyMGF2b2NhZG8lMkMlMjBjb2xvcmZ1bCUyMHByZXNlbnRhdGlvbiUyQyUyMGNsb3NlLXVwJTIwZm9vZCUyMHBob3RvZ3JhcGh5JTIwZm9vZHxlbnwwfDJ8fHwxNzY1MTc3NjM4fDA&ixlib=rb-4.1.0&q=85',
      title: 'Dragon Roll',
      description: 'Grilled eel and cucumber topped with fresh avocado and our signature eel sauce',
      price: '$18',
      badge: 'Popular',
      attribution: 'Dragon roll sushi - Photo by Carina S on Unsplash',
    },
    {
      image: 'https://pixabay.com/get/g3b8ef280e36bed638c8bd578de05f384703058598ee7e89ffd9b7b486952412fcfd45b2425b5ef74f8bc975161f11a25.jpg',
      title: 'Tuna Sashimi',
      description: 'Fresh bluefin tuna sliced to perfection, served with wasabi and pickled ginger',
      price: '$22',
      attribution: 'Tuna sashimi - Photo by camum on Pixabay',
    },
  ];

  return (
    <section id="menu" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <p className="caption text-accent uppercase tracking-wider">Today's Specials</p>
          <h2 className="heading-xl text-foreground">Featured Dishes</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            Handpicked by our master chef, each dish showcases the finest ingredients and traditional techniques
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specials.map((special, index) => (
            <DishCard key={special.title} {...special} delay={index * 0.2} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="border-2">
            View Full Menu
          </Button>
        </motion.div>
      </div>
    </section>
  );
}