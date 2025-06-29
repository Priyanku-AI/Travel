import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div>
        <div
          className="min-h-screen bg-cover bg-center relative"
          style={{
            backgroundImage: "url('/background.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>   
          <div className="relative z-10">
            <Header />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
