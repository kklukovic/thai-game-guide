import { ArrowUpRight, Heart, Send } from "lucide-react";

const TELEGRAM_URL = "https://t.me/+VvAuDpNKH4I4OTg0";

const PimStory = () => (
  <section id="about-pim" className="space-y-5 py-10 md:py-14">
    <div className="pim-editorial-card">
      <div
        className="pim-editorial-photo"
        style={{ backgroundImage: "linear-gradient(180deg, transparent 45%, rgba(28,19,28,.42)), url('/pim-beach.jpg')" }}
        role="img"
        aria-label="Pim on holiday"
      />
      <div className="p-6 sm:p-8 md:p-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-rose-700">
          <Heart className="h-3.5 w-3.5 fill-current" />
          <span>Pim's note</span>
        </div>
        <h2 className="font-display text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-3xl">
          พิมทำหน้านี้ให้ดูง่าย ๆ เหมือนส่งลิงก์ให้เพื่อนค่ะ
        </h2>
        <p className="mt-4 max-w-xl font-thai text-[14px] leading-7 text-muted-foreground sm:text-[15px]">
          โปรเปลี่ยนบ่อย พิมเลยพยายามเก็บเฉพาะข้อมูลหลักที่เช็กได้ล่าสุดไว้ตรงนี้
          ถ้ามีอะไรเปลี่ยน พิมจะค่อย ๆ อัปเดต ไม่อยากให้หน้านี้ดูแน่นหรือขายของเกินไปค่ะ
        </p>
      </div>
    </div>

    <div className="telegram-card">
      <div className="telegram-copy">
        <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-sky-100/75">
          <Send className="h-4 w-4" />
          <span>Pim on Telegram</span>
        </div>
        <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
          เข้ามาคุยกับพิมใน Telegram ได้ค่ะ 💬
        </h3>
        <p className="mt-3 max-w-xl font-thai text-[14px] leading-7 text-white/72 sm:text-[15px]">
          พิมลงรูป ชีวิตประจำวัน และอัปเดตสิ่งที่กำลังดูอยู่แบบสบาย ๆ มากกว่าในอีเมล
        </p>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-white px-5 font-thai text-[14px] font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-50"
        >
          เข้ากลุ่ม Telegram ของพิม
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <div
        className="telegram-photo"
        style={{ backgroundImage: "linear-gradient(180deg, transparent 55%, rgba(7,22,39,.26)), url('/pim-balcony.jpg')" }}
        role="img"
        aria-label="Pim relaxing on a balcony"
      />
    </div>
  </section>
);

export default PimStory;
