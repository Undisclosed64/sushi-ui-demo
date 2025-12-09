import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Star, ChefHat, Clock } from 'lucide-react';

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

          {/* Chef Info - Enhanced with Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="hover:border-accent transition-all duration-300">
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <p className="caption text-accent uppercase tracking-wider">Our Master Chef</p>
                  <h2 className="heading-xl text-foreground">Chef Takeshi Yamamoto</h2>
                  <p className="body-lg text-muted-foreground">
                    20+ years of experience in traditional Edomae-style sushi
                  </p>
                </div>

                {/* Achievement Stats Grid */}
                <div className="grid grid-cols-3 gap-4 py-4">
                  <div className="text-center space-y-2">
                    <div className="flex justify-center">
                      <Clock className="w-8 h-8 text-accent" />
                    </div>
                    <p className="body-sm font-semibold text-foreground">20+ Years</p>
                    <p className="caption text-muted-foreground">Experience</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="flex justify-center">
                      <ChefHat className="w-8 h-8 text-accent" />
                    </div>
                    <p className="body-sm font-semibold text-foreground">500+ Dishes</p>
                    <p className="caption text-muted-foreground">Mastered</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="flex justify-center">
                      <Award className="w-8 h-8 text-accent" />
                    </div>
                    <p className="body-sm font-semibold text-foreground">Michelin</p>
                    <p className="caption text-muted-foreground">Trained</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="body-md text-foreground">
                    Trained in Tokyo's prestigious Tsukiji Fish Market, Chef Yamamoto brings authentic Japanese 
                    culinary traditions to every dish. His dedication to sourcing the finest ingredients and 
                    mastering traditional techniques ensures an unforgettable dining experience.
                  </p>
                  
                  {/* Decorative Quote */}
                  <div className="relative pl-6 py-4 border-l-4 border-accent bg-muted/30 rounded-r-lg">
                    <p className="body-md text-foreground italic font-serif">
                      "Sushi is not just food, it's an art form that requires patience, precision, and respect 
                      for the ingredients. Each piece tells a story of the ocean and the seasons."
                    </p>
                    <p className="body-sm text-muted-foreground mt-2">— Chef Takeshi Yamamoto</p>
                  </div>
                </div>

                {/* Credentials Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge className="bg-accent text-accent-foreground px-4 py-2 text-sm">
                    <Star className="w-4 h-4" />
                    Michelin Trained
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2 text-sm border-accent text-accent">
                    <Award className="w-4 h-4" />
                    Master Chef
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2 text-sm border-accent text-accent">
                    Tokyo Certified
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}