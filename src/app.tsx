import React, { MouseEvent } from 'react';
import { StartPage } from './pages/start';
import { CardContext } from './store/card-context';

const data = {
    text: 'Чего сидишь? Порадуй котэ,',
    btnClick: function (param: MouseEvent) {
        const { target } = param;
        const boxElem = (target as HTMLButtonElement).closest('.cats__inner');
        boxElem?.querySelector('.cats__text')?.classList.add('active');
        boxElem?.querySelector('.cats__text-select')?.classList.add('active');
    },
};

export const App = () => (
    <CardContext.Provider value={data}>
        <StartPage />
    </CardContext.Provider>
);
