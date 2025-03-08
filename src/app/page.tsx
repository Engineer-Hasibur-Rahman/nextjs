// # Main page for the app
import MainLayout from "@/layouts/MainLayout";
import Header from "@/partials/Header";
import HeroSection from "@/partials/HeroSection";
import CategoryGrid from "@/partials/CategoryGrid";

export default function Home() {
    return (
        <MainLayout>
            <div>
                <Header />
                <HeroSection />
                <CategoryGrid />
            </div>
        </MainLayout>
    );
}
