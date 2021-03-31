var cityList = ['Авдіївка', 'Алмазна', 'Алупка', 'Алушта', 'Алчевськ', 'Амвросіївка', 'Ананьїв', 'Андрушівка', 'Антрацит', 'Апостолове', 'Армянськ', 'Арциз', 'Балаклія', 'Балта', 'Бар', 'Баранівка', 'Барвінкове', 'Батурин;', 'Бахмач', 'Бахмут', 'Бахчисарай', 'Баштанка', 'Белз', 'Бердичів', 'Бердянськ', 'Берегове', 'Бережани', 'Березань', 'Березівка', 'Березне', 'Берестечко', 'Берислав', 'Бершадь', 'Бібрка', 'Біла Церква', 'Білгород-Дністровський', 'Білицьке', 'Білогірськ', 'Білозерське', 'Білопілля', 'Біляївка', 'Благовіщенське', 'Бобринець', 'Бобровиця', 'Богодухів', 'Богуслав', 'Боково-Хрустальне', 'Болград', 'Болехів', 'Борзна', 'Борислав', 'Бориспіль', 'Борщів', 'Боярка', 'Бровари', 'Броди', 'Брянка', 'Бунге', 'Буринь', 'Бурштин', 'Буськ', 'Буча', 'Бучач', 'Валки', 'Вараш', 'Василівка', 'Васильків', 'Ватутіне', 'Вашківці', 'Великі Мости', 'Верхівцеве', 'Верхньодніпровськ', 'Вижниця', 'Вилкове', 'Винники', 'Виноградів', 'Вишгород', 'Вишневе', 'Вільногірськ', 'Вільнянськ', 'Вінниця', 'Вовчанськ', 'Вознесенівка', 'Вознесенськ', 'Волноваха', 'Володимир-Волинський', 'Волочиськ', 'Ворожба', 'Вуглегірськ', 'Вугледар', 'Гадяч', 'Гайворон', 'Гайсин', 'Галич', 'Генічеськ', 'Герца', 'Гірник', 'Гірське', 'Глиняни', 'Глобине', 'Глухів', 'Гнівань', 'Гола Пристань', 'Голубівка', 'Горішні Плавні', 'Горлівка', 'Городенка', 'Городище', 'Городня', 'Городок', 'Городок', 'Горохів', 'Гребінка', 'Гуляйполе', 'Дебальцеве', 'Деражня', 'Дергачі', 'Джанкой', 'Дніпро', 'Дніпрорудне', 'Добромиль', 'Добропілля', 'Довжанськ', 'Докучаєвськ', 'Долина', 'Долинська', 'Донецьк', 'Дрогобич', 'Дружба', 'Дружківка', 'Дубляни', 'Дубно', 'Дубровиця', 'Дунаївці', 'Енергодар', 'Євпаторія', 'Єнакієве', 'Жашків', 'Жданівка', 'Жидачів', 'Житомир', 'Жмеринка', 'Жовква', 'Жовті Води', 'Заводське', 'Залізне', 'Заліщики', 'Запоріжжя', 'Заставна', 'Збараж', 'Зборів', 'Звенигородка', 'Здолбунів', 'Зеленодольськ', 'Зимогір\'я', 'Зіньків', 'Зміїв', 'Знам\'янка', 'Золоте', 'Золотоноша', 'Золочів', 'Зоринськ', 'Зугрес', 'Івано-Франківськ', 'Ізмаїл', 'Ізюм', 'Ізяслав', 'Іллінці', 'Іловайськ', 'Інкерман', 'Ірміно', 'Ірпінь', 'Іршава', 'Ічня', 'Кагарлик', 'Кадіївка', 'Калинівка', 'Калуш', 'Кальміуське', 'Камінь-Каширський', 'Кам\'янець-Подільський', 'Кам\'янка', 'Кам\'янка-Бузька', 'Кам\'янка-Дніпровська', 'Кам\'янське', 'Канів', 'Карлівка', 'Каховка', 'Керч', 'Київ', 'Кипуче', 'Ківерці', 'Кілія', 'Кіровоград', 'Кіцмань', 'Кобеляки', 'Ковель', 'Кодима', 'Козятин', 'Коломия', 'Комарно', 'Конотоп', 'Копичинці', 'Корець', 'Коростень', 'Коростишів', 'Корсунь-Шевченківський', 'Корюківка', 'Косів', 'Костопіль', 'Костянтинівка', 'Краматорськ', 'Красилів', 'Красногорівка', 'Красноград', 'Красноперекопськ (Яни Капу)', 'Кременець', 'Кременчук', 'Кремінна', 'Кривий Ріг', 'Кролевець', 'Куп\'янськ', 'Курахове', 'Ладижин', 'Ланівці', 'Лебедин', 'Лиман', 'Липовець', 'Лисичанськ', 'Лозова', 'Лохвиця', 'Лубни', 'Луганськ', 'Лутугине', 'Луцьк', 'Львів', 'Любомль', 'Люботин', 'Макіївка', 'Мала Виска', 'Малин', 'Мар\'їнка', 'Марганець', 'Маріуполь', 'Мелітополь', 'Мена', 'Мерефа', 'Миколаїв', 'Миколаїв', 'Миколаївка', 'Миргород', 'Мирноград', 'Миронівка', 'Міусинськ', 'Могилів-Подільський', 'Молодогвардійськ', 'Молочанськ', 'Монастириська', 'Монастирище', 'Моршин', 'Моспине', 'Мостиська', 'Мукачеве', 'Надвірна', 'Немирів', 'Нетішин', 'Ніжин', 'Нікополь', 'Нова Каховка', 'Нова Одеса', 'Новгород-Сіверський', 'Новий Буг', 'Новий Калинів', 'Новий Розділ', 'Новоазовськ', 'Нововолинськ', 'Новоград-Волинський', 'Новогродівка', 'Новодністровськ', 'Новодружеськ', 'Новомиргород', 'Новомосковськ', 'Новоселиця', 'Новоукраїнка', 'Новояворівськ', 'Носівка', 'Обухів', 'Овруч', 'Одеса', 'Олевськ', 'Олександрівськ', 'Олександрія', 'Олешки', 'Оріхів', 'Остер', 'Острог', 'Охтирка', 'Очаків', 'Павлоград', 'Первомайськ', 'Первомайськ', 'Первомайський', 'Перевальськ', 'Перемишляни', 'Перечин', 'Перещепине', 'Переяслав-Хмельницький', 'Першотравенськ', 'Петрово-Красносілля', 'Пирятин', 'Південне', 'Підгайці', 'Підгородне', 'Погребище', 'Подільськ', 'Покров', 'Покровськ', 'Пологи', 'Полонне', 'Полтава', 'Помічна', 'Попасна', 'Почаїв', 'Привілля', 'Прилуки', 'Приморськ', 'Прип\'ять', 'Пустомити', 'Путивль', 'П\'ятихатки', 'Рава-Руська', 'Радехів', 'Радивилів', 'Радомишль', 'Рахів', 'Рені', 'Ржищів', 'Рівне', 'Ровеньки', 'Рогатин', 'Родинське', 'Рожище', 'Роздільна', 'Ромни', 'Рубіжне', 'Рудки', 'Саки', 'Самбір', 'Сарни', 'Свалява', 'Сватове', 'Світловодськ', 'Світлодарськ', 'Святогірськ', 'Севастополь', 'Селидове', 'Семенівка', 'Середина-Буда', 'Сєвєродонецьк', 'Синельникове', 'Сіверськ', 'Сімферополь', 'Скадовськ', 'Скалат', 'Сквира', 'Сколе', 'Славута', 'Славутич', 'Слов\'янськ', 'Сміла', 'Снігурівка', 'Сніжне', 'Сновськ', 'Снятин', 'Сокаль', 'Сокиряни', 'Соледар', 'Сорокине', 'Соснівка', 'Старий Крим', 'Старий Самбір', 'Старобільськ', 'Старокостянтинів', 'Стебник', 'Сторожинець', 'Стрий', 'Судак', 'Судова Вишня', 'Суми', 'Суходільськ', 'Таврійськ', 'Тальне', 'Тараща', 'Татарбунари', 'Теплодар', 'Теребовля', 'Тернівка', 'Тернопіль', 'Тетіїв', 'Тисмениця', 'Тлумач', 'Токмак', 'Торецьк', 'Тростянець', 'Трускавець', 'Тульчин', 'Турка', 'Тячів', 'Угнів', 'Ужгород', 'Узин', 'Українка', 'Українськ', 'Умань', 'Устилуг', 'Фастів', 'Феодосія', 'Харків', 'Харцизьк', 'Херсон', 'Хирів', 'Хмельницький', 'Хмільник', 'Ходорів', 'Хорол', 'Хоростків', 'Хотин', 'Хрестівка', 'Христинівка', 'Хрустальний', 'Хуст', 'Часів Яр', 'Червоноград', 'Черкаси', 'Чернівці', 'Чернігів', 'Чигирин', 'Чистякове', 'Чоп', 'Чорнобиль', 'Чорноморськ', 'Чортків', 'Чугуїв', 'Чуднів', 'Шаргород', 'Шахтарськ', 'Шепетівка', 'Шостка', 'Шпола', 'Шумськ', 'Щастя', 'Щолкіне', 'Южне', 'Южноукраїнськ', 'Яворів', 'Яготин', 'Ялта', 'Ямпіль', 'Яремче', 'Ясинувата'];
var peoples = [{
    "fio": "Иноземцева Надежда",
    "image": "http://static.best-gooods.ru/img/women/women1.jpg",
    "sex": 0
}, {
    "fio": "Тотенкова Регина",
    "image": "http://static.best-gooods.ru/img/women/women2.jpg",
    "sex": 0
}, {
    "fio": "Курдина Эмилия",
    "image": "http://static.best-gooods.ru/img/women/women3.jpg",
    "sex": 0
}, {
    "fio": "Стаина Анна",
    "image": "http://static.best-gooods.ru/img/women/women4.jpg",
    "sex": 0
}, {
    "fio": "Чуличкова Анастасия",
    "image": "http://static.best-gooods.ru/img/women/women5.jpg",
    "sex": 0
}, {
    "fio": "Шеркова Евгения",
    "image": "http://static.best-gooods.ru/img/women/women6.jpg",
    "sex": 0
}, {
    "fio": "Андрюхина Нина",
    "image": "http://static.best-gooods.ru/img/women/women7.jpg",
    "sex": 0
}, {
    "fio": "Катериночкина Анфиса",
    "image": "http://static.best-gooods.ru/img/women/women8.jpg",
    "sex": 0
}, {
    "fio": "Головина Анна",
    "image": "http://static.best-gooods.ru/img/women/women9.jpg",
    "sex": 0
}, {
    "fio": "Чупрова Екатерина",
    "image": "http://static.best-gooods.ru/img/women/women10.jpg",
    "sex": 0
}, {
    "fio": "Холопова Виктория",
    "image": "http://static.best-gooods.ru/img/women/women11.jpg",
    "sex": 0
}, {
    "fio": "Крупина Мария",
    "image": "http://static.best-gooods.ru/img/women/women12.jpg",
    "sex": 0
}, {
    "fio": "Полевщикова Кристина",
    "image": "http://static.best-gooods.ru/img/women/women13.jpg",
    "sex": 0
}, {
    "fio": "Пьянкова Диана",
    "image": "http://static.best-gooods.ru/img/women/women14.jpg",
    "sex": 0
}, {
    "fio": "Буланова Яна",
    "image": "http://static.best-gooods.ru/img/women/women15.jpg",
    "sex": 0
}, {
    "fio": "Цейдлерина Мария",
    "image": "http://static.best-gooods.ru/img/women/women16.jpg",
    "sex": 0
}, {
    "fio": "Щеголева Светлана",
    "image": "http://static.best-gooods.ru/img/women/women17.jpg",
    "sex": 0
}, {
    "fio": "Янкелевич Алина",
    "image": "http://static.best-gooods.ru/img/women/women18.jpg",
    "sex": 0
}, {
    "fio": "Якушевич Наталья",
    "image": "http://static.best-gooods.ru/img/women/women19.jpg",
    "sex": 0
}, {
    "fio": "Фомичева Диана",
    "image": "http://static.best-gooods.ru/img/women/women20.jpg",
    "sex": 0
}, {
    "fio": "Пережогина Виктория",
    "image": "http://static.best-gooods.ru/img/women/women21.jpg",
    "sex": 0
}, {
    "fio": "Ячменькова Василиса",
    "image": "http://static.best-gooods.ru/img/women/women22.jpg",
    "sex": 0
}, {
    "fio": "Рябова Дарья",
    "image": "http://static.best-gooods.ru/img/women/women23.jpg",
    "sex": 0
}, {
    "fio": "Домышева Юлия",
    "image": "http://static.best-gooods.ru/img/women/women24.jpg",
    "sex": 0
}, {
    "fio": "Милова Татьяна",
    "image": "http://static.best-gooods.ru/img/women/women25.jpg",
    "sex": 0
}, {
    "fio": "Шипицына Анна",
    "image": "http://static.best-gooods.ru/img/women/women26.jpg",
    "sex": 0
}, {
    "fio": "Протасова Евгения",
    "image": "http://static.best-gooods.ru/img/women/women27.jpg",
    "sex": 0
}, {
    "fio": "Молодыха Алиса",
    "image": "http://static.best-gooods.ru/img/women/women28.jpg",
    "sex": 0
}, {
    "fio": "Коржева Ксения",
    "image": "http://static.best-gooods.ru/img/women/women29.jpg",
    "sex": 0
}, {
    "fio": "Кузнецова Вероника",
    "image": "http://static.best-gooods.ru/img/women/women30.jpg",
    "sex": 0
}, {
    "fio": "Сукина Алиса",
    "image": "http://static.best-gooods.ru/img/women/women31.jpg",
    "sex": 0
}, {
    "fio": "Перова ﻿Агата",
    "image": "http://static.best-gooods.ru/img/women/women32.jpg",
    "sex": 0
}, {
    "fio": "Коржакова Ольга",
    "image": "http://static.best-gooods.ru/img/women/women33.jpg",
    "sex": 0
}, {
    "fio": "Ёжина Вероника",
    "image": "http://static.best-gooods.ru/img/women/women34.jpg",
    "sex": 0
}, {
    "fio": "Абрамович Валентина",
    "image": "http://static.best-gooods.ru/img/women/women35.jpg",
    "sex": 0
}, {
    "fio": "Крылова Наталья",
    "image": "http://static.best-gooods.ru/img/women/women36.jpg",
    "sex": 0
}, {
    "fio": "Проскуркина Александра",
    "image": "http://static.best-gooods.ru/img/women/women37.jpg",
    "sex": 0
}, {
    "fio": "Терехова Юлия",
    "image": "http://static.best-gooods.ru/img/women/women38.jpg",
    "sex": 0
}, {
    "fio": "Труфанова Варвара",
    "image": "http://static.best-gooods.ru/img/women/women39.jpg",
    "sex": 0
}, {
    "fio": "Батурина Марина",
    "image": "http://static.best-gooods.ru/img/women/women40.jpg",
    "sex": 0
}, {
    "fio": "Васнецова Нина",
    "image": "http://static.best-gooods.ru/img/women/women41.jpg",
    "sex": 0
}, {
    "fio": "Перевалова Надежда",
    "image": "http://static.best-gooods.ru/img/women/women42.jpg",
    "sex": 0
}, {
    "fio": "Рошета Любовь",
    "image": "http://static.best-gooods.ru/img/women/women43.jpg",
    "sex": 0
}, {
    "fio": "Мосякова Татьяна",
    "image": "http://static.best-gooods.ru/img/women/women44.jpg",
    "sex": 0
}, {
    "fio": "Носова Анастасия",
    "image": "http://static.best-gooods.ru/img/women/women45.jpg",
    "sex": 0
}, {
    "fio": "Типалова Юнона",
    "image": "http://static.best-gooods.ru/img/women/women46.jpg",
    "sex": 0
}, {
    "fio": "Колесникова Инесса",
    "image": "http://static.best-gooods.ru/img/women/women47.jpg",
    "sex": 0
}, {
    "fio": "Якуничева Анна",
    "image": "http://static.best-gooods.ru/img/women/women48.jpg",
    "sex": 0
}, {
    "fio": "Левина Евгения",
    "image": "http://static.best-gooods.ru/img/women/women49.jpg",
    "sex": 0
}, {
    "fio": "Агафонова Виктория",
    "image": "http://static.best-gooods.ru/img/women/women50.jpg",
    "sex": 0
}, {
    "fio": "Дуркина Антонина",
    "image": "http://static.best-gooods.ru/img/women/women51.jpg",
    "sex": 0
}, {
    "fio": "Игошина Мария",
    "image": "http://static.best-gooods.ru/img/women/women52.jpg",
    "sex": 0
}, {
    "fio": "Званцова Светлана",
    "image": "http://static.best-gooods.ru/img/women/women53.jpg",
    "sex": 0
}, {
    "fio": "Хлопонина Елена",
    "image": "http://static.best-gooods.ru/img/women/women54.jpg",
    "sex": 0
}, {
    "fio": "Суботина Изабелла",
    "image": "http://static.best-gooods.ru/img/women/women55.jpg",
    "sex": 0
}, {
    "fio": "Дроздова Марфа",
    "image": "http://static.best-gooods.ru/img/women/women56.jpg",
    "sex": 0
}, {
    "fio": "Милютина Изабелла",
    "image": "http://static.best-gooods.ru/img/women/women57.jpg",
    "sex": 0
}, {
    "fio": "Гнусарева Ангелина",
    "image": "http://static.best-gooods.ru/img/women/women58.jpg",
    "sex": 0
}, {
    "fio": "Домаш Вячеслав",
    "image": "http://static.best-gooods.ru/img/men/men1.jpg",
    "sex": 1
}, {
    "fio": "Лагутов Руслан",
    "image": "http://static.best-gooods.ru/img/men/men2.jpg",
    "sex": 1
}, {
    "fio": "Степанков Радислав",
    "image": "http://static.best-gooods.ru/img/men/men3.jpg",
    "sex": 1
}, {
    "fio": "Перешивкин Ростислав",
    "image": "http://static.best-gooods.ru/img/men/men4.jpg",
    "sex": 1
}, {
    "fio": "Кобзев Платон",
    "image": "http://static.best-gooods.ru/img/men/men5.jpg",
    "sex": 1
}, {
    "fio": "Кабанов Игнатий",
    "image": "http://static.best-gooods.ru/img/men/men6.jpg",
    "sex": 1
}, {
    "fio": "Чепурин Николай",
    "image": "http://static.best-gooods.ru/img/men/men7.jpg",
    "sex": 1
}, {
    "fio": "Крымов Изяслав",
    "image": "http://static.best-gooods.ru/img/men/men8.jpg",
    "sex": 1
}, {
    "fio": "Собчак Евгений",
    "image": "http://static.best-gooods.ru/img/men/men9.jpg",
    "sex": 1
}, {
    "fio": "Былинкин Максим",
    "image": "http://static.best-gooods.ru/img/men/men10.jpg",
    "sex": 1
}, {
    "fio": "Архипов Сергей",
    "image": "http://static.best-gooods.ru/img/men/men11.jpg",
    "sex": 1
}, {
    "fio": "Донцов Самсон",
    "image": "http://static.best-gooods.ru/img/men/men12.jpg",
    "sex": 1
}, {
    "fio": "Стаин Владилен",
    "image": "http://static.best-gooods.ru/img/men/men13.jpg",
    "sex": 1
}, {
    "fio": "Лызлов Владислав",
    "image": "http://static.best-gooods.ru/img/men/men14.jpg",
    "sex": 1
}, {
    "fio": "Ягужинский Аристарх",
    "image": "http://static.best-gooods.ru/img/men/men15.jpg",
    "sex": 1
}, {
    "fio": "Фризов Владимир",
    "image": "http://static.best-gooods.ru/img/men/men16.jpg",
    "sex": 1
}, {
    "fio": "Крупнов Дмитрий",
    "image": "http://static.best-gooods.ru/img/men/men17.jpg",
    "sex": 1
}, {
    "fio": "Ябловский Вадим",
    "image": "http://static.best-gooods.ru/img/men/men18.jpg",
    "sex": 1
}, {
    "fio": "Гусенков Самсон",
    "image": "http://static.best-gooods.ru/img/men/men19.jpg",
    "sex": 1
}, {
    "fio": "Панфёров Семён",
    "image": "http://static.best-gooods.ru/img/men/men20.jpg",
    "sex": 1
}, {
    "fio": "Ясинский Павел",
    "image": "http://static.best-gooods.ru/img/men/men21.jpg",
    "sex": 1
}, {
    "fio": "Тетерев Глеб",
    "image": "http://static.best-gooods.ru/img/men/men22.jpg",
    "sex": 1
}, {
    "fio": "Шлыков Николай",
    "image": "http://static.best-gooods.ru/img/men/men23.jpg",
    "sex": 1
}, {
    "fio": "Козлов Илья",
    "image": "http://static.best-gooods.ru/img/men/men24.jpg",
    "sex": 1
}, {
    "fio": "Амалиев Максим",
    "image": "http://static.best-gooods.ru/img/men/men25.jpg",
    "sex": 1
}, {
    "fio": "Паулкин Ефим",
    "image": "http://static.best-gooods.ru/img/men/men26.jpg",
    "sex": 1
}, {
    "fio": "Колганов Герман",
    "image": "http://static.best-gooods.ru/img/men/men27.jpg",
    "sex": 1
}, {
    "fio": "Саламатов Николай",
    "image": "http://static.best-gooods.ru/img/men/men28.jpg",
    "sex": 1
}, {
    "fio": "Сподарев Степан",
    "image": "http://static.best-gooods.ru/img/men/men29.jpg",
    "sex": 1
}, {
    "fio": "Бочкарёв Владимир",
    "image": "http://static.best-gooods.ru/img/men/men30.jpg",
    "sex": 1
}, {
    "fio": "Опекунов Вячеслав",
    "image": "http://static.best-gooods.ru/img/men/men31.jpg",
    "sex": 1
}, {
    "fio": "Телицын Тимофей",
    "image": "http://static.best-gooods.ru/img/men/men32.jpg",
    "sex": 1
}, {
    "fio": "Ямлиханов Андрей",
    "image": "http://static.best-gooods.ru/img/men/men33.jpg",
    "sex": 1
}, {
    "fio": "Малиновский Владислав",
    "image": "http://static.best-gooods.ru/img/men/men34.jpg",
    "sex": 1
}, {
    "fio": "Гребнев Ростислав",
    "image": "http://static.best-gooods.ru/img/men/men35.jpg",
    "sex": 1
}, {
    "fio": "Кузанов Леонид",
    "image": "http://static.best-gooods.ru/img/men/men36.jpg",
    "sex": 1
}, {
    "fio": "Ягфаров Серафим",
    "image": "http://static.best-gooods.ru/img/men/men37.jpg",
    "sex": 1
}, {
    "fio": "Цитников Всеволод",
    "image": "http://static.best-gooods.ru/img/men/men38.jpg",
    "sex": 1
}, {
    "fio": "Владимиров Артём",
    "image": "http://static.best-gooods.ru/img/men/men39.jpg",
    "sex": 1
}, {
    "fio": "Банин Александр",
    "image": "http://static.best-gooods.ru/img/men/men40.jpg",
    "sex": 1
}, {
    "fio": "Капица Кирилл",
    "image": "http://static.best-gooods.ru/img/men/men41.jpg",
    "sex": 1
}, {
    "fio": "Колбин Клавдий",
    "image": "http://static.best-gooods.ru/img/men/men42.jpg",
    "sex": 1
}, {
    "fio": "Володин Зиновий",
    "image": "http://static.best-gooods.ru/img/men/men43.jpg",
    "sex": 1
}, {
    "fio": "Уланов Иван",
    "image": "http://static.best-gooods.ru/img/men/men44.jpg",
    "sex": 1
}, {
    "fio": "Седых Кирилл",
    "image": "http://static.best-gooods.ru/img/men/men45.jpg",
    "sex": 1
}, {
    "fio": "Туровский Лев",
    "image": "http://static.best-gooods.ru/img/men/men46.jpg",
    "sex": 1
}, {
    "fio": "Яснов Ефим",
    "image": "http://static.best-gooods.ru/img/men/men47.jpg",
    "sex": 1
}, {
    "fio": "Москвин ﻿Артем",
    "image": "http://static.best-gooods.ru/img/men/men48.jpg",
    "sex": 1
}, {
    "fio": "Измайлов Герман",
    "image": "http://static.best-gooods.ru/img/men/men49.jpg",
    "sex": 1
}, {
    "fio": "Цыганов Егор",
    "image": "http://static.best-gooods.ru/img/men/men50.jpg",
    "sex": 1
}, {
    "fio": "Голумбовский Дмитрий",
    "image": "http://static.best-gooods.ru/img/men/men51.jpg",
    "sex": 1
}, {
    "fio": "Аничков Кирилл",
    "image": "http://static.best-gooods.ru/img/men/men52.jpg",
    "sex": 1
}, {
    "fio": "Канаш Степан",
    "image": "http://static.best-gooods.ru/img/men/men53.jpg",
    "sex": 1
}, {
    "fio": "Клепахов Дмитрий",
    "image": "http://static.best-gooods.ru/img/men/men54.jpg",
    "sex": 1
}, {
    "fio": "Колесников Анатолий",
    "image": "http://static.best-gooods.ru/img/men/men55.jpg",
    "sex": 1
}, {
    "fio": "Цветков Леонид",
    "image": "http://static.best-gooods.ru/img/men/men56.jpg",
    "sex": 1
}, {
    "fio": "Мишин Ефим",
    "image": "http://static.best-gooods.ru/img/men/men57.jpg",
    "sex": 1
}, {
    "fio": "Борисов Митрофан",
    "image": "http://static.best-gooods.ru/img/men/men58.jpg",
    "sex": 1
}];

