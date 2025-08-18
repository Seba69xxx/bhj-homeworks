const bookElement = document.getElementById('book');
const fontControls = document.querySelectorAll('.font-size');
const colorControls = document.querySelectorAll('.book__control_color .color');
const backgroundControls = document.querySelectorAll('.book__control_background .color');

function handleControlClick(controls, activeClass, action) {
    controls.forEach(control => {
        control.addEventListener('click', (event) => {
            event.preventDefault();
            controls.forEach(c => c.classList.remove(activeClass));
            event.target.classList.add(activeClass);
            action(event.target);
        });
    });
}

handleControlClick(fontControls, 'font-size_active', (target) => {
    const size = target.dataset.size;
    bookElement.classList.remove('book_fs-small', 'book_fs-big');
    if (size) {
        bookElement.classList.add(`book_fs-${size}`);
    }
});

handleControlClick(colorControls, 'color_active', (target) => {
    const color = target.dataset.textColor;
    bookElement.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
    if (color) {
        bookElement.classList.add(`book_color-${color}`);
    }
});

handleControlClick(backgroundControls, 'color_active', (target) => {
    const bgColor = target.dataset.bgColor;
    bookElement.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
    if (bgColor) {
        bookElement.classList.add(`book_bg-${bgColor}`);
    }
});