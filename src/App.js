import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <div className="overflow-hidden">
      <ParallaxProvider>
        <Home />
        <About />
      </ParallaxProvider>
    </div>
  );
}

export default App;
