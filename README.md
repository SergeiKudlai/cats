# Level 1

#### 1. Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения
* **Пользователя** : Пользователь при использовании продукта должен без затруднений понимать интерфейс продукта. Интерактивные элементы должны быть отзывчивые, каждое состояние элемента должно иметь свою особенность при взаимодействии с ним. Элементы не должны наезжать друг на друга и контент всегда должен быть доступен для взаимодействия с пользователем.

* **Менеджера проекта** : Весь код должен соответствовать техническому заданию.

* **Дизайнера** : Продукт не должен вызывать отвращения, цветовая гамма должна быть приятна к восприятию, шрифты читаемые при разных разрешениях экрана устройства, изображение и задний фон должен поддерживать общую концепцию продукта.

* **Верстальщика** : Верстка должна быть кросс-браузерная и адаптивная, должна соблюдаться семантика. Отсутствовать повторения кода (DRY Don’t Repeat Yourself) повторяющийся код должен быть сгруппирован. Соблюдение иерархии заголовков, использование БЭМ методологии, интерактивные элементы которые не имеют подписей должны иметь скрытый текст для скрин ридеров. Верстка должна соответствовать основным критериям.

* **Клиентского программиста** : Должны соблюдаться принципы KISS, DRY, YAGNI. Нейминг должен быть таким, что бы было понятно за, что отвечает переменная или функция без оставления комментария. Модульность. Обработка ошибок при работе с API. Покрытие кода тестами. Кроссбраузерность, адаптивность, семантика. БЭМ

* **Серверного программиста** : Проект не перегружает сервер запросами. Использование  кэширования, cookie.
***
#### 2. Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки.Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.   

* Применение методологии БЭМ.Переменных css/scss. Код который может дублирроваться сгрупироыван в отдельный блок. Применение относительных велечин. Созданием глобальных классов для повторяющихся элементов. Использование инструментов у которых высокая поддежрка на сайтах.

* Из глобальных проектов я делал финальный проект, использовал библиотеку React клон hh.ru или rabota.by. Использовал БЭМ, React, Redux, TS, SCSS, для работы с API(FETCH).
***
#### 3. Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать

* При использовании респонсив используется гибкая структура страницы (относительные еденицы). При уменьшении ширины страницы весь контент сжимается, элементы сокращаются относительно друг друга. При работе с респонсив используются media запросы, которые позволяют применять определенные стили на разных разрешениях и разной орентации экрана.

* При использовании адаптивной разработчик заранее создаёт шаблоны под определенные девайсы. Когда пользователь заходит на сайт сервер определяет с какого девайса был осуществлен вход и подгружает соответствующий шаблон.

* В проектах использовал Responsive Web Design. Тестировал в веб-браузере в среде разработчика, после подгружал страницу на различных гаджетах. 
***
#### 4. Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода. 

* Webpack, SCSS, TS, React, Potsman, ESlint, Prettier , GitHub. IDE: VSCode(различные плагины). CHrome : dev tools.
***
#### 5. Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике? 

* Через Dev Tools определить проблему.
***
#### 6. Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия? 
* Связаться с дизайнером и уточнить. При отсутствии возможности связи с дизайнером посоветоваться Team Leader. Задать интерактивным элементам минимальную интерактивность при разных состояниях(в переменные) пока не прояснится ситуация.
***
#### 7.Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). Какое направление развития вам более близко: JS-программирование, HTML/CSSверстка или что-то ещё? Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?
1. https://developer.mozilla.org/ru/
2. https://webref.ru/
3. https://learn.javascript.ru/
4. https://habr.com/ru/all/
5. https://ru.reactjs.org/

* JS/ TS программирование, React developer.

* Психология, Персональный менеджмент.
***
#### 8. Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.
* https://github.com/SergeiKudlai/rsschool-cv/blob/gh-pages/cv.md
* https://sergeikudlai.github.io/CV/

# Level 2
* https://sergeikudlai.github.io/cats/
* https://github.com/SergeiKudlai/cats/tree/develop 
(for the disabled state add the disabled class to li)
