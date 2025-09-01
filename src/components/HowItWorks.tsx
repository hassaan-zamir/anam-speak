import { useState, useEffect, useRef } from "react";
import { MessageSquare, Database, Sparkles } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Ask",
    description: "Speak naturally to the AI avatar about your hospital data needs",
    color: "text-primary",
    glow: "shadow-neon"
  },
  {
    icon: Database,
    title: "Generate SQL",
    description: "Safe SQL queries are generated with built-in guardrails and validation",
    color: "text-secondary",
    glow: "shadow-purple"
  },
  {
    icon: Sparkles,
    title: "Answer",
    description: "Get instant insights with visual summaries and actionable recommendations",
    color: "text-primary-glow",
    glow: "shadow-glow"
  }
];

export const HowItWorks = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-secondary/20 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to unlock the power of conversational analytics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                className={`card-hover animated-border bg-card p-8 rounded-2xl transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6 text-background font-bold text-xl">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent mb-6 ${step.glow}`}>
                    <Icon className={`w-10 h-10 ${step.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-gradient">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection Line (for desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-px bg-gradient-to-r from-primary to-transparent"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};