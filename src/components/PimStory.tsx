import { ArrowUpRight, Heart, MessageCircleMore, Send } from "lucide-react";

const TELEGRAM_URL = "https://t.me/+VvAuDpNKH4I4OTg0";

type Language = "th" | "en";

const PimStory = ({ language = "th" }: { language?: Language }) => {
  const en = language === "en";

  return (
    <section id="about-pim" className="grid gap-5 py-10 md:grid-cols-[1.05fr_.95fr] md:py-14">
      <div className="relative overflow-hidden rounded-[28px] border border-border bg-card p-6 shadow-[0_22px_58px_-34px_rgba(35,25,32,.28)] sm:p-8 md:p-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#f2b84b]/15 blur-3xl" />
        <div className="relative z-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e7d4b2] bg-[#fff7e7] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8b5c18]">
            <Heart className="h-3.5 w-3.5" />
            <span>Pim's note</span>
          </div>

          <h2 className="max-w-xl font-display text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-3xl md:text-[34px] md:leading-[1.2]">
            {en ? "I made this page to feel like sending a useful link to a friend." : "พิมทำหน้านี้ให้ดูง่าย ๆ เหมือนส่งลิงก์ให้เพื่อนค่ะ"}
          </h2>

          <p className="mt-4 max-w-xl font-thai text-[14px] leading-7 text-muted-foreground sm:text-[15px]">
            {en
              ? "Offers change often, so I try to keep only the main details I can verify here. When something changes, I update it without turning the page into a wall of promotions."
              : "โปรเปลี่ยนบ่อย พิมเลยพยายามเก็บเฉพาะข้อมูลหลักที่เช็กได้ล่าสุดไว้ตรงนี้ ถ้ามีอะไรเปลี่ยน พิมจะค่อย ๆ อัปเดต ไม่อยากให้หน้านี้ดูแน่นหรือขายของเกินไปค่ะ"}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-[#fbf7ef] p-4">
              <div className="flex items-center gap-2 text-[#2f7658]">
                <MessageCircleMore className="h-4 w-4" />
                <span className="font-display text-sm font-medium">{en ? "Easy to read first" : "อ่านง่ายก่อน"}</span>
              </div>
              <p className="mt-2 font-thai text-[12px] leading-5 text-muted-foreground">
                {en ? "No need to cram every detail into one block." : "ไม่ยัดข้อมูลทุกอย่างไว้ในที่เดียว"}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-[#fbf7ef] p-4">
              <div className="flex items-center gap-2 text-[#9b5f1a]">
                <Heart className="h-4 w-4" />
                <span className="font-display text-sm font-medium">{en ? "Updated by a real person" : "อัปเดตแบบคนจริง"}</span>
              </div>
              <p className="mt-2 font-thai text-[12px] leading-5 text-muted-foreground">
                {en ? "I update items as information changes, without clutter." : "แก้ทีละอย่างเมื่อข้อมูลเปลี่ยน ไม่ทำให้รก"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#102538] p-6 text-white shadow-[0_28px_70px_-42px_rgba(4,25,42,.75)] sm:p-8 md:p-10">
        <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#2f9edc]/20 blur-3xl" />
        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-sky-100/70">
            <Send className="h-4 w-4" />
            <span>Pim on Telegram</span>
          </div>

          <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl md:text-[34px] md:leading-[1.2]">
            {en ? "Come say hi on Telegram 💬" : "เข้ามาคุยกับพิมใน Telegram ได้ค่ะ 💬"}
          </h3>

          <p className="mt-4 max-w-xl font-thai text-[14px] leading-7 text-white/65 sm:text-[15px]">
            {en
              ? "I share short updates about what I'm checking and chat more casually there than by email."
              : "พิมลงอัปเดตสั้น ๆ เรื่องที่กำลังเช็กอยู่ และคุยกันแบบสบาย ๆ มากกว่าในอีเมลค่ะ"}
          </p>

          <div className="mt-auto pt-8">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-5 font-thai text-[14px] font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-50"
            >
              {en ? "Join Pim's Telegram" : "เข้ากลุ่ม Telegram ของพิม"}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <p className="mt-4 font-thai text-[11px] leading-5 text-white/40">
              {en ? "Opens in Telegram · Thai community" : "เปิดใน Telegram · กลุ่มภาษาไทย"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PimStory;
