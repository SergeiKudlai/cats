export const getRemoveClass = () => {
    const startText = document.querySelectorAll('.cats__text');
    const selectText = document.querySelectorAll('.cats__text-select');

    for (let i = 0; i < startText.length; i++) {
        if (startText[i].classList.contains('active') || selectText[i].classList.contains('active')) {
            startText[i].classList.remove('active');
            selectText[i].classList.remove('active');
        }
    }
};

export const getBtnAddClass = (elem: Element | null) => {
    if (elem) {
        elem.querySelector('.cats__text')?.classList.add('active');
        elem.querySelector('.cats__text-select')?.classList.add('active');
    }
};
