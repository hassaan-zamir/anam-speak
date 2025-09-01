import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border/50">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-background" />
              </div>
              <span className="text-2xl font-bold text-gradient">
                Hospital Analytics AI
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-muted-foreground">
            <a 
              href="#" 
              className="hover:text-primary transition-colors duration-300 font-medium"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="hover:text-primary transition-colors duration-300 font-medium"
            >
              Security
            </a>
            <a 
              href="#" 
              className="hover:text-primary transition-colors duration-300 font-medium"
            >
              Support
            </a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center text-muted-foreground">
          <p className="text-sm">
            © 2024 Hospital Analytics AI. Built with{" "}
            <span className="text-primary">Anam AI</span> •{" "}
            <span className="text-secondary">Text-to-SQL</span>
          </p>
        </div>
      </div>
    </footer>
  );
};