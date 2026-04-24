// implemento modo oscuro
const themeButton = document.querySelector(".theme-toggle");
const themeStorageKey = "theme-home";

if (themeButton) {// si hay un boton , trae un valor y si el tema actual es oscuro se pone modo claro sino modo oscuro
  const applyTheme = (theme) => {
    document.body.setAttribute("data-theme", theme);
    themeButton.textContent = theme === "dark" ? "Modo claro" : "Modo oscuro";
  };

  const savedTheme = localStorage.getItem(themeStorageKey); // lle si antes se habia guardado el tema
  applyTheme(savedTheme === "dark" ? "dark" : "light");

  themeButton.addEventListener("click", () => {// cuando hay un clic 
    const isDark = document.body.getAttribute("data-theme") === "dark";// revisa si el body esta oscuro
    const nextTheme = isDark ? "light" : "dark"; //si estaba oscuro el proximo sera claro
    applyTheme(nextTheme);// aplica el nuevo tema
    localStorage.setItem(themeStorageKey, nextTheme);// se guarda en memoria para cuando se recargue la pagina
  });
}
