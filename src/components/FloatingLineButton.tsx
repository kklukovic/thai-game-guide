import { MessageCircle } from "lucide-react";

const FloatingLineButton = () => {
  return (
    <a
      href="https://line.me/ti/p/-4d6EsUyUU"
      target="_blank"
      rel="noopener noreferrer"
      className="line-button font-thai"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">คุยกับพิมทาง LINE</span>
      <span className="sm:hidden">LINE</span>
    </a>
  );
};

export default FloatingLineButton;
