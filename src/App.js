import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navigation/Navbar";
import Particle from "./components/Particles/Particle";
import Rank from "./components/Rank/Rank";

function App() {
  return (
    <div className="">
      <Particle />
      <Navbar />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;
