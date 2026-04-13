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
      <nav className="hidden md:flex items-center gap-10">
        <a href="https://taskul-ai.com/" className="text-main-black text-base font-semibold font-['DM_Sans']">
          TOP
        </a>
        <Link href="/" className="text-main-black text-base font-semibold">
          コラム
        </Link>
        <a href="https://free-company.co.jp/" target="_blank" rel="noopener noreferrer" className="text-main-black text-base font-semibold">
          運営会社
        </a>
        <a href="https://lin.ee/rSlYN882" target="_blank" rel="noopener noreferrer" className="text-main-black text-base font-semibold">
          お問い合わせ
        </a>
        <a href="https://app.taskul-ai.com/login?from=blog" className="bg-green text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity">
          14日間無料トライアル
        </a>
      </nav>
    </header>
  );
}
