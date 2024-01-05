import { useState, useEffect } from "react";
import { loadAsync } from "expo-font";

const useCustomFont = () => {
  const [fontsLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await loadAsync({
        "Titillium-regular": require("../assets/TitilliumWeb-Regular.ttf"),
        "Titillium-semibold": require("../assets/TitilliumWeb-SemiBold.ttf"),
        "Titillium-bold": require("../assets/TitilliumWeb-Bold.ttf"),
        "OpenSans-regular": require("../assets/OpenSans-Regular.ttf"),
        "OpenSans-semibold": require("../assets/OpenSans-SemiBold.ttf"),
        "OpenSans-bold": require("../assets/OpenSans-Bold.ttf"),

      });
      setFontLoaded(true);
    };
    loadFonts();
  }, []);

  return fontsLoaded;
};

export default useCustomFont;
