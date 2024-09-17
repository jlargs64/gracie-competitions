'use client';

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto px-4 text-center">
        &copy; {new Date().getFullYear()} Gracie Competitions. All rights
        reserved.
      </div>
      <a className="hover:text-primary/90" href="https://gracieraleigh.com/">
        Gracie Raleigh
      </a>
    </footer>
  );
};

export default Footer;
