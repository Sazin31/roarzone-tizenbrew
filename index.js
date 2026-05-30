(function () {
  const style = document.createElement("style");

  style.innerHTML = `
    body {
      background: #000 !important;
    }

    *:focus {
      outline: 4px solid #00ff66 !important;
      outline-offset: 4px !important;
    }
  `;

  document.documentElement.appendChild(style);

  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 10009) {
      if (window.history.length > 1) {
        window.history.back();
      }
    }

    if (event.keyCode === 13) {
      const active = document.activeElement;
      if (active && typeof active.click === "function") {
        active.click();
      }
    }
  }, true);
})();
