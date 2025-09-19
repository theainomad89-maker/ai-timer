import Image from "next/image";
type Size = "sm" | "md" | "lg";

const widths: Record<Size, string> = {
  sm: "w-[280px] sm:w-[300px]",
  md: "w-[320px] sm:w-[360px]",
  lg: "w-[360px] sm:w-[420px]"
};

export default function PhoneMockup({ src, alt, size = "md" }: { src: string; alt: string; size?: Size }) {
  return (
    <div className="relative rounded-[42px] bg-black p-2 shadow-soft">
      <div className="rounded-[36px] bg-white overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={1125}
          height={2436}
          className={`block h-auto ${widths[size]}`}
          priority
        />
      </div>
    </div>
  );
}
