import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Legal Start",
      price: "Free",
      period: "/month",
      features: [
        "One AI-powered legal consultation per day",
        "Access to core JusBot AI features",
        "Daily legal insights"
      ],
      buttonText: "Get Started",
      buttonClass: "bg-primary/10 text-primary hover:bg-primary/20",
      isPopular: false,
      cardClass: "bg-white",
      textClass: "text-foreground"
    },
    {
      name: "Justice Plus",
      price: "$9.99",
      period: "/month",
      features: [
        "10+ AI-powered legal consultations per day",
        "Extended JusBot AI features",
        "Legal case tracking",
        "Progress monitoring"
      ],
      buttonText: "Get Started",
      buttonClass: "bg-white text-primary hover:bg-white/90",
      isPopular: true,
      cardClass: "bg-gradient-to-br from-primary to-primary/80 transform md:scale-105 shadow-2xl",
      textClass: "text-white"
    },
    {
      name: "Legal Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Customized consultation allowances",
        "Dedicated support",
        "Platform integration options",
        "Anonymized team legal insights"
      ],
      buttonText: "Contact Us",
      buttonClass: "bg-primary/10 text-primary hover:bg-primary/20",
      isPopular: false,
      cardClass: "bg-white",
      textClass: "text-foreground"
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-pricing-title">
            Choose Your Path to Legal Clarity
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-pricing-description">
            Select the plan that best fits your needs and start your journey to better legal understanding today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`${plan.cardClass} rounded-2xl p-8 card-hover relative`}
              data-testid={`pricing-plan-${index}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-white px-6 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className={`text-2xl font-bold mb-2 ${plan.textClass}`} data-testid={`pricing-plan-${index}-name`}>
                {plan.name}
              </h3>
              
              <div className="mb-6">
                <span className={`text-5xl font-black ${plan.textClass}`} data-testid={`pricing-plan-${index}-price`}>
                  {plan.price}
                </span>
                <span className={`${plan.textClass}/80`}>
                  {plan.period}
                </span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className={`w-6 h-6 ${plan.isPopular ? 'text-white' : 'text-primary'} flex-shrink-0`} />
                    <span className={`${plan.isPopular ? 'text-white/90' : 'text-foreground/80'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${plan.buttonClass}`}
                data-testid={`button-pricing-plan-${index}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
