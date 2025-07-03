import { useEffect, useRef } from "react";
import RevealJS from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

function App() {
  const revealRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    const reveal = new RevealJS({
      embedded: true,
      transition: "zoom",
    });

    revealRef.current = reveal;

    reveal.initialize().then(() => {
      console.log("Reveal initialized!");
    });

    return () => {
      reveal.destroy();
    };
  }, []);

  useEffect(() => {
    window.addEventListener("load", () => {
      RevealJS.layout();
    });
  }, []);

  return (
    <div className="reveal-container">
      <p className="text-black bg-red-50">Reveal container</p>
      <div className="reveal">
        <div className="slides">
          <section className="text-4xl">Slide 1</section>
          <section>Slide 2</section>
          <section>Slide 3</section>
          <section data-transition="slide">Slide 4</section>
          <section data-transition="slide">Slide 5</section>
        </div>
      </div>

      {/* <div className="text-6xl">Hello there</div> */}
    </div>
  );
}

export default App;
