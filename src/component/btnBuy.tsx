import React, { useState, MouseEvent } from 'react';
import { getClickHandler } from '../utils/getStylesElem';
import { foodValud } from '../ts/enum';

export const BtnBuy: React.FC<{ value: string }> = (props) => {
    const [state, setState] = useState({
        text: 'Чего сидишь? Порадуй котэ',
        valid: true,
    });

    const setFunctionClick = (e: MouseEvent) => {
        getClickHandler(e);
        getValidBtn(e);
    };

    const getValidBtn = (e: MouseEvent) => {
        const { target } = e;
        getValidText();
        setState((current) => {
            return {
                ...current,
                text: 'Печень утки разварная с артишоками.',
                valid: false,
            };
        });
    };

    const getValidText = () => {
        const textElems = document.querySelectorAll('.cats__text');
        Array(...textElems).map((value) => {
            if ((value as HTMLElement).dataset.valid === 'false') {
                const boxElem = value.closest('.cats__item');
                value.remove();
                if (boxElem) {
                    boxElem.insertAdjacentHTML(
                        'beforeend',
                        `
                        <p class="cats__text">
                        ${state.text},
                        <button class="cats__btn"  type="button"
                        >Купи</button>
                    </p>
                    `
                    );
                }
            }
        });
    };

    return state.valid ? (
        <p className="cats__text">
            {state.text},
            <button
                className="cats__btn"
                type="button"
                onClick={(e) => setFunctionClick(e)}
                data-valid={state.valid}
                data-food={props.value}
            >
                Купи
            </button>
        </p>
    ) : (
        <p className="cats__text" data-valid={state.valid}>
            {state.text}
        </p>
    );
};
