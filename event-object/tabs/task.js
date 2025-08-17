const tabContainers = document.querySelectorAll('.tabs');

tabContainers.forEach(container => {
    const tabs = Array.from(container.querySelectorAll('.tab'));
    const tabContents = Array.from(container.querySelectorAll('.tab__content'));

    const tabNav = container.querySelector('.tab__navigation');

    tabNav.addEventListener('click', (event) => {
        const clickedTab = event.target.closest('.tab');
        if (!clickedTab) return;

        const tabIndex = tabs.indexOf(clickedTab);

        tabs.forEach(tab => tab.classList.remove('tab_active'));
        tabContents.forEach(content => content.classList.remove('tab__content_active'));

        clickedTab.classList.add('tab_active');
        if (tabContents[tabIndex]) {
            tabContents[tabIndex].classList.add('tab__content_active');
        }
    });
});