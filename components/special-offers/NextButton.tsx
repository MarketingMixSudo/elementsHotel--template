import SwiperInstance from "swiper";
import {ChevronRight} from "lucide-react";

export interface SwiperButtonProps {
  swiperRef: React.RefObject<SwiperInstance | null>; // Define the type for swiperRef
}

const NextButton = ({ swiperRef }: SwiperButtonProps) => {
  return (
    <button
      onClick={() => swiperRef.current?.slideNext()}
      className="cursor-pointer group"
    >
     <ChevronRight className="size-11 text-primary-600 stroke-1 group-hover:translate-x-1 transition-transform duration-150" />
    </button>
  );
};

export default NextButton;
