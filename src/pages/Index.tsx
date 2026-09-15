import Header from "@/components/Header";
import CasinoCard from "@/components/CasinoCard";
import Footer from "@/components/Footer";
import siam369Logo from "@/assets/siam369.png";
import roll88Logo from "@/assets/roll88.png";
import uea8Logo from "@/assets/uea8.png";
import cloudbetLogo from "@/assets/cloudbet.jfif";
import twelvebetLogo from "@/assets/12bet.png";

const casinos = [
  {
    rank: 1,
    name: "Siam369",
    tagline: "The Local Giant",
    logo: siam369Logo,
    logoBgDark: true,
    badge: "Pim's Top Pick",
    badgeType: "rank1" as const,
    bonusInfo: "100% Welcome Bonus + Lucky Bonus สูงสุด 18,888 THB",
    features: [
      "สมาชิกใหม่ 7 / 15 / 30 วัน รับเครดิตฟรีสูงสุด 18,888 บาท",
      "100% Slot Welcome Bonus",
      "คืนยอดเดิมพันรวมสูงสุด 0.5%",
      "แนะนำเพื่อนรับฟรี 300 บาท / คน",
    ],
    pimNote: "พิมชอบที่มีโบนัสต่อเนื่องหลังสมัครด้วยค่ะ ไม่ได้มีแค่โบนัสวันแรกอย่างเดียว",
    paymentMethods: ["promptpay", "bank"] as const,
    buttonText: "ทางเข้าเล่น",
    link: "https://www.siam369f4.com/th-th/register?aff=6479c962ca",
    isFeatured: true,
  },
  {
    rank: 2,
    name: "Roll88",
    tagline: "The Slot Expert",
    logo: roll88Logo,
    logoBgDark: true,
    badge: "100% First Deposit",
    badgeType: "deposit" as const,
    bonusInfo: "โบนัสฝากครั้งแรก 100% สำหรับกีฬาและสล็อต",
    features: [
      "ฝากซ้ำภายใน 7 วัน รับโบนัส 50%",
      "ฝากสล็อตประจำ รับโบนัส 10% ทุกยอดฝาก",
      "คืนยอดเดิมพันสล็อตสูงสุด 0.7% ทุกวัน",
    ],
    pimNote: "พิมชอบตรงที่มีทั้งโบนัสเริ่มต้นและโบนัสฝากซ้ำค่ะ ไม่ต้องรออีเวนต์พิเศษอย่างเดียว",
    paymentMethods: ["promptpay", "bank"] as const,
    buttonText: "ทางเข้าเล่น",
    link: "https://m.roll88b.com/en/register?cxd=35172_483733&token=35172_483733",
  },
  {
    rank: 3,
    name: "12Play",
    tagline: "The Trusted Global Brand",
    logo: twelvebetLogo,
    badge: "สูงสุด 150%",
    badgeType: "new" as const,
    bonusInfo: "โบนัสต้อนรับสมาชิกใหม่ สูงสุด 150%",
    features: [
      "10% Unlimited Reload Bonus (x12 Turnover)",
      "20% Daily Slot Reload Bonus",
      "Cash Rebate สูงสุด 1.2%",
      "Reward Wheel สูงสุด 1,888 THB",
    ],
    pimNote: "12Play มีโปรต่อเนื่องหลายแบบค่ะ ทั้ง welcome, reload และ cashback เลือกตามสไตล์ที่เล่นได้เลย",
    paymentMethods: ["promptpay", "bank"] as const,
    buttonText: "ทางเข้าเล่น",
    link: "https://www.12paffiliates.com/YNCywBRF",
  },
  {
    rank: 4,
    name: "Cloudbet",
    tagline: "The Crypto King",
    logo: cloudbetLogo,
    badge: "Crypto · 10% Rakeback",
    badgeType: "crypto" as const,
    bonusInfo: "Welcome Package สูงสุด $2,500 เป็นเงินสดจริง",
    features: [
      "10% Casino Rakeback",
      "Daily Casino Cash Drops",
      "Weekly Sports Cash Drops",
      "Welcome Package ระยะเวลา 30 วัน",
    ],
    pimNote: "ถ้าเล่นด้วยคริปโต พิมชอบแพ็กเกจนี้เพราะรางวัลทยอยเป็นเงินจริงตลอด 30 วันค่ะ",
    paymentMethods: ["crypto"] as const,
    buttonText: "ทางเข้าเล่น",
    link: "https://cldbt.cloud/go/th/landing/bitcoin-casino?af_token=f4d56a1dccb5bd912d11b848a024b00f&aftm_campaign=casino+bonus&aftm_source=newsletter&aftm_medium=email",
  },
  {
    rank: 5,
    name: "UEA8",
    tagline: "The VIP Choice · MYR",
    logo: uea8Logo,
    badge: "VIP · MYR Offers",
    badgeType: "vip" as const,
    bonusInfo: "Slot Welcome Bonus 298% สูงสุด RM2,980",
    features: [
      "100% Welcome Bonus สูงสุด MYR300",
      "20% Daily Reload Bonus",
      "Instant Rebate สูงสุด 1.2%",
      "VIP tiers พร้อมสิทธิพิเศษและผู้ดูแลส่วนตัว",
    ],
    pimNote: "โปรที่พิมเช็กตอนนี้แสดงเป็น MYR ค่ะ เหมาะกับคนที่ต้องการโปร reload และสิทธิพิเศษ VIP ต่อเนื่อง",
    paymentMethods: ["bank"] as const,
    buttonText: "ทางเข้าเล่น",
    link: "https://www.uea8sg2.com/th-th/register?affid=2594",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 pb-16">
        <Header />

        {/* Casino Cards List */}
        <section className="max-w-3xl mx-auto space-y-4 md:space-y-5">
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
