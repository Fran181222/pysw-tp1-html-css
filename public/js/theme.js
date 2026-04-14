// implemento modo oscuro
const themeButton = document.querySelector(".theme-toggle");
const themeStorageKey = "theme-home";

if (themeButton) {
  const applyTheme = (theme) => {
    document.body.setAttribute("data-theme", theme);
    themeButton.textContent = theme === "dark" ? "Modo claro" : "Modo oscuro";
  };

  const savedTheme = localStorage.getItem(themeStorageKey);
  applyTheme(savedTheme === "dark" ? "dark" : "light");

  themeButton.addEventListener("click", () => {
    const isDark = document.body.getAttribute("data-theme") === "dark";
    const nextTheme = isDark ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem(themeStorageKey, nextTheme);
  });
}
