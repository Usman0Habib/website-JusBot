import { Lock, Lightbulb, Clock } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Lock,
      title: "Anonymous Interactions",
      description: "Ensures complete privacy and confidentiality for legal matters.",
      bgClass: "from-primary/5 to-primary/10",
      iconBgClass: "bg-primary/20",
      iconClass: "text-primary"
    },
    {
      icon: Lightbulb,
      title: "AI-Driven Legal Accuracy",
      description: "Uses advanced AI to provide understanding and accurate legal guidance.",
      bgClass: "from-secondary/5 to-secondary/10",
      iconBgClass: "bg-secondary/20",
      iconClass: "text-secondary"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Always available for instant legal support whenever you need it.",
      bgClass: "from-primary/5 to-primary/10",
      iconBgClass: "bg-primary/20",
      iconClass: "text-primary"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in-up" data-testid="text-features-title">
            JusBot's legal support is unlike any other: <span className="gradient-text">It's better.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed fade-in-up" style={{ animationDelay: '0.1s' }} data-testid="text-features-description">
            Your legal matters are safeguarded by anonymous interactions and industry-leading AI to keep you safe from legal missteps and privacy concerns. Discover total peace of mind and expert legal guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-card border border-primary/20 rounded-2xl p-8 card-hover scale-in glow-effect`}
              style={{ animationDelay: `${index * 0.15}s` }}
              data-testid={`feature-${index}`}
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.iconBgClass} flex items-center justify-center mb-6`}>
                <feature.icon className={`w-10 h-10 ${feature.iconClass}`} />
              </div>
              <h3 className="text-2xl font-bold mb-3" data-testid={`feature-${index}-title`}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid={`feature-${index}-description`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground" data-testid="text-features-footer">
            Your chats will always be safe with JusBot, 
            <a href="#" className="text-primary font-semibold hover:underline ml-1">learn more.</a>
          </p>
        </div>
      </div>
    </section>
  );
}
