import { foodValud } from '../ts/enum';
import { IData } from '../ts/interface';

export const getValueFood = (params: string): IData => {
    if (params === foodValud.foieGras) {
        return {
            name: 'с фуа-гра',
            amount: '10',
            mouse: 'мышь в подарок',
            weight: '0,5',
        };
    } else if (params === foodValud.fish) {
        return {
            name: 'с рыбой',
            amount: '40',
            mouse: '2 мыши в подарок',
            weight: '2',
        };
    } else if (params === foodValud.chicken) {
        return {
            name: 'с курой',
            amount: '100',
            mouse: '5 мышей в подарок',
            weight: '5',
        };
    }
    return {
        amount: '',
        name: '',
        mouse: '',
        weight: '',
    };
};

export const setTextSelect = (params: string) => {
    if (params === foodValud.foieGras) {
        return 'Печень утки разварная с артишоками.';
    } else if (params === foodValud.fish) {
        return 'Головы щучьи с чесноком да свежайшая сёмгушка.';
    } else if (params === foodValud.chicken) {
        return 'Филе из цыплят с трюфелями в бульоне.';
    }
    return '';
};

export const setTextDisabled = (params: string) => {
    if (params === foodValud.foieGras) {
        return 'Печалька, с фуа-гра закончился.';
    } else if (params === foodValud.fish) {
        return 'Печалька, с рыбой закончился.';
    } else if (params === foodValud.chicken) {
        return 'Печалька, с курой закончился.';
    }
    return '';
};
