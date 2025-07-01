import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

function App() {
  const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
  const deckRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      transition: "zoom",
      controls: true,
      // other config options
    });

    deckRef.current.initialize().then(() => {
      // good place for event handlers and plugin setups
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);

  return (
    // Your presentation is sized based on the width and height of
    // our parent element. Make sure the parent is not 0-height.
    <div className="w-full h-screen min-h-screen">
      <div className="reveal w-1/2 h-1/2" ref={deckDivRef}>
        <div className="slides">
          <section data-transition="slide">Slide 1</section>
          <section data-transition="slide">Slide 2</section>
          <section data-transition="slide">Slide 3</section>
          <section data-transition="slide">Slide 4</section>
          <section data-transition="slide">Slide 5</section>
        </div>
      </div>
    </div>
  );
}

export default App;
