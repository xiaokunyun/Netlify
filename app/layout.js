//引入字体  
import { Outfit, Ovo } from "next/font/google";
//引入全局css
import "./globals.css";
//引入图片路径
import { assets } from "@/assets/assets"; 
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});


//设置元数据
export const metadata = {
  //设置标题
  title: "Portfolio",
  //设置描述
  description: "",
};

//设置根布局
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
