import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "./ui/button";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  attribution: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "The sushi here is absolutely divine! Every piece is crafted with such precision and care. The fish is incredibly fresh, and you can taste the quality in every bite. This has become my go-to spot for authentic Japanese cuisine.",
    author: "Sarah Mitchell",
    role: "Food Critic",
    avatar:
      "https://images.pexels.com/photos/8951499/pexels-photo-8951499.jpeg",
    attribution: "Ivan S on Pexels",
  },
  {
    id: 2,
    quote:
      "I've been to many sushi restaurants, but Sakura stands out for its exceptional attention to detail and authentic flavors. The chef's expertise is evident in every roll. It's not just a meal, it's an experience.",
    author: "Michael Chen",
    role: "Restaurant Owner",
    avatar:
      "https://images.pexels.com/photos/10987899/pexels-photo-10987899.jpeg",
    attribution: "Nidhin K S on Pexels",
  },
  {
    id: 3,
    quote:
      "The ambiance, the service, and most importantly, the sushi - everything is perfect! I love how they balance traditional techniques with creative presentations. Each visit feels special and memorable.",
    author: "Emily Rodriguez",
    role: "Travel Blogger",
    avatar:
      "https://images.pexels.com/photos/11161327/pexels-photo-11161327.jpeg",
    attribution: "Nadin Sh on Pexels",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return testimonials.length - 1;
      if (nextIndex >= testimonials.length) return 0;
      return nextIndex;
    });
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="caption text-accent uppercase tracking-wider mb-4">
            Customer Reviews
          </p>
          <h2 className="heading-xl text-foreground mb-4">
            Sushi Excellence Feedback
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Our customers have amazing things to say about us
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-5xl mx-auto relative">
          <div className="relative min-h-[400px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <div className="bg-background border border-accent/20 rounded-2xl p-8 md:p-12 shadow-lg relative">
                  {/* Quote Icon */}
                  <div className="absolute -top-6 left-8 bg-accent rounded-full p-4 shadow-md">
                    <Quote className="w-8 h-8 text-accent-foreground" />
                  </div>

                  {/* Testimonial Content */}
                  <div className="mt-8 mb-8">
                    <p className="body-lg text-muted-foreground leading-relaxed italic">
                      "{currentTestimonial.quote}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex flex-col items-center gap-4 pt-6 border-t border-border">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-accent/20">
                        <img
                          src={currentTestimonial.avatar}
                          alt={`${currentTestimonial.author} - ${currentTestimonial.attribution}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full border-2 border-background" />
                    </div>
                    <div className="text-center">
                      <h3 className="heading-md text-foreground">
                        {currentTestimonial.author}
                      </h3>
                      <p className="body-sm text-muted-foreground">
                        {currentTestimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon-lg"
              onClick={() => paginate(-1)}
              className="rounded-full bg-accent/10 border-accent/30 hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-accent"
                      : "w-2 bg-accent/30 hover:bg-accent/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon-lg"
              onClick={() => paginate(1)}
              className="rounded-full bg-accent/10 border-accent/30 hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
