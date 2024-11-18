import { useRef } from "react";

export const useMyEffect = (cb, deps) => {
  const isFirstRender = useRef(true);
  const prevDepsRef = useRef([]);

  // First render
  if (isFirstRender.current) {
    const cleanUp = cb();
    isFirstRender.current = false;
    return () => {
      if (cleanup && typeof cleanUp === "function") {
        cleanUp();
      }
    };
  }

  // Deps change or no deps provided
  if (!deps) {
    cb();
    return;
  } else {
    const depsChanged =
      JSON.stringify(deps) !== JSON.stringify(prevDepsRef.current);
    if (depsChanged) {
      const cleanUp = cb();
      if (cleanup && typeof cleanUp === "function") {
        cleanUp();
      }
    }
  }

  prevDepsRef.current = deps || [];
};

// The cleanup function here is only for when the dependency array changes