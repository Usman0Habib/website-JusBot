import { MessageSquare, Clock, ThumbsUp, BookOpen } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: MessageSquare,
      title: "1000+ Legal Queries",
      description: "AI-driven legal guidance provided",
      testId: "stat-legal-queries"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Legal support anytime you need it",
      testId: "stat-availability"
    },
    {
      icon: ThumbsUp,
      title: "95% User Satisfaction",
      description: "Positive feedback from our users",
      testId: "stat-satisfaction"
    },
    {
      icon: BookOpen,
      title: "20+ Legal Topics",
      description: "Wide range of legal areas covered",
      testId: "stat-topics"
    }
  ];

  return (
    <section className="py-16 px-4 bg-background relative -mt-20">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stats-card rounded-2xl p-6 card-hover"
              data-testid={stat.testId}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2" data-testid={`${stat.testId}-title`}>
                {stat.title}
              </h3>
              <p className="text-muted-foreground" data-testid={`${stat.testId}-description`}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
