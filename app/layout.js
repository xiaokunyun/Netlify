//引入字体  
import { Geist, Geist_Mono } from "next/font/google";
//引入全局css
import "./globals.css";
//引入图片路径
import { assets } from "@/assets/assets";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//设置元数据
export const metadata = {
  //设置标题
  title: "Portfolio",
  //设置描述
  description: "Generated by create next app",
};

//设置根布局
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
