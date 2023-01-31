import About from "./Components/About";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ReactLoading from "react-loading";
import { useEffect, useState } from "react";

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  })

  return (
    <div>
      {loading ? (<div className="flex h-screen justify-center items-center gap-3">
      <ReactLoading type="spinningBubbles" color="blue"  />
      Sabar Bang</div>) : (
        <>
        <Header />
      <main>
        <Home />
        <About />
        <Menu />
        <Contact />
        <Footer />
      </main>
        </>
        )}
    </div>
  );
}

export default App;
