import Navbar from '@/components/Navbar/Navbar';
import Banner from '@/components/Banner/Banner';
import Categories from '@/components/Categories/Categories';
import HotDeals from '@/components/HotDeals/HotDeals';
import Showcase from '@/components/Showcase/Showcase';
import Trending from '@/components/Trending/Trending';
import Features from '@/components/Features/Features';
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts';
import Newsletter from '@/components/Newsletter/Newsletter';
import Footer from '@/components/Footer/Footer';


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className=" container-width ">
      <Banner />
      </div>
      <Categories />
      <HotDeals />
      <Showcase />
      <Trending />
      <FeaturedProducts />
      <Features />
      <Newsletter />
      <Footer />
    </main>
  );
}
