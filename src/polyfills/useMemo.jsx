import { useEffect, useRef } from "react";

const areEqual = (prvDeps, newDeps) => {
  if (prvDeps === null) return false;

  if (prevDeps.length !== newDeps.length) {
    return false;
  }

  for (let i = 0; i < prvDeps.length; i++) {
    if (prvDeps[i] !== newDeps[i]) {
      return false;
    }
  }

  return true;
};

export const useMyMemo = (cb, deps) => {
  let memoisedValueRef = useRef();

  if (
    !memoisedValueRef?.current ||
    !areEqual(memoisedValueRef.current.deps, deps)
  ) {
    memoisedValueRef.current = {
      value: cb(),
      deps: deps,
    };
  }

  useEffect(() => {
    return () => {
      memoisedValueRef.current = null;
    };
  }, []);

  return memoisedValueRef.current.value;
};
