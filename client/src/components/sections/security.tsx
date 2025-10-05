import { Shield, Check } from "lucide-react";

export default function Security() {
  const features = [
    {
      title: "Anonymous and secure conversations",
      description: "Complete privacy protection for all legal discussions"
    },
    {
      title: "AI-driven accurate legal guidance",
      description: "Advanced AI technology for precise legal information"
    },
    {
      title: "Available 24/7 for instant support",
      description: "Round-the-clock access to legal guidance whenever needed"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Legal security illustration */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl flex items-center justify-center">
                <Shield className="w-64 h-64 text-primary/20" />
              </div>
              {/* Floating badge */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 float-animation">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-sm" data-testid="text-security-badge">
                    Secure & Private
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-security-title">
              Data Security with JusBot
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-security-description">
              The most comprehensive legal AI support platform like never before. JusBot provides unparalleled legal guidance. It's better. No more complex legal processes or expensive consultations. Your legal privacy is safeguarded with private and anonymous interactions and industry-leading AI accuracy to keep your information secure.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1" data-testid={`text-security-feature-${index}-title`}>
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground" data-testid={`text-security-feature-${index}-description`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
