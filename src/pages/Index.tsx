import Header from "@/components/Header";
import CasinoCard from "@/components/CasinoCard";
import Footer from "@/components/Footer";
import TopNav from "@/components/TopNav";
import OfferCarousel, { type FeaturedOffer } from "@/components/OfferCarousel";
import PimStory from "@/components/PimStory";
import MobileDock from "@/components/MobileDock";
import siam369Logo from "@/assets/siam369.png";
import roll88Logo from "@/assets/roll88.png";
import uea8Logo from "@/assets/uea8.png";
import cloudbetLogo from "@/assets/cloudbet.jfif";
import twelvebetLogo from "@/assets/12bet.png";

type Language = "th" | "en";

const casinoLinks = {
  siam369: "https://www.siam369f4.com/th-th/register?aff=6479c962ca",
  roll88: "https://m.roll88b.com/en/register?cxd=35172_483733&token=35172_483733",
  twelvePlay: "https://www.12paffiliates.com/YNCywBRF",
  cloudbet: "https://cldbt.cloud/go/th/landing/bitcoin-casino?af_token=f4d56a1dccb5bd912d11b848a024b00f&aftm_campaign=casino+bonus&aftm_source=newsletter&aftm_medium=email",
  uea8: "https://www.uea8sg2.com/th-th/register?affid=2594",
};

const buildCasinos = (language: Language) => {
  const en = language === "en";

  return [
    {
      rank: 1,
      name: "Siam369",
      tagline: "The Local Giant",
      logo: siam369Logo,
      logoBgDark: true,
      badge: "Pim's Top Pick",
      badgeType: "rank1" as const,
      bonusInfo: en ? "100% Welcome Bonus + Lucky Bonus up to THB 18,888" : "100% Welcome Bonus + Lucky Bonus สูงสุด 18,888 THB",
      features: en
        ? [
            "New members: 7 / 15 / 30-day free credit up to THB 18,888",
            "100% Slot Welcome Bonus",
            "Total rebate up to 0.5%",
            "Refer a friend and get THB 300 per person",
          ]
        : [
            "สมาชิกใหม่ 7 / 15 / 30 วัน รับเครดิตฟรีสูงสุด 18,888 บาท",
            "100% Slot Welcome Bonus",
            "คืนยอดเดิมพันรวมสูงสุด 0.5%",
            "แนะนำเพื่อนรับฟรี 300 บาท / คน",
          ],
      pimNote: en
        ? "I like that there are follow-up bonuses after signup too, rather than only a first-day offer."
        : "พิมชอบที่มีโบนัสต่อเนื่องหลังสมัครด้วยค่ะ ไม่ได้มีแค่โบนัสวันแรกอย่างเดียว",
      paymentMethods: ["promptpay", "bank"] as const,
      buttonText: en ? "Visit site" : "ทางเข้าเล่น",
      link: casinoLinks.siam369,
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
      bonusInfo: en ? "100% first deposit bonus for sports and slots" : "โบนัสฝากครั้งแรก 100% สำหรับกีฬาและสล็อต",
      features: en
        ? [
            "50% redeposit bonus within 7 days",
            "10% bonus on qualifying slot deposits",
            "Daily slot rebate up to 0.7%",
          ]
        : [
            "ฝากซ้ำภายใน 7 วัน รับโบนัส 50%",
            "ฝากสล็อตประจำ รับโบนัส 10% ทุกยอดฝาก",
            "คืนยอดเดิมพันสล็อตสูงสุด 0.7% ทุกวัน",
          ],
      pimNote: en
        ? "I like that there is both a starting offer and follow-up deposit bonuses, not only occasional events."
        : "พิมชอบตรงที่มีทั้งโบนัสเริ่มต้นและโบนัสฝากซ้ำค่ะ ไม่ต้องรออีเวนต์พิเศษอย่างเดียว",
      paymentMethods: ["promptpay", "bank"] as const,
      buttonText: en ? "Visit site" : "ทางเข้าเล่น",
      link: casinoLinks.roll88,
    },
    {
      rank: 3,
      name: "12Play",
      tagline: "The Trusted Global Brand",
      logo: twelvebetLogo,
      badge: en ? "Up to 150%" : "สูงสุด 150%",
      badgeType: "new" as const,
      bonusInfo: en ? "New member welcome bonus up to 150%" : "โบนัสต้อนรับสมาชิกใหม่ สูงสุด 150%",
      features: en
        ? [
            "10% Unlimited Reload Bonus (x12 turnover)",
            "20% Daily Slot Reload Bonus",
            "Cash rebate up to 1.2%",
            "Reward Wheel up to THB 1,888",
          ]
        : [
            "10% Unlimited Reload Bonus (x12 Turnover)",
            "20% Daily Slot Reload Bonus",
            "Cash Rebate สูงสุด 1.2%",
            "Reward Wheel สูงสุด 1,888 THB",
          ],
      pimNote: en
        ? "12Play has several ongoing promo types, including welcome, reload and cashback options."
        : "12Play มีโปรต่อเนื่องหลายแบบค่ะ ทั้ง welcome, reload และ cashback เลือกตามสไตล์ที่เล่นได้เลย",
      paymentMethods: ["promptpay", "bank"] as const,
      buttonText: en ? "Visit site" : "ทางเข้าเล่น",
      link: casinoLinks.twelvePlay,
    },
    {
      rank: 4,
      name: "Cloudbet",
      tagline: "The Crypto King",
      logo: cloudbetLogo,
      badge: "Crypto · 10% Rakeback",
      badgeType: "crypto" as const,
      bonusInfo: en ? "Welcome Package up to $2,500 in real cash rewards" : "Welcome Package สูงสุด $2,500 เป็นเงินสดจริง",
      features: [
        "10% Casino Rakeback",
        "Daily Casino Cash Drops",
        "Weekly Sports Cash Drops",
        en ? "30-day Welcome Package period" : "Welcome Package ระยะเวลา 30 วัน",
      ],
      pimNote: en
        ? "For crypto players, I like that the package spreads cash rewards across the first 30 days."
        : "ถ้าเล่นด้วยคริปโต พิมชอบแพ็กเกจนี้เพราะรางวัลทยอยเป็นเงินจริงตลอด 30 วันค่ะ",
      paymentMethods: ["crypto"] as const,
      buttonText: en ? "Visit site" : "ทางเข้าเล่น",
      link: casinoLinks.cloudbet,
    },
    {
      rank: 5,
      name: "UEA8",
      tagline: en ? "A VIP-focused option" : "ตัวเลือกสำหรับสาย VIP",
      logo: uea8Logo,
      badge: en ? "New member bonus" : "โบนัสสมาชิกใหม่",
      badgeType: "vip" as const,
      bonusInfo: en ? "298% Slot Welcome Bonus up to THB 5,980" : "โบนัสต้อนรับสล็อต 298% สูงสุด 5,980 บาท",
      features: en
        ? [
            "120% Welcome Bonus up to THB 6,000",
            "20% Daily Deposit Bonus",
            "Daily slot rebate up to 1.2%",
            "VIP Upgrade Bonus up to THB 68,888",
          ]
        : [
            "โบนัสต้อนรับ 120% สูงสุด 6,000 บาท",
            "โบนัสฝากรายวัน 20%",
            "คืนยอดเดิมพันสล็อตสูงสุด 1.2% ทุกวัน",
            "โบนัสอัปเกรด VIP สูงสุด 68,888 บาท",
          ],
      pimNote: en
        ? "For regular players, I like the combination of daily deposit bonuses, rebate and VIP benefits."
        : "ถ้าเล่นต่อเนื่อง พิมชอบที่ UEA8 มีทั้งโบนัสฝากรายวัน คืนยอดเดิมพัน และสิทธิพิเศษ VIP ค่ะ",
      paymentMethods: ["bank"] as const,
      buttonText: en ? "Visit site" : "ทางเข้าเล่น",
      link: casinoLinks.uea8,
    },
  ];
};

