import { motion } from 'framer-motion';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface MenuItem {
  image: string;
  category: string;
  title: string;
  description: string;
  price: string;
  attribution: string;
}

interface MenuCardProps extends MenuItem {
  delay: number;
}

function MenuCard({ image, category, title, description, price, attribution, delay }: MenuCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="overflow-hidden hover:border-accent transition-all duration-300 group h-full p-0">
        <div className="relative h-72 overflow-hidden">
          <img
            src={image}
            alt={attribution}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4">
            <Badge className="bg-accent text-accent-foreground text-base px-3 py-1 font-semibold">
              {price}
            </Badge>
          </div>
        </div>
        <CardHeader className="space-y-2 pb-6">
          <div className="flex items-center justify-between">
            <CardTitle className="heading-md">{title}</CardTitle>
            <p className="caption text-accent uppercase tracking-wider">{category}</p>
          </div>
          <CardDescription className="body-sm text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
}

export function MenuSection() {
  const menuItems: MenuItem[] = [
    {
      image: 'https://images.pexels.com/photos/271715/pexels-photo-271715.jpeg',
      category: 'NIGIRI',
      title: 'Salmon Nigiri',
      description: 'Fresh Norwegian salmon over seasoned rice',
      price: '$8',
      attribution: 'Salmon nigiri - Photo by Pixabay on Pexels',
    },
    {
      image: 'https://images.pexels.com/photos/8951243/pexels-photo-8951243.jpeg',
      category: 'ROLLS',
      title: 'California Roll',
      description: 'Crab, avocado, cucumber with sesame seeds',
      price: '$12',
      attribution: 'California roll - Photo by Ivan S on Pexels',
    },
    {
      image: 'https://images.pexels.com/photos/10692511/pexels-photo-10692511.jpeg',
      category: 'ROLLS',
      title: 'Spicy Tuna Roll',
      description: 'Tuna, spicy mayo, scallions, sesame oil',
      price: '$14',
      attribution: 'Spicy tuna roll - Photo by Yang Hao on Pexels',
    },
    {
      image: 'https://images.pexels.com/photos/3622477/pexels-photo-3622477.jpeg',
      category: 'APPETIZERS',
      title: 'Tempura Shrimp',
      description: 'Crispy battered shrimp with tempura sauce',
      price: '$10',
      attribution: 'Tempura - Photo by Jonathan Borba on Pexels',
    },
    {
      image: 'https://images.unsplash.com/photo-1763470260582-894ae15f43bb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxNaXNvJTIwc291cCUyMGluJTIwYmxhY2slMjBib3dsJTJDJTIwdHJhZGl0aW9uYWwlMjBKYXBhbmVzZSUyMHNvdXAlMkMlMjB0b2Z1JTIwYW5kJTIwc2Vhd2VlZCUyMGZvb2QlMjBtaXNvJTIwc291cCUyMGphcGFuZXNlJTIwc291cHxlbnwwfDB8fHwxNzY1MjIzODkzfDA&ixlib=rb-4.1.0&q=85',
      category: 'SOUPS',
      title: 'Miso Soup',
      description: 'Traditional Japanese soup with tofu and seaweed',
      price: '$4',
      attribution: 'Miso soup - Photo by note thanun on Unsplash',
    },
    {
      image: 'https://pixabay.com/get/g1a87994b25d192eacdcabfbc808dee6429c76a675c18ad2a2104baa1122c1492c0ea42663dd400cd4d108a8d129dab6e.jpg',
      category: 'SIDES',
      title: 'Edamame',
      description: 'Steamed soybeans with sea salt',
      price: '$5',
      attribution: 'Edamame - Photo by PublicDomainPictures on Pixabay',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <p className="caption text-accent uppercase tracking-wider">Our Menu</p>
          <h2 className="heading-xl text-foreground">Signature Dishes</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated selection of traditional and contemporary Japanese cuisine
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuItems.map((item, index) => (
            <MenuCard key={`${item.title}-${index}`} {...item} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}