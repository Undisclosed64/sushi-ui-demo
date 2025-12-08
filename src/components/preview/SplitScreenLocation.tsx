import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function SplitScreenLocation() {
  return (
    <section id="location" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <p className="caption text-accent uppercase tracking-wider">Visit Us</p>
          <h2 className="heading-xl text-foreground">Location & Hours</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Map Preview */}
            <div className="relative h-80 rounded-lg overflow-hidden border border-border">
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

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <MapPin className="w-5 h-5 text-accent mb-2" />
                  <CardTitle className="heading-md">Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-sm text-muted-foreground">
                    123 Sakura Street<br />
                    San Francisco, CA 94102
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <Clock className="w-5 h-5 text-accent mb-2" />
                  <CardTitle className="heading-md">Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-sm text-muted-foreground">
                    Mon-Fri: 11:30 AM - 10:00 PM<br />
                    Sat-Sun: 12:00 PM - 11:00 PM
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="heading-lg">Make a Reservation</CardTitle>
                <CardDescription className="body-md">
                  Book your table for an unforgettable dining experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      <label htmlFor="phone" className="body-sm font-medium mb-2 block text-foreground">
                        Phone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="tel"
                          id="phone"
                          placeholder="(555) 123-4567"
                          className="w-full pl-12 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring body-md"
                        />
                      </div>
                    </div>
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="body-sm font-medium mb-2 block text-foreground">
                        Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring body-md"
                      />
                    </div>

                    <div>
                      <label htmlFor="time" className="body-sm font-medium mb-2 block text-foreground">
                        Time
                      </label>
                      <input
                        type="time"
                        id="time"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring body-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="guests" className="body-sm font-medium mb-2 block text-foreground">
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring body-md"
                    >
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5+ Guests</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Reserve Table
                  </Button>

                  <p className="body-sm text-muted-foreground text-center">
                    Or call us at <a href="tel:4155550123" className="text-accent hover:underline">(415) 555-0123</a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}