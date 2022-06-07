/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [ windowSize, setWindowSize ] = useState({
    width: undefined,
    height: undefined
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
};

export default useWindowSize;