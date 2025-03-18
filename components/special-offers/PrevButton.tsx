import { ChevronLeft } from "lucide-react";
import { SwiperButtonProps } from "./NextButton";

const PrevButton = ({ swiperRef }: SwiperButtonProps) => {
  return (
    <button
    onClick={() => swiperRef.current?.slidePrev()}
    className="cursor-pointer group"
  >
   <ChevronLeft className="size-11 text-primary-600 stroke-1 group-hover:translate-x-1 transition-transform duration-150" />
  </button>
  );
};

export default PrevButton;
