import "../../public/mobile_version.css";
import "../../public/globals.css";
import "../../public/assets/css/animate.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/colorbox.css";
import "../../public/assets/css/font-awesome.min.css";
import "../../public/assets/css/owl.carousel.min.css";
import "../../public/assets/css/owl.theme.default.min.css";
import "../../public/assets/css/responsive.css";
import "../../public/assets/css/style.css";
// import "./tailwind.css"

import ReduxProviderLayout from "@/components/layouts/ReduxProviderLayout";

import Head from "next/head";
import Script from 'next/script'
import Mainlayout from "@/components/layouts/Mainlayout";



export const metadata = {
  title: "Rajyabharat",
  description: "Rajyabharat",
  keywords: "Rajyabharat",
  // authors: [{ name: "Sayva Team", url: "https://sayva.com" }],
  // metadataBase: new URL("https://sayva.com"),
  // openGraph: {
  //   title: "Sayva - Fast & Fresh Food Delivery",
  //   description: "Get fresh and delicious meals delivered to your doorstep with Sayva. Enjoy a wide variety of cuisines at your convenience.",
  //   url: "https://sayva.com",
  //   siteName: "Sayva",
  //   images: [
  //     {
  //       url: "https://sayva.com/og-image.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "Sayva Food Delivery",
  //     },
  //   ],
  //   type: "website",
  //   locale: "en_US",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@SayvaFood",
  //   title: "Sayva - Fast & Fresh Food Delivery",
  //   description: "Order from Sayva and get delicious meals delivered fast to your doorstep.",
  //   images: ["https://sayva.com/og-image.jpg"],
  // },
  // alternates: {
  //   canonical: "https://sayva.com",
  // },
  // robots: "index, follow",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Head>
          <Script src="../../public/assets/js/bootstrap.min.js" async></Script>
          <Script src="../../public/assets/js/custom_script.js" async></Script>
          <Script src="../../public/assets/js/jquery-3.2.1.min.js" async></Script>
          <Script src="../../public/assets/js/jquery.colorbox.js" async></Script>
          <Script src="../../public/assets/js/owl.carousel.min.js" async></Script>
          <Script src="../../public/assets/js/popper.min.js" async></Script>
          <Script src="../../public/assets/js/smoothscroll.js" async></Script>
        </Head>
        <ReduxProviderLayout>
          <Mainlayout>{children}</Mainlayout>
        </ReduxProviderLayout>
      </body>
    </html>
  );
}
