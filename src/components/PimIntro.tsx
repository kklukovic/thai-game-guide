import { CheckCircle, MessageCircle } from "lucide-react";

const PimIntro = () => {
  return (
    <div
      className="max-w-3xl mx-auto px-4 mb-12 opacity-0 animate-fade-in"
      style={{ animationDelay: "300ms" }}
    >
      <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8">
        {/* Avatar and Name */}
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center text-primary-foreground font-bold text-xl shadow-gold">
              พิม
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-card flex items-center justify-center">
              <CheckCircle className="w-3 h-3 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-foreground">Pim</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/20 text-secondary font-medium">
                Expert Reviewer
              </span>
            </div>

            {/* Thai Message */}
            <div className="relative">
              <MessageCircle className="absolute -left-2 -top-2 w-4 h-4 text-primary/50" />
              <p className="font-thai text-lg text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                สวัสดีค่ะ พิมช่วยคุณเลือกเว็บคาสิโนที่ปลอดภัยและดีที่สุด
                ตรวจสอบแล้วทุกเว็บค่ะ
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/10 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default PimIntro;
