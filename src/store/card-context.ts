import React from 'react';
import { IContext } from '../ts/interface';

export const CardContext = React.createContext<IContext>({
    text: '',
    btnClick: (): void => {
        ('');
    },
});
