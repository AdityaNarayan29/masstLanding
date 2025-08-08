import { Github, Menu, X, Moon, Sun } from "lucide-react";

interface NavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Navigation({
  mobileMenuOpen,
  setMobileMenuOpen,
  darkMode,
  setDarkMode,
}: NavigationProps) {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b transition-all duration-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <div className='text-xl font-semibold text-foreground'>Masst</div>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <a
              href='#home'
              className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200'
            >
              Home
            </a>
            <a
              href='#tools'
              className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200'
            >
              Tools
            </a>
            <a
              href='docs.masst.dev'
              className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200'
            >
              Docs
            </a>
            <a
              href='https://github.com/AdityaNarayan29/'
              className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2'
            >
              <Github className='w-4 h-4' />
              GitHub
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className='p-2 rounded-md bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-105 active:scale-95'
              aria-label='Toggle dark mode'
            >
              {darkMode ? (
                <Sun className='w-4 h-4' />
              ) : (
                <Moon className='w-4 h-4' />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200'
            >
              {mobileMenuOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className='md:hidden bg-background border-t animate-slide-up'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            <a
              href='#home'
              className='block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors duration-200'
            >
              Home
            </a>
            <a
              href='#tools'
              className='block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors duration-200'
            >
              Tools
            </a>
            <a
              href='docs.masst.dev'
              className='block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors duration-200'
            >
              Docs
            </a>
            <a
              href='https://github.com/AdityaNarayan29/'
              className='flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors duration-200'
            >
              <Github className='w-4 h-4' />
              GitHub
            </a>

            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className='flex items-center gap-2 w-full px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors duration-200'
            >
              {darkMode ? (
                <Sun className='w-4 h-4' />
              ) : (
                <Moon className='w-4 h-4' />
              )}
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
