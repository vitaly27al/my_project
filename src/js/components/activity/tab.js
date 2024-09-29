export const useActivityTab = () => {
  const tabControls = document.querySelector('.hero_tabs-list');
  tabControls.addEventListener('click', toggleTab);

  function toggleTab(e) {
    const tabControl = e.target.closest('.hero_tabs-link');
    if (!tabControl) return;
    e.preventDefault();
    if (tabControl.classList.contains('hero_tabs-link--active')) return;

    const tabContentId = tabControl.dataset.target;

    // Удаляем класс 'hero_article--show' у всех элементов, кроме тех, что соответствуют выбранной вкладке
    const allContent = document.querySelectorAll('.hero_article');
    allContent.forEach((item) => {
      if (!item.classList.contains('hero_article--show')) return;
      // Проверяем, есть ли у элемента нужный data-id
      if (!item.dataset.id.includes(tabContentId)) {
        item.classList.remove('hero_article--show');
      }
    });

    const activeControl = document.querySelector('.hero_tabs-link--active');

    // Удаляем класс 'hero_tabs-link--active' у активной вкладки
    if (activeControl) {
      activeControl.classList.remove('hero_tabs-link--active');
    }

    // Добавляем класс 'hero_article--show'  у выбранного контента
    const tabContent = document.querySelectorAll(
      `.hero_article[data-id*="${tabContentId}"]`,
    );
    tabContent.forEach((item) => {
      item.classList.add('hero_article--show');
    });

    tabControl.classList.add('hero_tabs-link--active');
  }
};
