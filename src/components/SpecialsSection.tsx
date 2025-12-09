import { motion } from 'framer-motion';
import { ExpandableCard } from '@/components/ui/expandable-card';
import type { ExpandableCardType } from '@/components/ui/expandable-card';

export function SpecialsSection() {
  const specials: ExpandableCardType[] = [
    {
      title: 'Omakase Set',
      description: "Chef's selection of 12 premium nigiri pieces featuring the finest seasonal ingredients",
      src: 'https://images.pexels.com/photos/32482535/pexels-photo-32482535.jpeg',
      price: '$45',
      ingredients: 'Toro, Salmon, Yellowtail, Sea Urchin, Sweet Shrimp, Scallop, Mackerel, Eel, Octopus, Squid, Tamago, Ikura',
      chefNote: 'Our signature omakase features the freshest catches of the day, hand-selected by Chef Yamamoto from the morning market. Each piece is carefully prepared to highlight the natural flavors and textures.',
    },
    {
      title: 'Dragon Roll',
      description: 'Grilled eel and cucumber topped with fresh avocado and our signature eel sauce',
      src: 'https://images.unsplash.com/photo-1729544807821-0ae6fa70b274?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyNXx8RHJhZ29uJTIwcm9sbCUyMHN1c2hpJTIwd2l0aCUyMGVlbCUyMGFuZCUyMGF2b2NhZG8lMkMlMjBjb2xvcmZ1bCUyMHByZXNlbnRhdGlvbiUyQyUyMGNsb3NlLXVwJTIwZm9vZCUyMHBob3RvZ3JhcGh5JTIwZm9vZHxlbnwwfDJ8fHwxNzY1MTc3NjM4fDA&ixlib=rb-4.1.0&q=85',
      price: '$18',
      ingredients: 'Unagi (grilled eel), cucumber, avocado, sushi rice, nori, sesame seeds, eel sauce',
      chefNote: 'The eel is grilled to perfection with our house-made tare sauce, creating a perfect balance of sweet and savory flavors. The creamy avocado complements the rich eel beautifully.',
    },
    {
      title: 'Tuna Sashimi',
      description: 'Fresh bluefin tuna sliced to perfection, served with wasabi and pickled ginger',
      src: 'https://pixabay.com/get/g3b8ef280e36bed638c8bd578de05f384703058598ee7e89ffd9b7b486952412fcfd45b2425b5ef74f8bc975161f11a25.jpg',
      price: '$22',
      ingredients: 'Premium bluefin tuna (maguro), wasabi, pickled ginger, soy sauce, daikon radish',
      chefNote: 'We source only the highest grade bluefin tuna, known for its buttery texture and rich flavor. Each slice is cut against the grain to ensure the perfect bite.',
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
          className="text-center mb-12"
        >
          <p className="caption text-accent uppercase tracking-wider mb-2">Today's Specials</p>
          <h2 className="heading-xl text-foreground">Featured Dishes</h2>
          <p className="body-md text-muted-foreground mt-4">Click on any dish to see more details</p>
        </motion.div>

        <ExpandableCard cards={specials} />
      </div>
    </section>
  );
}