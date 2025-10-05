import { AlertTriangle } from "lucide-react";

export default function Disclaimer() {
  return (
    <section className="py-16 px-4 bg-muted border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card/50 border-l-4 border-secondary rounded-lg p-6 fade-in-up">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-lg mb-2" data-testid="text-disclaimer-title">
                Important Legal Notice
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2" data-testid="text-disclaimer-paragraph-1">
                <strong>JusBot provides legal information, NOT legal advice.</strong> The guidance offered by our AI assistant is for educational and informational purposes only and should not be considered professional legal counsel.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2" data-testid="text-disclaimer-paragraph-2">
                Our service cannot replace professional legal representation. For specific legal matters, please consult with a qualified attorney licensed to practice in your jurisdiction.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-disclaimer-paragraph-3">
                JusBot is designed to help you understand your legal rights and navigate legal information, but users should always seek human legal professionals for actual legal advice tailored to their specific situations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
