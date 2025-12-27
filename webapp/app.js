const tg = window.Telegram.WebApp;
tg.expand(); // растянуть мини-апп

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    const action = btn.dataset.action;

    tg.HapticFeedback.impactOccurred("light"); // вибрация
    tg.showPopup({
      title: "Кнопка нажата",
      message: `Ты нажал: ${action}`,
      buttons: [{ type: "ok" }]
    });

    console.log("Pressed:", action);
  });
});
