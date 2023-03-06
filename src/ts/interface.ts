import { MouseEvent } from 'react';
export interface IData {
    name: string;
    amount: string;
    mouse: string;
    weight: string;
}

export interface IContext {
    text: string;
    btnClick: (param: MouseEvent) => void;
}
