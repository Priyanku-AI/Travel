import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
        <div
          className="min-h-screen bg-cover bg-center relative"
          style={{
            backgroundImage: "url('background.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>   
          <div className="relative z-10">
            <Header />
          </div>
          <HeroSection />
        </div>
        <Footer />
    </>
  );
}

export default App;
