import React, { MouseEvent, useContext } from 'react';
import { getClickHandler } from '../utils/getStylesElem';
import { CardContext } from '../store/card-context';
import { setTextSelect } from '../utils/getValueFood';

export const BtnBuy: React.FC<{ value: string }> = (props) => {
    const { text, btnClick } = useContext(CardContext);

    const setFunctionClick = (e: MouseEvent) => {
        getClickHandler(e);
        btnClick(e);
    };

    return (
        <ul className="cats__inner">
            <li className="cats__text">
                {text}
                <button className="cats__btn" type="button" onClick={(e) => setFunctionClick(e)}>
                    Купи
                </button>
            </li>

            <li className="cats__text-select">{setTextSelect(props.value)}</li>
        </ul>
    );
};
