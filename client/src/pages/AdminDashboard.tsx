import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, Users, Building2 } from "lucide-react";

// todo: remove mock functionality - sample data for prototype
const mockUserData = [
  {
    id: 1,
    timestamp: "2024-10-07 14:30:22",
    pyeong: "20-30평",
    housingType: "아파트",
    residents: "3",
    concerns: "퇴근 후 청소할 시간이 부족해요. 주말에만 할 수 있는데 어디서부터 시작해야 할지 모르겠어요.",
    email: "user1@example.com"
  },
  {
    id: 2,
    timestamp: "2024-10-07 15:45:10",
    pyeong: "10-20평",
    housingType: "원룸",
    residents: "1",
    concerns: "혼자 살다보니 청소를 자주 안 하게 되는데 체계적으로 하고 싶어요.",
    email: "user2@example.com"
  }
];

const mockAdData = [
  {
    id: 1,
    timestamp: "2024-10-07 16:20:35",
    companyName: "클린홈",
    representative: "김철수",
    phone: "02-1234-5678",
    email: "contact@cleanhome.kr"
  }
];

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  
  useEffect(() => {
    // todo: remove mock functionality - check authentication
    const isAuthenticated = localStorage.getItem("admin-authenticated");
    if (!isAuthenticated) {
      setLocation("/admin");
    }
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.removeItem("admin-authenticated");
    setLocation("/admin");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold" data-testid="text-dashboard-title">관리자 대시보드</h1>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            data-testid="button-logout"
          >
            <LogOut className="w-4 h-4 mr-2" />
            로그아웃
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="users" data-testid="tab-users">
              <Users className="w-4 h-4 mr-2" />
              사용자 신청
            </TabsTrigger>
            <TabsTrigger value="ads" data-testid="tab-ads">
              <Building2 className="w-4 h-4 mr-2" />
              광고 신청
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle data-testid="text-user-submissions-title">사용자 주거지 데이터</CardTitle>
                <CardDescription>제출된 사용자 정보 및 고민사항</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockUserData.map((user) => (
                    <div 
                      key={user.id} 
                      className="p-6 rounded-lg border border-card-border bg-card space-y-3"
                      data-testid={`card-user-${user.id}`}
                    >
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground" data-testid={`text-user-timestamp-${user.id}`}>
                            {user.timestamp}
                          </p>
                          <p className="font-medium" data-testid={`text-user-email-${user.id}`}>
                            {user.email}
                          </p>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                            {user.pyeong}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                            {user.housingType}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium">
                            {user.residents}명
                          </span>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-border">
                        <p className="text-sm font-medium text-muted-foreground mb-1">주요 고민:</p>
                        <p className="text-foreground" data-testid={`text-user-concerns-${user.id}`}>
                          {user.concerns}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ads" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle data-testid="text-ad-submissions-title">광고 신청 데이터</CardTitle>
                <CardDescription>제출된 광고주 정보</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockAdData.map((ad) => (
                    <div 
                      key={ad.id} 
                      className="p-6 rounded-lg border border-card-border bg-card"
                      data-testid={`card-ad-${ad.id}`}
                    >
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-muted-foreground">신청 시간</p>
                            <p className="font-medium" data-testid={`text-ad-timestamp-${ad.id}`}>
                              {ad.timestamp}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">기업명</p>
                            <p className="font-medium" data-testid={`text-ad-company-${ad.id}`}>
                              {ad.companyName}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">대표자명</p>
                            <p className="font-medium" data-testid={`text-ad-representative-${ad.id}`}>
                              {ad.representative}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-muted-foreground">전화번호</p>
                            <p className="font-medium" data-testid={`text-ad-phone-${ad.id}`}>
                              {ad.phone}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">이메일</p>
                            <p className="font-medium" data-testid={`text-ad-email-${ad.id}`}>
                              {ad.email}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}