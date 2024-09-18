'use client';

import { Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link
              href="https://gracieraleigh.com/"
              className="text-muted-foreground hover:text-primary"
            >
              Gracie Raleigh
            </Link>
            <Link
              href="https://www.facebook.com/GracieRaleighMartialArts"
              className="text-muted-foreground hover:text-primary"
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.instagram.com/gracieraleigh/"
              className="text-muted-foreground hover:text-primary"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-muted-foreground">
              &copy; {new Date().getFullYear()} Gracie Competitions. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
