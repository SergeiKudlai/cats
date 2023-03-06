import { MouseEvent } from 'react';
import { getRemoveClass } from './utils';
import { getBtnAddClass } from './utils';

export function getClickHandler(e: MouseEvent) {
    const { target } = e;
    getRemoveStyle();
    getRemoveClass();

    const box = (target as HTMLElement).closest('.cats__item');
    getBtnAddClass(box);
    box?.classList.add('active');
    const boxWeight = box?.querySelector('.card__weight');
    boxWeight?.classList.add('active');

    if ((target as HTMLElement).className === 'card') {
        (target as HTMLElement).style.borderColor = '#D91667';
    } else if ((target as HTMLElement).className === 'cats__btn') {
        const boxElem = (target as HTMLElement).closest('.cats__item');
        const boxCard = boxElem?.querySelector('.card') as HTMLElement;
        if (boxCard) boxCard.style.borderColor = '#D91667';
    } else {
        const boxElem = (target as HTMLElement).closest('.card') as HTMLElement;
        boxElem.style.borderColor = '#D91667';
    }
}

function getRemoveStyle() {
    const boxAll = document.querySelectorAll('.card');
    const catsElem = document.querySelectorAll('.cats__item');
    const boxWeight = document.querySelectorAll('.card__weight');

    for (let i = 0; i < boxAll.length; i++) {
        (boxAll[i] as HTMLElement).style.borderColor = '';
        (catsElem[i] as HTMLElement).classList.remove('active');
        (boxWeight[i] as HTMLElement).classList.remove('active');
    }
}
