export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="heading-lg">SAKURA</h3>
            <p className="body-sm opacity-80">
              Authentic Japanese sushi crafted with passion and precision since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="heading-md">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="#menu" className="body-sm opacity-80 hover:opacity-100 transition-opacity">
                Menu
              </a>
              <a href="#about" className="body-sm opacity-80 hover:opacity-100 transition-opacity">
                About Us
              </a>
              <a href="#location" className="body-sm opacity-80 hover:opacity-100 transition-opacity">
                Location
              </a>
              <a href="#" className="body-sm opacity-80 hover:opacity-100 transition-opacity">
                Reservations
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="heading-md">Contact</h4>
            <div className="space-y-2 body-sm opacity-80">
              <p>123 Sakura Street</p>
              <p>San Francisco, CA 94102</p>
              <p>(415) 555-0123</p>
              <p>info@sakurasushi.com</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="body-sm opacity-80">
            © 2024 Sakura Sushi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}