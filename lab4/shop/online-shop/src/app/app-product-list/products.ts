export interface Item {
  id: number,
  name: string,
  description: string,
  cost: number,
  rating: number,
  images: string[],
  imagesNumber: number,
  url: string
}


export const itemsList: Item[] = [
  {
    id: 1,
    name: "Смартфон Samsung Galaxy A13 4 ГБ/128 ГБ черный",
    cost: 87411,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/h78/49613712195614/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-"], //{number of the image}.jpg
    description: "Технология NFC\n Цвет: черный \nТип экрана: PLS TFT LCD сенсорный, мультитач \nДиагональ: 6.6 дюйм \nРазмер оперативной памяти: 4 ГБ \nПроцессор: 8-ядерный Exynos 850 \nОбъем встроенной памяти: 128 ГБ Емкость аккумулятора: 5000 мАч",
    rating: 5,
    url:"https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item"
  },
  {
    id: 2,
    name: "Шкаф 88130, 130x45x175, серый",
    cost: 13374,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h03/hac/62758691995678/skaf-106609074-"], //{number of the image}.jpg
    description: "    Тип установки: напольный Материал: металл, ,пластик, ,ткань Ширина, см: 130 Глубина, см: 45 Высота, см: 175 Цвет: серый Страна: Китай",
    rating: 4,
    url:"https://kaspi.kz/shop/p/88130-130x45x175-seryi-106609074/?c=750000000&tab=reviews#!/item"
  },
  {
    id: 3,
    name: "Кулер для воды A.E.L. V11s-TC UV черный",
    cost: 949915,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he7/hce/68808587083806/a-e-l-v11s-tc-uv-chernyi-108819584-"], //{number of the image}.jpg
    description: "Тип: пурифайер Установка: настольный Тип охлаждения: компрессорное Установка бутылки: отсутствует Подключение к водопроводу: Да Цвет: черный",
    rating: 5,
    url:"https://kaspi.kz/shop/p/a-e-l-v11s-tc-uv-chernyi-108819584/?c=750000000#!/item"
  }

]
