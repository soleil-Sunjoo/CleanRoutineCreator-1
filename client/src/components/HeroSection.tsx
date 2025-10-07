import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  const scrollToForm = () => {
    const formSection = document.getElementById('user-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
      
      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium" data-testid="text-trust-indicator">
              <Sparkles className="w-4 h-4" />
              1,000+ 가정이 선택한 청소 솔루션
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight" data-testid="text-hero-title">
              깨끗한 집,
              <br />
              <span className="text-primary">행복한 일상</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed" data-testid="text-hero-subtitle">
              살림에 익숙하지 않아도 괜찮아요.
              <br />
              당신의 주거 환경에 딱 맞는 청소 루틴을 만들어드립니다.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 rounded-full"
                onClick={scrollToForm}
                data-testid="button-start-now"
              >
                지금 시작하기
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 rounded-full"
                onClick={() => {
                  const valueSection = document.getElementById('value-section');
                  valueSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                data-testid="button-learn-more"
              >
                더 알아보기
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
              <div className="text-center space-y-4 p-8">
                <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-primary" />
                </div>
                <p className="text-lg font-medium text-muted-foreground">청소가 쉬워집니다</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}