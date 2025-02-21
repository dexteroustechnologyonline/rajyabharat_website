import FeaturePost from "@/components/home/FeaturePost";
// import "./tailwind.css";
import LatestNews from "@/components/home/LatestNews";
import AddsPage from "@/components/home/AddsPage";
import CategoryOne from "@/components/home/CategoryOne";
import CategoryTwo from "@/components/home/CategoryTwo";
import SlidingCategory from "@/components/home/SlidingCategory";
import NewsSwiper from "@/components/mobile/NewsSwiper";
export default function Home() {
  return (
    <>
      <div className="hide_mobile_vesion">
        <FeaturePost />
        <LatestNews />
        <AddsPage />
        <CategoryOne />
        <CategoryTwo />
        <SlidingCategory />
      </div>
      <NewsSwiper />
    </>
  );
}
