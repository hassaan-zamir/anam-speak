export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 p-8 border-b border-primary/10 mb-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="logo-text">
          Nurse Analyst
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="nav-link">
            About Us
          </a>
          <a href="#features" className="nav-link">
            Features
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>

        <div className="md:hidden">
          <button className="text-muted-foreground hover:text-chrome transition-colors duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};