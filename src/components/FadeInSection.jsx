import React from "react";
import { useInView } from "react-intersection-observer";

const FadeInSection = ({ id, children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: .3,
  });

  return (
    <section
      id={id}
      ref={ref}
      className={`opacity-0 transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </section>
  );
};

export default FadeInSection;