import { useEffect, useState } from "react";

export const IsDevice = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const isSmall = window.matchMedia("(max-width: 768px)");
    setIsSmallScreen(isSmall.matches);
    const handleScreen = (event: MediaQueryListEvent) => {
      setIsSmallScreen(event.matches);
    };
    isSmall.addEventListener("change", handleScreen);
    return () => {
      isSmall.removeEventListener("change", handleScreen);
    };
  }, []);
  return {
    isSmallScreen,
  };
};
