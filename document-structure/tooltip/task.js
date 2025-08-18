const tooltips = document.querySelectorAll('.has-tooltip');
let activeTooltip = null; // Переменная для хранения активной подсказки

tooltips.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();

        // Если есть активная подсказка, удаляем её
        if (activeTooltip) {
            activeTooltip.remove();
            activeTooltip = null;
        }

        // Создаем новый элемент подсказки
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = element.title;

        // Добавляем подсказку на страницу
        document.body.appendChild(tooltip);
        activeTooltip = tooltip; // Сохраняем новую подсказку как активную

        // Позиционируем подсказку
        const elementRect = element.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        const position = element.dataset.position || 'bottom'; // по умолчанию 'bottom'

        switch (position) {
            case 'top':
                tooltip.style.left = `${elementRect.left + (elementRect.width / 2) - (tooltipRect.width / 2)}px`;
                tooltip.style.top = `${elementRect.top - tooltipRect.height - 5}px`;
                break;
            case 'left':
                tooltip.style.left = `${elementRect.left - tooltipRect.width - 5}px`;
                tooltip.style.top = `${elementRect.top + (elementRect.height / 2) - (tooltipRect.height / 2)}px`;
                break;
            case 'right':
                tooltip.style.left = `${elementRect.right + 5}px`;
                tooltip.style.top = `${elementRect.top + (elementRect.height / 2) - (tooltipRect.height / 2)}px`;
                break;
            default: // bottom
                tooltip.style.left = `${elementRect.left + (elementRect.width / 2) - (tooltipRect.width / 2)}px`;
                tooltip.style.top = `${elementRect.bottom + 5}px`;
        }

        // Делаем подсказку видимой
        tooltip.classList.add('tooltip_active');
    });
});