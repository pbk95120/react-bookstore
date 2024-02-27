import { useState, useEffect } from "react";

/**
 * Light/Dark 모드 전환 버튼
 */
const ThemeSwitchButton = () => {
  const [dark, setDark] = useState<boolean>(false);

  const clickThemeButton = () => {
    if (dark === false) {
      setDark(true);
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setDark(false);
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <button onClick={clickThemeButton}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </>
  );
};

export default ThemeSwitchButton;
