import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Send, Square, Play } from "lucide-react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAvatar, setShowAvatar] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [agentActive, setAgentActive] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCircleClick = () => {
    setIsTransitioning(true);
    // Add smooth morphing animation
    const circle = document.querySelector('.ai-circle');
    if (circle) {
      circle.classList.add('circle-to-box-animation');
    }
    setTimeout(() => {
      setShowAvatar(true);
    }, 2000);
  };

  const toggleAgent = () => {
    setAgentActive(!agentActive);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  if (showAvatar) {
    return (
      <div className="h-screen flex flex-col bg-gradient-subtle overflow-hidden">
        {/* Top Nav - Stuck to top */}
        <div className="flex-shrink-0">
          <Navbar />
        </div>
        
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-white/3 to-transparent rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/2 to-transparent rounded-tr-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/3 to-transparent rounded-tr-full"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-secondary/3 to-transparent rounded-tl-full"></div>
        
        {/* Video Box - Centered in remaining space */}
        <div className="flex-1 flex items-center justify-center px-8 relative z-10">
          <div className="avatar-container relative">
            {/* Status Indicator */}
            <div className={`absolute -top-4 -right-4 z-[9999] px-4 py-2 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-full flex items-center gap-2 font-orbitron text-xs tracking-[0.05em] text-chrome ${agentActive ? 'status-active' : 'status-idle'}`}>
              <div className="status-dot"></div>
              <span>{agentActive ? 'ACTIVE' : 'IDLE'}</span>
            </div>

            {/* Video Box */}
            <div className="video-box-final absolute inset-6 bg-background rounded-2xl border border-primary/10 flex items-center justify-center opacity-0">
              <p className="font-orbitron text-muted-foreground tracking-[0.05em]">Video Interface</p>
            </div>
          </div>
        </div>

        {/* Action Bar - Stuck to bottom */}
        <div className="action-bar-slide flex-shrink-0 p-6 bg-background/95 backdrop-blur-sm border-t border-primary/20 relative z-20">
          <div className="max-w-7xl mx-auto flex items-center gap-4">
            <Button
              onClick={toggleAgent}
              variant="outline"
              size="sm"
              className="shrink-0 border-primary/30 hover:border-primary/50 hover:bg-primary/10 bg-background/80"
            >
              {agentActive ? <Square className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
            
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message to the agent..."
              className="flex-1 bg-background/80 border-primary/30 focus:border-primary/50 font-orbitron text-sm tracking-[0.02em] text-foreground placeholder:text-muted-foreground"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            
            <Button
              onClick={handleSendMessage}
              disabled={!message.trim()}
              size="sm"
              className="shrink-0 bg-primary/30 hover:bg-primary/40 border border-primary/40 text-foreground"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="h-screen flex flex-col relative overflow-hidden bg-gradient-subtle">
      <Navbar />
      
      {/* Minimalistic Background Elements */}
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary/2 to-transparent rounded-tr-full"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-secondary/2 to-transparent rounded-tl-full"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary/1 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/1 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="flex-1 flex flex-col items-center justify-center px-8 relative z-10 gap-16">
        {/* Funky Tagline */}
        <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <p className="tagline-funky text-center">
            Healthcare Analytics AI
          </p>
        </div>

        {/* Enhanced Clickable Circular Button */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-80'} ${isTransitioning ? 'pointer-events-none' : ''}`}>
          <div 
            onClick={handleCircleClick}
            className="ai-circle relative"
          >
            <div className="ai-circle-content">
              TALK
            </div>
            
            {/* Orbiting Elements */}
            <div className="orbit-element"></div>
            <div className="orbit-element-2"></div>
            
            {/* Pulse Rings */}
            <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-ping"></div>
            <div className="absolute inset-0 border border-secondary/20 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};