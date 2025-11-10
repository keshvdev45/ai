import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-cyber rounded-lg animate-pulse-glow"></div>
            <span className="relative text-white font-bold text-lg">⚡</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-foreground">CyberNova</span>
            <span className="text-xs text-muted-foreground">Ethical Hacking Assistant</span>
          </div>
        </Link>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-foreground hover:text-primary transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/tools"
            className="text-foreground hover:text-primary transition-colors duration-200"
          >
            Tools
          </Link>
          <Link
            to="/docs"
            className="text-foreground hover:text-primary transition-colors duration-200"
          >
            Documentation
          </Link>
          <Link
            to="/about"
            className="text-foreground hover:text-primary transition-colors duration-200"
          >
            About
          </Link>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <button className="hidden md:inline button-gradient">
            Start Session
          </button>
          <button className="md:hidden text-foreground hover:text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
