import imgImage1 from "figma:asset/8ac1518d9b3a1659d05fe6b1509c0f1932e04eed.png";

export default function Frame() {
  return (
    <div className="bg-black relative size-full">
      <div className="absolute h-[170px] left-[65px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[59px] w-[92px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <p className="absolute font-['League_Spartan:Bold',sans-serif] font-bold h-[42px] leading-[normal] left-[65px] text-[24px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white top-[26px] tracking-[-1.68px] w-[350px]">datemakr</p>
    </div>
  );
}