import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Building2, Handshake } from "lucide-react";

export default function PartnershipSection() {
  const [formData, setFormData] = useState({
    companyName: "",
    representative: "",
    phone: "",
    email: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partnership form submitted:', formData);
    
    toast({
      title: "광고 신청이 접수되었습니다!",
      description: "담당자가 빠른 시일 내에 연락드리겠습니다.",
    });

    setFormData({
      companyName: "",
      representative: "",
      phone: "",
      email: ""
    });
  };

  return (
    <section className="py-24 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Handshake className="w-4 h-4" />
              파트너십 안내
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" data-testid="text-partnership-title">
              함께 성장할
              <br />
              <span className="text-primary">광고주를 모집합니다</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>1,000+ 가정과 연결되는 효과적인 광고 채널</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>청소/살림 관련 제품 및 서비스 제휴</span>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>타겟 맞춤형 광고로 높은 전환율</span>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>다양한 광고 상품 및 제휴 모델 제공</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-card-border">
            <h3 className="text-2xl font-bold mb-6" data-testid="text-ad-form-title">광고 신청하기</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-base font-medium">기업명 *</Label>
                <Input
                  id="companyName"
                  placeholder="기업명을 입력하세요"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  required
                  className="text-base"
                  data-testid="input-company-name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="representative" className="text-base font-medium">대표자명 *</Label>
                <Input
                  id="representative"
                  placeholder="대표자명을 입력하세요"
                  value={formData.representative}
                  onChange={(e) => setFormData({...formData, representative: e.target.value})}
                  required
                  className="text-base"
                  data-testid="input-representative"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base font-medium">전화번호 *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="010-0000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="text-base"
                  data-testid="input-phone"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="partnerEmail" className="text-base font-medium">이메일 *</Label>
                <Input
                  id="partnerEmail"
                  type="email"
                  placeholder="company@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="text-base"
                  data-testid="input-partner-email"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                variant="secondary"
                className="w-full text-lg py-6 rounded-full"
                data-testid="button-submit-ad-form"
              >
                광고 신청하기
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}