import Image from "next/image";

type Props = { href: string; large?: boolean };

export default function AppStoreButton({ href, large }: Props) {
  const size = large ? "h-16 w-48" : "h-12 w-36";
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
        width={large ? 192 : 144}
        height={large ? 64 : 48}
        className="h-full w-full object-contain"
        priority
      />
    </a>
  );
}
