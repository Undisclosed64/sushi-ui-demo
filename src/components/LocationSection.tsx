import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export function LocationSection() {
  return (
    <section id="location" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="caption text-accent uppercase tracking-wider mb-2">Visit Us</p>
          <h2 className="heading-xl text-foreground">Location & Hours</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Map Preview - General San Francisco Area */}
            <div className="relative h-64 rounded-lg overflow-hidden bg-muted border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.52000028457694!3d37.757814940031055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant location in San Francisco"
              />
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="heading-md text-foreground mb-1">Address</h3>
                  <p className="body-md text-muted-foreground">
                    123 Sakura Street<br />
                    San Francisco, CA 94102
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="heading-md text-foreground mb-1">Hours</h3>
                  <div className="body-md text-muted-foreground space-y-1">
                    <p>Monday - Friday: 11:30 AM - 10:00 PM</p>
                    <p>Saturday - Sunday: 12:00 PM - 11:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="heading-md text-foreground mb-1">Phone</h3>
                  <p className="body-md text-muted-foreground">(415) 555-0123</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-background p-8 rounded-lg border border-border"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="heading-lg text-foreground">Stay Updated</h3>
                <p className="body-md text-muted-foreground">
                  Subscribe to our newsletter for exclusive offers, new menu items, and special events.
                </p>
              </div>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="body-sm font-medium mb-2 block text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring body-md"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="body-sm font-medium mb-2 block text-foreground">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      id="email"
                      placeholder="your@email.com"
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring body-md"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-accent text-accent-foreground hover:opacity-90 transition-opacity body-md font-semibold"
                >
                  Subscribe
                </button>
              </form>

              <p className="body-sm text-muted-foreground text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}