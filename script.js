document.addEventListener('DOMContentLoaded', () => {
  const listItems = document.querySelectorAll('.menu-title ul li'); // Выбираем все пункты меню
  const feedbackForm = document.getElementById('feedbackForm');
  const closeForm = document.getElementById('closeForm');
  const listItemInfo = document.getElementById('listItemInfo');

  // Обработчик для всех пунктов меню
  listItems.forEach(item => {
      item.addEventListener('click', () => {
          const serviceName = item.textContent; // Получаем название напитка
          listItemInfo.textContent = `Вы выбрали: ${serviceName}`; // Обновляем текст в модальной форме
          feedbackForm.style.display = 'flex'; // Показываем форму
      });
  });

  // Закрытие формы
  closeForm.addEventListener('click', () => {
      feedbackForm.style.display = 'none'; // Скрываем форму
  });

  // Закрытие формы, если кликнули вне модального окна
  window.onclick = function(event) {
      if (event.target === feedbackForm) {
          feedbackForm.style.display = 'none';
      }
  }
});
