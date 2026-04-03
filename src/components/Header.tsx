import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 h-[56px] md:h-auto md:py-2.5 bg-white/96 backdrop-blur-[7px] shadow-[10px_10px_24px_rgba(0,0,0,0.05)]">
      <a href="https://taskul-ai.com/" className="flex items-center gap-1.5">
        <div className="border-[3px] border-green rounded-[3px] w-[18px] h-[18px]" />
        <span className="font-black text-[22px] tracking-[1px] text-black font-['DM_Sans']">
          TASKUL
        </span>
        <span className="hidden md:inline text-sub-gray text-[10px] font-medium tracking-[0.5px]">
          タスクをシンプルに
        </span>
      </a>
      <nav className="hidden md:flex items-center gap-12">
        <a href="https://taskul-ai.com/" className="text-main-black text-base font-semibold font-['DM_Sans']">
          TOP
        </a>
        <a href="https://taskul-ai.com/#service" className="text-main-black text-base font-semibold">
          サービス
        </a>
        <Link href="/" className="text-main-black text-base font-semibold">
          コラム
        </Link>
        <a href="https://taskul-ai.com/#contact" className="text-main-black text-base font-semibold">
          お問い合わせ
        </a>
      </nav>
    </header>
  );
}
