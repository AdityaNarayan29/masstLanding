import { Github, BookOpen, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className='bg-muted py-16 border-t'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12'>
          {/* Brand */}
          <div className='md:col-span-2'>
            <div className='text-2xl font-bold mb-4 text-foreground'>Masst</div>
            <p className='text-muted-foreground max-w-md leading-relaxed mb-6'>
              Building the future of developer tools — one craft at a time.
              Minimal, fast, and built with taste.
            </p>

            <div className='flex gap-4'>
              <a
                href='#'
                className='w-10 h-10 bg-secondary text-secondary-foreground rounded-md flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-200 hover:scale-105 active:scale-95'
              >
                <Github className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='w-10 h-10 bg-secondary text-secondary-foreground rounded-md flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-200 hover:scale-105 active:scale-95'
              >
                <Twitter className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='w-10 h-10 bg-secondary text-secondary-foreground rounded-md flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-200 hover:scale-105 active:scale-95'
              >
                <Mail className='w-5 h-5' />
              </a>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className='font-semibold text-foreground mb-4'>Tools</h3>
            <ul className='space-y-4'>
              <li>
                <a
                  href='https://leetdaily.masst.dev/'
                  className='text-muted-foreground hover:text-foreground transition-colors duration-200'
                >
                  LeetDaily
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors duration-200'
                >
                  Masst UI
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors duration-200'
                >
                  Masst CLI
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors duration-200'
                >
                  Masst Events
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors duration-200'
                >
                  Masst Docs
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className='font-semibold text-foreground mb-4'>Resources</h3>
            <ul className='space-y-4'>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2'
                >
                  <BookOpen className='w-4 h-4' />
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2'
                >
                  <Github className='w-4 h-4' />
                  GitHub Org
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors duration-200'
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground transition-colors duration-200'
                >
                  Changelog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-muted-foreground text-sm'>
            © 2025 Masst. Crafted with care for developers everywhere.
          </p>
          <div className='flex gap-6 mt-4 md:mt-0'>
            <a
              href='#'
              className='text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm'
            >
              Privacy
            </a>
            <a
              href='#'
              className='text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm'
            >
              Terms
            </a>
            <a
              href='#'
              className='text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm'
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
