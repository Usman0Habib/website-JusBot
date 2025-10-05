export default function Partners() {
  const partners = [
    "Justice AI",
    "Legal Innovation Hub",
    "Law Tech Partners",
    "Digital Law Alliance", 
    "Legal Access Foundation"
  ];

  return (
    <section className="py-20 px-4 bg-muted">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-partners-title">
          Our allies in justice
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="text-partners-description">
          Trusted by leading organizations committed to legal innovation
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 card-hover h-24 flex items-center justify-center"
              data-testid={`partner-${index}`}
            >
              <div className="text-muted-foreground font-semibold text-center">
                {partner}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
