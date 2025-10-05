import { BookOpen, MessageSquare, HelpCircle } from "lucide-react";

export default function Help() {
  const helpSections = [
    {
      icon: BookOpen,
      title: "Blog",
      description: "Stay up to date with the latest stories and commentary on legal matters.",
      buttonText: "Visit our blogs →",
      bgClass: "from-primary/5 to-primary/10",
      iconBgClass: "bg-primary/20",
      iconClass: "text-primary",
      testId: "help-blog"
    },
    {
      icon: MessageSquare,
      title: "24/7 Chat Support",
      description: "Get our friendly AI legal agents at your service.",
      buttonText: "Chat now →",
      bgClass: "from-secondary/5 to-secondary/10",
      iconBgClass: "bg-secondary/20",
      iconClass: "text-secondary",
      testId: "help-chat"
    },
    {
      icon: HelpCircle,
      title: "FAQs",
      description: "View FAQs for detailed instructions on specific features.",
      buttonText: "Learn more about us →",
      bgClass: "from-primary/5 to-primary/10",
      iconBgClass: "bg-primary/20",
      iconClass: "text-primary",
      testId: "help-faq"
    }
  ];

  return (
    <section id="help" className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in-up gradient-text" data-testid="text-help-title">
            Need help?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed fade-in-up" style={{ animationDelay: '0.1s' }} data-testid="text-help-description-1">
            Discover intelligent legal AI support, legal guidance tips, justice insights, and thousands of helpful interactions! JusBot offers seamless and secure connections for your legal support needs.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4 fade-in-up" style={{ animationDelay: '0.2s' }} data-testid="text-help-description-2">
            We've integrated advanced AI to facilitate your simple and secure connection to legal guidance quickly and instantaneously.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {helpSections.map((section, index) => (
            <div 
              key={index}
              className={`bg-card border border-primary/20 rounded-2xl p-8 text-center card-hover scale-in glow-effect`}
              style={{ animationDelay: `${index * 0.15}s` }}
              data-testid={section.testId}
            >
              <div className={`w-20 h-20 rounded-2xl ${section.iconBgClass} flex items-center justify-center mx-auto mb-6`}>
                <section.icon className={`w-12 h-12 ${section.iconClass}`} />
              </div>
              <h3 className="text-2xl font-bold mb-3" data-testid={`${section.testId}-title`}>
                {section.title}
              </h3>
              <p className="text-muted-foreground mb-6" data-testid={`${section.testId}-description`}>
                {section.description}
              </p>
              <button 
                className={`${section.iconClass} font-semibold hover:underline`}
                data-testid={`button-${section.testId}`}
              >
                {section.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
