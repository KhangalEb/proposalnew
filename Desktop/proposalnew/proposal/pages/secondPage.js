import { useRef } from "react";
import { motion, useViewportScroll, useSpring, useTransform } from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useViewportScroll();
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        Хайртай
      </div>
      <motion.h2 style={{ y }}>{`#${id}`}</motion.h2>
    </section>
  );
}

export default function Home() {
  const { scrollYProgress } = useViewportScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {[1, 2, 3, 4, 5].map((image) => (
        <Image key={image} id={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
