import { CheckCircle2, ListChecks, RefreshCw, Send, Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header id="top" className="relative overflow-hidden pt-6 md:pt-8">
      <div className="hero-shell">
        <div className="hero-copy-block">
          <div className="hero-kicker">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Editor's Pick · 2026</span>
          </div>

          <h1 className="mt-5 max-w-3xl font-display text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] text-foreground sm:text-[42px] md:text-[54px] lg:text-[62px]">
            5 คาสิโนออนไลน์ที่เชื่อถือได้มากที่สุดในไทย 2026
          </h1>

          <p className="mt-5 max-w-2xl font-thai text-[15px] leading-7 text-muted-foreground md:text-[17px] md:leading-8">
            เจาะลึกเว็บตรง ไม่ผ่านเอเย่นต์ มั่นใจ 100% ตรวจสอบโดยพิม
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <div className="hero-trust-pill">
              <CheckCircle2 className="h-4 w-4" />
              <span className="font-thai">ตรวจสอบและยืนยันโดยพิมแล้ว</span>
            </div>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 border-t border-border/70 pt-6">
            <div>
              <div className="font-display text-xl font-semibold text-foreground">5</div>
              <div className="mt-1 font-thai text-[11px] leading-5 text-muted-foreground">รายการหลัก</div>
            </div>
            <div>
              <div className="font-display text-xl font-semibold text-foreground">TH</div>
              <div className="mt-1 font-thai text-[11px] leading-5 text-muted-foreground">ข้อมูลภาษาไทย</div>
            </div>
            <div>
              <div className="font-display text-xl font-semibold text-foreground">2026</div>
              <div className="mt-1 font-thai text-[11px] leading-5 text-muted-foreground">อัปเดตล่าสุด</div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden bg-[#352131] p-6 text-white sm:p-8 md:p-10">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#f2b84b]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#3d9b72]/20 blur-3xl" />

          <div className="relative z-10 flex h-full flex-col">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f4cf82]">Pim's quick guide</p>
                <h2 className="mt-2 font-display text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                  ทุกอย่างที่สำคัญ อยู่ในหน้าเดียว
                </h2>
              </div>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 font-display text-lg font-semibold">
                P
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f2b84b]/15 text-[#f6ce7a]">
                  <RefreshCw className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-display text-base font-medium">อัปเดตโปรล่าสุด</p>
                  <p className="mt-1 font-thai text-[12px] leading-5 text-white/60">สรุปเฉพาะข้อมูลหลักให้อ่านง่าย ไม่ต้องไล่เปิดหลายหน้า</p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#65c59d]/15 text-[#8de0bd]">
                  <ListChecks className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-display text-base font-medium">5 รายการแบบชัด ๆ</p>
                  <p className="mt-1 font-thai text-[12px] leading-5 text-white/60">เรียงรายละเอียด โบนัส และจุดเด่นไว้ในรูปแบบเดียวกัน</p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#55ace0]/15 text-[#7bc8f5]">
                  <Send className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-display text-base font-medium">Telegram ของพิม</p>
                  <p className="mt-1 font-thai text-[12px] leading-5 text-white/60">สำหรับอัปเดตสั้น ๆ และพูดคุยกันแบบสบาย ๆ</p>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-6">
              <a
                href="#picks"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-5 py-3 font-thai text-[13px] font-semibold text-[#2d1d2a] transition hover:-translate-y-0.5 hover:bg-[#fff8e9]"
              >
                ดูรายการทั้งหมด
                <span aria-hidden>↓</span>
              </a>
              <p className="mt-4 font-thai text-[11px] text-white/45">อัปเดตหน้า: กันยายน 2026</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
