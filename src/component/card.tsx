import React from 'react';
import './card.scss';
import { getValueFood } from '../utils/getValueFood';
import { getClickHandler } from '../utils/getStylesElem';

export const Card: React.FC<{ value: string }> = (props) => {
    const { value } = props;

    return (
        <article className="card" onClick={getClickHandler}>
            <span className="card__text">Сказочное заморское яство</span>

            <h2 className="card__title">Нямушка</h2>

            <p className="card__subtitle">{getValueFood(value).name}</p>

            <div className="card__box">
                <span className="card__box-text">{`${getValueFood(value).amount} порций`}</span>
                <span className="card__box-text">{getValueFood(value).mouse}</span>
                <span className="card__box-text">{getValueFood(value).mouse[0] === '5' ? 'заказчик доволен' : ''}</span>
            </div>

            <span className="card__weight">
                <ul className="card__weight-box">
                    <li className="card__weight-item">{getValueFood(value).weight}</li>
                    <li className="card__weight-item">кг</li>
                </ul>
            </span>
        </article>
    );
};
