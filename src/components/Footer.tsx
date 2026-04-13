import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-white w-full">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[139px] pt-[50px] md:pt-[61px] pb-[30px] md:pb-[40px]">
        <div className="flex flex-col md:flex-row md:justify-between gap-[34px]">
          {/* 左側: ロゴ + CTA */}
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
              className="flex items-center justify-center bg-green text-white text-[15px] font-semibold px-[52px] py-4 rounded-full w-full md:w-auto hover:opacity-90 transition-opacity"
            >
              まずは無料トライアル
            </a>
          </div>

          {/* 右側: 2列のリンクメニュー */}
          <div className="flex gap-[60px] md:gap-[80px] text-base font-semibold text-main-black">
            <div className="flex flex-col gap-[18px]">
              <a href="https://taskul-ai.com/" className="font-['DM_Sans'] hover:opacity-70 transition-opacity">TOP</a>
              <a href="https://taskul-ai.com/#service" className="hover:opacity-70 transition-opacity">サービス</a>
              <Link href="/" className="hover:opacity-70 transition-opacity">コラム</Link>
            </div>
            <div className="flex flex-col gap-[18px]">
              <a href="https://kuroco-creation.jp/" target="_blank" rel="noopener noreferrer" className="font-['DM_Sans'] hover:opacity-70 transition-opacity">KUROCO CREATION</a>
              <a href="https://free-company.co.jp/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">運営会社</a>
              <a href="https://lin.ee/rSlYN882" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">お問い合わせ</a>
            </div>
          </div>
        </div>

        {/* 中央: 利用規約・プライバシーポリシー */}
        <div className="flex flex-col md:flex-row md:justify-center gap-4 md:gap-[26px] mt-8 md:mt-12 text-[14px] md:text-[15px] text-[#868686]">
          <a href="https://taskul-ai.com/terms.html" className="underline hover:opacity-70 transition-opacity">利用規約</a>
          <a href="https://taskul-ai.com/privacy.html" className="underline hover:opacity-70 transition-opacity">プライバシーポリシー</a>
        </div>
      </div>

      {/* 下部の緑バー + コピーライト */}
      <div className="bg-green h-[33px] flex items-center justify-center">
        <p className="text-white text-sm text-center font-['DM_Sans']">
          2026 &copy; FREECOMPANY All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
