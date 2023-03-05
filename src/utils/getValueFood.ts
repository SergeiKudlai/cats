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
