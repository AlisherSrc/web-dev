export interface Item {
  id: number,
  name: string,
  description: string,
  cost: number,
  rating: number,
  images: string[],
  imagesNumber: number,
  likes: number,
  url: string
}


export const itemsList: Item[] = [
  {
    id: 1,
    name: "Смартфон Samsung Galaxy A13 4 ГБ/128 ГБ черный",
    cost: 87411,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/h78/49613712195614/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg",
              "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf2/hbe/49613711933470/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg",
              "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h5a/49613712621598/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-4.jpg"
    ], //{number of the image}.jpg
    description: "Технология NFC\n Цвет: черный \nТип экрана: PLS TFT LCD сенсорный, мультитач \nДиагональ: 6.6 дюйм \nРазмер оперативной памяти: 4 ГБ \nПроцессор: 8-ядерный Exynos 850 \nОбъем встроенной памяти: 128 ГБ Емкость аккумулятора: 5000 мАч",
    rating: 5,
    likes: 0,
    url:"https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item"
  },
  {
    id: 2,
    name: "Шкаф 88130, 130x45x175, серый",
    cost: 13374,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h03/hac/62758691995678/skaf-106609074-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he0/h9e/62758692454430/skaf-106609074-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h43/h74/62758692913182/skaf-106609074-3.jpg"
  ], //{number of the image}.jpg
    description: "    Тип установки: напольный Материал: металл, ,пластик, ,ткань Ширина, см: 130 Глубина, см: 45 Высота, см: 175 Цвет: серый Страна: Китай",
    rating: 4,
    likes: 0,
    url:"https://kaspi.kz/shop/p/88130-130x45x175-seryi-106609074/?c=750000000&tab=reviews#!/item"
  },
  {
    id: 3,
    name: "Кулер для воды A.E.L. V11s-TC UV черный",
    cost: 949915,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he7/hce/68808587083806/a-e-l-v11s-tc-uv-chernyi-108819584-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfe/h38/68808589017118/a-e-l-v11s-tc-uv-chernyi-108819584-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha1/h02/68808591704094/a-e-l-v11s-tc-uv-chernyi-108819584-3.jpg"
  ], //{number of the image}.jpg
    description: "Тип: пурифайер Установка: настольный Тип охлаждения: компрессорное Установка бутылки: отсутствует Подключение к водопроводу: Да Цвет: черный",
    rating: 5,
    likes: 0,
    url:"https://kaspi.kz/shop/p/a-e-l-v11s-tc-uv-chernyi-108819584/?c=750000000#!/item"
  },


  {
    id: 4,
    name: "Фитнес-браслет Sigma 24210 бирюзовый",
    cost: 109900,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he5/h1f/62157533970462/sigma-24210-biruzovyj-105170150-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/hbf/62157534396446/sigma-24210-biruzovyj-105170150-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h74/h53/62157534855198/sigma-24210-biruzovyj-105170150-3.jpg"
  ], //{number of the image}.jpg
    description: "    Поддержка платформ: Android, ,iOS Материал корпуса: нерж. сталь Цвет корпуса: черный Интерфейсы: USB",
    rating: 0,
    likes: 0,
    url:"https://kaspi.kz/shop/p/sigma-24210-birjuzovyi-105170150/?c=750000000#!/item"
  },

  {
    id: 5,
    name: "Микрофон Shure SM7B черный",
    cost: 302200,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha3/he0/31856128327710/shure-sm7b-black-22400184-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/h72/31856131047454/shure-sm7b-black-22400184-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h02/haa/31856133308446/shure-sm7b-black-22400184-3.jpg"
  ], //{number of the image}.jpg
    description: "Тип: динамический Конструкция: подвесной Назначение: для студии Тип подключения: проводной Радиосистема: Нет Разъемы: XLR Цвет: черный",
    rating: 5,
    likes: 0,
    url:"https://kaspi.kz/shop/p/shure-sm7b-chernyi-22400184/?c=750000000#!/item"
  },

  {
    id: 6,
    name: "Графический планшет HUION H610X",
    cost: 81988,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcf/h35/47761692327966/huion-h610x-103173114-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he3/he8/47761692786718/huion-h610x-103173114-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h55/h1a/47761693245470/huion-h610x-103173114-3.jpg"
  ], //{number of the image}.jpg
    description: "Тип: графический планшет Рабочая область: 254х159 мм Чувствительность к нажатию: 8192 Разрешение ввода: 5080 lpi",
    rating: 5,
    likes: 0,
    url:"https://kaspi.kz/shop/p/huion-h610x-103173114/?c=750000000#!/item"
  },
  {
    id: 7,
    name: "Телескоп LEVENHUK Skyline BASE 60T 60x700",
    cost: 108573,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/had/hed/32979233243166/levenhuk-skyline-base-60t-60x700-100416078-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h19/h32/32979242123294/levenhuk-skyline-base-60t-60x700-100416078-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf9/hf8/32979251396638/levenhuk-skyline-base-60t-60x700-100416078-3.jpg"
  ], //{number of the image}.jpg
    description: "Тип: рефрактор Диаметр объектива: 60 мм Фокусное расстояние объектива: 700 мм Установка: напольная/настольная",
    rating: 3,
    likes: 0,
    url:"https://kaspi.kz/shop/p/levenhuk-skyline-base-60t-60x700-100416078/?c=750000000#!/item"
  },
  {
    id: 8,
    name: "Head&Shoulders Ментол шампунь 200 мл",
    cost: 1330,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h24/h70/52274644090910/head-shoulders-2-v-1-mentol-200-ml-100189770-1-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf4/hcd/46706536251422/head-shoulders-2-v-1-mentol-200-ml-100189770-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he8/h1e/46706536710174/head-shoulders-2-v-1-mentol-200-ml-100189770-3.jpg"
  ], //{number of the image}.jpg
    description: "Действие: против перхоти, ,очищение Особенности: с кондиционером, ,для чувствительной кожи головы, ,для ежедневного применения Назначение: для женщин Тип волос: для всех типов, ,окрашенные Страна производства: Россия",
    rating: 5,
    likes: 0,
    url:"https://kaspi.kz/shop/p/head-shoulders-mentol-shampun-200-ml-100189770/?c=750000000#!/item"
  },
  {
    id: 9,
    name: "Набор кистей закругленные белые BOMEIJIA CK-157 12 кистей",
    cost: 1925,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf4/h48/49163335434270/bomeijia-ck-157-12-kistei-103980845-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h59/h98/49163335893022/bomeijia-ck-157-12-kistei-103980845-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7c/heb/49163336351774/bomeijia-ck-157-12-kistei-103980845-3.jpg"
  ], //{number of the image}.jpg
    description: "Тип: набор кистей Материал: нейлон, ,синтетика Форма пучка: плоская Материал ручки: дерево Номер кисти: 1, ,2, ,3, ,4, ,5, ,6, ,7, ,8, ,9, ,10, ,11, ,12",
    rating: 5,
    likes: 0,
    url:"https://kaspi.kz/shop/p/kistei-zakruglennye-belye-bomeijia-ck-157-12-kistei-103980845/?c=750000000#!/item"
  },
  {
    id: 10,
    name: "Тостер CENTEK СТ-1432 черный",
    cost: 11116,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1f/heb/32725893906462/centek-st-1432-cernyj-100295343-1-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4a/h69/32725896331294/centek-st-1432-cernyj-100295343-2-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h23/h52/32725899345950/centek-st-1432-cernyj-100295343-3-Container.jpg"
  ], //{number of the image}.jpg
    description: "Тип управления: механическое Количество тостов: 2 Поддон для крошек: Да Материал корпуса: пластик Цвет: черный",
    rating: 5,
    likes: 0,
    url:"https://kaspi.kz/shop/p/centek-st-1432-chernyi-100295343/?c=750000000#!/item"
  },


  {
    id: 11,
    name: "Журнальный столик Letta 734063, 47x30x60",
    cost: 7000,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcc/hf3/62575536439326/zurnalnyj-stolik-106500912-1.jpg",
              "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcf/hea/62576126722078/zurnalnyj-stolik-106500912-2.jpg",
              "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4c/hcb/62576127180830/zurnalnyj-stolik-106500912-3.jpg"
    ], //{number of the image}.jpg
    description: "тип: приставной форма: прямоугольный материал: ЛДСП длина, см: 47 ширина, см: 30 высота, см: 60 цвет: белый страна: Казахстан",
    rating: 5,
    likes: 0,
    url:"https://kaspi.kz/shop/p/letta-734063-47x30x60-106500912/?c=750000000#!/item"
  },
  {
    id: 12,
    name: "MEBELVSEM Слоновая кость 987653 пуф, МДФ, дерево, 35x30x45 см",
    cost: 11999,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/h66/49631398821918/mebelvsem-slonovaa-kost-987653-puf-mdf-derevo-35x30x45-sm-104262274-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/h2e/49631399051294/mebelvsem-slonovaa-kost-987653-puf-mdf-derevo-35x30x45-sm-104262274-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4b/h49/49631399280670/mebelvsem-slonovaa-kost-987653-puf-mdf-derevo-35x30x45-sm-104262274-3.jpg"
  ], //{number of the image}.jpg
    description: "тип: пуф форма: квадратная материал: МДФ, ,дерево обивка: велюр высота, см: 45 ширина, см: 35 глубина, см: 30 цвет: бежевый, ,слоновая кость страна: Казахстан",
    rating: 5,
    likes: 0,
    url:"https://kaspi.kz/shop/p/mebelvsem-slonovaja-kost-987653-puf-mdf-derevo-35x30x45-sm-104262274/?c=750000000#!/item"
  },
  {
    id: 13,
    name: "Обеденный стол Transformers Комфорт 1 300x100x78 см",
    cost: 77300,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd3/h4c/49553540874270/transformers-komfort-1-300x100x78-sm-104220696-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h98/h6a/49553541333022/transformers-komfort-1-300x100x78-sm-104220696-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h7e/49553541791774/transformers-komfort-1-300x100x78-sm-104220696-3.jpg"
  ], //{number of the image}.jpg
    description: "тип: трансформер форма: прямоугольный материал: ЛДСП длина, см: 300 ширина, см: 100 высота, см: 78 цвет: белый страна: Казахстан",
    rating: 5,
    likes: 0,
    url:"https://kaspi.kz/shop/p/transformers-komfort-1-300x100x78-sm-104220696/?c=750000000#!/item"
  },


  {
    id: 14,
    name: "Консоль Консоль Florya konsol, 210x49x86 см, МДФ, ЛДСП, серый, светло серый",
    cost: 570088,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h83/h85/63016916811806/konsol-florya-konsol-210x49x86-sm-mdf-ldsp-seryj-svetlo-seryj-106756228-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcd/hcc/63016917270558/konsol-florya-konsol-210x49x86-sm-mdf-ldsp-seryj-svetlo-seryj-106756228-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he7/ha0/63016917729310/konsol-florya-konsol-210x49x86-sm-mdf-ldsp-seryj-svetlo-seryj-106756228-3.jpg"
  ], //{number of the image}.jpg
    description: "тип: отдельностоящий материал: МДФ, ,ЛДСП длина, см: 210 ширина, см: 49 высота, см: 86 цвет: серый, ,светло серыйстрана: Турция",
    rating: 0,
    likes: 0,
    url:"https://kaspi.kz/shop/p/konsol-florya-konsol-210x49x86-sm-mdf-ldsp-seryi-svetlo-seryi-106756228/?c=750000000#!/item"
  },

  {
    id: 15,
    name: "Горизонт Дельта стенка ЛДСП, 264.8x45.6x187.2 см",
    cost: 140700,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7a/hfa/49466631815198/gorizont-delta-stenka-ldsp-264-8x45-6x187-2-sm-104179007-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha1/hbb/49466632273950/gorizont-delta-stenka-ldsp-264-8x45-6x187-2-sm-104179007-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he6/h78/49466632732702/gorizont-delta-stenka-ldsp-264-8x45-6x187-2-sm-104179007-3.jpg"
  ], //{number of the image}.jpg
    description: "комплектация: шкаф, ,полка, ,тумба под телевизор основной материал: ЛДСП особенности: Белый Бетон, Ручки ABS пластик с покрытием софт. Стекло 4 мм на фасаде, полки прозрачные с обработкой. общий размер: 187.2х264.8x45.6 см цвет: белый, ,серый страна: Россия",
    rating: 5,
    likes: 0,
    url:"https://kaspi.kz/shop/p/gorizont-del-ta-stenka-ldsp-264-8x45-6x187-2-sm-104179007/?c=750000000#!/item"
  },

  {
    id: 16,
    name: "CENTEK CT-0086 Diamond черный",
    cost: 25458,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8c/h4d/31991972003870/centek-ct-0086-diamond-cernyj-belyj-100015452-1-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd0/h21/31991974428702/centek-ct-0086-diamond-cernyj-belyj-100015452-2-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h22/hc0/50243979673630/centek-ct-0086-diamond-cernyj-belyj-100015452-3-Container.jpg"
  ], //{number of the image}.jpg
    description: "тип: термопот объем: 5.5 л мощность: 750 Вт материал корпуса: металл фильтр от накипи: Нет цвет: черный",
    rating: 5,
    likes: 0,
    url:"https://kaspi.kz/shop/p/centek-ct-0086-diamond-chernyi-100015452/?c=750000000#!/item"
  },
  {
    id: 17,
    name: "Миксер DEXP MX-1400 розовый",
    cost: 44990,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hce/h63/52080743743518/dexp-mx-1400-rozovyj-105608160-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h69/h9f/52080744202270/dexp-mx-1400-rozovyj-105608160-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h48/h7f/52080744661022/dexp-mx-1400-rozovyj-105608160-3.jpg"
  ], //{number of the image}.jpg
    description: "тип: стационарный мощность: 1400 Вт число скоростей: 6 турборежим: Нет цвет: розовый",
    rating: 0,
    likes: 0,
    url:"https://kaspi.kz/shop/p/dexp-mx-1400-rozovyi-105608160/?c=750000000#!/item"
  },
  {
    id: 18,
    name: "Шоколадный фонтан GASTRORAG CF20C серебристый",
    cost: 29500,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hce/h3f/62112754630686/gastrorag-cf20c-seryj-102005717-1-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/h4e/47649213218846/gastrorag-cf20c-seryj-102005717-2-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hac/h3b/47649213939742/gastrorag-cf20c-seryj-102005717-3-Container.jpg"
  ], //{number of the image}.jpg
    description: "количество ярусов: 4 мощность: 175 Вт загрузка шоколада: 1000 г цвет: серебристый",
    rating: 4,
    likes: 0,
    url:"https://kaspi.kz/shop/p/gastrorag-cf20c-serebristyi-102005717/?c=750000000#!/item"
  },
  {
    id: 19,
    name: "Ollin Professional Perfect Hair 15 в 1 спрей-кондиционер 250 мл",
    cost: 3150,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8c/h9d/49612518391838/ollin-perfect-hair-15-v-1-250-ml-100008645-1-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h68/h0d/49822367580190/ollin-professional-perfect-hair-cream-spray-15-v-1-sprej-krem-250-ml-100008645-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hba/h62/49822368038942/ollin-professional-perfect-hair-cream-spray-15-v-1-sprej-krem-250-ml-100008645-3.jpg"
  ], //{number of the image}.jpg
    description: "тип: спрей-кондиционер действие: увлажнение, ,питание объем: 250 особенности: не требует смывания тип волос: для всех типов страна производства: Россия",
    rating: 5,
    likes: 0,
    url:"https://kaspi.kz/shop/p/ollin-professional-perfect-hair-15-v-1-sprei-konditsioner-250-ml-100008645/?c=750000000#!/item"
  },
  {
    id: 20,
    name: "Compliment Naturalis 3в1 с перцем маска 500 мл",
    cost: 2054,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h84/ha5/48351550472222/compliment-naturalis-3v1-s-percem-500-ml-100319701-1-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5c/ha0/48351550668830/compliment-naturalis-3v1-s-percem-500-ml-100319701-2-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h68/h16/49837029359646/compliment-naturalis-3v1-s-percem-maska-500-ml-100319701-3.jpg"
  ], //{number of the image}.jpg
    description: "тип: маска действие: против выпадения волос, ,активация роста, ,укрепление тип волос: для всех типов, ,окрашенные, ,тонкие и поврежденные",
    rating: 5,
    likes: 0,
    url:"https://kaspi.kz/shop/p/compliment-naturalis-3v1-s-pertsem-maska-500-ml-100319701/?c=750000000#!/item"
  },

  {
    id: 21,
    name: "Compliment Кофейный скраб для тела 400 мл",
    cost: 1946,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h07/h1e/32705444413470/compliment-kofejnyj-anticellulitnyj-400-ml-100969140-1-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb6/h37/32705453981726/compliment-kofejnyj-anticellulitnyj-400-ml-100969140-2-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h69/hb5/32705464467486/compliment-kofejnyj-anticellulitnyj-400-ml-100969140-3-Container.jpg"
  ], //{number of the image}.jpg
    description: "тип кожи: для всех типов тип: скраб вид: гель объем/Количество: 400 страна производства: Россия",
    rating: 5,
    likes: 0,
    url:"https://kaspi.kz/shop/p/compliment-kofeinyi-skrab-dlja-tela-400-ml-100969140/?c=750000000#!/item"
  },
  {
    id: 22,
    name: "KeraSys Repairing Conditioner кондиционер 400 мл",
    cost: 2799,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hef/h12/50626486829086/kerasys-vosstanovlenie-400-ml-100377695-1-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf5/h8c/61706082910238/kerasys-repairing-conditioner-400-ml-100377695-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc3/h7b/61706083368990/kerasys-repairing-conditioner-400-ml-100377695-3.jpg"
  ], //{number of the image}.jpg
    description: "тип: кондиционер действие: придание блеска, ,питание, ,восстановление, ,придание эластичности тип волос: сухие, ,ломкие, ,тонкие и поврежденные страна производства: Южная Корея",
    rating: 5,
    likes: 0,
    url:"https://kaspi.kz/shop/p/kerasys-repairing-conditioner-konditsioner-400-ml-100377695/?c=750000000#!/item"
  },
  {
    id: 23,
    name: "Микроскоп Bresser BioScience Trino 62563 40-1000х",
    cost: 1154233,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb6/hf9/66872596103198/bresser-bioscience-trino-62563-40-1000kh-108035297-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf9/ha4/66872596627486/bresser-bioscience-trino-62563-40-1000kh-108035297-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5d/hc8/66872597217310/bresser-bioscience-trino-62563-40-1000kh-108035297-3.jpg"
  ], //{number of the image}.jpg
    description: "тип: биологический назначение: лабораторный минимальное увеличение: 40 x максимальное увеличение: 1000 x питание: от сети",
    rating: 0,
    likes: 0,
    url:"https://kaspi.kz/shop/p/bresser-bioscience-trino-62563-40-1000h-108035297/?c=750000000#!/item"
  },
  {
    id: 24,
    name: "Телескоп Celestron Travel Scope 70x400",
    cost: 49800,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6a/h8e/32283781169182/celestron-travel-scope-70x400-black-47100001-1-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h72/h25/32283782545438/celestron-travel-scope-70x400-black-47100001-2-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3e/h51/32283784085534/celestron-travel-scope-70x400-black-47100001-3-Container.jpg"
  ], //{number of the image}.jpg
    description: "тип: рефрактор диаметр объектива: 70 мм фокусное расстояние объектива: 400 мм установка: напольная/настольная",
    rating: 4,
    likes: 0,
    url:"https://kaspi.kz/shop/p/celestron-travel-scope-70x400-47100001/?c=750000000#!/item"
  },
  {
    id: 25,
    name: "Телескоп LEVENHUK 82016 80 мм x 500 мм",
    cost: 1039920,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc2/h79/65355977818142/levenhuk-82016-80-mm-x-500-mm-107430053-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h34/h7f/65355978473502/levenhuk-82016-80-mm-x-500-mm-107430053-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd5/h11/65355979063326/levenhuk-82016-80-mm-x-500-mm-107430053-3.jpg"
  ], //{number of the image}.jpg
    description: "тип: рефрактор диаметр объектива: 80 мм фокусное расстояние объектива: 500 мм установка: напольная",
    rating: 0,
    likes: 0,
    url:"https://kaspi.kz/shop/p/levenhuk-82016-80-mm-x-500-mm-107430053/?c=750000000#!/item"
  },
  {
    id: 26,
    name: "Kromatech Третья рука MG16129С черный",
    cost: 8429,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7c/h34/49905624285214/kromatech-treta-ruka-mg16129s-cernyj-104402913-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h93/h73/49905624743966/kromatech-treta-ruka-mg16129s-cernyj-104402913-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd8/h43/49905625202718/kromatech-treta-ruka-mg16129s-cernyj-104402913-3.jpg"
  ], //{number of the image}.jpg
    description: "тип: настольная назначение: ювелирная/часовая количество линз: 2 кратность увеличения: 2.5, ,7.5, ,10 диаметр основной линзы: 90 мм материал линзы: пластик",
    rating: 5,
    likes: 0,
    url:"https://kaspi.kz/shop/p/kromatech-tret-ja-ruka-mg16129s-chernyi-104402913/?c=750000000#!/item"
  },


]
