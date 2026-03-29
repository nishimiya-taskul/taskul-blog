import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-white w-full">
      <div className="max-w-[1440px] mx-auto px-[115px] pt-[107px] pb-[66px]">
        <div className="flex justify-between">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1.5">
              <div className="border-[7px] border-green rounded-[7px] w-10 h-10" />
              <span className="font-black text-[50px] tracking-[2.5px] text-black font-['DM_Sans']">
                TASKUL
              </span>
            </div>
            <p className="text-sub-gray text-[22px] font-medium tracking-[1px] text-center">
              タスクをシンプルに
            </p>
            <Link
              href="/#register"
              className="flex items-center gap-2.5 bg-green text-white text-[15px] font-semibold px-[52px] py-4 rounded-full mt-6"
            >
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              今すぐ先行登録
            </Link>
          </div>
          <div className="flex gap-[200px]">
            <div className="flex flex-col gap-[18px] text-base font-semibold text-main-black">
              <Link href="/" className="font-['DM_Sans']">TOP</Link>
              <Link href="/#service">サービス</Link>
              <Link href="/column">コラム</Link>
            </div>
            <div className="flex flex-col gap-[18px] text-base font-semibold text-main-black">
              <span className="font-['DM_Sans']">FREECOMPANY</span>
              <Link href="#">運営会社</Link>
              <Link href="/#contact">お問い合わせ</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-[26px] mt-12 text-[15px] text-gray">
          <Link href="/lp/terms.html" className="underline">利用規約</Link>
          <Link href="/lp/privacy.html" className="underline">プライバシーポリシー</Link>
          <Link href="/lp/tokusho.html" className="underline">特定商取引法に基づく表記</Link>
        </div>
      </div>
      <div className="bg-green h-[33px] flex items-center justify-center">
        <p className="text-white text-sm text-center">
          2026 &copy; FREECOMPANY All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
