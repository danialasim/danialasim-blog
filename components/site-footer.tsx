import { Linkedin, Mail, Phone, Github } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { NewsletterForm } from './newsletter-form';

export function SiteFooter() {
  return (
    <footer className="border-t bg-background text-foreground dark:bg-[#020817] dark:text-white w-full">
      <div className="container flex flex-col items-center gap-8 py-12 md:py-16 px-4 md:px-6">
        <div className="w-full max-w-md text-center">
          <h2 className="text-xl font-medium mb-2 text-foreground dark:text-white">
            Subscribe to my newsletter
          </h2>
          <p className="text-sm text-muted-foreground dark:text-gray-300 mb-4">
            Get the latest updates directly in your inbox.
          </p>
          <NewsletterForm />
        </div>
        
        <div className="w-full pt-8 border-t">
          <h2 className="text-lg md:text-xl font-medium text-foreground dark:text-white text-center mb-6">
            Connect with me
          </h2>
          <div className="flex gap-4 md:gap-6 justify-center">
            {/* LinkedIn Button */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-foreground dark:text-white hover:text-[#555] dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              asChild
            >
              <Link href="https://www.linkedin.com/in/danialasim/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>

            {/* Email Button */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-foreground dark:text-white hover:text-[#555] dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              asChild
            >
              <Link href="mailto:danialasimbashir@gmail.com">
                <Mail className="h-5 w-5 md:h-6 md:w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>

            {/* Phone Button */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-foreground dark:text-white hover:text-[#555] dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              asChild
            >
              <Link href="tel:+923249759645">
                <Phone className="h-5 w-5 md:h-6 md:w-6" />
                <span className="sr-only">Phone</span>
              </Link>
            </Button>

            {/* GitHub Button */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-foreground dark:text-white hover:text-[#555] dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              asChild
            >
              <Link href="https://github.com/danialasim" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 md:h-6 md:w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </div>
          <div className="text-foreground/90 dark:text-gray-300 text-xs md:text-sm flex flex-wrap items-center justify-center gap-2 text-center px-4 mt-8">
            <Link href="/" className="hover:text-primary transition-colors">Danial Asim</Link>
            <span>•</span>
            <span>© 2025</span>
            <span>•</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
