export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold" data-testid="text-footer-brand">청소 루틴 크리에이터</h3>
            <p className="text-muted-foreground">
              살림에 익숙하지 않은 분들을 위한
              <br />
              맞춤형 청소 솔루션
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">서비스</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>맞춤 청소 루틴</li>
              <li>청소 가이드</li>
              <li>제휴 제품 소개</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">문의</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>이메일: contact@cleanroutine.kr</li>
              <li>운영시간: 평일 09:00-18:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 청소 루틴 크리에이터. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}