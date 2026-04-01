import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-white w-full">
      <div className="max-w-[1440px] mx-auto px-10 md:px-[115px] py-[50px] md:pt-[107px] md:pb-[66px]">
        <div className="flex flex-col md:flex-row md:justify-between gap-[34px]">
          <div className="flex flex-col items-start gap-7">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5">
                <div className="border-[5.5px] md:border-[7px] border-green rounded-[5.5px] md:rounded-[7px] w-8 md:w-10 h-8 md:h-10" />
                <span className="font-black text-[40px] md:text-[50px] tracking-[2px] md:tracking-[2.5px] text-black font-['DM_Sans']">
                  TASKUL
                </span>
              </div>
              <p className="text-sub-gray text-[17px] md:text-[22px] font-medium tracking-[0.9px] md:tracking-[1px]">
                タスクをシンプルに
              </p>
            </div>
            <a
              href="https://app.taskul-ai.com/login?from=blog"
              className="flex items-center gap-2.5 bg-green text-white text-[15px] font-semibold px-[52px] py-4 rounded-full w-full md:w-auto justify-center"
            >
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              14日間無料で試す
            </a>
          </div>
          <div className="flex flex-col md:flex-row gap-[18px] md:gap-[200px]">
            <div className="flex flex-col gap-[18px] text-base font-semibold text-main-black">
              <a href="https://taskul-ai.com/" className="font-['DM_Sans']">TOP</a>
              <a href="https://taskul-ai.com/#service">サービス</a>
              <Link href="/">コラム</Link>
            </div>
            <div className="flex flex-col gap-[18px] text-base font-semibold text-main-black">
              <span className="font-['DM_Sans']">FREECOMPANY</span>
              <a href="https://taskul-ai.com/">運営会社</a>
              <a href="https://taskul-ai.com/#contact">お問い合わせ</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-center gap-4 md:gap-[26px] mt-8 md:mt-12 text-[14px] md:text-[15px] text-gray">
          <a href="https://taskul-ai.com/terms" className="underline">利用規約</a>
          <a href="https://taskul-ai.com/privacy" className="underline">プライバシーポリシー</a>
          <a href="https://taskul-ai.com/tokusho" className="underline">特定商取引法に基づく表記</a>
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
