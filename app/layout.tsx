import type { Metadata } from "next";
import "./globals.css";
import "./stem-cell.css";
export const metadata: Metadata = {title:"グランエタニティ銀座クリニック｜オンライン診療・再生医療・がん治療",description:"銀座一丁目のグランエタニティ銀座クリニック。メディカルダイエットオンライン外来、幹細胞治療・エクソソーム・NK細胞療法、がん核酸医療をご案内します。",icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ja"><body>{children}</body></html>}
