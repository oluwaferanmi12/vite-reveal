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

  return (
    <div className="reveal">
      <div className="slides">
        <section>Slide 1</section>
        <section>Slide 2</section>
        <section>Slide 3</section>
      </div>
    </div>
  );
}

export default App;
