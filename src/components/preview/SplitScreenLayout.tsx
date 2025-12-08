import { Header } from '../Header';
import { Footer } from '../Footer';
import { SplitScreenHero } from './SplitScreenHero';
import { SplitScreenSpecials } from './SplitScreenSpecials';
import { SplitScreenChef } from './SplitScreenChef';
import { SplitScreenLocation } from './SplitScreenLocation';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SplitScreenLayout() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Preview Banner */}
      <div className="fixed top-20 left-0 right-0 z-40 bg-accent/10 border-b border-accent/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="body-sm font-medium text-foreground">
              Preview: Split-Screen Layout
            </span>
            <span className="caption text-muted-foreground">
              Layout Option 2
            </span>
          </div>
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Current
            </Button>
          </Link>
        </div>
      </div>

      <main className="pt-12">
        <SplitScreenHero />
        <SplitScreenSpecials />
        <SplitScreenChef />
        <SplitScreenLocation />
      </main>
      
      <Footer />
    </div>
  );
}