import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { ParallaxProvider } from "react-scroll-parallax";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <div className="overflow-hidden">
      <ParallaxProvider>
        <Home />
        <About />
        <Resume />
      </ParallaxProvider>
    </div>
  );
}

export default App;
