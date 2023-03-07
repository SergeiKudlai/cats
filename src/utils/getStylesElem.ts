import { MouseEvent } from 'react';
import { setMouseCursorLeave } from './utils';

export function getClickHandler(e: MouseEvent) {
    const { target } = e;
    const box = (target as HTMLElement).closest('.cats__item') as HTMLElement;

    if (box) {
        if (box.classList.contains('active')) {
            box.classList.remove('active');
            box?.querySelector('.card__weight')?.classList.remove('active');
            box?.querySelector('.cats__text')?.classList.remove('active');
            box?.querySelector('.cats__text-select')?.classList.remove('active');
            return;
        }

        box.classList.add('active', 'hover');
        box?.querySelector('.card__weight')?.classList.add('active');
        box?.querySelector('.cats__text')?.classList.add('active');
        box?.querySelector('.cats__text-select')?.classList.add('active');
        setMouseCursorLeave(box);
    }
}
