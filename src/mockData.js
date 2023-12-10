const allImages = [
    'https://loremflickr.com/180/180',
    'https://loremflickr.com/1080/1080',
    'https://loremflickr.com/1080/566',
    'https://loremflickr.com/1080/1350',
    'https://loremflickr.com/1080/1920'
  ];
  
function getRandomImages(number) {
    const shuffled = [...allImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, number);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const productNames = [
  "Комплект одежды SVOBODNY INDIVIDUALISM",
  "Влажный корм Perfect Fit для стерилизованных кошек, с курицей в соусе, 75г x 28 шт",
  "Комплект одежды Bossa Nova",
  "15.6 Ноутбук F+ FLAPTOP R-series, AMD Ryzen 5 5600U (2.3 ГГц), RAM 8 ГБ, SSD 512 ГБ, AMD Radeon RX Vega 7, Windows Home, (FLTP-5R5-8512-",
  "Гирлянда-штора 2х2 холодный свет светодиодная занавес",
  "Набор открыток 30 шт Mia Cara 7х11 см, Новогодний 3",
  "Гирлянда штора 3х2 холодный белый свет / гирлянда светодиодная / гирлянда / новогодняя гирлянда / занавес / 3х2 Гирлянда штора 3х2 холодный белый свет / гирлянда светодиодная / гирлянда / новогодняя гирлянда / занавес / 3х2",
  "Робот-конструктор на солнечной батарее 14 в 1, электронные, интерактивные конструкторы для мальчиков",
  "Шарф",
  "Куртка",
  // ... добавьте больше наименований по желанию
];

export const products = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: productNames[Math.floor(Math.random() * productNames.length)],
  description: `Description for product ${index + 1}`,
  price: getRandomInt(100, 5000), // Цена в пределах от 100 до 5000
    images: getRandomImages(3)
  }));
  