import Header from "@/components/Header";
import CasinoCard from "@/components/CasinoCard";
import Footer from "@/components/Footer";
import verajohnLogo from "@/assets/verajohn.png";
import siam369Logo from "@/assets/siam369.png";
import roll88Logo from "@/assets/roll88.png";
import uea8Logo from "@/assets/uea8.png";
import cloudbetLogo from "@/assets/cloudbet.jfif";

const casinos = [
  {
    rank: 1,
    name: "Roll88",
    tagline: "The Slot Expert",
    logo: roll88Logo,
    logoBgDark: true,
    badge: "5,000,000 THB Prize Pool!",
    badgeType: "event" as const,
    bonusInfo: "100% Slots Bonus + Daily Cash Rebates",
    features: [
      "Featured Provider: JILI (Legendary Slot Provider)",
      "Must-Try: 10 Hit Slot Games from JILI",
      "ฝากขั้นต่ำ 1 บาท",
      "ระบบถอนออโต้ 30 วินาที",
    ],
    pimNote: "ห้ามพลาดเลยค่ะ! ตอนนี้ Roll88 มีอีเวนต์พิเศษจากค่าย JILI ลุ้นรางวัลรวม 5 ล้านบาท พิมคัดมาให้แล้ว 10 เกมที่แตกง่ายที่สุด",
    paymentMethods: ["promptpay", "bank"] as const,
    buttonText: "ทางเข้าเล่น",
    link: "https://m.roll88b.com/en/register?cxd=35172_483733&token=35172_483733",
    isFeatured: true,
    isEvent: true,
    eventTitle: "JILI Jackpot Legend - ลุ้นรางวัลใหญ่ 5 ล้านบาท!",
    eventPeriod: "ตั้งแต่วันนี้ - 20 มีนาคม 2026",
  },
  {
    rank: 2,
    name: "UEA8",
    tagline: "The VIP Choice",
    logo: uea8Logo,
    badge: "VIP Special Bonus",
    badgeType: "vip" as const,
    bonusInfo: "VIP Transfer Bonus สูงสุด 30,000 THB+",
    features: [
      "ย้ายค่ายรับสถานะ VIP ทันที",
      "มี Account Manager ส่วนตัว",
      "ลิมิตการถอนสูงมาก",
    ],
    pimNote: "พิมชอบโปร VIP Transfer มากค่ะ แค่โชว์สถานะจากเว็บอื่น ก็รับสิทธิพิเศษระดับพรีเมียมได้เลย",
    paymentMethods: ["promptpay", "bank"] as const,
    buttonText: "ทางเข้าเล่น",
    link: "https://www.uea8sg2.com/th-th/register?affid=2594",
  },
  {
    rank: 3,
    name: "Vera&John",
    tagline: "สุดยอดการค้นพบแห่งปีโดยพิม",
    logo: verajohnLogo,
    badge: "มาใหม่ 2025",
    badgeType: "new" as const,
    bonusInfo: "โบนัสต้อนรับ 100% สูงสุด ฿5,250 + 88 ฟรีสปิน",
    features: [
      "88 ฟรีสปินในเกม 'Sugar Rush 1000'",
      "ฝากขั้นต่ำเพียง 175 บาท",
      "รองรับ PromptPay และ QR Payment ทุกธนาคาร",
      "มีเกมให้เลือกมากกว่า 4,500+ เกม (รวมถึง PG Soft)",
    ],
    pimNote: "แบรนด์ระดับโลกมาถึงไทยแล้วค่ะ! พิมชอบที่โบนัสต้อนรับให้เยอะมาก แถมมีฟรีสปิน Sugar Rush 1000 ให้ด้วย คุ้มสุดๆ",
    paymentMethods: ["promptpay", "bank"] as const,
    buttonText: "ทางเข้าเล่น",
    link: "https://tinyurl.com/infiaff?bid=114&lid=227&aid=SRS3RAmgr&cid=7607",
  },
  {
    rank: 4,
    name: "Siam369",
    tagline: "The Local Giant",
    logo: siam369Logo,
    logoBgDark: true,
    badge: "อันดับ 1 ในไทย",
    badgeType: "rank1" as const,
    bonusInfo: "100% Welcome Bonus สูงสุด 3,000 THB",
    features: [
      "รองรับ PromptPay ทุกธนาคาร",
      "ถอนเงินไม่จำกัดต่อวัน",
      "เน้นสล็อต PG Soft",
    ],
    pimNote: "พิมคอนเฟิร์มค่ะ ฝากง่ายผ่าน PromptPay และถอนไวที่สุดในตอนนี้",
    paymentMethods: ["promptpay", "bank"] as const,
    buttonText: "ทางเข้าเล่น",
    link: "https://www.siam369.vip/th-th/register?aff=6479c962ca",
  },
  {
    rank: 5,
    name: "Cloudbet",
    tagline: "The Crypto King",
    logo: cloudbetLogo,
    badge: "No KYC - 0x Wagering",
    badgeType: "crypto" as const,
    bonusInfo: "Welcome Package $2,500 (Real Cash) + 10% Rakeback",
    features: [
      "ถอนเงินเป็นคริปโตทันที",
      "ไม่ต้องส่งเอกสารยืนยันตัวตน",
      "ถอนเงินได้จริงไม่มีเงื่อนไขซับซ้อน",
    ],
    pimNote: "สำหรับสายคริปโต ต้องที่นี่เท่านั้นค่ะ ความเป็นส่วนตัวสูงและถอนเงินไวมาก",
    paymentMethods: ["crypto"] as const,
    buttonText: "ทางเข้าเล่น",
    link: "https://cldbt.cloud/go/th/landing/bitcoin-casino?af_token=f4d56a1dccb5bd912d11b848a024b00f&aftm_campaign=casino+bonus&aftm_source=newsletter&aftm_medium=email",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-6 pb-24">
        <Header />

        {/* Casino Cards List */}
        <section className="space-y-6">
          {casinos.map((casino) => (
            <CasinoCard key={casino.name} {...casino} />
          ))}
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
