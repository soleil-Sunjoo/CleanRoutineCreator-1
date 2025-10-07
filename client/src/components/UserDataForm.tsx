import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const PYEONG_OPTIONS = ["10평 이하", "10-20평", "20-30평", "30-40평", "40평 이상"];
const HOUSING_TYPES = ["아파트", "빌라/연립", "오피스텔", "단독주택", "원룸"];

export default function UserDataForm() {
  const [formData, setFormData] = useState({
    pyeong: "",
    housingType: "",
    residents: "",
    concerns: "",
    email: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('User form submitted:', formData);
    
    toast({
      title: "신청이 완료되었습니다!",
      description: "입력하신 정보를 바탕으로 맞춤 청소 루틴을 준비하겠습니다.",
    });

    // Reset form
    setFormData({
      pyeong: "",
      housingType: "",
      residents: "",
      concerns: "",
      email: ""
    });
  };

  return (
    <section id="user-form" className="py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-form-title">
            맞춤 청소 루틴 신청하기
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-form-subtitle">
            간단한 정보만 입력하시면 최적의 청소 계획을 제안해드립니다
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 p-8 rounded-2xl bg-card border border-card-border">
          <div className="space-y-3">
            <Label htmlFor="pyeong" className="text-base font-medium">평형 *</Label>
            <RadioGroup 
              value={formData.pyeong} 
              onValueChange={(value) => setFormData({...formData, pyeong: value})}
              className="grid grid-cols-2 md:grid-cols-3 gap-3"
            >
              {PYEONG_OPTIONS.map((option) => (
                <div key={option}>
                  <RadioGroupItem
                    value={option}
                    id={`pyeong-${option}`}
                    className="peer sr-only"
                    data-testid={`radio-pyeong-${option}`}
                  />
                  <Label
                    htmlFor={`pyeong-${option}`}
                    className="flex items-center justify-center rounded-lg border-2 border-muted bg-card px-4 py-3 hover-elevate active-elevate-2 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-all"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label htmlFor="housingType" className="text-base font-medium">주거 형태 *</Label>
            <RadioGroup 
              value={formData.housingType} 
              onValueChange={(value) => setFormData({...formData, housingType: value})}
              className="grid grid-cols-2 md:grid-cols-3 gap-3"
            >
              {HOUSING_TYPES.map((type) => (
                <div key={type}>
                  <RadioGroupItem
                    value={type}
                    id={`type-${type}`}
                    className="peer sr-only"
                    data-testid={`radio-housing-${type}`}
                  />
                  <Label
                    htmlFor={`type-${type}`}
                    className="flex items-center justify-center rounded-lg border-2 border-muted bg-card px-4 py-3 hover-elevate active-elevate-2 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-all"
                  >
                    {type}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label htmlFor="residents" className="text-base font-medium">거주 인원 *</Label>
            <Input
              id="residents"
              type="number"
              min="1"
              placeholder="예: 3"
              value={formData.residents}
              onChange={(e) => setFormData({...formData, residents: e.target.value})}
              required
              className="text-base"
              data-testid="input-residents"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="concerns" className="text-base font-medium">주요 고민 *</Label>
            <Textarea
              id="concerns"
              placeholder="예: 퇴근 후 청소할 시간이 부족해요. 어디서부터 시작해야 할지 모르겠어요."
              value={formData.concerns}
              onChange={(e) => setFormData({...formData, concerns: e.target.value})}
              rows={4}
              required
              className="text-base resize-none"
              data-testid="input-concerns"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="email" className="text-base font-medium">이메일 주소 *</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              className="text-base"
              data-testid="input-email"
            />
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full text-lg py-6 rounded-full"
            data-testid="button-submit-user-form"
          >
            맞춤 루틴 받아보기
          </Button>
        </form>
      </div>
    </section>
  );
}