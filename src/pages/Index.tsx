import Header from "@/components/Header";
import PimIntro from "@/components/PimIntro";
import CasinoCard from "@/components/CasinoCard";
import Footer from "@/components/Footer";

const casinos = [
  {
    rank: 1,
    name: "Siam369",
    label: "BEST FOR LOCAL",
    labelType: "local" as const,
    thaiDetail: "ฝาก-ถอนผ่าน PromptPay มั่นใจได้ 100%",
    buttonText: "ทางเข้าเล่น",
    link: "https://www.siam369.vip/th-th/register?aff=6479c962ca",
  },
  {
    rank: 2,
    name: "Roll88",
    label: "BEST FOR SLOTS",
    labelType: "slots" as const,
    thaiDetail: "รวมค่ายดัง PG Soft และสล็อตแตกง่ายที่สุด",
    buttonText: "ทางเข้าเล่น",
    link: "https://m.roll88b.com/en/register?cxd=35172_483733&token=35172_483733",
  },
  {
    rank: 3,
    name: "UEA8",
    label: "VIP CHOICE",
    labelType: "vip" as const,
    thaiDetail: "ระบบมาตรฐานสากล บริการระดับพรีเมียม",
    buttonText: "ทางเข้าเล่น",
    link: "https://www.uea8sg2.com/th-th/register?affid=2594",
  },
  {
    rank: 4,
    name: "Cloudbet",
    label: "CRYPTO CASINO",
    labelType: "crypto" as const,
    thaiDetail: "ไม่ต้องยืนยันตัวตน (No KYC) ถอนเงินได้ทันที",
    buttonText: "ทางเข้าเล่น",
    link: "https://cldbt.cloud/go/th/landing/bitcoin-casino?af_token=f4d56a1dccb5bd912d11b848a024b00f&aftm_campaign=casino+bonus&aftm_source=newsletter&aftm_medium=email",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen gradient-hero">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Header />
        <PimIntro />

        {/* Casino Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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
