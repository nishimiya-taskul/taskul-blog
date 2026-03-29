import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-2.5 bg-white/96 backdrop-blur-[7px] shadow-[10px_10px_24px_rgba(0,0,0,0.05)]">
      <Link href="/" className="flex items-center gap-1.5">
        <div className="border-[3px] border-green rounded-[3px] w-[18px] h-[18px]" />
        <span className="font-black text-[22px] tracking-[1px] text-black font-['DM_Sans']">
          TASKUL
        </span>
        <span className="text-sub-gray text-[10px] font-medium tracking-[0.5px] ml-1">
          タスクをシンプルに
        </span>
      </Link>
      <nav className="flex items-center gap-12">
        <Link
          href="/"
          className="text-main-black text-base font-semibold font-['DM_Sans']"
        >
          TOP
        </Link>
        <Link
          href="/#service"
          className="text-main-black text-base font-semibold"
        >
          サービス
        </Link>
        <Link
          href="/column"
          className="text-main-black text-base font-semibold"
        >
          コラム
        </Link>
        <Link href="/#contact" className="text-main-black text-base font-semibold">
          お問い合わせ
        </Link>
        <Link
          href="/#register"
          className="flex items-center gap-2.5 bg-green text-white text-[15px] font-semibold px-8 py-4 rounded-full"
        >
          <span className="w-1.5 h-1.5 bg-white rounded-full" />
          今すぐ先行登録
        </Link>
      </nav>
    </header>
  );
}
