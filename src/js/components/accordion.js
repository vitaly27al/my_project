export const useFooterAccordion = () => {
  const accordionList = document.querySelectorAll('.footer-item');

  accordionList.forEach((el) => {
    el.addEventListener('click', (e) => {
      const accordionControl = e.target.closest('.accordion_list-control');
      if (!accordionControl) return;
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      accordionItem.classList.toggle('accordion_item--opened');

      if (accordionItem.classList.contains('accordion_item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });
};
