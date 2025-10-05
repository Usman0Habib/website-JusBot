export default function Team() {
  const teamMembers = [
    {
      name: "Usman Habib",
      role: "Group Leader & Lead Developer",
      description: "Architected the core AI system",
      initials: "UH"
    },
    {
      name: "Maaz Ahmad",
      role: "Tester",
      description: "Ensured quality & reliability",
      initials: "MA"
    },
    {
      name: "Danyal Ahmad",
      role: "UI/UX Designer",
      description: "Crafted the user experience",
      initials: "DA"
    },
    {
      name: "Ibrahim",
      role: "Research Assistant",
      description: "Powered legal knowledge base",
      initials: "IB"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in-up gradient-text" data-testid="text-team-title">
            Meet the Team Behind JusBot
          </h2>
          <p className="text-lg text-muted-foreground fade-in-up" style={{ animationDelay: '0.1s' }} data-testid="text-team-subtitle">
            Built with passion by students from Good Samaritan School, Jasola, New Delhi, India
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-card border border-primary/20 rounded-2xl p-6 text-center card-hover scale-in glow-effect"
              style={{ animationDelay: `${index * 0.15}s` }}
              data-testid={`team-member-${index}`}
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white" data-testid={`team-member-${index}-initials`}>
                  {member.initials}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1" data-testid={`team-member-${index}-name`}>
                {member.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-2" data-testid={`team-member-${index}-role`}>
                {member.role}
              </p>
              <p className="text-xs text-muted-foreground" data-testid={`team-member-${index}-description`}>
                {member.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-card border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto fade-in-up glow-effect" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-bold mb-4 gradient-text" data-testid="text-mission-title">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-mission-paragraph-1">
              JusBot was created to make legal information accessible to everyone while contributing to UN Sustainable Development Goals. We believe that understanding your legal rights shouldn't require expensive consultations or complex legal jargon.
            </p>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-mission-paragraph-2">
              From our roots at Good Samaritan School in New Delhi, we're committed to democratizing legal knowledge through innovative AI technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
