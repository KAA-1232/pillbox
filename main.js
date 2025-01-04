const container = document.querySelector(".container");

container.addEventListener("touchstart", (e) => {
  // Запоминаем начальную позицию касания
  const startX = e.touches[0].clientX;

  container.addEventListener(
    "touchmove",
    (e) => {
      // Рассчитываем смещение
      const deltaX = e.touches[0].clientX - startX;

      // Прокручиваем контейнер
      container.scrollLeft += deltaX;

      // Обновляем начальную позицию
      startX = e.touches[0].clientX;
    },
    { passive: false }
  );

  container.addEventListener("touchend", () => {
    // Удаляем обработчики touchmove и touchend
    container.removeEventListener("touchmove", null);
    container.removeEventListener("touchend", null);
  });
});

//Обработка кликов на кнопках (чтобы не мешали скроллу)
const buttons = document.querySelectorAll(".card button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation(); // Предотвращаем распространение события на родительский элемент
  });
});