const buildFeaturedOffers = (language: Language): FeaturedOffer[] => {
  const en = language === "en";

  return [
    {
      eyebrow: "Siam369",
      title: en ? "100% Welcome Bonus + Lucky Bonus up to THB 18,888" : "100% Welcome Bonus + Lucky Bonus สูงสุด 18,888 THB",
      description: en
        ? "A quick summary of the current main offer, with the key details listed below."
        : "ข้อมูลสรุปล่าสุดจากหน้ารายการของพิม พร้อมรายละเอียดหลักด้านล่าง",
      accent: "#F2B84B",
    },
    {
      eyebrow: "Roll88",
      title: en ? "100% first deposit bonus for sports and slots" : "โบนัสฝากครั้งแรก 100% สำหรับกีฬาและสล็อต",
      description: en
        ? "Use the carousel for the highlights, then scroll down for the full comparison card."
        : "สลับดูข้อมูลสำคัญได้จากด้านบน แล้วเลื่อนลงเพื่อดูรายละเอียดทั้งหมดในบัตรเดียว",
      accent: "#5FD2A4",
    },
    {
      eyebrow: "12Play",
      title: en ? "New member welcome bonus up to 150%" : "โบนัสต้อนรับสมาชิกใหม่ สูงสุด 150%",
      description: en
        ? "Another option collected here so the main details are easy to compare in one place."
        : "อีกหนึ่งรายการที่พิมรวมไว้ในหน้าเดียวเพื่อให้เปรียบเทียบข้อมูลได้ง่ายขึ้น",
      accent: "#EF8A6F",
    },
  ];
};

interface IndexProps {
  language?: Language;
}

const Index = ({ language = "th" }: IndexProps) => {
  const en = language === "en";
  const casinos = buildCasinos(language);
  const featuredOffers = buildFeaturedOffers(language);

  return (
    <div className="min-h-screen bg-background pb-20 sm:pb-0">
      <TopNav language={language} />

      <main>
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
          <Header language={language} />

          <div className="mt-6 md:mt-8">
            <OfferCarousel offers={featuredOffers} language={language} />
          </div>

          <section id="picks" className="pt-12 md:pt-16">
            <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="section-kicker">Pim's current list</p>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
                  {en ? "Pim's current shortlist" : "รายการที่พิมรวบรวมไว้"}
                </h2>
              </div>
              <p className="max-w-md font-thai text-[13px] leading-6 text-muted-foreground sm:text-right">
                {en
                  ? "Promotions can change. Always check the latest terms with the operator before using an offer."
                  : "รายละเอียดโปรอาจเปลี่ยนได้ ควรตรวจสอบเงื่อนไขล่าสุดกับผู้ให้บริการอีกครั้ง"}
              </p>
            </div>

            <div className="space-y-5 md:space-y-6">
              {casinos.map((casino) => (
                <CasinoCard key={casino.name} {...casino} language={language} />
              ))}
            </div>
          </section>

          <PimStory language={language} />
          <Footer language={language} />
        </div>
      </main>

      <MobileDock language={language} />
    </div>
  );
};

export default Index;
