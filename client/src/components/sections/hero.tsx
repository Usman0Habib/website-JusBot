import { Star, MessageSquare } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden animated-gradient">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 fade-in-up">
            <Star className="w-5 h-5 text-secondary fill-current" />
            <span className="text-white font-semibold text-sm tracking-wide" data-testid="text-hero-badge">
              🚀 #1 LEGAL AI CHATBOT
            </span>
          </div>
          
          <h1 
            className="hero-title text-5xl md:text-7xl font-black text-white mb-6 leading-tight fade-in-up"
            style={{ animationDelay: "0.1s" }}
            data-testid="text-hero-title"
          >
            Share Your Legal Concerns,<br/>JusBot Will Guide You
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-white/90 mb-10 fade-in-up" 
            style={{ animationDelay: "0.2s" }}
            data-testid="text-hero-subtitle"
          >
            AI-powered legal guidance for your peace of mind
          </p>
          
          <button 
            className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl fade-in-up"
            style={{ animationDelay: "0.3s" }}
            data-testid="button-get-started-hero"
          >
            Get Started
          </button>
          
          {/* Hero Illustration */}
          <div className="mt-16 fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="relative max-w-3xl mx-auto">
              {/* Phone mockup */}
              <div className="relative mx-auto w-80 h-96 bg-card/80 border border-primary/30 rounded-3xl shadow-2xl p-4 float-animation pulse-glow">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <MessageSquare className="w-32 h-32 text-primary/60" />
                </div>
              </div>
              
              {/* Floating legal icons */}
              <div className="absolute top-10 -left-10 w-20 h-20 bg-card border border-primary/30 rounded-2xl shadow-xl p-4 float-animation glow-effect" style={{ animationDelay: "0.5s" }}>
                <svg className="w-full h-full text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                </svg>
              </div>
              
              <div className="absolute top-20 -right-10 w-24 h-24 bg-card border border-secondary/30 rounded-2xl shadow-xl p-5 float-animation glow-effect" style={{ animationDelay: "1s" }}>
                <svg className="w-full h-full text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
