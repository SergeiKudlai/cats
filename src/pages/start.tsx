import React from 'react';
import './cats.scss';
import { Card } from '../component/card';
import { foodValud } from '../ts/enum';
import { BtnBuy } from '../component/btnBuy';

export const StartPage = () => {
    return (
        <main className="main">
            <section className="cats container">
                <h1 className="cats__title">Ты сегодня покормил кота?</h1>

                <ul className="cats__list">
                    <li className="cats__item cats__item--foie-gras">
                        <Card value={foodValud.foieGras} />
                        <BtnBuy value={foodValud.foieGras} />
                    </li>

                    <li className="cats__item cats__item--fish">
                        <Card value={foodValud.fish} />
                        <BtnBuy value={foodValud.fish} />
                    </li>

                    <li className="cats__item cats__item--chicken">
                        <Card value={foodValud.chicken} />
                        <BtnBuy value={foodValud.chicken} />
                    </li>
                </ul>
            </section>
        </main>
    );
};
