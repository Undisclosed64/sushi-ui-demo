import { motion } from 'framer-motion';

export function ChefSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chef Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1717838207789-62684e75a770?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxKYXBhbmVzZSUyMHN1c2hpJTIwY2hlZiUyMGluJTIwdHJhZGl0aW9uYWwlMjB1bmlmb3JtJTIwcHJlcGFyaW5nJTIwc3VzaGklMkMlMjBwcm9mZXNzaW9uYWwlMjBraXRjaGVuJTIwc2V0dGluZyUyMHByb2Zlc3Npb25hbHxlbnwwfDF8fHwxNzY1MTc3NjM5fDA&ixlib=rb-4.1.0&q=85"
              alt="Japanese sushi chef preparing sushi - Photo by Johnny Ho on Unsplash"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
          </motion.div>

          {/* Chef Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="caption text-accent uppercase tracking-wider">Our Master Chef</p>
              <h2 className="heading-xl text-foreground">Chef Takeshi Yamamoto</h2>
              <p className="body-lg text-muted-foreground">
                20+ years of experience in traditional Edomae-style sushi
              </p>
            </div>

            <div className="space-y-4">
              <p className="body-md text-foreground">
                Trained in Tokyo's prestigious Tsukiji Fish Market, Chef Yamamoto brings authentic Japanese 
                culinary traditions to every dish. His dedication to sourcing the finest ingredients and 
                mastering traditional techniques ensures an unforgettable dining experience.
              </p>
              <p className="body-md text-foreground">
                "Sushi is not just food, it's an art form that requires patience, precision, and respect 
                for the ingredients. Each piece tells a story of the ocean and the seasons."
              </p>
              <p className="body-sm text-muted-foreground italic">- Chef Takeshi Yamamoto</p>
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                <span className="body-sm font-semibold text-accent">★★★</span>
                <span className="body-sm text-foreground">Michelin Trained</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}