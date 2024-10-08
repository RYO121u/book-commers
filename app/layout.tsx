import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
// import { SessionProvider } from "next-auth/react";
import { NextAuthProvider } from "./lib/next-auth/provider";
import { Suspense } from "react";
import Loading from "./loading"

const notoSansJP = Noto_Sans_JP({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.className} antialiased`}
        
      ><NextAuthProvider><Header />
       <Suspense fallback={<Loading />}>
            {children}
            {/* <CreateBookButton /> */}
          </Suspense>
        </NextAuthProvider>
      </body>
      
    </html>
  );
}