peoples = shuffleArray(peoples);
var cityName = '';
function detectCity() {
 var geolocation = ymaps.geolocation;
 cityName = geolocation.city;
 }
 $(function () {
 ymaps.ready(detectCity);
 });

function showTips(bill, bill2) {
    this.bill = bill;
    this.bill2 = bill2;
    this.showItem = 0;
    this.generateHTML = function (image, fio, city, bill, bill2, sex) {
        var top = 50;
        if ($('.freezing-info').length) {
            top = 229;
        }
        var nowMoney = bill;
        if(getRandomInt(0,1)){
            nowMoney = bill2;
        }
        return (
        '<div class="notify" style="font-family: \'Roboto\', sans-serif; z-index:991000;display: none;opacity:0.1;'+
'background: rgb(0,220,234); /* Old browsers */ background: -moz-linear-gradient(top,  rgba(0,220,234,1) 0%, rgba(1,114,197,1) 100%); /* FF3.6-15 */'+
'background: -webkit-linear-gradient(top,  rgba(0,220,234,1) 0%,rgba(1,114,197,1) 100%); /* Chrome10-25,Safari5.1-6 */'+
'background: linear-gradient(to bottom,  rgba(0,220,234,1) 0%,rgba(1,114,197,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */'+
'filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#00dcea\', endColorstr=\'#0172c5\',GradientType=0 ); /* IE6-9 */'+
'border-radius:10px;padding:30px;width:330px;height:110px;position:fixed;top:' + top + 'px;right:20px;box-sizing: border-box;color: white;">' +
        '<img src="' + image + '" width="50" height="50" style="width:50px;box-sizing:content-box; height: 50px; padding-right:20px; float: left;">' +
        '<div class="notify-text" style="font-size: 14px;line-height:normal;">' + fio + ', г. ' + city + ', сделал' + (sex ? '' : 'а') + ' заказ на ' + nowMoney + ', кол-во 1шт</div>' +
        '</div>'
        );
    };
    this.addItem = function (html) {
        $(html).appendTo($(document.body));
        $('.notify').css('display', 'block');
        $('.notify').animate({
            opacity: 1.0
        }, 'slow');
    };
    this.bindEvent = function () {
        setTimeout(function () {
            $('.notify').animate({
                opacity: 0.1
            }, 'slow', function () {
                $('.notify').css('display', 'none');
                $('.notify').remove();
            });
        }, 6000);
    };
    this.getIntervalAction = function () {
        var self = this;
        return function () {
            var item = peoples[self.showItem];
            if (!item) {
                self.showItem = -1;
                var item = peoples[0];
            }
            self.showItem++;
            var city = cityName;

            if (getRandomInt(1, 2)) {            		
            		var cityid=getRandomInt(0, cityList.length-1); 
            		//console.log(cityid);
                city = cityList[cityid];
            }
            var html = self.generateHTML('/common/modules/mod/ikonka.png', item.fio, city, self.bill, self.bill2, item.sex);
            self.addItem(html);
            self.bindEvent();
        }
    };
    setInterval(this.getIntervalAction(), 25000);
}
function addDeliveryPopup() {
    this.generateHTML = function (city) {
        return (
        '<div class="delivery-notify" style="font-family: Arial; z-index: 991000;background: #363636;border: 1px solid white;padding:30px;padding-top: 17px;width:270px;height:80px;position:fixed;bottom:0px;left:0px;box-sizing: border-box;color: white;">' +
        '<div class="close-delivery-notify" style="width:15px;height:15px;cursor: pointer;position:absolute;right:0;top:0;border:1px solid #fff; font-size: 22px;line-height: 0.6;text-align: center;">&times;</div>' +
        '<div class="notify-text" style="color: white !important;">Действует быстрая доставка в г.' + city + '</div>' +
        '</div>'
        );
    };
    this.bindEvents = function () {
        $('.close-delivery-notify').on('click', function () {
            $('.delivery-notify').remove();
        });
        $(document).on('wheel', function () {
            if ($(document).scrollTop() + $(window).height() == $(document).height()) {
                if ($('.delivery-notify').length) {
                    $('.delivery-notify').remove();
                }
            }
        });
    };
    this.getShowAction = function () {
        var self = this;
        return function () {
            var html = self.generateHTML(cityName);
            $(html).appendTo($(document.body));
            self.bindEvents();
        };
    };

    setTimeout(this.getShowAction(), 15000);
}