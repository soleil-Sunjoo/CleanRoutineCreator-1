import { CheckCircle2, Clock, Target } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "맞춤형 청소 계획",
    description: "평형, 가족 구성원, 라이프스타일에 맞는 개인화된 청소 루틴을 제공합니다."
  },
  {
    icon: Clock,
    title: "시간 절약",
    description: "체계적인 청소 계획으로 불필요한 시간 낭비를 줄이고 효율적으로 관리하세요."
  },
  {
    icon: CheckCircle2,
    title: "쉬운 실천",
    description: "초보자도 따라하기 쉬운 단계별 가이드로 청소가 부담스럽지 않습니다."
  }
];

export default function ValuePropositionSection() {
  return (
    <section id="value-section" className="py-24 px-4 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-value-title">
            왜 청소 루틴 크리에이터일까요?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-value-subtitle">
            청소에 익숙하지 않은 분들도 쉽게 시작할 수 있도록 도와드립니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-card border border-card-border hover-elevate transition-all"
              data-testid={`card-feature-${index}`}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4" data-testid={`text-feature-title-${index}`}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid={`text-feature-description-${index}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}