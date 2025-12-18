import { motion } from 'framer-motion';
import { Carousel, Card } from './ui/apple-cards-carousel';

type CardType = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

const DishContent = ({ 
  description, 
  price, 
  ingredients 
}: { 
  description: string; 
  price: string; 
  ingredients: string[];
}) => {
  return (
    <div className="space-y-6">
      <div className="bg-cream rounded-2xl p-6 md:p-8">
        <p className="body-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
        <div className="mt-6 flex items-center justify-between">
          <span className="heading-lg text-accent">{price}</span>
          <button className="px-6 py-3 rounded-lg bg-accent text-accent-foreground hover:opacity-90 transition-opacity body-md font-semibold">
            Order Now
          </button>
        </div>
      </div>
      
      <div className="bg-cream rounded-2xl p-6 md:p-8">
        <h3 className="heading-md text-foreground mb-4">Ingredients</h3>
        <ul className="space-y-2">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="body-md text-muted-foreground flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent mr-3" />
              {ingredient}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-cream rounded-2xl p-6 md:p-8">
        <p className="body-sm text-muted-foreground italic">
          "Each dish is prepared fresh to order by our master sushi chefs using only the finest seasonal ingredients."
        </p>
      </div>
    </div>
  );
};

export function SpecialsSection() {
  const data: CardType[] = [
    {
      category: "Chef's Selection",
      title: "Omakase Platter",
      src: "https://images.pexels.com/photos/7719910/pexels-photo-7719910.jpeg",
      content: (
        <DishContent
          description="Experience the pinnacle of sushi craftsmanship with our premium Omakase platter. Featuring 12 pieces of the finest seasonal nigiri, each piece is carefully selected by our head chef to showcase the best flavors of the day. This is not just a meal, it's a culinary journey through Japan's rich sushi tradition."
          price="$45"
          ingredients={[
            "Premium bluefin tuna",
            "Fresh Scottish salmon",
            "Sweet shrimp (amaebi)",
            "Sea urchin (uni)",
            "Fatty tuna (otoro)",
            "Yellowtail (hamachi)",
            "Served with wasabi and pickled ginger"
          ]}
        />
      ),
    },
    {
      category: "Signature Roll",
      title: "Dragon Roll",
      src: "https://images.unsplash.com/photo-1729544807821-0ae6fa70b274?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyNXx8RHJhZ29uJTIwcm9sbCUyMHN1c2hpJTIwd2l0aCUyMGVlbCUyMGFuZCUyMGF2b2NhZG8lMkMlMjBjb2xvcmZ1bCUyMHByZXNlbnRhdGlvbiUyQyUyMGNsb3NlLXVwJTIwZm9vZCUyMHBob3RvZ3JhcGh5JTIwZm9vZHxlbnwwfDJ8fHwxNzY1MTc3NjM4fDA&ixlib=rb-4.1.0&q=85",
      content: (
        <DishContent
          description="Our most popular signature roll! Grilled eel and cucumber wrapped in perfect sushi rice, topped with fresh avocado slices arranged to resemble dragon scales, and drizzled with our house-made eel sauce. A harmonious blend of textures and flavors that will transport you to culinary heaven."
          price="$18"
          ingredients={[
            "Grilled freshwater eel (unagi)",
            "Fresh cucumber",
            "Ripe avocado",
            "Sushi rice",
            "Nori seaweed",
            "House-made eel sauce",
            "Toasted sesame seeds"
          ]}
        />
      ),
    },
    {
      category: "Premium Sashimi",
      title: "Tuna Sashimi",
      src: "https://images.pexels.com/photos/29134778/pexels-photo-29134778.jpeg",
      content: (
        <DishContent
          description="Fresh bluefin tuna sliced to perfection by our master chefs. Each piece is cut at the optimal angle to enhance the natural marbling and buttery texture. Served on a bed of ice with traditional accompaniments. This is sashimi at its finest - pure, simple, and absolutely delicious."
          price="$22"
          ingredients={[
            "Premium bluefin tuna",
            "Fresh wasabi root",
            "Pickled ginger",
            "Soy sauce",
            "Daikon radish garnish",
            "Shiso leaves"
          ]}
        />
      ),
    },
    {
      category: "Special Nigiri",
      title: "Salmon Nigiri Set",
      src: "https://images.pexels.com/photos/32482535/pexels-photo-32482535.jpeg",
      content: (
        <DishContent
          description="A beautiful presentation of premium salmon nigiri, showcasing different cuts and preparations. From the rich, fatty belly to the lean, flavorful loin, this set demonstrates the versatility and excellence of fresh Norwegian salmon. Each piece is hand-pressed with perfectly seasoned rice."
          price="$16"
          ingredients={[
            "Norwegian salmon (various cuts)",
            "Premium sushi rice",
            "Rice vinegar seasoning",
            "Fresh wasabi",
            "Garnished with microgreens",
            "Soy sauce for dipping"
          ]}
        />
      ),
    },
    {
      category: "Colorful Creation",
      title: "Rainbow Roll",
      src: "https://images.unsplash.com/photo-1763093226729-b412ad2f309d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxSYWluYm93JTIwcm9sbCUyMHN1c2hpJTIwd2l0aCUyMG11bHRpcGxlJTIwZmlzaCUyMHZhcmlldGllcyUyQyUyMHZpYnJhbnQlMjBjb2xvcnMlMjBmb29kJTIwY29sb3JmdWx8ZW58MHwwfHx8MTc2NTI5MDE3Mnww&ixlib=rb-4.1.0&q=85",
      content: (
        <DishContent
          description="A feast for the eyes and the palate! Our Rainbow Roll features a California roll base topped with an array of fresh fish including tuna, salmon, yellowtail, and more. Each slice reveals a beautiful spectrum of colors, making this roll as Instagram-worthy as it is delicious."
          price="$20"
          ingredients={[
            "Fresh tuna",
            "Scottish salmon",
            "Yellowtail",
            "Shrimp",
            "Avocado",
            "Cucumber",
            "Crab mix",
            "Tobiko (flying fish roe)"
          ]}
        />
      ),
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="caption text-accent uppercase tracking-wider mb-2">Today's Specials</p>
          <h2 className="heading-xl text-foreground mb-4">Discover Our Featured Dishes</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Handcrafted daily by our master chefs using the finest seasonal ingredients
          </p>
        </motion.div>

        <Carousel items={cards} />
      </div>
    </section>
  );
}