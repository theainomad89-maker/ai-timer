import Image from "next/image";

type Props = { href: string; large?: boolean };

export default function AppStoreButton({ href, large }: Props) {
  const size = large ? "h-14 w-41" : "h-10 w-31";
  return (
    <a
      href={href}
      className={`inline-block hover:opacity-90 transition-opacity ${size}`}
      aria-label="Download on the App Store"
      rel="noopener"
    >
      <Image
        src="/app-store-badge.svg"
        alt="Download on the App Store"
        width={large ? 163 : 122}
        height={large ? 54 : 41}
        className="h-full w-full object-contain"
        priority
      />
    </a>
  );
}
