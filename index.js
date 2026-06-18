// Данные для каталога товаров (20 товаров) - ДОБАВЛЕНО ПОЛЕ reviewsData
const productsData = [
    { 
        id: 1, 
        name: "Акустика Pioneer TS-1339", 
        category: "acoustics", 
        brand: "pioneer", 
        price: 5200, 
        image: "https://avatars.mds.yandex.net/get-mpic/3611742/img_id1301130724295659372.jpeg/orig",
        images: [
            "https://avatars.mds.yandex.net/get-mpic/3611742/img_id1301130724295659372.jpeg/orig",
            "https://avatars.mds.yandex.net/get-mpic/4399094/img_id6175676878614850336.jpeg/orig",
            "https://avatars.mds.yandex.net/get-mpic/1360806/img_id2047270553172800696.jpeg/orig"
        ],
        description: "Компонентная акустика с отличным звучанием и мощными басами.",
        specifications: {
            "Тип": "Компонентная акустика",
            "Мощность": "60 Вт",
            "Диапазон частот": "55-20000 Гц",
            "Импеданс": "4 Ом",
            "Чувствительность": "90 дБ",
            "Диаметр НЧ-динамика": "13 см",
            "Диаметр ВЧ-динамика": "2,5 см"
        },
        video: "https://rutube.ru/video/60068e0350699ebfab2a1c15d76b8232/?r=plwd",
        rating: 4.5,
        reviews: 12,
        reviewsData: [
            {
                id: 101,
                author: "Иван", 
                rating: 5,
                date: "2023-11-10",
                text: "Отличная акустика за свои деньги! Звук чистый, басы насыщенные. Установил в свою Ладу Веста, теперь ездить одно удовольствие."
            },
            {
                id: 102,
                author: "Сергей",
                rating: 4,
                date: "2023-10-25",
                text: "Хорошее качество звука, но для установки пришлось немного дорабатывать посадочные места. В целом доволен покупкой."
            }
        ]
    },
    { 
        id: 2, 
        name: "Магнитола Sony DSX-A415BT", 
        category: "headunits", 
        brand: "sony", 
        price: 12500, 
        image: "https://avatars.mds.yandex.net/get-mpic/1886132/2a00000196015caed42b1297c795a3152cb6/orig",
         images: [
            "https://avatars.mds.yandex.net/get-mpic/1886132/2a00000196015caed42b1297c795a3152cb6/orig",
            "https://i.ebayimg.com/images/g/UWAAAOSw7U5ikTMM/s-l1600.jpg",
            "https://a.d-cd.net/2YAAAgDA-OA-960.jpg"
        ],
        description: "Мультимедийная система с поддержкой Apple CarPlay и Android Auto.",
        specifications: {
            "Тип": "Мультимедийная система",
            "Экран": "6,2 дюйма",
            "Поддержка": "Apple CarPlay, Android Auto",
            "Выходная мощность": "4 x 55 Вт",
            "Bluetooth": "Есть",
            "USB": "Есть",
            "Количество предустановок": "18 FM/12 AM"
        },
        video: "https://rutube.ru/video/bf15fa2d58bd71c12b4f642e0d217e76/?r=plwd",
        rating: 4.8,
        reviews: 8,
        reviewsData: [
            {
                id: 201,
                author: "Анна",
                rating: 5,
                date: "2023-12-05",
                text: "Отличная магнитола! Качественный экран, быстрый отклик. Apple CarPlay работает без нареканий. Установила в свой Kia Rio, выглядит стильно."
            },
            {
                id: 202,
                author: "Дмитрий",
                rating: 4,
                date: "2023-11-18",
                text: "Хорошая магнитола за свои деньги. Звук чистый, функции все работают. Не понравилось только меню настройки - немного запутанное."
            }
        ]
    },
    { 
        id: 3, 
        name: "Усилитель Alpine KTP-445U", 
        category: "amplifiers", 
        brand: "alpine", 
        price: 8900, 
        image: "https://i.ebayimg.com/images/g/gDEAAOSwWRZnl601/s-l1600.jpg",
         images: [
            "https://i.ebayimg.com/images/g/gDEAAOSwWRZnl601/s-l1600.jpg",
            "https://i.ebayimg.com/images/g/rTEAAOSwRrRkei8J/s-l1600.jpg",
            "https://ads.cwa.sellercloud.com/images/products/1089852.jpg"
        ],
        description: "Компактный 4-канальный усилитель с высокой мощностью.",
        specifications: {
            "Тип": "4-канальный усилитель",
            "Мощность": "4 x 45 Вт",
            "Диапазон частот": "10-50000 Гц",
            "Импеданс": "2-8 Ом",
            "Чувствительность": "0.2-5V",
            "Размеры": "120 x 60 x 40 мм"
        },
        video: "https://rutube.ru/video/53b6bebb097db23f34db0656de2b09b5/?r=plwd",
        rating: 4.3,
        reviews: 5,
        reviewsData: [
            {
                id: 301,
                author: "Алексей",
                rating: 5,
                date: "2023-10-15",
                text: "Отличный компактный усилитель! Установил под сиденье, не занимает места. Звук стал намного чище и громче."
            }
        ]
    },
    { 
        id: 4, 
        name: "Сабвуфер JBL Stage 810B", 
        category: "subwoofers", 
        brand: "jbl", 
        price: 7600, 
        image: "https://www.stereoauto.net/immagini/jbl_stage_810_subwoofer_auto_20_cm_driver_passivo.jpg",
         images: [
            "https://www.stereoauto.net/immagini/jbl_stage_810_subwoofer_auto_20_cm_driver_passivo.jpg",
            "https://kotofoto.ru/product_img/1693/195807/195807_sabvufer_jbl_stage_800bam.jpg?v=1581957970",
            "https://60.img.avito.st/image/1/1.TOXwyba44AzGYCIJ5Ng36elr4gpOaGIEhm3iDkBg6AZG.K6WkAGzqE31jmpjYSvbwT1ETFZOQkZG2KjnAlJRuk2Y"
        ],
        description: "Мощный сабвуфер для глубоких басов и насыщенного звучания.",
        specifications: {
            "Тип": "Сабвуфер",
            "Диаметр": "10 дюймов",
            "Мощность": "300 Вт",
            "Импеданс": "2 Ом",
            "Чувствительность": "92 дБ",
            "Частотный диапазон": "25-150 Гц"
        },
        video: "https://rutube.ru/video/29577d4f2d869b0bf248f91e5cec2a2d/?r=plwd",
        rating: 4.6,
        reviews: 15,
        reviewsData: [
            {
                id: 401,
                author: "Максим",
                rating: 5,
                date: "2023-11-22",
                text: "Отличный сабвуфер! Басы глубокие и четкие, не бубнит. Установил в багажник Хендай Солярис, теперь в машине настоящий кинотеатр."
            },
            {
                id: 402,
                author: "Артем",
                rating: 4,
                date: "2023-10-30",
                text: "Хороший саб для своей цены. Немного тяженоват, но звук отличный. Рекомендую для начинающих."
            }
        ]
    },
    { 
        id: 5, 
        name: "Акустика JBL GTO609C", 
        category: "acoustics", 
        brand: "jbl", 
        price: 11200, 
        image: "https://avatars.mds.yandex.net/get-mpic/11930023/2a0000018fca03ee26a159ef38426433b02b/orig",
         images: [
            "https://avatars.mds.yandex.net/get-mpic/11930023/2a0000018fca03ee26a159ef38426433b02b/orig",
            "https://cdn.shopify.com/s/files/1/0567/4287/1200/products/IMG_20210717_202752_1200x1200.jpg?v=1626547027",
            "https://avatars.mds.yandex.net/i?id=590979209a3b5d05097e47b94daba38e_l-12935885-images-thumbs&n=13"
        ],
        description: "Компонентная акустика премиум-класса с отличным звуком.",
        specifications: {
            "Тип": "Компонентная акустика",
            "Мощность": "90 Вт",
            "Диапазон частот": "55-21000 Гц",
            "Импеданс": "3 Ом",
            "Чувствительность": "93 дБ",
            "Диаметр НЧ-динамика": "16.5 см",
            "Диаметр ВЧ-динамика": "2.5 см"
        },
        video: "https://rutube.ru/video/73732ea7c40c9fa59247111a3eeb7793/?r=plwd",
        rating: 4.9,
        reviews: 22,
        reviewsData: [
            {
                id: 501,
                author: "Олег",
                rating: 5,
                date: "2023-12-10",
                text: "Лучшая акустика в своем классе! Звук кристально чистый, басы упругие. Установил в Volkswagen Passat - звук как в студии."
            }
        ]
    },
    { 
        id: 6, 
        name: "Магнитола Pioneer DEH-S5200BT", 
        category: "headunits", 
        brand: "pioneer", 
        price: 9800, 
        image: "https://m.media-amazon.com/images/I/61ZcfQ2iGgL._AC_SL1500_.jpg",
         images: [
            "https://m.media-amazon.com/images/I/61ZcfQ2iGgL._AC_SL1500_.jpg",
            "https://i.ebayimg.com/images/g/L6gAAOSw9p1gs3C7/s-l1600.jpg",
            "https://avatars.mds.yandex.net/i?id=282f7083a5a0f47e0e26700d4bfd671a_l-5378240-images-thumbs&n=13"
        ],
        description: "Автомагнитола с Bluetooth и USB-портом для подключения устройств.",
        specifications: {
            "Тип": "Автомагнитола",
            "Экран": "Монохромный",
            "Bluetooth": "Есть",
            "USB": "Есть",
            "Выходная мощность": "4 x 50 Вт",
            "Количество предустановок": "24 FM/12 AM"
        },
        video: "https://rutube.ru/video/ff10f78dcfa98bc8974917f66d37fdd3/?r=plwd",
        rating: 4.2,
        reviews: 7,
        reviewsData: [
            {
                id: 601,
                author: "Николай",
                rating: 4,
                date: "2023-11-05",
                text: "Хорошая магнитола за свои деньги. Bluetooth работает стабильно, звук качественный. Рекомендую."
            }
        ]
    },
    { 
        id: 7, 
        name: "Усилитель Kenwood KAC-511", 
        category: "amplifiers", 
        brand: "kenwood", 
        price: 14200, 
        image: "https://m.media-amazon.com/images/I/71vIhVU1a0L._AC_UY545_QL65_.jpg",
         images: [
            "https://m.media-amazon.com/images/I/71vIhVU1a0L._AC_UY545_QL65_.jpg",
            "https://static.baza.farpost.ru/v/1470746060433_bulletin",
            "https://m.media-amazon.com/images/I/417WlB0uDsL._SL500_.jpg"
        ],
        description: "Мощный моноблочный усилитель для сабвуфера.",
        specifications: {
            "Тип": "Моноблочный усилитель",
            "Мощность": "500 Вт",
            "Диапазон частот": "10-200 Гц",
            "Импеданс": "2-8 Ом",
            "Чувствительность": "0.2-5V",
            "Размеры": "230 x 180 x 55 мм"
        },
        video: "https://rutube.ru/video/e518d52e3954dfb25442249a0384a5da/?r=plwd",
        rating: 4.7,
        reviews: 9,
        reviewsData: []
    },
    { 
        id: 8, 
        name: "Сабвуфер Alpine SBE-1244BR", 
        category: "subwoofers", 
        brand: "alpine", 
        price: 15300, 
         image: "https://vitrus.by/image/cache/data/test_foto/ge-cache-data-products-sabvufery-avtomobil-nii-cabvufer-alpine-sbe-1244br-2655-550x550-400x400.jpg",
         images: [
            "https://vitrus.by/image/cache/data/test_foto/ge-cache-data-products-sabvufery-avtomobil-nii-cabvufer-alpine-sbe-1244br-2655-550x550-400x400.jpg",
            "https://a.d-cd.net/9dae891s-1920.jpg",
            "https://avatars.mds.yandex.net/get-mpic/14805918/2a00000198a33eb4d10b9b53feac740d05e9/orig"
        ],
        description: "12-дюймовый сабвуфер с высокой мощностью и чистым звуком.",
        specifications: {
            "Тип": "Сабвуфер",
            "Диаметр": "12 дюймов",
            "Мощность": "600 Вт",
            "Импеданс": "4 Ом",
            "Чувствительность": "87 дБ",
            "Частотный диапазон": "20-200 Гц"
        },
        video: "https://rutube.ru/video/8bdbe18566d4335c4dc10b7a6b222fa3/?r=plwd",
        rating: 4.4,
        reviews: 11,
        reviewsData: []
    },
    { 
        id: 9, 
        name: "Кабели аудио", 
        category: "accessories", 
        brand: "", 
        price: 1500, 
        image: "https://avatars.mds.yandex.net/i?id=8cc19fc72d47dbb244942548e26a9e5ac15247a6-12816737-images-thumbs&n=13",
         images: [
            "https://avatars.mds.yandex.net/i?id=8cc19fc72d47dbb244942548e26a9e5ac15247a6-12816737-images-thumbs&n=13",
            "https://avatars.mds.yandex.net/get-mpic/5306939/img_id7727091820886102703.jpeg/orig",
            "https://avatars.mds.yandex.net/get-mpic/3911679/2a0000018fc9e4078b797d76db037469ede2/orig"
        ],
        description: "Высококачественные аудиокабели для подключения оборудования.",
        specifications: {
            "Тип": "Аудиокабель",
            "Длина": "5 метров",
            "Сечение": "4 мм²",
            "Разъемы": "RCA",
            "Экранирование": "Двойное"
        },
        video: "https://rutube.ru/video/0855767ff56a9dde966c0f7c7c5dc35f/?r=plwd",
        rating: 4.1,
        reviews: 3,
        reviewsData: []
    },
    { 
        id: 10, 
        name: "Кронштейны для динамиков", 
        category: "accessories", 
        brand: "", 
        price: 800, 
        image: "https://a.allegroimg.com/s512/0c8964/48f0a2604304ae02e51094117b4d",
         images: [
            "https://a.allegroimg.com/s512/0c8964/48f0a2604304ae02e51094117b4d",
            "https://ae04.alicdn.com/kf/HTB1BeubLXXXXXcPXpXXq6xXFXXXF.jpg",
            "https://avatars.mds.yandex.net/get-mpic/1864685/img_id6728552163026150818.jpeg/orig"
        ],
        description: "Надежные кронштейны для установки динамиков в автомобиле.",
        specifications: {
            "Тип": "Кронштейны",
            "Материал": "Металл",
            "Регулировка": "Угол наклона",
            "Совместимость": "Динамики 13-16 см",
            "Цвет": "Черный"
        },
        video: "https://rutube.ru/video/5773a31c608a7110586ad7661304f31b/?r=plwd",
        rating: 4.0,
        reviews: 2,
        reviewsData: []
    },
    { 
        id: 11, 
        name: "Акустика Hertz DCX 165.3", 
        category: "acoustics", 
        brand: "hertz", 
        price: 8500, 
        image: "https://ir.ozone.ru/s3/multimedia-b/6663580859.jpg",
         images: [
            "https://ir.ozone.ru/s3/multimedia-b/6663580859.jpg",
            "https://ir.ozone.ru/s3/multimedia-1-g/7177899724.jpg",
            "https://avatars.mds.yandex.net/i?id=615ab6ee04e19d960563403621b694a4_l-4024951-images-thumbs&n=13"
        ],
        description: "Коаксиальная акустика с сбалансированным звучанием.",
        specifications: {
            "Тип": "Коаксиальная акустика",
            "Мощность": "110 Вт",
            "Диапазон частот": "55-21000 Гц",
            "Импеданс": "4 Ом",
            "Чувствительность": "92 дБ",
            "Диаметр": "16.5 см"
        },
        video: "https://rutube.ru/video/5ad28855065bef1dd58457e3c708394a/?r=plwd",
        rating: 4.5,
        reviews: 6,
        reviewsData: []
    },
    { 
        id: 12, 
        name: "Магнитола Kenwood DMX-4707S", 
        category: "headunits", 
        brand: "kenwood", 
        price: 18500, 
         image: "https://avatars.mds.yandex.net/i?id=dbfbbf7292083b5426c45c8516b9f79729ada707-5175116-images-thumbs&n=13",
         images: [
            "https://avatars.mds.yandex.net/i?id=dbfbbf7292083b5426c45c8516b9f79729ada707-5175116-images-thumbs&n=13",
            "https://avatars.mds.yandex.net/i?id=f208aa089e6b2349bd5af1e64b944b8a1d6c13d4-4820974-images-thumbs&n=13",
            "https://i.ebayimg.com/images/g/HUwAAOSwDe9io32u/s-l1600.jpg"
        ],
        description: "Мультимедийная система с сенсорным экраном 6.8 дюйма.",
        specifications: {
            "Тип": "Мультимедийная система",
            "Экран": "6.8 дюйма",
            "Поддержка": "Apple CarPlay, Android Auto",
            "Выходная мощность": "4 x 50 Вт",
            "Bluetooth": "Есть",
            "USB": "Есть",
            "Камера заднего вида": "Поддержка"
        },
        video: "https://rutube.ru/video/4edd39b60415c4dba68fb954e2eaec10/?r=plwd",
        rating: 4.7,
        reviews: 14,
        reviewsData: []
    },
    { 
        id: 13, 
        name: "Усилитель Pioneer GM-D8601", 
        category: "amplifiers", 
        brand: "pioneer", 
        price: 11200, 
        image: "https://cdn1.ozone.ru/s3/multimedia-q/6852284558.jpg",
         images: [
            "https://cdn1.ozone.ru/s3/multimedia-q/6852284558.jpg",
            "https://main-cdn.sbermegamarket.ru/big2/hlr-system/1631025415/100000031953b5.jpg",
            "https://cache3.youla.io/files/images/780_780/5c/fc/5cfcf39f76bdc22ec33d27a4.jpg"
        ],
        description: "Моноблочный усилитель класса D для сабвуфера.",
        specifications: {
            "Тип": "Моноблочный усилитель",
            "Мощность": "800 Вт",
            "Диапазон частот": "10-240 Гц",
            "Импеданс": "2-8 Ом",
            "Чувствительность": "0.2-5V",
            "Размеры": "260 x 200 x 60 мм"
        },
        video: "https://rutube.ru/video/529f902518a45bbd8c6bf4311a463ce0/?r=plwd",
        rating: 4.6,
        reviews: 8,
        reviewsData: []
    },
    { 
        id: 14, 
        name: "Сабвуфер Kicker 43CWR84", 
        category: "subwoofers", 
        brand: "kicker", 
        price: 12400, 
        image: "https://dop-sound.ru/wp-content/uploads/2020/01/43cwr82.jpg",
         images: [
            "https://dop-sound.ru/wp-content/uploads/2020/01/43cwr82.jpg",
            "https://main-cdn.sbermegamarket.ru/big2/hlr-system/1572402415/100023005334b3.jpg",
            "https://avatars.mds.yandex.net/get-mpic/96484/img_id8978332206574915328/orig"
        ],
        description: "8-дюймовый сабвуфер в корпусе для мощного баса.",
        specifications: {
            "Тип": "Сабвуфер в корпусе",
            "Диаметр": "8 дюймов",
            "Мощность": "300 Вт",
            "Импеданс": "4 Ом",
            "Чувствительность": "88 дБ",
            "Частотный диапазон": "25-500 Гц"
        },
        video: "https://rutube.ru/video/114ad7b00a999890992c9f4939cb760e/?r=plwd",
        rating: 4.3,
        reviews: 5,
        reviewsData: []
    },
    { 
        id: 15, 
        name: "Кросоверы для акустики", 
        category: "accessories", 
        brand: "", 
        price: 2200, 
       image: "https://ogo1.ru/upload/iblock/be8/be8a82c87e0f1eac837ad81a20e48fc2.jpeg",
         images: [
            "https://ogo1.ru/upload/iblock/be8/be8a82c87e0f1eac837ad81a20e48fc2.jpeg",
            "https://i-car.ru/upload/iblock/dc8/dc80c2790f23244acc1f668c7518f4a4.jpeg",
            "https://globaltuning.com/upload/dev2fun.imagecompress/webp/iblock/38e/y6kx22ouf97jd2gdb5i6idw64bcxkf6o.webp"
        ],
        description: "Пассивные кросоверы для разделения частот в компонентной акустике.",
        specifications: {
            "Тип": "Пассивный кросовер",
            "Частота среза": "3500 Гц",
            "Наклон": "12 дБ/октава",
            "Регулировка": "Уровень ВЧ",
            "Подключение": "Винтовые клеммы"
        },
        video: "https://rutube.ru/video/1343711e79fba93d012ceabb089e6909/?r=plwd",
        rating: 4.2,
        reviews: 4,
        reviewsData: []
    },
    { 
        id: 16, 
        name: "Акустика Morel Maximo 6", 
        category: "acoustics", 
        brand: "morel", 
        price: 14500, 
        image: "https://avatars.mds.yandex.net/get-mpic/5209489/img_id374378778852810333.jpeg/orig",
         images: [
            "https://avatars.mds.yandex.net/get-mpic/5209489/img_id374378778852810333.jpeg/orig",
            "https://cdn1.ozone.ru/s3/multimedia-5/c600/6459776165.jpg",
            "https://avatars.mds.yandex.net/get-mpic/16011298/2a00000198ed69ecf53077f3675eec9f9cf5/orig"
        ],
        description: "Компонентная акустика премиум-класса с натуральным звучанием.",
        specifications: {
            "Тип": "Компонентная акустика",
            "Мощность": "150 Вт",
            "Диапазон частот": "50-22000 Гц",
            "Импеданс": "4 Ом",
            "Чувствительность": "91 дБ",
            "Диаметр НЧ-динамика": "16.5 см",
            "Диаметр ВЧ-динамика": "2.5 см"
        },
        video: "https://rutube.ru/video/6db5da81862cbd8b3f83aa124785f066/?r=plwd",
        rating: 4.9,
        reviews: 18,
        reviewsData: []
    },
    { 
        id: 17, 
        name: "Магнитола Alpine UTE-73BT", 
        category: "headunits", 
        brand: "alpine", 
        price: 9500, 
         image: "https://avatars.mds.yandex.net/i?id=a5a9825f175a34311597b87e193426f0d2b7fe48-4211971-images-thumbs&n=13",
         images: [
            "https://avatars.mds.yandex.net/i?id=a5a9825f175a34311597b87e193426f0d2b7fe48-4211971-images-thumbs&n=13",
            "https://a.d-cd.net/zIAAAgPvnOA-960.jpg",
            "https://i.ebayimg.com/images/g/jZUAAOSwzfVgm7Ml/s-l500.jpg"
        ],
        description: "Автомагнитола с Bluetooth и USB-портом для подключения устройств.",
        specifications: {
            "Тип": "Автомагнитола",
            "Экран": "Монохромный",
            "Bluetooth": "Есть",
            "USB": "Есть",
            "Выходная мощность": "4 x 50 Вт",
            "Количество предустановок": "18 FM/12 AM"
        },
        video: "https://rutube.ru/video/d211cd63bceeaf20f4b3822364759813/?r=plwd",
        rating: 4.4,
        reviews: 6,
        reviewsData: []
    },
    { 
        id: 18, 
        name: "Усилитель Sony XM-GS4", 
        category: "amplifiers", 
        brand: "sony", 
        price: 7800, 
        image: "https://images.elecity.ru/images/products/338/56/488/240113/original/elecity_240113_main.jpg",
         images: [
            "https://images.elecity.ru/images/products/338/56/488/240113/original/elecity_240113_main.jpg",
            "https://avatars.mds.yandex.net/i?id=9830b25b4b891807d0e3434367ea39e129241ff2-4717335-images-thumbs&n=13",
            "https://avatars.mds.yandex.net/i?id=3a3ab78dea4fa22514846ddffb4f4b37_l-4614182-images-thumbs&n=13"
        ],
        description: "4-канальный усилитель с высокой эффективностью.",
        specifications: {
            "Тип": "4-канальный усилитель",
            "Мощность": "4 x 60 Вт",
            "Диапазон частот": "10-50000 Гц",
            "Импеданс": "2-8 Ом",
            "Чувствительность": "0.2-5V",
            "Размеры":  "180 x 140 x 50 мм"
        },
        video: "https://rutube.ru/video/9838f26b9838940c78f9eaf86ceaaa38/?r=plwd",
        rating: 4.3,
        reviews: 7,
        reviewsData: []
    },
    { 
        id: 19, 
        name: "Сабвуфер Pioneer TS-WX206", 
        category: "subwoofers", 
        brand: "pioneer", 
        price: 11200, 
        image: "https://avatars.mds.yandex.net/i?id=2ba4380e17741691f08df9c3b09d892f73f84840-9263767-images-thumbs&n=13",
         images: [
            "https://avatars.mds.yandex.net/i?id=2ba4380e17741691f08df9c3b09d892f73f84840-9263767-images-thumbs&n=13",
            "https://mva-group.ru/upload/resize_cache/iblock/add/lhdxhixmgy6fj7p4muy7fyi0hd91ind4/540_510_1/29361c5c_27db_11eb_80e9_9457a5673364_66de1c4c_29b4_11eb_80ea_9457a5673364.jpg",
            "https://avatars.mds.yandex.net/i?id=08d8bbcb7542b8f1aae073ac6bf5c8f0_l-5234566-images-thumbs&n=13"
        ],
        description: "Активный сабвуфер с компактным корпусом.",
        specifications: {
            "Тип": "Активный сабвуфер",
            "Диаметр": "8 дюймов",
            "Мощность": "120 Вт",
            "Импеданс": "4 Ом",
            "Чувствительность": "90 дБ",
            "Частотный диапазон": "20-200 Гц"
        },
        video: "https://rutube.ru/video/57922ac3d2de3b6d4eb9d03393acc8b3/?r=plwd",
        rating: 4.5,
        reviews: 10,
        reviewsData: []
    },
    { 
        id: 20, 
        name: "Провода для аудиосистемы", 
        category: "accessories", 
        brand: "", 
        price: 3200, 
        image: "https://ir-3.ozone.ru/s3/multimedia-1-l/w1200/7121967645.jpg",
         images: [
            "https://ir-3.ozone.ru/s3/multimedia-1-l/w1200/7121967645.jpg",
            "https://static.tildacdn.com/stor3432-6263-4134-a337-323639333733/31633060.jpg",
            "https://avatars.mds.yandex.net/get-mpic/10231887/2a000001933dca23dcbd259b035936ba9c37/orig"
        ],
        description: "Комплект проводов для подключения аудиосистемы в автомобиле.",
        specifications: {
            "Тип": "Комплект проводов",
            "Длина силового провода": "5 метров",
            "Сечение": "4 AWG",
            "Включено": "Силовой провод, массовый провод, предохранитель, RCA-кабели"
        },
        video: "https://rutube.ru/video/50fc194b002e8d607ffc9fdc387a6417/?r=plwd",
        rating: 4.1,
        reviews: 3,
        reviewsData: []
    }
];
// Данные для услуг
const servicesData = [
    {
        id: "install-radio",
        name: "Установка автомагнитолы",
        price: 2000,
        description: "Профессиональная установка автомагнитолы с подключением всех функций"
    },
    {
        id: "install-acoustics",
        name: "Установка компонентной акустики",
        price: 3500,
        description: "Установка компонентной акустики с подключением кроссоверов"
    },
    {
        id: "install-amplifier",
        name: "Установка усилителя",
        price: 2500,
        description: "Установка усилителя с подключением питания и аудиовходов"
    },
    {
        id: "install-subwoofer",
        name: "Установка сабвуфера",
        price: 4000,
        description: "Установка сабвуфера в корпусе или изготовление корпуса"
    },
    {
        id: "tuning-basic",
        name: "Базовая настройка аудиосистемы",
        price: 1500,
        description: "Базовая настройка баланса, громкости и эквалайзера"
    },
    {
        id: "tuning-pro",
        name: "Профессиональная настройка (с RTA)",
        price: 3000,
        description: "Профессиональная настройка с использованием RTA-анализатора"
    },
    {
        id: "tuning-sub",
        name: "Настройка сабвуфера",
        price: 1000,
        description: "Настройка частоты среза, фазы и уровня сабвуфера"
    },
    {
        id: "isolation-doors",
        name: "Шумоизоляция дверей",
        price: 6000,
        description: "Шумоизоляция всех дверей автомобиля"
    },
    {
        id: "isolation-floor",
        name: "Шумоизоляция пола",
        price: 8000,
        description: "Шумоизоляция пола салона и багажника"
    },
    {
        id: "isolation-roof",
        name: "Шумоизоляция крыши",
        price: 5000,
        description: "Шумоизоляция крыши салона"
    },
    {
        id: "isolation-full",
        name: "Комплексная шумоизоляция",
        price: 25000,
        description: "Полная шумоизоляция всего автомобиля"
    }
];

// Данные для отзывов
const reviewsData = [
    {
        id: 1,
        author: "Александр",
        rating: 5,
        date: "2023-10-15",
        text: "Отличный магазин! Купил здесь акустическую систему, качество на высоте. Установку тоже заказывал у них - все сделали быстро и профессионально."
    },
    {
        id: 2,
        author: "Мария",
        rating: 4,
        date: "2023-09-22",
        text: "Очень довольна покупкой автомагнитолы. Работает без нареканий, звук чистый. Спасибо консультантам за помощь в выборе."
    },
    {
        id: 3,
        author: "Дмитрий",
        rating: 5,
        date: "2023-11-05",
        text: "Заказывал шумоизоляцию для автомобиля. Результат превзошел ожидания! Теперь в салоне тихо даже на высокой скорости. Рекомендую!"
    }
];

// Данные для новостей и мероприятий (с добавленным мероприятием)
const newsData = [
    {
        id: 1,
        title: "Фестиваль автозвука 'Звуковое лето 2025'",
        date: "15 июля 2025",
        image: "https://cdn.culture.ru/images/f06702ad-f804-5522-a531-6cc9a1b79021",
        excerpt: "Крупнейший фестиваль автозвука в этом году пройдет при поддержке магазина 'Тоника'. Участие бесплатное!",
        sponsor: true,
        type: "event"
    },
    {
        id: 2,
        title: "Мастер-класс по установке аудиосистем",
        date: "22 июля 2025",
        image: "https://avatars.mds.yandex.net/i?id=e68120e377ff567fba86dea3dbc56efd_l-4012861-images-thumbs&n=13",
        excerpt: "Наши специалисты проведут мастер-класс по профессиональной установке автозвука. Регистрация открыта!",
        sponsor: true,
        type: "event"
    },
    {
        id: 3,
        title: "Выставка автозвука 'Audio Expo 2025'",
        date: "10 сентября 2025",
        image: "https://a.d-cd.net/6f95c404l57-1920.jpg",
        excerpt: "Крупнейшая выставка автозвука в регионе с участием ведущих производителей и экспертов индустрии.",
        sponsor: true,
        type: "event"
    },
    {
        id: 4,
        title: "Соревнования по автозвуку 'Bass Battle 2025'",
        date: "15 августа 2025",
        image: "https://www.car72.ru/images/forum/2019/05/51508.jpg",
        excerpt: "Главное событие года для любителей автозвука! Призовой фонд 500 000 рублей. Регистрация открыта!",
        sponsor: true,
        type: "event"
    }
];

// Данные для деталей мероприятий
const eventsData = [
    {
        id: 1,
        title: "Фестиваль автозвука 'Звуковое лето 2025'",
        date: "15 июля 2025",
        time: "12:00 - 20:00",
        location: "г. Прокопьевск, Парк культуры и отдыха",
        image: "https://cdn.culture.ru/images/f06702ad-f804-5522-a531-6cc9a1b79021",
        description: "Фестиваль автозвука 'Звуковое лето 2025' - это масштабное событие для всех любителей качественного автомобильного звука. Мероприятие проходит при поддержке магазина 'Тоника'.",
        fullDescription: "Фестиваль автозвука 'Звуковое лето 2025' - это уникальная возможность для всех ценителей качественного звука в автомобиле. В программе мероприятия: выставка автомобилей с уникальными аудиосистемами, демонстрационные зоны от ведущих производителей, конкурсы и розыгрыши призов, живая музыка и выступления диджеев, а также food-зона с угощениями для всех гостей.",
        prize: 0,
        fee: 0,
        categories: [
            "Выставка автомобилей с аудиосистемами",
            "Демонстрационные зоны производителей",
            "Конкурсы и розыгрыши призов"
        ],
        rules: [
            "Вход на мероприятие свободный для всех желающих",
            "Запрещается приносить с собой алкогольные напитки",
            "Соблюдайте правила парковки и не мешайте другим участникам",
            "Бережно относитесь к экспонатам и оборудованию"
        ]
    },
    {
        id: 2,
        title: "Мастер-класс по установке аудиосистем",
        date: "22 июля 2025",
        time: "14:00 - 18:00",
        location: "г. Прокопьевск, ул. Автозвуковая, д. 15 (магазин 'Тоника')",
        image: "https://avatars.mds.yandex.net/i?id=e68120e377ff567fba86dea3dbc56efd_l-4012861-images-thumbs&n=13",
        description: "Мастер-класс по профессиональной установке автозвука от специалистов магазина 'Тоника'. Узнайте все секреты качественной установки аудиооборудования.",
        fullDescription: "Мастер-класс по установке аудиосистем - это уникальная возможность научиться у профессионалов всем тонкостям монтажа автомобильного звука. В программе: основы электрики автомобильных аудиосистем, правильное подключение компонентов, тонкости установки динамиков и сабвуферов, настройка усилителей и процессоров, а также ответы на все ваши вопросы.",
        prize: 0,
        fee: 2000,
        categories: [
            "Основы автомобильной электрики",
            "Установка компонентной акустики",
            "Подключение усилителей и сабвуферов",
            "Настройка аудиосистемы"
        ],
        rules: [
            "Количество участников ограничено - не более 15 человек",
            "Необходима предварительная регистрация",
            "Участникам предоставляются все необходимые материалы и инструменты",
            "По окончании мастер-класса выдается сертификат"
        ]
    },
    {
        id: 3,
        title: "Выставка автозвука 'Audio Expo 2025'",
        date: "10 сентября 2025",
        time: "10:00 - 18:00",
        location: "г. Прокопьевск, Выставочный центр 'Сибирь'",
        image: "https://a.d-cd.net/6f95c404l57-1920.jpg",
        description: "Audio Expo 2025 - крупнейшая выставка автозвука в регионе с участием ведущих производителей и экспертов индустрии. Уникальная возможность увидеть новейшие технологии в автомобильном аудио.",
        fullDescription: "Audio Expo 2025 - это масштабное событие для всех профессионалов и энтузиастов автозвука. На выставке будут представлены новейшие разработки ведущих мировых брендов, пройдут презентации инновационных продуктов, семинары и мастер-классы от признанных экспертов индустрии. Это уникальная возможность лично пообщаться с представителями производителей, получить консультации специалистов и быть в курсе последних тенденций в мире автомобильного аудио.",
        prize: 0,
        fee: 500,
        categories: [
            "Выставка новейшего аудиооборудования",
            "Презентации инновационных продуктов",
            "Семинары и мастер-классы экспертов",
            "Демонстрационные зоны"
        ],
        rules: [
            "Вход по билетам, которые можно приобрести онлайн или на месте",
            "Фото- и видеосъемка разрешены",
            "Запрещается трогать экспонаты без разрешения",
            "Соблюдайте правила поведения на выставке"
        ]
    },
    {
        id: 4,
        title: "Соревнования по автозвуку 'Bass Battle 2025'",
        date: "15 августа 2025",
        time: "10:00 - 18:00",
        location: "г. Прокопьевск, Автодром 'Звук'",
        image: "https://www.car72.ru/images/forum/2019/05/51508.jpg",
        description: "Bass Battle 2025 - это крупнейшие соревнования по автозвуку в регионе, которые собирают лучших специалистов и энтузиастов. Мероприятие проходит при поддержке магазина 'Тоника' и ведущих производителей аудиооборудования.",
        fullDescription: "Bass Battle 2025 - это уникальное событие для всех любителей качественного автозвука. В программе мероприятия: соревнования в категориях SQ (качество звука) и SPL (уровень звукового давления), выставка автомобилей с уникальными аудиосистемами, мастер-классы от ведущих специалистов индустрии, а также розыгрыши ценных призов от спонсоров.",
        prize: 500000,
        fee: 10000,
        prizeBreakdown: [
            { place: "1 место", amount: "250 000 ₽" },
            { place: "2 место", amount: "150 000 ₽" },
            { place: "3 место", amount: "100 000 ₽" }
        ],
        categories: [
            "SQ (Sound Quality) - оценка качества звука",
            "SPL (Sound Pressure Level) - измерение уровня громкости",
            "Инсталляция - оценка качества установки оборудования"
        ],
        rules: [
            "Участники должны зарегистрироваться не позднее чем за 7 дней до мероприятия",
            "Все автомобили проходят технический осмотр перед допуском к соревнованиям",
            "Запрещается использование оборудования, не соответствующего категории",
            "Решения судейской коллегии являются окончательными"
        ]
    }
];

// Часто задаваемые вопросы для техподдержки
const faqQuestions = [
    "Какой у вас график работы?",
    "Есть ли у вас услуга установки оборудования?",
    "Как сделать возврат товара?",
    "Какие способы оплаты вы принимаете?",
    "Есть ли доставка в другие города?",
    "Как выбрать акустику для моего автомобиля?",
    "Предоставляете ли вы гарантию на оборудование?",
    "Сколько времени занимает установка аудиосистемы?"
];

// Быстрые ответы для техподдержки
const quickReplies = {
    "Какой у вас график работы?": "Мы работаем Пн-Пт с 10:00 до 20:00, Сб-Вс с 11:00 до 18:00. Приезжайте в любое удобное время!",
    "Есть ли у вас услуга установки оборудования?": "Да, мы предоставляем профессиональные услуги по установке автозвука. У нас есть различные пакеты услуг от базовой установки до комплексных решений.",
    "Как сделать возврат товара?": "Возврат товара возможен в течение 14 дней с момента покупки при сохранении товарного вида и упаковки. Необходим чек и документ, удостоверяющий личность.",
    "Какие способы оплаты вы принимаете?": "Мы принимаем наличные, банковские карты (Visa, MasterCard, Мир), а также возможна оплата через онлайн-банкинг и рассрочка.",
    "Есть ли доставка в другие города?": "Да, мы осуществляем доставку по всей России через транспортные компании. Стоимость доставки рассчитывается индивидуально.",
    "Как выбрать акустику для моего автомобиля?": "Для подбора оптимальной акустики нам нужно знать марку и модель вашего автомобиля, а также ваши предпочтения по звуку. Можете проконсультироваться с нашими специалистами.",
    "Предоставляете ли вы гарантию на оборудование?": "Да, на все товары предоставляется гарантия от 1 года до 3 лет в зависимости от производителя. На услуги по установке - гарантия 1 год.",
    "Сколько времени занимает установка аудиосистемы?": "Время установки зависит от сложности работы: установка магнитолы - 1-2 часа, установка акустики - 2-4 часа, комплексная установка системы - 1-2 дня."
};

// Вопросы для теста
const testQuestions = [
    {
        question: "Что такое компонентная акустика?",
        options: [
            "Акустика, состоящая из отдельных динамиков",
            "Акустика, встроенная в автомобиль на заводе",
            "Акустика для домашнего кинотеатра",
            "Акустика с Bluetooth-подключением"
        ],
        correct: 0
    },
    {
        question: "Какой тип усилителя лучше всего подходит для сабвуфера?",
        options: [
            "2-канальный усилитель",
            "4-канальный усилитель",
            "Моноблочный усилитель",
            "Шестиканальный усилитель"
        ],
        correct: 2
    },
    {
        question: "Что означает аббревиатура SQ в автозвуке?",
        options: [
            "Sound Quality - качество звука",
            "Super Quiet - супер тихий",
            "Sound Quantity - количество звука",
            "System Query - запрос системы"
        ],
        correct: 0
    },
    {
        question: "Какой параметр определяет громкость динамика при одинаковой мощности?",
        options: [
            "Импеданс",
            "Чувствительность",
            "Частотный диапазон",
            "Диаметр динамика"
        ],
        correct: 1
    },
    {
        question: "Для чего нужен кроссовер в аудиосистеме?",
        options: [
            "Для усиления сигнала",
            "Для разделения частот между динамиками",
            "Для подключения к источнику звука",
            "Для защиты от короткого замыкания"
        ],
        correct: 1
    }
];

// ============ ОБНОВЛЕННАЯ ЛОГИКА ДЛЯ ИНДИВИДУАЛЬНЫХ АККАУНТОВ ============

// Получение данных пользователя
function getUserData() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!currentUser) return null;
    
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    return userData[currentUser.email] || null;
}

// Сохранение данных пользователя
function saveUserData(data) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!currentUser) return;
    
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    userData[currentUser.email] = {
        ...getUserData(),
        ...data
    };
    localStorage.setItem('userData', JSON.stringify(userData));
}

// Инициализация данных пользователя
function initUserData() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!currentUser) return;
    
    const userData = getUserData();
    if (!userData) {
        saveUserData({
            cart: [],
            supportMessages: [],
            orders: [],
            reviews: [],
            completedTests: false,
            activeDiscount: null,
            profile: {
                name: currentUser.name,
                email: currentUser.email,
                phone: '',
                address: '',
                registrationDate: new Date().toISOString()
            }
        });
    }
}

// Получение корзины текущего пользователя
function getCart() {
    const userData = getUserData();
    return userData ? userData.cart : [];
}

// Сохранение корзины текущего пользователя
function saveCart(cart) {
    saveUserData({ cart });
}

// Получение сообщений поддержки текущего пользователя
function getSupportMessages() {
    const userData = getUserData();
    return userData ? userData.supportMessages : [];
}

// Сохранение сообщений поддержки текущего пользователя
function saveSupportMessages(messages) {
    saveUserData({ supportMessages: messages });
}

// Получение заказов текущего пользователя
function getOrders() {
    const userData = getUserData();
    return userData ? userData.orders : [];
}

// Сохранение заказов текущего пользователя
function saveOrders(orders) {
    saveUserData({ orders });
}

// Получение отзывов текущего пользователя
function getReviews() {
    const userData = getUserData();
    return userData ? userData.reviews : [];
}

// Сохранение отзывов текущего пользователя
function saveReviews(reviews) {
    saveUserData({ reviews });
}

// Получение статуса теста текущего пользователя
function getCompletedTests() {
    const userData = getUserData();
    return userData ? userData.completedTests : false;
}

// Сохранение статуса теста текущего пользователя
function saveCompletedTests(completed) {
    saveUserData({ completedTests: completed });
}

// Получение активной скидки текущего пользователя
function getActiveDiscount() {
    const userData = getUserData();
    return userData ? userData.activeDiscount : null;
}

// Сохранение активной скидки текущего пользователя
function saveActiveDiscount(discount) {
    saveUserData({ activeDiscount: discount });
}

// Получение профиля текущего пользователя
function getProfile() {
    const userData = getUserData();
    return userData ? userData.profile : null;
}

// Сохранение профиля текущего пользователя
function saveProfile(profile) {
    saveUserData({ profile });
}

// ============ ПЕРЕРАБОТАННЫЕ ПЕРЕМЕННЫЕ ============

// Корзина - переработанная логика
let cart = getCart();

// Сообщения техподдержки
let supportMessages = getSupportMessages();

// Тема по умолчанию
let currentTheme = localStorage.getItem('theme') || 'light';

// Массив для сравнения товаров
let comparisonList = JSON.parse(localStorage.getItem('comparisonList')) || [];
let comparisonCategory = localStorage.getItem('comparisonCategory') || '';

// Переменные для теста
let currentQuestion = 0;
let userAnswers = [];
let discount = 0;
let discountProductId = null;

// Выбранные услуги
let selectedServices = [];

// Активная скидка
let activeDiscount = getActiveDiscount();

// Функция проверки авторизации
function checkAuth() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    return !!currentUser;
}

// Функция проверки и перенаправления на авторизацию
function requireAuth(actionName) {
    if (!checkAuth()) {
        showNotification(`Для ${actionName} необходимо авторизоваться`);
        authModal.style.display = 'flex';
        return false;
    }
    return true;
}

// Функция проверки прохождения теста для текущего пользователя
function hasUserCompletedTest() {
    return getCompletedTests();
}

// Функция отметки теста как пройденного для текущего пользователя
function markTestAsCompleted() {
    saveCompletedTests(true);
}

// Скрипт для экрана загрузки
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const progressBar = document.querySelector('.loader-progress');
    
    // Установка начальной темы
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeButton();
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                    
                    // Анимация появления контента после загрузки
                    const elements = document.querySelectorAll('.fade-in');
                    elements.forEach((el, index) => {
                        setTimeout(() => {
                            el.style.opacity = '1';
                        }, index * 200);
                    });
                }, 500);
            }, 500);
        }
        progressBar.style.width = progress + '%';
    }, 200);

    // Проверяем, авторизован ли пользователь
    checkAuthStatus();
    
    // Инициализируем данные пользователя
    initUserData();
    
    // Загружаем каталог товаров
    loadCatalogProducts();
    
    // Загружаем популярные товары
    loadPopularProducts();
    
    // Инициализируем навигацию
    initNavigation();
    
    // Загружаем отзывы на главную страницу
    loadHomeReviews();
    
    // Загружаем сообщения техподдержки
    loadSupportMessages();
    
    // Загружаем FAQ для техподдержки
    loadFaqQuestions();
    
    // Обновляем корзину
    updateCart();
    
    // Инициализируем переключение форм авторизации
    initAuthForms();
    
    // Инициализируем тест
    initTest();
    
    // Инициализируем переключатель темы
    initThemeToggle();
    
    // Загружаем новости на главную
    loadHomeNews();
    
    // Загружаем мероприятия
    loadEvents();
    
    // Инициализируем выбор услуг
    initServiceSelection();
    
    // Инициализируем панель сравнения
    initComparisonPanel();
    
    // Инициализируем профиль
    initProfile();
    
    // Инициализируем модальные окна для карьеры
    initCareerModals();
});

// Добавляем классы для анимации
document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = '0';
});

// Система авторизации
const authModal = document.getElementById('authModal');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const vkAuthBtn = document.getElementById('vkAuthBtn');
const closeAuthModal = document.getElementById('closeAuthModal');
const authFormTabs = document.querySelectorAll('.auth-form-tab');
const authForms = document.querySelectorAll('.auth-form');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginError = document.getElementById('loginError');
const registerError = document.getElementById('registerError');
const registerSuccess = document.getElementById('registerSuccess');
const authButtons = document.getElementById('authButtons');
const userInfo = document.getElementById('userInfo');
const userName = document.getElementById('userName');
const userAvatar = document.getElementById('userAvatar');
const profileBtn = document.getElementById('profileBtn');
const logoutBtn = document.getElementById('logoutBtn');

// Профиль
const profileModal = document.getElementById('profileModal');
const closeProfileModal = document.getElementById('closeProfileModal');
const profileAvatar = document.getElementById('profileAvatar');
const profileName = document.getElementById('profileName');
const profileEmail = document.getElementById('profileEmail');
const profileOrdersCount = document.getElementById('profileOrdersCount');
const profileTotalSpent = document.getElementById('profileTotalSpent');
const profileReviewsCount = document.getElementById('profileReviewsCount');
const profileMemberSince = document.getElementById('profileMemberSince');
const editProfileBtn = document.getElementById('editProfileBtn');
const changePasswordBtn = document.getElementById('changePasswordBtn');
const orderHistoryBtn = document.getElementById('orderHistoryBtn');
const profileOrders = document.getElementById('profileOrders');
const ordersList = document.getElementById('ordersList');
const editProfileForm = document.getElementById('editProfileForm');
const profileForm = document.getElementById('profileForm');
const editProfileName = document.getElementById('editProfileName');
const editProfileEmail = document.getElementById('editProfileEmail');
const editProfilePhone = document.getElementById('editProfilePhone');
const editProfileAddress = document.getElementById('editProfileAddress');
const cancelEditProfile = document.getElementById('cancelEditProfile');
const changePasswordForm = document.getElementById('changePasswordForm');
const passwordForm = document.getElementById('passwordForm');
const cancelChangePassword = document.getElementById('cancelChangePassword');

// Корзина
const cartModal = document.getElementById('cartModal');
const cartIcon = document.getElementById('cartIcon');
const closeCartModal = document.getElementById('closeCartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const continueShopping = document.getElementById('continueShopping');
const checkoutBtn = document.getElementById('checkoutBtn');

// Оформление заказа
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckoutModal = document.getElementById('closeCheckoutModal');
const checkoutForm = document.getElementById('checkoutForm');
const checkoutTotal = document.getElementById('checkoutTotal');

// Отзывы на главной странице
const homeReviews = document.getElementById('homeReviews');
const homeReviewForm = document.getElementById('homeReviewForm');
const homeReviewRating = document.getElementById('homeReviewRating');
const homeReviewText = document.getElementById('homeReviewText');
const homeStars = document.querySelectorAll('#homeReviewForm .star');

// Техподдержка
const supportModal = document.getElementById('supportModal');
const supportFab = document.getElementById('supportFab');
const closeSupportModal = document.getElementById('closeSupportModal');
const chatContainer = document.getElementById('chatContainer');
const chatInput = document.getElementById('chatInput');
const sendMessageBtn = document.getElementById('sendMessageBtn');
const faqButtons = document.getElementById('faqButtons');

// Тест
const testContainer = document.getElementById('testContainer');
const testContent = document.getElementById('testContent');

// Переключатель темы
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// Кнопки навигации
const backToProducts = document.getElementById('backToProducts');
const backToEvents = document.getElementById('backToEvents');

// Форма соревнований
const competitionForm = document.getElementById('competitionForm');

// Панель выбранных услуг
const selectedServicesPanel = document.getElementById('selectedServicesPanel');
const selectedServicesList = document.getElementById('selectedServicesList');
const selectedServicesTotal = document.getElementById('selectedServicesTotal');
const addAllServicesToCart = document.getElementById('addAllServicesToCart');
const clearSelectedServices = document.getElementById('clearSelectedServices');

// Сравнение товаров
const comparisonPanel = document.getElementById('comparisonPanel');
const comparisonCount = document.getElementById('comparisonCount');
const openComparisonModal = document.getElementById('openComparisonModal');
const clearComparison = document.getElementById('clearComparison');
const comparisonModal = document.getElementById('comparisonModal');
const closeComparisonModal = document.getElementById('closeComparisonModal');
const similarProducts = document.getElementById('similarProducts');
const confirmComparison = document.getElementById('confirmComparison');

// Модальные окна для карьеры
const vacancyModal = document.getElementById('vacancyModal');
const closeVacancyModal = document.getElementById('closeVacancyModal');
const vacancyForm = document.getElementById('vacancyForm');
const vacancyResume = document.getElementById('vacancyResume');
const vacancyResumeName = document.getElementById('vacancyResumeName');
const stickerModal = document.getElementById('stickerModal');
const closeStickerModal = document.getElementById('closeStickerModal');
const stickerForm = document.getElementById('stickerForm');
const stickerPhotos = document.getElementById('stickerPhotos');
const stickerPhotosNames = document.getElementById('stickerPhotosNames');
const applyStickerBtn = document.getElementById('applyStickerBtn');

// Инициализация модальных окон для карьеры
function initCareerModals() {
    // Обработчики для кнопок отклика на вакансии
    document.querySelectorAll('.apply-vacancy-btn').forEach(button => {
        button.addEventListener('click', function() {
            const vacancyTitle = this.getAttribute('data-vacancy');
            document.querySelector('#vacancyModal .modal-header h2').textContent = `Отклик на вакансию: ${vacancyTitle}`;
            vacancyModal.style.display = 'flex';
        });
    });

    // Обработчик для кнопки подачи заявки на стикер-программу
    applyStickerBtn.addEventListener('click', function() {
        stickerModal.style.display = 'flex';
    });

    // Закрытие модальных окон
    closeVacancyModal.addEventListener('click', function() {
        vacancyModal.style.display = 'none';
        vacancyForm.reset();
        vacancyResumeName.textContent = '';
    });

    closeStickerModal.addEventListener('click', function() {
        stickerModal.style.display = 'none';
        stickerForm.reset();
        stickerPhotosNames.textContent = '';
    });

    // Закрытие при клике вне модального окна
    window.addEventListener('click', function(e) {
        if (e.target === vacancyModal) {
            vacancyModal.style.display = 'none';
            vacancyForm.reset();
            vacancyResumeName.textContent = '';
        }
        if (e.target === stickerModal) {
            stickerModal.style.display = 'none';
            stickerForm.reset();
            stickerPhotosNames.textContent = '';
        }
    });

    // Обработчики для загрузки файлов
    vacancyResume.addEventListener('change', function() {
        if (this.files.length > 0) {
            vacancyResumeName.textContent = this.files[0].name;
        } else {
            vacancyResumeName.textContent = '';
        }
    });

    stickerPhotos.addEventListener('change', function() {
        if (this.files.length > 0) {
            let fileNames = [];
            for (let i = 0; i < Math.min(this.files.length, 3); i++) {
                fileNames.push(this.files[i].name);
            }
            stickerPhotosNames.textContent = fileNames.join(', ');
        } else {
            stickerPhotosNames.textContent = '';
        }
    });

    // Обработчики для форм
    vacancyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // В реальном приложении здесь была бы отправка данных на сервер
        vacancyModal.style.display = 'none';
        
        // Показываем сообщение об успехе
        const successHTML = `
            <div class="success-message">
                <i class="fas fa-check-circle"></i>
                <h3>Спасибо за ваш отклик!</h3>
                <p>Наш специалист свяжется с вами в ближайшее время.</p>
            </div>
        `;
        
        // Вставляем сообщение в модальное окно
        vacancyModal.querySelector('.modal-body').innerHTML = successHTML;
        
        // Через 3 секунды возвращаем форму
        setTimeout(() => {
            vacancyModal.querySelector('.modal-body').innerHTML = `
                <form id="vacancyForm">
                    <div class="form-group">
                        <label for="vacancyName">ФИО *</label>
                        <input type="text" id="vacancyName" required>
                    </div>
                    <div class="form-group">
                        <label for="vacancyPhone">Телефон *</label>
                        <input type="tel" id="vacancyPhone" required>
                    </div>
                    <div class="form-group">
                        <label for="vacancyBirthdate">Дата рождения *</label>
                        <input type="date" id="vacancyBirthdate" required>
                    </div>
                    <div class="form-group">
                        <label for="vacancyResume">Резюме *</label>
                        <div class="file-upload">
                            <input type="file" id="vacancyResume" accept=".pdf,.doc,.docx" required>
                            <label for="vacancyResume" class="file-upload-label">
                                <i class="fas fa-upload"></i> Загрузить резюме (PDF, DOC, DOCX)
                            </label>
                        </div>
                        <div class="file-list" id="vacancyResumeName"></div>
                    </div>
                    <div class="form-group">
                        <label for="vacancyComment">Комментарий</label>
                        <textarea id="vacancyComment" rows="4"></textarea>
                    </div>
                    <button type="submit" class="btn btn-success" style="width: 100%;">Отправить отклик</button>
                </form>
            `;
            
            // Переинициализируем обработчики
            const newVacancyResume = document.getElementById('vacancyResume');
            const newVacancyForm = document.getElementById('vacancyForm');
            
            newVacancyResume.addEventListener('change', function() {
                if (this.files.length > 0) {
                    vacancyResumeName.textContent = this.files[0].name;
                } else {
                    vacancyResumeName.textContent = '';
                }
            });
            
            newVacancyForm.addEventListener('submit', function(e) {
                e.preventDefault();
                vacancyModal.style.display = 'none';
                
                const successHTML = `
                    <div class="success-message">
                        <i class="fas fa-check-circle"></i>
                        <h3>Спасибо за ваш отклик!</h3>
                        <p>Наш специалист свяжется с вами в ближайшее время.</p>
                    </div>
                `;
                
                vacancyModal.querySelector('.modal-body').innerHTML = successHTML;
                
                setTimeout(() => {
                    vacancyModal.querySelector('.modal-body').innerHTML = `
                        <form id="vacancyForm">
                            <div class="form-group">
                                <label for="vacancyName">ФИО *</label>
                                <input type="text" id="vacancyName" required>
                            </div>
                            <div class="form-group">
                                <label for="vacancyPhone">Телефон *</label>
                                <input type="tel" id="vacancyPhone" required>
                            </div>
                            <div class="form-group">
                                <label for="vacancyBirthdate">Дата рождения *</label>
                                <input type="date" id="vacancyBirthdate" required>
                            </div>
                            <div class="form-group">
                                <label for="vacancyResume">Резюме *</label>
                                <div class="file-upload">
                                    <input type="file" id="vacancyResume" accept=".pdf,.doc,.docx" required>
                                    <label for="vacancyResume" class="file-upload-label">
                                        <i class="fas fa-upload"></i> Загрузить резюме (PDF, DOC, DOCX)
                                    </label>
                                </div>
                                <div class="file-list" id="vacancyResumeName"></div>
                            </div>
                            <div class="form-group">
                                <label for="vacancyComment">Комментарий</label>
                                <textarea id="vacancyComment" rows="4"></textarea>
                            </div>
                            <button type="submit" class="btn btn-success" style="width: 100%;">Отправить отклик</button>
                        </form>
                    `;
                    
                    // Переинициализируем обработчики
                    initCareerModals();
                }, 3000);
            });
        }, 3000);
    });

    stickerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Проверяем количество фотографий
        if (stickerPhotos.files.length !== 3) {
            alert('Пожалуйста, загрузите ровно 3 фотографии автомобиля');
            return;
        }
        
        // В реальном приложении здесь была бы отправка данных на сервер
        stickerModal.style.display = 'none';
        
        // Показываем сообщение об успехе
        const successHTML = `
            <div class="success-message">
                <i class="fas fa-check-circle"></i>
                <h3>Спасибо за вашу заявку!</h3>
                <p>Наш специалист свяжется с вами в ближайшее время.</p>
            </div>
        `;
        
        // Вставляем сообщение в модальное окно
        stickerModal.querySelector('.modal-body').innerHTML = successHTML;
        
        // Через 3 секунды возвращаем форму
        setTimeout(() => {
            stickerModal.querySelector('.modal-body').innerHTML = `
                <form id="stickerForm">
                    <div class="form-group">
                        <label for="stickerName">ФИО *</label>
                        <input type="text" id="stickerName" required>
                    </div>
                    <div class="form-group">
                        <label for="stickerPhone">Телефон *</label>
                        <input type="tel" id="stickerPhone" required>
                    </div>
                    <div class="form-group">
                        <label for="stickerCar">Марка и модель автомобиля *</label>
                        <input type="text" id="stickerCar" required>
                    </div>
                    <div class="form-group">
                        <label for="stickerPhotos">Фотографии автомобиля (3 шт.) *</label>
                        <div class="file-upload">
                            <input type="file" id="stickerPhotos" accept="image/*" multiple required>
                            <label for="stickerPhotos" class="file-upload-label">
                                <i class="fas fa-upload"></i> Загрузить фотографии (макс. 3)
                            </label>
                        </div>
                        <div class="file-list" id="stickerPhotosNames"></div>
                    </div>
                    <button type="submit" class="btn btn-success" style="width: 100%;">Подать заявку</button>
                </form>
            `;
            
            // Переинициализируем обработчики
            const newStickerPhotos = document.getElementById('stickerPhotos');
            const newStickerForm = document.getElementById('stickerForm');
            
            newStickerPhotos.addEventListener('change', function() {
                if (this.files.length > 0) {
                    let fileNames = [];
                    for (let i = 0; i < Math.min(this.files.length, 3); i++) {
                        fileNames.push(this.files[i].name);
                    }
                    stickerPhotosNames.textContent = fileNames.join(', ');
                } else {
                    stickerPhotosNames.textContent = '';
                }
            });
            
            newStickerForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Проверяем количество фотографий
                if (newStickerPhotos.files.length !== 3) {
                    alert('Пожалуйста, загрузите ровно 3 фотографии автомобиля');
                    return;
                }
                
                stickerModal.style.display = 'none';
                
                const successHTML = `
                    <div class="success-message">
                        <i class="fas fa-check-circle"></i>
                        <h3>Спасибо за вашу заявку!</h3>
                        <p>Наш специалист свяжется с вами в ближайшее время.</p>
                    </div>
                `;
                
                stickerModal.querySelector('.modal-body').innerHTML = successHTML;
                
                setTimeout(() => {
                    stickerModal.querySelector('.modal-body').innerHTML = `
                        <form id="stickerForm">
                            <div class="form-group">
                                <label for="stickerName">ФИО *</label>
                                <input type="text" id="stickerName" required>
                            </div>
                            <div class="form-group">
                                <label for="stickerPhone">Телефон *</label>
                                <input type="tel" id="stickerPhone" required>
                            </div>
                            <div class="form-group">
                                <label for="stickerCar">Марка и модель автомобиля *</label>
                                <input type="text" id="stickerCar" required>
                            </div>
                            <div class="form-group">
                                <label for="stickerPhotos">Фотографии автомобиля (3 шт.) *</label>
                                <div class="file-upload">
                                    <input type="file" id="stickerPhotos" accept="image/*" multiple required>
                                    <label for="stickerPhotos" class="file-upload-label">
                                        <i class="fas fa-upload"></i> Загрузить фотографии (макс. 3)
                                    </label>
                                </div>
                                <div class="file-list" id="stickerPhotosNames"></div>
                            </div>
                            <button type="submit" class="btn btn-success" style="width: 100%;">Подать заявку</button>
                        </form>
                    `;
                    
                    // Переинициализируем обработчики
                    initCareerModals();
                }, 3000);
            });
        }, 3000);
    });
}

// Инициализация переключения форм авторизации
function initAuthForms() {
    authFormTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const formName = tab.getAttribute('data-form');
            switchAuthForm(formName);
        });
    });
}

function switchAuthForm(formName) {
    // Обновляем активную вкладку
    authFormTabs.forEach(tab => {
        if (tab.getAttribute('data-form') === formName) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // Показываем активную форму
    authForms.forEach(form => {
        if (form.id === `${formName}Form`) {
            form.classList.add('active');
        } else {
            form.classList.remove('active');
        }
    });

    // Сбрасываем сообщения об ошибках
    resetMessages();
}

// Открытие модальных окон
loginBtn.addEventListener('click', () => {
    authModal.style.display = 'flex';
    switchAuthForm('login');
});

registerBtn.addEventListener('click', () => {
    authModal.style.display = 'flex';
    switchAuthForm('register');
});

profileBtn.addEventListener('click', () => {
    loadProfileData();
    profileModal.style.display = 'flex';
});

cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

supportFab.addEventListener('click', (e) => {
    e.preventDefault();
    supportModal.style.display = 'flex';
    loadSupportMessages();
});

checkoutBtn.addEventListener('click', () => {
    if (!requireAuth('оформления заказа')) {
        return;
    }
    cartModal.style.display = 'none';
    checkoutModal.style.display = 'flex';
    checkoutTotal.textContent = cartTotal.textContent;
});

continueShopping.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Закрытие модальных окон
closeAuthModal.addEventListener('click', () => {
    authModal.style.display = 'none';
    resetForms();
});

closeProfileModal.addEventListener('click', () => {
    profileModal.style.display = 'none';
    resetProfileForms();
});

closeCartModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

closeCheckoutModal.addEventListener('click', () => {
    checkoutModal.style.display = 'none';
});

closeSupportModal.addEventListener('click', () => {
    supportModal.style.display = 'none';
});

// Закрытие модальных окон при клике вне их
window.addEventListener('click', (e) => {
    if (e.target === authModal) {
        authModal.style.display = 'none';
        resetForms();
    }
    if (e.target === profileModal) {
        profileModal.style.display = 'none';
        resetProfileForms();
    }
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
    if (e.target === checkoutModal) {
        checkoutModal.style.display = 'none';
    }
    if (e.target === supportModal) {
        supportModal.style.display = 'none';
    }
    if (e.target === comparisonModal) {
        comparisonModal.style.display = 'none';
    }
});

// Обработка формы входа
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Проверяем учетные данные
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Сохраняем информацию о текущем пользователе
        localStorage.setItem('currentUser', JSON.stringify(user));
        authModal.style.display = 'none';
        resetForms();
        checkAuthStatus();
        showNotification('Вы успешно вошли в систему!');
        
        // Инициализируем данные пользователя
        initUserData();
        
        // Загружаем данные пользователя
        cart = getCart();
        supportMessages = getSupportMessages();
        activeDiscount = getActiveDiscount();
        
        // Обновляем корзину
        updateCart();
        
        // Обновляем кнопки, требующие авторизации
        updateAuthRequiredButtons();
        
        // Обновляем тест после авторизации
        initTest();
    } else {
        loginError.style.display = 'block';
    }
});

// Обработка формы регистрации
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    // Проверяем совпадение паролей
    if (password !== confirmPassword) {
        registerError.style.display = 'block';
        return;
    }

    // Проверяем, существует ли уже пользователь с таким email
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find(u => u.email === email);

    if (existingUser) {
        registerError.textContent = 'Пользователь с таким email уже существует';
        registerError.style.display = 'block';
        return;
    }

    // Создаем нового пользователя
    const newUser = {
        name,
        email,
        password
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Показываем сообщение об успехе
    registerSuccess.style.display = 'block';

    // Очищаем форму
    registerForm.reset();

    // Переключаем на форму входа через 2 секунды
    setTimeout(() => {
        registerSuccess.style.display = 'none';
        switchAuthForm('login');
    }, 2000);
});

// Авторизация через ВК
vkAuthBtn.addEventListener('click', () => {
    // Имитация авторизации через ВК
    const vkUser = {
        name: 'VK Пользователь',
        email: 'vkuser@example.com',
        vkId: '123456789'
    };

    localStorage.setItem('currentUser', JSON.stringify(vkUser));
    authModal.style.display = 'none';
    checkAuthStatus();
    showNotification('Вы успешно вошли через ВКонтакте!');
    
    // Инициализируем данные пользователя
    initUserData();
    
    // Загружаем данные пользователя
    cart = getCart();
    supportMessages = getSupportMessages();
    activeDiscount = getActiveDiscount();
    
    // Обновляем корзину
    updateCart();
    
    // Обновляем кнопки, требующие авторизации
    updateAuthRequiredButtons();
    
    // Обновляем тест после авторизации
    initTest();
});

// Выход из системы
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    checkAuthStatus();
    showNotification('Вы вышли из системы');
    
    // Сбрасываем данные
    cart = [];
    supportMessages = [];
    activeDiscount = null;
    
    // Обновляем корзину
    updateCart();
    
    // Обновляем кнопки, требующие авторизации
    updateAuthRequiredButtons();
    
    // Обновляем тест после выхода
    initTest();
});

// Проверка статуса авторизации
function checkAuthStatus() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');

    if (currentUser) {
        // Пользователь авторизован
        authButtons.style.display = 'none';
        userInfo.style.display = 'flex';
        userName.textContent = currentUser.name;
        userAvatar.textContent = currentUser.name.charAt(0).toUpperCase();
    } else {
        // Пользователь не авторизован
        authButtons.style.display = 'flex';
        userInfo.style.display = 'none';
    }
}

// Обновление кнопок, требующих авторизации
function updateAuthRequiredButtons() {
    const isAuth = checkAuth();
    
    // Обновляем кнопки добавления в корзину
    document.querySelectorAll('.add-to-cart').forEach(button => {
        if (!isAuth) {
            button.classList.add('auth-required', 'auth-required-tooltip');
            button.disabled = true;
        } else {
            button.classList.remove('auth-required', 'auth-required-tooltip');
            button.disabled = false;
        }
    });
    
    // Обновляем кнопки добавления услуг
    document.querySelectorAll('.service-option').forEach(option => {
        if (!isAuth) {
            option.classList.add('auth-required');
            option.style.cursor = 'not-allowed';
            option.style.opacity = '0.7';
        } else {
            option.classList.remove('auth-required');
            option.style.cursor = 'pointer';
            option.style.opacity = '1';
        }
    });
    
    // Обновляем кнопки отправки отзывов
    document.querySelectorAll('#homeReviewForm button, #productReviewForm button').forEach(button => {
        if (!isAuth) {
            button.classList.add('auth-required', 'auth-required-tooltip');
            button.disabled = true;
        } else {
            button.classList.remove('auth-required', 'auth-required-tooltip');
            button.disabled = false;
        }
    });
}

// Сброс форм и сообщений
function resetForms() {
    loginForm.reset();
    registerForm.reset();
    resetMessages();
}

function resetMessages() {
    loginError.style.display = 'none';
    registerError.style.display = 'none';
    registerSuccess.style.display = 'none';
}

// Навигация по страницам
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute('data-page');
            
            // Скрываем все страницы
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            // Показываем целевую страницу
            document.getElementById(`${targetPage}-page`).classList.add('active');
            
            // Прокручиваем к верху страницы
            window.scrollTo(0, 0);
        });
    });
}

// ============ ФУНКЦИОНАЛ ПРОФИЛЯ ============

function initProfile() {
    // Обработчики для кнопок профиля
    editProfileBtn.addEventListener('click', showEditProfileForm);
    changePasswordBtn.addEventListener('click', showChangePasswordForm);
    orderHistoryBtn.addEventListener('click', showOrderHistory);
    cancelEditProfile.addEventListener('click', cancelEditProfileForm);
    cancelChangePassword.addEventListener('click', cancelChangePasswordForm);
    
    // Обработчики для форм
    profileForm.addEventListener('submit', saveProfileChanges);
    passwordForm.addEventListener('submit', changePassword);
}

function loadProfileData() {
    const profile = getProfile();
    const orders = getOrders();
    const reviews = getReviews();
    
    if (profile) {
        profileName.textContent = profile.name;
        profileEmail.textContent = profile.email;
        profileAvatar.textContent = profile.name.charAt(0).toUpperCase();
        
        // Заполняем форму редактирования профиля
        editProfileName.value = profile.name;
        editProfileEmail.value = profile.email;
        editProfilePhone.value = profile.phone || '';
        editProfileAddress.value = profile.address || '';
        
        // Рассчитываем статистику
        const ordersCount = orders.length;
        const totalSpent = orders.reduce((total, order) => total + order.total, 0);
        const reviewsCount = reviews.length;
        
        // Расчет времени с регистрации
        const registrationDate = new Date(profile.registrationDate);
        const today = new Date();
        const daysSinceRegistration = Math.floor((today - registrationDate) / (1000 * 60 * 60 * 24));
        
        profileOrdersCount.textContent = ordersCount;
        profileTotalSpent.textContent = totalSpent.toLocaleString() + ' ₽';
        profileReviewsCount.textContent = reviewsCount;
        profileMemberSince.textContent = daysSinceRegistration + ' дней';
    }
}

function showEditProfileForm() {
    editProfileForm.style.display = 'block';
    profileOrders.style.display = 'none';
    changePasswordForm.style.display = 'none';
}

function showChangePasswordForm() {
    changePasswordForm.style.display = 'block';
    profileOrders.style.display = 'none';
    editProfileForm.style.display = 'none';
}

function showOrderHistory() {
    profileOrders.style.display = 'block';
    editProfileForm.style.display = 'none';
    changePasswordForm.style.display = 'none';
    
    loadOrderHistory();
}

function cancelEditProfileForm() {
    editProfileForm.style.display = 'none';
}

function cancelChangePasswordForm() {
    changePasswordForm.style.display = 'none';
}

function resetProfileForms() {
    editProfileForm.style.display = 'none';
    changePasswordForm.style.display = 'none';
    profileOrders.style.display = 'none';
}

function saveProfileChanges(e) {
    e.preventDefault();
    
    const profile = getProfile();
    if (!profile) return;
    
    const updatedProfile = {
        ...profile,
        name: editProfileName.value,
        email: editProfileEmail.value,
        phone: editProfilePhone.value,
        address: editProfileAddress.value
    };
    
    saveProfile(updatedProfile);
    
    // Обновляем данные в интерфейсе
    profileName.textContent = updatedProfile.name;
    profileAvatar.textContent = updatedProfile.name.charAt(0).toUpperCase();
    userName.textContent = updatedProfile.name;
    userAvatar.textContent = updatedProfile.name.charAt(0).toUpperCase();
    
    // Обновляем текущего пользователя
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (currentUser) {
        currentUser.name = updatedProfile.name;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
    
    editProfileForm.style.display = 'none';
    showNotification('Профиль успешно обновлен');
}

function changePassword(e) {
    e.preventDefault();
    
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmNewPassword = document.getElementById('confirmNewPassword').value;
    
    // Проверяем текущий пароль
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    
    if (userIndex === -1 || users[userIndex].password !== currentPassword) {
        alert('Текущий пароль неверен');
        return;
    }
    
    if (newPassword !== confirmNewPassword) {
        alert('Новые пароли не совпадают');
        return;
    }
    
    // Обновляем пароль
    users[userIndex].password = newPassword;
    localStorage.setItem('users', JSON.stringify(users));
    
    passwordForm.reset();
    changePasswordForm.style.display = 'none';
    showNotification('Пароль успешно изменен');
}

function loadOrderHistory() {
    const orders = getOrders();
    ordersList.innerHTML = '';
    
    if (orders.length === 0) {
        ordersList.innerHTML = '<p>У вас пока нет заказов</p>';
        return;
    }
    
    orders.forEach(order => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        
        let statusClass = '';
        let statusText = '';
        
        switch (order.status) {
            case 'pending':
                statusClass = 'status-pending';
                statusText = 'Ожидает обработки';
                break;
            case 'completed':
                statusClass = 'status-completed';
                statusText = 'Завершен';
                break;
            case 'cancelled':
                statusClass = 'status-cancelled';
                statusText = 'Отменен';
                break;
            default:
                statusClass = 'status-pending';
                statusText = 'Ожидает обработки';
        }
        
        orderItem.innerHTML = `
            <div class="order-header">
                <div class="order-id">Заказ #${order.id}</div>
                <div class="order-date">${order.date}</div>
            </div>
            <div class="order-status ${statusClass}">${statusText}</div>
            <div class="order-total">${order.total.toLocaleString()} ₽</div>
        `;
        
        ordersList.appendChild(orderItem);
    });
}

// ============ ОСТАЛЬНЫЕ ФУНКЦИИ ============

// Загрузка популярных товаров с горизонтальным скроллингом
function loadPopularProducts() {
    const container = document.getElementById('popular-products');
    if (!container) return;

    // Берем первые 6 товаров
    const popularProducts = productsData.slice(0, 6);

    container.innerHTML = '';

    popularProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Проверяем, есть ли скидка на товар
        const hasDiscount = activeDiscount && activeDiscount.productId === product.id;
        const discountPrice = hasDiscount ? 
            Math.round(product.price * (1 - activeDiscount.discount / 100)) : 
            product.price;
        
        productCard.innerHTML = `
            ${hasDiscount ? `<div class="product-discount-badge">-${activeDiscount.discount}%</div>` : ''}
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-rating">
                    <div class="product-rating-stars">
                        ${generateStars(product.rating)}
                    </div>
                    <div class="product-reviews-count">${product.reviews} отзывов</div>
                </div>
                <div class="product-price">
                    ${hasDiscount ? `
                        <span class="product-price-old">${product.price.toLocaleString()} ₽</span>
                        <span>${discountPrice.toLocaleString()} ₽</span>
                    ` : `
                        <span>${product.price.toLocaleString()} ₽</span>
                    `}
                </div>
                <div class="product-detail-actions">
                    <button class="btn add-to-cart ${!checkAuth() ? 'auth-required auth-required-tooltip' : ''}" 
                            data-id="${product.id}" ${!checkAuth() ? 'disabled' : ''}>В корзину</button>
                    <button class="btn view-details" data-id="${product.id}">Подробнее</button>
                    <button class="compare-btn ${comparisonList.includes(product.id) ? 'active' : ''}" 
                            data-id="${product.id}" data-category="${product.category}">
                        <i class="fas fa-balance-scale"></i>
                    </button>
                </div>
            </div>
        `;
        container.appendChild(productCard);
    });

    // Добавляем обработчики для кнопок
    container.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            if (!requireAuth('добавления товаров в корзину')) {
                return;
            }
            
            const id = parseInt(button.getAttribute('data-id'));
            const product = productsData.find(p => p.id === id);
            
            if (product) {
                addToCart(product.id, product.name, product.price, product.image);
            }
        });
    });
    
    container.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(button.getAttribute('data-id'));
            
            // Скрываем все страницы
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Показываем страницу деталей товара
            document.getElementById('product-detail-page').classList.add('active');
            
            // Загружаем детали товара
            loadProductDetail(id);
        });
    });
    
    container.querySelectorAll('.compare-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(button.getAttribute('data-id'));
            const category = button.getAttribute('data-category');
            toggleComparison(id, category, button);
        });
    });
}

// Функция для генерации звезд рейтинга
function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    
    if (hasHalfStar) {
        stars += '☆';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '☆';
    }
    
    return stars;
}

// Загрузка новостей на главную с горизонтальным скроллингом
// Загрузка новостей на главную с горизонтальным скроллингом - ИСПРАВЛЕННАЯ ВЕРСИЯ
function loadHomeNews() {
    const container = document.getElementById('home-news');
    if (!container) return;

    container.innerHTML = '';

    newsData.forEach(news => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        
        newsCard.innerHTML = `
            <div class="news-image">
                <img src="${news.image}" alt="${news.title}">
            </div>
            <div class="news-content">
                <span class="news-date">${news.date}</span>
                <h3 class="news-title">${news.title}</h3>
                <p class="news-excerpt">${news.excerpt}</p>
                ${news.sponsor ? '<span class="news-sponsor"><i class="fas fa-star"></i> Спонсируется ТОНИКА</span>' : ''}
                <button class="btn view-event-btn" data-id="${news.id}" style="margin-top: 15px; width: 100%;">
                    <i class="fas fa-info-circle" style="margin-right: 8px;"></i>Подробнее
                </button>
            </div>
        `;
        
        container.appendChild(newsCard);
    });

    // ИСПРАВЛЕННЫЙ обработчик для кнопок "Подробнее"
    container.querySelectorAll('.view-event-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const id = parseInt(this.getAttribute('data-id'));
            
            // Скрываем все страницы
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Показываем страницу деталей мероприятия
            document.getElementById('event-detail-page').classList.add('active');
            
            // Загружаем детали мероприятия
            loadEventDetail(id);
            
            // Прокручиваем к верху страницы
            window.scrollTo(0, 0);
        });
    });
}

// Загрузка мероприятий на страницу мероприятий - ИСПРАВЛЕННАЯ ВЕРСИЯ
function loadEvents() {
    const container = document.getElementById('eventsGrid');
    if (!container) return;

    const events = newsData.filter(item => item.type === 'event');

    container.innerHTML = '';

    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        
        eventCard.innerHTML = `
            <div class="event-image">
                <img src="${event.image}" alt="${event.title}">
            </div>
            <div class="event-content">
                <span class="event-date">${event.date}</span>
                <h3 class="event-title">${event.title}</h3>
                <p class="event-excerpt">${event.excerpt}</p>
                ${event.sponsor ? '<span class="event-sponsor"><i class="fas fa-star"></i> Спонсируется ТОНИКА</span>' : ''}
                <button class="btn view-event-btn" data-id="${event.id}" style="margin-top: 15px; width: 100%;">
                    <i class="fas fa-info-circle" style="margin-right: 8px;"></i>Подробнее
                </button>
            </div>
        `;
        
        container.appendChild(eventCard);
    });

    // ИСПРАВЛЕННЫЙ обработчик для кнопок "Подробнее"
    container.querySelectorAll('.view-event-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const id = parseInt(this.getAttribute('data-id'));
            
            // Скрываем все страницы
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Показываем страницу деталей мероприятия
            document.getElementById('event-detail-page').classList.add('active');
            
            // Загружаем детали мероприятия
            loadEventDetail(id);
            
            // Прокручиваем к верху страницы
            window.scrollTo(0, 0);
        });
    });
}

function loadCatalogProducts() {
    const catalogContainer = document.getElementById('catalogProducts');
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const brandFilter = document.getElementById('brandFilter');
    
    function renderProducts() {
        let filteredProducts = [...productsData];
        
        // Фильтрация по категории
        if (categoryFilter.value) {
            filteredProducts = filteredProducts.filter(product => product.category === categoryFilter.value);
        }
        
        // Фильтрация по бренду
        if (brandFilter.value) {
            filteredProducts = filteredProducts.filter(product => product.brand === brandFilter.value);
        }
        
        // Фильтрация по цене
        if (priceFilter.value) {
            const [min, max] = priceFilter.value.split('-').map(val => val === '+' ? Infinity : parseInt(val));
            filteredProducts = filteredProducts.filter(product => {
                if (priceFilter.value === '30000+') {
                    return product.price >= 30000;
                }
                return product.price >= min && product.price <= max;
            });
        }
        
        // Очищаем контейнер
        catalogContainer.innerHTML = '';
        
        // Добавляем отфильтрованные товары
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            // Проверяем, есть ли скидка на товар
            const hasDiscount = activeDiscount && activeDiscount.productId === product.id;
            const discountPrice = hasDiscount ? 
                Math.round(product.price * (1 - activeDiscount.discount / 100)) : 
                product.price;
            
            productCard.innerHTML = `
                ${hasDiscount ? `<div class="product-discount-badge">-${activeDiscount.discount}%</div>` : ''}
                <div class="product-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-rating">
                        <div class="product-rating-stars">
                            ${generateStars(product.rating)}
                        </div>
                        <div class="product-reviews-count">${product.reviews} отзывов</div>
                    </div>
                    <div class="product-price">
                        ${hasDiscount ? `
                            <span class="product-price-old">${product.price.toLocaleString()} ₽</span>
                            <span>${discountPrice.toLocaleString()} ₽</span>
                        ` : `
                            <span>${product.price.toLocaleString()} ₽</span>
                        `}
                    </div>
                    <div class="product-detail-actions">
                        <button class="btn add-to-cart ${!checkAuth() ? 'auth-required auth-required-tooltip' : ''}" 
                                data-id="${product.id}" ${!checkAuth() ? 'disabled' : ''}>В корзину</button>
                        <button class="btn view-details" data-id="${product.id}">Подробнее</button>
                    </div>
                </div>
            `;
            catalogContainer.appendChild(productCard);
        });

        // Добавляем обработчики для кнопок (УБРАЛИ ОБРАБОТЧИК ДЛЯ КНОПКИ СРАВНЕНИЯ)
        catalogContainer.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                if (!requireAuth('добавления товаров в корзину')) {
                    return;
                }
                
                const id = parseInt(button.getAttribute('data-id'));
                const product = productsData.find(p => p.id === id);
                
                if (product) {
                    addToCart(product.id, product.name, product.price, product.image);
                }
            });
        });
        
        catalogContainer.querySelectorAll('.view-details').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = parseInt(button.getAttribute('data-id'));
                
                // Скрываем все страницы
                document.querySelectorAll('.page').forEach(page => {
                    page.classList.remove('active');
                });
                
                // Показываем страницу деталей товара
                document.getElementById('product-detail-page').classList.add('active');
                
                // Загружаем детали товара
                loadProductDetail(id);
            });
        });
        
        // УБРАЛИ БЛОК С ОБРАБОТЧИКАМИ ДЛЯ КНОПОК СРАВНЕНИЯ
    }
    
    // Инициализация фильтров
    categoryFilter.addEventListener('change', renderProducts);
    priceFilter.addEventListener('change', renderProducts);
    brandFilter.addEventListener('change', renderProducts);
    
    // Первоначальная загрузка товаров
    renderProducts();
}


// Загрузка деталей товара
function loadProductDetail(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const productDetail = document.getElementById('productDetail');
    productDetail.innerHTML = '';

    // Проверяем, есть ли скидка на товар
    const hasDiscount = activeDiscount && activeDiscount.productId === product.id;
    const discountPrice = hasDiscount ? 
        Math.round(product.price * (1 - activeDiscount.discount / 100)) : 
        product.price;

    // Создаем HTML для деталей товара с каруселью изображений и видео
    const productHTML = `
        <div class="product-detail-image">
            <div class="product-image-carousel">
                <div class="carousel-container">
                    <div class="carousel-slides">
                        ${product.images.map((img, index) => `
                            <div class="carousel-slide ${index === 0 ? 'active' : ''}">
                                <img src="${img}" alt="${product.name} - изображение ${index + 1}">
                            </div>
                        `).join('')}
                    </div>
                    <button class="carousel-btn carousel-prev">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="carousel-btn carousel-next">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                    <div class="carousel-indicators">
                        ${product.images.map((_, index) => `
                            <span class="indicator ${index === 0 ? 'active' : ''}" data-index="${index}"></span>
                        `).join('')}
                    </div>
                </div>
                <div class="carousel-thumbnails">
                    ${product.images.map((img, index) => `
                        <div class="thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
                            <img src="${img}" alt="${product.name} - миниатюра ${index + 1}">
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        <div class="product-detail-info">
            <h1 class="product-detail-title">${product.name}</h1>
            <div class="product-rating" style="margin-bottom: 15px;">
                <div class="product-rating-stars">
                    ${generateStars(product.rating)}
                </div>
                <div class="product-reviews-count">${product.reviews} отзывов</div>
            </div>
            <div class="product-detail-price">
                ${hasDiscount ? `
                    <span class="product-price-old">${product.price.toLocaleString()} ₽</span>
                    <span>${discountPrice.toLocaleString()} ₽</span>
                    <div style="color: #ff5722; font-size: 18px; margin-top: 5px;">Скидка ${activeDiscount.discount}%</div>
                ` : `
                    <span>${product.price.toLocaleString()} ₽</span>
                `}
            </div>
            <p class="product-detail-description">${product.description}</p>
            
            <div class="product-detail-actions">
                <button class="btn add-to-cart ${!checkAuth() ? 'auth-required auth-required-tooltip' : ''}" 
                        data-id="${product.id}" id="productDetailAddToCart" ${!checkAuth() ? 'disabled' : ''}>В корзину</button>
                <button class="compare-btn ${comparisonList.includes(product.id) ? 'active' : ''}" 
                        data-id="${product.id}" data-category="${product.category}" id="compareBtn">
                    <i class="fas fa-balance-scale"></i>
                    ${comparisonList.includes(product.id) ? 'В сравнении' : 'Сравнить'}
                </button>
            </div>
            
            <div class="product-detail-specs">
                <h3 class="specs-title">Характеристики</h3>
                <table class="specs-table">
                    ${Object.entries(product.specifications).map(([key, value]) => `
                        <tr>
                            <td>${key}</td>
                            <td>${value}</td>
                        </tr>
                    `).join('')}
                </table>
            </div>

            ${product.video ? `
            <!-- Секция с видео -->
            <div class="product-video-section" style="margin-top: 40px; padding-top: 30px; border-top: 1px solid var(--border-color);">
                <h3 class="specs-title" style="margin-bottom: 20px;">Видеообзор товара</h3>
                <div class="video-preview-container" style="position: relative; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px var(--shadow-color); background: var(--secondary-color);">
                    <div class="video-preview" style="position: relative; cursor: pointer; background: linear-gradient(135deg, var(--accent-color) 0%, #2e7d32 100%); height: 300px; display: flex; align-items: center; justify-content: center;">
                        <div class="video-preview-content" style="text-align: center; color: white; padding: 20px;">
                            <div class="video-play-button" style="width: 80px; height: 80px; background: rgba(255,255,255,0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
                                <i class="fas fa-play" style="font-size: 30px; color: var(--accent-color); margin-left: 5px;"></i>
                            </div>
                            <h3 style="margin-bottom: 10px; font-size: 24px;">Смотреть видеообзор</h3>
                            <p style="opacity: 0.9; font-size: 16px;">Узнайте больше о возможностях этого товара</p>
                        </div>
                    </div>
                    <div class="video-embed-container" id="videoEmbedContainer" style="display: none; width: 100%; height: 400px;">
                        <!-- iframe будет вставлен здесь при клике -->
                    </div>
                </div>
            </div>
            ` : ''}
        </div>
    `;

    productDetail.innerHTML = productHTML;

    // Инициализируем карусель
    initImageCarousel();

    // Добавляем обработчики событий
    document.getElementById('productDetailAddToCart').addEventListener('click', () => {
        if (!requireAuth('добавления товаров в корзину')) {
            return;
        }
        addToCart(product.id, product.name, product.price, product.images[0]);
    });

    document.getElementById('compareBtn').addEventListener('click', (e) => {
        const category = e.target.getAttribute('data-category');
        toggleComparison(product.id, category, e.target);
    });

    // Обработчик для видео
    if (product.video) {
        const videoPreview = document.querySelector('.video-preview');
        const videoEmbedContainer = document.getElementById('videoEmbedContainer');
        
        videoPreview.addEventListener('click', function() {
            // Скрываем превью
            this.style.display = 'none';
            
            // Показываем контейнер для видео
            videoEmbedContainer.style.display = 'block';
            
            // Создаем iframe с видео
            let videoEmbedHTML = '';
            
            // Определяем тип видео и создаем соответствующий iframe
            if (product.video.includes('youtube.com') || product.video.includes('youtu.be')) {
                // YouTube видео
                const videoId = product.video.includes('youtube.com') 
                    ? product.video.split('v=')[1]?.split('&')[0]
                    : product.video.split('youtu.be/')[1];
                
                videoEmbedHTML = `
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        style="border-radius: 10px;"
                    ></iframe>
                `;
            } else if (product.video.includes('rutube.ru')) {
                // Rutube видео
                const videoId = product.video.split('rutube.ru/video/')[1]?.split('/')[0];
                
                videoEmbedHTML = `
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://rutube.ru/play/embed/${videoId}?autoplay=1" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        style="border-radius: 10px;"
                    ></iframe>
                `;
            } else {
                // Для других источников используем прямую ссылку
                videoEmbedHTML = `
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src="${product.video}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        style="border-radius: 10px;"
                    ></iframe>
                `;
            }
            
            videoEmbedContainer.innerHTML = videoEmbedHTML;
        });

        // Добавляем анимацию при наведении на кнопку воспроизведения
        const playButton = document.querySelector('.video-play-button');
        videoPreview.addEventListener('mouseenter', function() {
            playButton.style.transform = 'scale(1.1)';
            playButton.style.background = 'white';
        });
        
        videoPreview.addEventListener('mouseleave', function() {
            playButton.style.transform = 'scale(1)';
            playButton.style.background = 'rgba(255,255,255,0.9)';
        });
    }

    // Загружаем отзывы для этого товара
    loadProductReviews(product.id);
    
    // Показываем секцию сравнения, если есть товары для сравнения
    if (comparisonList.length > 0) {
        loadComparisonSection();
    }
}

// Функция для получения названия категории
function getCategoryName(category) {
    const categoryNames = {
        'acoustics': 'Акустические системы',
        'headunits': 'Автомагнитолы',
        'amplifiers': 'Усилители',
        'subwoofers': 'Сабвуферы',
        'accessories': 'Аксессуары'
    };
    return categoryNames[category] || category;
}

// Функция для загрузки секции сравнения
function loadComparisonSection() {
    const comparisonSection = document.getElementById('comparisonSection');
    const comparisonTable = document.getElementById('comparisonTable');
    
    if (comparisonList.length === 0) {
        comparisonSection.style.display = 'none';
        return;
    }
    
    // Получаем товары для сравнения
    const comparisonProducts = productsData.filter(p => comparisonList.includes(p.id));
    
    // Получаем все уникальные характеристики
    const allSpecs = new Set();
    comparisonProducts.forEach(product => {
        Object.keys(product.specifications).forEach(spec => {
            allSpecs.add(spec);
        });
    });
    
    // Создаем таблицу сравнения
    let tableHTML = `
        <table class="comparison-table">
            <thead>
                <tr>
                    <th>Характеристика</th>
                    ${comparisonProducts.map(product => `
                        <th>
                            <div class="comparison-product">
                                <img src="${product.image}" alt="${product.name}">
                                <div>${product.name}</div>
                                <div class="product-price">${product.price.toLocaleString()} ₽</div>
                                <button class="remove-comparison" data-id="${product.id}">Удалить</button>
                            </div>
                        </th>
                    `).join('')}
                </tr>
            </thead>
            <tbody>
    `;
    
    // Добавляем строки с характеристиками
    allSpecs.forEach(spec => {
        tableHTML += `
            <tr>
                <td>${spec}</td>
                ${comparisonProducts.map(product => `
                    <td>${product.specifications[spec] || '-'}</td>
                `).join('')}
            </tr>
        `;
    });
    
    tableHTML += `
            </tbody>
        </table>
    `;
    
    comparisonTable.innerHTML = tableHTML;
    comparisonSection.style.display = 'block';
    
    // Добавляем обработчики для кнопок удаления
    document.querySelectorAll('.remove-comparison').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            removeFromComparison(productId);
        });
    });
}

function toggleComparison(productId, category, button = null) {
    // Если кнопка не передана, находим ее на странице товара
    if (!button && document.getElementById('compareBtn')) {
        button = document.getElementById('compareBtn');
    }
    
    // Проверяем, можно ли добавить товар в сравнение
    if (comparisonList.length >= 4) {
        showNotification('Можно сравнивать не более 4 товаров одновременно');
        return;
    }
    
    // Проверяем категорию
    if (comparisonCategory && comparisonCategory !== category) {
        showNotification('Можно сравнивать только товары из одной категории');
        return;
    }
    
    const index = comparisonList.indexOf(productId);
    
    if (index === -1) {
        // Добавляем товар в сравнение
        comparisonList.push(productId);
        comparisonCategory = category;
        localStorage.setItem('comparisonList', JSON.stringify(comparisonList));
        localStorage.setItem('comparisonCategory', comparisonCategory);
        
        if (button) {
            button.classList.add('active');
            button.innerHTML = '<i class="fas fa-balance-scale"></i> В сравнении';
        }
        
        showNotification('Товар добавлен в сравнение');
    } else {
        // Удаляем товар из сравнения
        comparisonList.splice(index, 1);
        
        // Если список пуст, очищаем категорию
        if (comparisonList.length === 0) {
            comparisonCategory = '';
            localStorage.removeItem('comparisonCategory');
        }
        
        localStorage.setItem('comparisonList', JSON.stringify(comparisonList));
        
        if (button) {
            button.classList.remove('active');
            button.innerHTML = '<i class="fas fa-balance-scale"></i> Сравнить';
        }
        
        showNotification('Товар удален из сравнения');
    }
    
    // Обновляем панель сравнения
    updateComparisonPanel();
    
    // Обновляем секцию сравнения на странице товара
    if (document.getElementById('comparisonSection')) {
        loadComparisonSection();
    }
}

function initComparisonPanel() {
    // Обновляем панель при загрузке
    updateComparisonPanel();
    
    // Обработчики для кнопок панели
    openComparisonModal.addEventListener('click', () => {
        if (comparisonList.length > 0) {
            loadSimilarProducts();
            comparisonModal.style.display = 'flex';
        } else {
            showNotification('Добавьте товары в сравнение');
        }
    });
    
    clearComparison.addEventListener('click', () => {
        clearAllComparison();
    });
    
    closeComparisonModal.addEventListener('click', () => {
        comparisonModal.style.display = 'none';
    });
    
    confirmComparison.addEventListener('click', () => {
        // Находим все выбранные товары в модальном окне
        const selectedProducts = document.querySelectorAll('.similar-product.selected');
        
        if (selectedProducts.length === 0) {
            showNotification('Выберите товары для сравнения');
            return;
        }
        
        // Проверяем лимит
        if (selectedProducts.length + comparisonList.length > 4) {
            showNotification('Нельзя сравнивать более 4 товаров одновременно');
            return;
        }
        
        // Добавляем выбранные товары в список сравнения
        selectedProducts.forEach(productElement => {
            const productId = parseInt(productElement.getAttribute('data-id'));
            
            if (!comparisonList.includes(productId)) {
                comparisonList.push(productId);
            }
        });
        
        // Сохраняем в localStorage
        localStorage.setItem('comparisonList', JSON.stringify(comparisonList));
        
        // Закрываем модальное окно
        comparisonModal.style.display = 'none';
        
        // Обновляем панель сравнения
        updateComparisonPanel();
        
        // Обновляем секцию сравнения
        loadComparisonSection();
        
        showNotification('Товары добавлены в сравнение');
    });
}

// Обновление панель сравнения
function updateComparisonPanel() {
    if (comparisonList.length > 0) {
        comparisonPanel.classList.add('active');
        comparisonCount.textContent = comparisonList.length;
    } else {
        comparisonPanel.classList.remove('active');
    }
}

// Очистка всего списка сравнения
function clearAllComparison() {
    comparisonList = [];
    comparisonCategory = '';
    localStorage.removeItem('comparisonList');
    localStorage.removeItem('comparisonCategory');
    
    // Обновляем все кнопки сравнения
    document.querySelectorAll('.compare-btn').forEach(button => {
        button.classList.remove('active');
        button.innerHTML = '<i class="fas fa-balance-scale"></i> Сравнить';
    });
    
    // Обновляем панель сравнения
    updateComparisonPanel();
    
    // Скрываем секцию сравнения
    document.getElementById('comparisonSection').style.display = 'none';
    
    showNotification('Список сравнения очищен');
}

// Загрузка похожих товаров для сравнения
function loadSimilarProducts() {
    similarProducts.innerHTML = '';
    
    if (comparisonList.length === 0) return;
    
    // Получаем товары той же категории, кроме уже добавленных в сравнение
    const similar = productsData.filter(product => 
        product.category === comparisonCategory && 
        !comparisonList.includes(product.id)
    );
    
    if (similar.length === 0) {
        similarProducts.innerHTML = '<p>Нет других товаров в этой категории для сравнения</p>';
        return;
    }
    
    similar.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'similar-product';
        // ДОБАВЛЕНО: data-id для идентификации товара
        productElement.setAttribute('data-id', product.id);
        productElement.innerHTML = `
            <div class="similar-product-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="similar-product-info">
                <div class="similar-product-name">${product.name}</div>
                <div class="similar-product-price">${product.price.toLocaleString()} ₽</div>
            </div>
        `;
        
        productElement.addEventListener('click', () => {
            productElement.classList.toggle('selected');
        });
        
        similarProducts.appendChild(productElement);
    });
}

// ДОБАВЛЕНО: функция для обновления кнопок сравнения
function updateComparisonButtons(productId, isAdded) {
    // Находим все кнопки сравнения для этого товара
    const buttons = document.querySelectorAll(`.compare-btn[data-id="${productId}"]`);
    buttons.forEach(button => {
        if (isAdded) {
            button.classList.add('active');
            button.innerHTML = '<i class="fas fa-balance-scale"></i> В сравнении';
        } else {
            button.classList.remove('active');
            button.innerHTML = '<i class="fas fa-balance-scale"></i> Сравнить';
        }
    });
}

// Загрузка отзывов на главную страницу
function loadHomeReviews() {
    homeReviews.innerHTML = '';
    
    reviewsData.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            starsHtml += `<span class="star ${i <= review.rating ? 'active' : ''}">★</span>`;
        }
        
        reviewItem.innerHTML = `
            <div class="review-header">
                <div class="review-author">${review.author}</div>
                <div class="review-rating">${starsHtml}</div>
            </div>
            <div class="review-date">${review.date}</div>
            <div class="review-text">${review.text}</div>
        `;
        
        homeReviews.appendChild(reviewItem);
    });

    // Обработка добавления отзыва на главной странице
    homeStars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.getAttribute('data-rating'));
            homeReviewRating.value = rating;
            
            homeStars.forEach(s => {
                if (parseInt(s.getAttribute('data-rating')) <= rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });

    homeReviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (!requireAuth('оставления отзыва')) {
            return;
        }
        
        const rating = parseInt(homeReviewRating.value);
        const text = homeReviewText.value;
        
        if (rating === 0) {
            alert('Пожалуйста, поставьте оценку');
            return;
        }
        
        if (!text.trim()) {
            alert('Пожалуйста, напишите отзыв');
            return;
        }
        
        // Сохраняем отзыв пользователя
        const reviews = getReviews();
        const newReview = {
            id: reviews.length + 1,
            author: 'Вы',
            rating,
            date: new Date().toISOString().split('T')[0],
            text,
            type: 'general'
        };
        
        reviews.push(newReview);
        saveReviews(reviews);
        
        // Добавляем отзыв в общий список для отображения
        reviewsData.unshift({
            id: reviewsData.length + 1,
            author: 'Вы',
            rating,
            date: new Date().toISOString().split('T')[0],
            text
        });
        
        loadHomeReviews();
        
        // Сбрасываем форму
        homeReviewRating.value = 0;
        homeReviewText.value = '';
        homeStars.forEach(star => star.classList.remove('active'));
        
        alert('Спасибо за ваш отзыв!');
    });
}

// Функция для загрузки отзывов о товаре - ИСПРАВЛЕНА
function loadProductReviews(productId) {
    const productReviews = document.getElementById('productReviews');
    const product = productsData.find(p => p.id === productId);
    
    // Используем отзывы из данных товара
    const reviews = product.reviewsData || [];
    
    if (reviews.length === 0) {
        productReviews.innerHTML = '<p>Пока нет отзывов об этом товаре.</p>';
        return;
    }
    
    let reviewsHTML = '<h3 class="specs-title">Отзывы о товаре</h3>';
    
    reviews.forEach(review => {
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            starsHtml += `<span class="star ${i <= review.rating ? 'active' : ''}">★</span>`;
        }
        
        reviewsHTML += `
            <div class="review-item">
                <div class="review-header">
                    <div class="review-author">${review.author}</div>
                    <div class="review-rating">${starsHtml}</div>
                </div>
                <div class="review-date">${review.date}</div>
                <div class="review-text">${review.text}</div>
            </div>
        `;
    });
    
    // Добавляем форму для оставления отзыва
    reviewsHTML += `
        <div class="add-review-form">
            <h3>Оставить отзыв об этом товаре</h3>
            <form id="productReviewForm">
                <div class="form-group">
                    <label>Ваша оценка</label>
                    <div class="rating-stars">
                        <span class="star" data-rating="1">★</span>
                        <span class="star" data-rating="2">★</span>
                        <span class="star" data-rating="3">★</span>
                        <span class="star" data-rating="4">★</span>
                        <span class="star" data-rating="5">★</span>
                    </div>
                    <input type="hidden" id="productReviewRating" value="0">
                </div>
                <div class="form-group">
                    <label for="productReviewText">Ваш отзыв</label>
                    <textarea id="productReviewText" rows="4" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary ${!checkAuth() ? 'auth-required auth-required-tooltip' : ''}" 
                        ${!checkAuth() ? 'disabled' : ''}>Отправить отзыв</button>
            </form>
        </div>
    `;
    
    productReviews.innerHTML = reviewsHTML;
    
    // Добавляем обработчики для звезд рейтинга
    const productStars = document.querySelectorAll('#productReviewForm .star');
    const productReviewRating = document.getElementById('productReviewRating');
    
    productStars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.getAttribute('data-rating'));
            productReviewRating.value = rating;
            
            productStars.forEach(s => {
                if (parseInt(s.getAttribute('data-rating')) <= rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });
    
    // Обработка отправки отзыва
    document.getElementById('productReviewForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!requireAuth('оставления отзыва')) {
            return;
        }
        
        const rating = parseInt(productReviewRating.value);
        const text = document.getElementById('productReviewText').value;
        
        if (rating === 0) {
            alert('Пожалуйста, поставьте оценку');
            return;
        }
        
        if (!text.trim()) {
            alert('Пожалуйста, напишите отзыв');
            return;
        }
        
        // Сохраняем отзыв пользователя
        const reviews = getReviews();
        const newReview = {
            id: Date.now(),
            author: 'Вы',
            rating,
            date: new Date().toISOString().split('T')[0],
            text,
            productId: productId,
            type: 'product'
        };
        
        reviews.push(newReview);
        saveReviews(reviews);
        
        // Добавляем новый отзыв к товару
        if (!product.reviewsData) {
            product.reviewsData = [];
        }
        product.reviewsData.push({
            id: Date.now(),
            author: 'Вы',
            rating,
            date: new Date().toISOString().split('T')[0],
            text
        });
        
        // Обновляем отзывы
        loadProductReviews(productId);
        
        alert('Спасибо за ваш отзыв!');
    });
}

// ПЕРЕРАБОТАННЫЕ ФУНКЦИИ КОРЗИНЫ И СКИДОК

// Функции корзины - полностью переработаны
function addToCart(id, name, price, image, isService = false) {
    // Проверяем, есть ли активная скидка для этого товара
    let finalPrice = price;
    let discountApplied = false;
    
    if (!isService && activeDiscount && activeDiscount.productId === id) {
        // Применяем скидку
        finalPrice = Math.round(price * (1 - activeDiscount.discount / 100));
        discountApplied = true;
        
        // Показываем уведомление о применении скидки
        showNotification(`Скидка ${activeDiscount.discount}% применена к товару!`);
        
        // Удаляем активную скидку после применения
        activeDiscount = null;
        saveActiveDiscount(null);
    }
    
    const existingItemIndex = cart.findIndex(item => item.id === id && item.isService === isService);
    
    if (existingItemIndex !== -1) {
        // Товар уже есть в корзине - увеличиваем количество
        cart[existingItemIndex].quantity += 1;
        // Если применялась скидка, обновляем цену
        if (discountApplied) {
            cart[existingItemIndex].price = finalPrice;
            cart[existingItemIndex].originalPrice = price;
            cart[existingItemIndex].discountApplied = true;
        }
    } else {
        // Добавляем новый товар
        cart.push({
            id,
            name,
            price: finalPrice,
            originalPrice: price,
            image,
            quantity: 1,
            isService,
            discountApplied
        });
    }
    
    saveCart(cart);
    updateCart();
    showNotification(discountApplied ? 'Товар со скидкой добавлен в корзину!' : 'Товар добавлен в корзину');
}

function removeFromCart(id, isService = false) {
    // Находим индекс товара в корзине
    const itemIndex = cart.findIndex(item => item.id === id && item.isService === isService);
    
    if (itemIndex !== -1) {
        // Полностью удаляем товар из корзины
        cart.splice(itemIndex, 1);
        saveCart(cart);
        updateCart();
        showNotification('Товар удален из корзины');
    }
}

function updateQuantity(id, change, isService = false) {
    const itemIndex = cart.findIndex(item => item.id === id && item.isService === isService);
    
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += change;
        
        if (cart[itemIndex].quantity <= 0) {
            removeFromCart(id, isService);
        } else {
            saveCart(cart);
            updateCart();
        }
    }
}

function updateCart() {
    // Обновляем счетчик в иконке корзины
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Обновляем содержимое корзины
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Корзина пуста</p>';
        cartTotal.textContent = '0 ₽';
        return;
    }
    
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.dataset.index = index;
        
        // Для услуг не показываем изображение
        const imageHtml = item.isService 
            ? '<div class="cart-item-img" style="background: var(--border-color); display: flex; align-items: center; justify-content: center;"><i class="fas fa-tools" style="font-size: 30px; color: var(--accent-color);"></i></div>'
            : `<div class="cart-item-img"><img src="${item.image}" alt="${item.name}"></div>`;
        
        // Показываем оригинальную цену, если была применена скидка
        const priceHtml = item.discountApplied 
            ? `<div class="cart-item-price"><span style="text-decoration: line-through; opacity: 0.7; margin-right: 5px;">${item.originalPrice.toLocaleString()} ₽</span> ${item.price.toLocaleString()} ₽</div>`
            : `<div class="cart-item-price">${item.price.toLocaleString()} ₽</div>`;
        
        cartItem.innerHTML = `
            ${imageHtml}
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name} ${item.isService ? '(услуга)' : ''} ${item.discountApplied ? '<span style="color: var(--accent-color); font-size: 0.8em;">(скидка применена)</span>' : ''}</div>
                ${priceHtml}
            </div>
            <div class="cart-item-controls">
                <div class="quantity-control">
                    <button class="quantity-btn minus" data-index="${index}">-</button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button class="quantity-btn plus" data-index="${index}">+</button>
                </div>
                <button class="cart-item-remove" data-index="${index}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = `${total.toLocaleString()} ₽`;
    checkoutTotal.textContent = `${total.toLocaleString()} ₽`;
    
    // Добавляем обработчики для кнопок в корзине
    document.querySelectorAll('.quantity-btn.minus').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.getAttribute('data-index'));
            updateQuantityByIndex(index, -1);
        });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.getAttribute('data-index'));
            updateQuantityByIndex(index, 1);
        });
    });
    
    document.querySelectorAll('.cart-item-remove').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.getAttribute('data-index'));
            removeFromCartByIndex(index);
        });
    });
}

// Новые вспомогательные функции для работы с корзиной по индексу
function updateQuantityByIndex(index, change) {
    if (index >= 0 && index < cart.length) {
        cart[index].quantity += change;
        
        if (cart[index].quantity <= 0) {
            removeFromCartByIndex(index);
        } else {
            saveCart(cart);
            updateCart();
        }
    }
}

function removeFromCartByIndex(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        saveCart(cart);
        updateCart();
        showNotification('Товар удален из корзины');
    }
}

// Добавление услуг в корзину
function initServiceSelection() {
    // Обработка выбора услуг
    document.querySelectorAll('.service-option').forEach(option => {
        option.addEventListener('click', () => {
            if (!requireAuth('выбора услуг')) {
                return;
            }
            
            const serviceId = option.getAttribute('data-id');
            const serviceName = option.getAttribute('data-name');
            const servicePrice = parseInt(option.getAttribute('data-price'));
            
            // Проверяем, выбрана ли уже эта услуга
            const existingServiceIndex = selectedServices.findIndex(s => s.id === serviceId);
            
            if (existingServiceIndex === -1) {
                // Добавляем услугу в выбранные
                selectedServices.push({
                    id: serviceId,
                    name: serviceName,
                    price: servicePrice
                });
                option.classList.add('selected');
            } else {
                // Удаляем услугу из выбранных
                selectedServices.splice(existingServiceIndex, 1);
                option.classList.remove('selected');
            }
            
            // Обновляем панель выбранных услуг
            updateSelectedServicesPanel();
        });
    });
    
    // Обработка кнопки "Добавить все в корзину"
    addAllServicesToCart.addEventListener('click', () => {
        if (selectedServices.length === 0) {
            alert('Пожалуйста, выберите хотя бы одну услугу');
            return;
        }
        
        selectedServices.forEach(service => {
            addToCart(service.id, service.name, service.price, '', true);
        });
        
        showNotification('Все выбранные услуги добавлены в корзину');
    });
    
    // Обработка кнопки "Очистить список"
    clearSelectedServices.addEventListener('click', () => {
        selectedServices = [];
        document.querySelectorAll('.service-option').forEach(option => {
            option.classList.remove('selected');
        });
        updateSelectedServicesPanel();
    });
}

// Обновление панель выбранных услуг
function updateSelectedServicesPanel() {
    if (selectedServices.length === 0) {
        selectedServicesPanel.style.display = 'none';
        return;
    }
    
    selectedServicesPanel.style.display = 'block';
    selectedServicesList.innerHTML = '';
    
    let total = 0;
    
    selectedServices.forEach(service => {
        total += service.price;
        
        const serviceItem = document.createElement('div');
        serviceItem.className = 'selected-service-item';
        serviceItem.innerHTML = `
            <div class="selected-service-name">${service.name}</div>
            <div class="selected-service-price">${service.price.toLocaleString()} ₽</div>
            <button class="remove-service" data-id="${service.id}">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        selectedServicesList.appendChild(serviceItem);
    });
    
    selectedServicesTotal.textContent = `${total.toLocaleString()} ₽`;
    
    // Добавляем обработчики для кнопок удаления
    document.querySelectorAll('.remove-service').forEach(button => {
        button.addEventListener('click', (e) => {
            const serviceId = e.currentTarget.getAttribute('data-id');
            
            // Удаляем услугу из выбранных
            const serviceIndex = selectedServices.findIndex(s => s.id === serviceId);
            if (serviceIndex !== -1) {
                selectedServices.splice(serviceIndex, 1);
            }
            
            // Снимаем выделение с соответствующей опции
            document.querySelectorAll('.service-option').forEach(option => {
                if (option.getAttribute('data-id') === serviceId) {
                    option.classList.remove('selected');
                }
            });
            
            // Обновляем панель
            updateSelectedServicesPanel();
        });
    });
}

// Оформление заказа
checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Создаем заказ
    const orders = getOrders();
    const newOrder = {
        id: orders.length + 1,
        date: new Date().toLocaleDateString('ru-RU'),
        items: [...cart],
        total: parseInt(cartTotal.textContent.replace(/\s/g, '').replace('₽', '')),
        status: 'pending',
        customer: {
            name: document.getElementById('checkoutName').value,
            phone: document.getElementById('checkoutPhone').value,
            email: document.getElementById('checkoutEmail').value,
            address: document.getElementById('checkoutAddress').value
        },
        comment: document.getElementById('checkoutComment').value
    };
    
    orders.push(newOrder);
    saveOrders(orders);
    
    // В реальном приложении здесь была бы отправка данных на сервер
    alert('Заказ успешно оформлен! Мы свяжемся с вами в ближайшее время для подтверждения.');
    
    // Очищаем корзину
    cart = [];
    saveCart(cart);
    updateCart();
    
    // Закрываем модальное окно
    checkoutModal.style.display = 'none';
    
    // Сбрасываем форму
    checkoutForm.reset();
});

// Загрузка сообщений техподдержки
function loadSupportMessages() {
    chatContainer.innerHTML = '';
    
    if (supportMessages.length === 0) {
        const welcomeMessage = document.createElement('div');
        welcomeMessage.className = 'chat-message support-message';
        welcomeMessage.innerHTML = `
            <div>Здравствуйте! Чем могу помочь?</div>
            <div class="message-time">${new Date().toLocaleTimeString()}</div>
        `;
        chatContainer.appendChild(welcomeMessage);
        
        // Сохраняем приветственное сообщение
        supportMessages.push({
            text: 'Здравствуйте! Чем могу помочь?',
            sender: 'support',
            timestamp: new Date().toISOString()
        });
        saveSupportMessages(supportMessages);
    } else {
        supportMessages.forEach(message => {
            const messageElement = document.createElement('div');
            messageElement.className = `chat-message ${message.sender === 'user' ? 'user-message' : 'support-message'}`;
            messageElement.innerHTML = `
                <div>${message.text}</div>
                <div class="message-time">${new Date(message.timestamp).toLocaleTimeString()}</div>
            `;
            chatContainer.appendChild(messageElement);
        });
    }
    
    // Прокручиваем вниз
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Отправка сообщения в техподдержку
sendMessageBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const messageText = chatInput.value.trim();
    if (!messageText) return;
    
    // Проверяем, является ли сообщение часто задаваемым вопросом
    if (quickReplies[messageText]) {
        sendQuickReply(messageText);
        return;
    }
    
    // Добавляем сообщение пользователя
    const userMessage = {
        text: messageText,
        sender: 'user',
        timestamp: new Date().toISOString()
    };
    
    supportMessages.push(userMessage);
    saveSupportMessages(supportMessages);
    
    // Очищаем поле ввода
    chatInput.value = '';
    
    // Перезагружаем сообщения
    loadSupportMessages();
    
    // Имитируем ответ поддержки (через 1-3 секунды)
    setTimeout(() => {
        const responses = [
            "Спасибо за ваше сообщение. Мы рассмотрим ваш вопрос в ближайшее время.",
            "Понял ваш вопрос. Наш специалист скоро свяжется с вами.",
            "Благодарим за обращение. Мы уже работаем над решением вашей проблемы.",
            "Ваш запрос принят в обработку. Ожидайте ответа в течение 24 часов."
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        // Создаем элемент сообщения с эффектом печати
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'typing-indicator';
        typingIndicator.innerHTML = `
            <div class="typing-dots">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        chatContainer.appendChild(typingIndicator);
        chatContainer.scrollTop = chatContainer.scrollHeight;
        
        // Убираем индикатор печати и показываем сообщение
        setTimeout(() => {
            typingIndicator.remove();
            
            const supportMessage = {
                text: randomResponse,
                sender: 'support',
                timestamp: new Date().toISOString()
            };
            
            supportMessages.push(supportMessage);
            saveSupportMessages(supportMessages);
            loadSupportMessages();
        }, 1500);
    }, 1000 + Math.random() * 2000);
}

// Загрузка FAQ для техподдержки с быстрыми ответами
function loadFaqQuestions() {
    faqButtons.innerHTML = '';
    
    faqQuestions.forEach(question => {
        const faqBtn = document.createElement('button');
        faqBtn.className = 'faq-btn';
        faqBtn.textContent = question;
        faqBtn.addEventListener('click', () => {
            // Вставляем вопрос в поле ввода
            chatInput.value = question;
            
            // Автоматически отправляем быстрый ответ
            setTimeout(() => {
                sendQuickReply(question);
            }, 500);
        });
        
        faqButtons.appendChild(faqBtn);
    });
}

// Отправка быстрого ответа
function sendQuickReply(question) {
    const reply = quickReplies[question];
    if (!reply) return;
    
    // Добавляем сообщение пользователя
    const userMessage = {
        text: question,
        sender: 'user',
        timestamp: new Date().toISOString()
    };
    
    supportMessages.push(userMessage);
    
    // Добавляем ответ поддержки с эффектом печати
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-indicator';
    typingIndicator.innerHTML = `
        <div class="typing-dots">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;
    chatContainer.appendChild(typingIndicator);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    
    // Убираем индикатор печати и показываем сообщение
    setTimeout(() => {
        typingIndicator.remove();
        
        const supportMessage = {
            text: reply,
            sender: 'support',
            timestamp: new Date().toISOString()
        };
        
        supportMessages.push(supportMessage);
        
        // Сохраняем сообщения
        saveSupportMessages(supportMessages);
        
        // Перезагружаем сообщения
        loadSupportMessages();
        
        // Очищаем поле ввода
        chatInput.value = '';
    }, 1500);
}

// Инициализация теста
function initTest() {
    // Проверяем авторизацию
    if (!checkAuth()) {
        testContent.innerHTML = `
            <div class="test-completed-message">
                <i class="fas fa-lock" style="font-size: 48px; color: var(--accent-color); margin-bottom: 15px;"></i>
                <h3>Требуется авторизация</h3>
                <p>Для прохождения теста и получения скидки необходимо войти в систему.</p>
                <button class="btn" id="loginFromTest" style="margin-top: 15px;">Войти</button>
            </div>
        `;
        
        document.getElementById('loginFromTest').addEventListener('click', () => {
            authModal.style.display = 'flex';
        });
        return;
    }
    
    // Проверяем, был ли тест уже пройден
    if (hasUserCompletedTest()) {
        showTestCompletedMessage();
        return;
    }
    
    // Сбрасываем состояние теста
    currentQuestion = 0;
    userAnswers = [];
    
    // Показываем первый вопрос
    showQuestion();
}

// Показ вопроса теста
function showQuestion() {
    const question = testQuestions[currentQuestion];
    
    let optionsHTML = '';
    question.options.forEach((option, index) => {
        optionsHTML += `
            <div class="test-option" data-index="${index}">
                <input type="radio" name="test-answer" id="option-${index}" value="${index}" ${userAnswers[currentQuestion] === index ? 'checked' : ''}>
                <label for="option-${index}">${option}</label>
            </div>
        `;
    });
    
    testContent.innerHTML = `
        <div class="test-header">
            <h3>Тест на знание автозвука</h3>
            <p>Вопрос ${currentQuestion + 1} из ${testQuestions.length}</p>
        </div>
        <div class="test-progress">
            <div class="test-progress-bar" style="width: ${(currentQuestion / testQuestions.length) * 100}%"></div>
        </div>
        <div class="test-question-container">
            <div class="test-question">
                <h3>${question.question}</h3>
                <div class="test-options">
                    ${optionsHTML}
                </div>
            </div>
        </div>
        <div class="test-navigation">
            ${currentQuestion > 0 ? '<button class="btn" id="prevQuestion">Назад</button>' : '<div></div>'}
            <button class="btn" id="nextQuestion">${currentQuestion < testQuestions.length - 1 ? 'Далее' : 'Завершить тест'}</button>
        </div>
    `;
    
    // Добавляем обработчики для вариантов ответа
    document.querySelectorAll('.test-option').forEach(option => {
        option.addEventListener('click', function() {
            const selectedOption = this.querySelector('input');
            selectedOption.checked = true;
            
            // Сохраняем ответ
            userAnswers[currentQuestion] = parseInt(selectedOption.value);
            
            // Обновляем визуальное выделение
            document.querySelectorAll('.test-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            this.classList.add('selected');
        });
    });
    
    // Восстанавливаем выбранный ответ, если он есть
    if (userAnswers[currentQuestion] !== undefined) {
        document.querySelectorAll('.test-option')[userAnswers[currentQuestion]].classList.add('selected');
    }
    
    // Обработчики для кнопок навигации
    if (currentQuestion > 0) {
        document.getElementById('prevQuestion').addEventListener('click', () => {
            currentQuestion--;
            showQuestion();
        });
    }
    
    document.getElementById('nextQuestion').addEventListener('click', () => {
        if (userAnswers[currentQuestion] === undefined) {
            alert('Пожалуйста, выберите ответ');
            return;
        }
        
        if (currentQuestion < testQuestions.length - 1) {
            currentQuestion++;
            showQuestion();
        } else {
            finishTest();
        }
    });
}

// Завершение теста и подсчет результатов
function finishTest() {
    let correctAnswers = 0;
    
    // Подсчитываем правильные ответы
    userAnswers.forEach((answer, index) => {
        if (answer === testQuestions[index].correct) {
            correctAnswers++;
        }
    });
    
    // Определяем скидку
    if (correctAnswers >= 5) {
        discount = 7;
    } else if (correctAnswers >= 4) {
        discount = 5;
    } else if (correctAnswers >= 3) {
        discount = 3;
    } else {
        discount = 0;
    }
    
    // Помечаем тест как пройденный
    markTestAsCompleted();
    
    // Показываем результаты
    showTestResults(correctAnswers, discount);
}

// Показ результатов теста
function showTestResults(correctAnswers, discount) {
    let resultHTML = `
        <div class="test-results-container">
            <h3>Результаты теста</h3>
            <p>Вы ответили правильно на ${correctAnswers} из ${testQuestions.length} вопросов</p>
    `;
    
    if (discount > 0) {
        resultHTML += `
            <div class="discount-display">
                <i class="fas fa-trophy" style="margin-right: 10px;"></i>
                Поздравляем! Вы получаете скидку ${discount}% на один товар!
            </div>
            <div class="discount-product-selection">
                <h4>Выберите товар для применения скидки:</h4>
                <div id="discountProductsList">
                    ${productsData.map((product, index) => `
                        <div class="discount-product-option" data-id="${product.id}">
                            <div class="discount-product-info">
                                <div class="discount-product-name">${product.name}</div>
                                <div class="discount-product-price">${product.price.toLocaleString()} ₽</div>
                            </div>
                            <div class="discount-amount">-${discount}%</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <button class="btn" id="applyDiscount">Применить скидку</button>
        `;
    } else {
        resultHTML += `
            <p>К сожалению, вы не набрали достаточно баллов для получения скидки.</p>
            <p>Тест пройден, больше попыток нет.</p>
        `;
    }
    
    resultHTML += `</div>`;
    
    testContent.innerHTML = resultHTML;
    
    // Обработчики для кнопок
    if (discount > 0) {
        // Обработка выбора товара для скидки
        document.querySelectorAll('.discount-product-option').forEach(option => {
            option.addEventListener('click', function() {
                document.querySelectorAll('.discount-product-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                this.classList.add('selected');
                discountProductId = parseInt(this.getAttribute('data-id'));
            });
        });
        
        document.getElementById('applyDiscount').addEventListener('click', () => {
            if (!discountProductId) {
                alert('Пожалуйста, выберите товар');
                return;
            }
            
            applyDiscount(discountProductId, discount);
        });
    }
}

// Показ сообщения о завершении теста
function showTestCompletedMessage() {
    testContent.innerHTML = `
        <div class="test-completed-message">
            <i class="fas fa-check-circle"></i>
            <h3>Тест уже пройден</h3>
            <p>Вы уже прошли тест на знание автозвука и получили скидку.</p>
            <p>К сожалению, повторное прохождение теста невозможно.</p>
            <p>Благодарим за участие!</p>
        </div>
    `;
}

// Применение скидки к выбранному товару
function applyDiscount(productId, discount) {
    // Сохраняем активную скидку
    activeDiscount = {
        productId,
        discount
    };
    saveActiveDiscount(activeDiscount);
    
    showNotification(`Скидка ${discount}% применена к выбранному товару!`);
    
    // Показываем сообщение об успехе
    testContent.innerHTML = `
        <div class="test-results-container">
            <h3>Скидка применена!</h3>
            <div class="discount-display">
                <i class="fas fa-check-circle" style="margin-right: 10px;"></i>
                Скидка ${discount}% успешно применена к выбранному товару.
            </div>
            <p>При добавлении товара в корзину скидка будет автоматически учтена.</p>
        </div>
    `;
    
    // Обновляем каталог товаров, чтобы показать скидки
    loadCatalogProducts();
    loadPopularProducts();
}

// Инициализация переключателя темы
function initThemeToggle() {
    themeToggle.addEventListener('click', function() {
        if (currentTheme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            currentTheme = 'dark';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            currentTheme = 'light';
        }
        updateThemeButton();
    });
}

function updateThemeButton() {
    if (currentTheme === 'dark') {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}

// Обработка формы обратной связи
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    this.reset();
});

// Обработка формы соревнований на главной
competitionForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!requireAuth('участия в соревнованиях')) {
        return;
    }
    
    alert('Ваша заявка на участие в соревнованиях принята! Мы свяжемся с вами для подтверждения и оплаты вступительного взноса.');
    this.reset();
});

// Обработка кнопки "Назад к товарам"
backToProducts.addEventListener('click', function() {
    // Скрываем все страницы
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Показываем страницу товаров
    document.getElementById('products-page').classList.add('active');
});

// Обработка кнопки "Назад к мероприятиям"
backToEvents.addEventListener('click', function() {
    // Скрываем все страницы
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Показываем страницу мероприятий
    document.getElementById('events-page').classList.add('active');
});

// Вспомогательная функция для показа уведомлений 
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.background = 'var(--accent-color)';
    notification.style.color = 'white';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '1000';
    notification.style.boxShadow = '0 4px 12px var(--shadow-color)';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
// Обработчики для кнопок преимуществ карьеры
document.querySelectorAll('.career-benefit').forEach(button => {
    button.addEventListener('click', function() {
        const benefit = this.getAttribute('data-benefit');
        const modal = document.getElementById(`${benefit}Modal`);
        if (modal) {
            modal.style.display = 'flex';
        }
    });
});

// Закрытие модальных окон преимуществ
document.querySelectorAll('.close-modal[data-modal]').forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
        }
    });
});

// Закрытие при клике вне модального окна
window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});
 function initImageCarousel() {
    const carousel = document.querySelector('.product-image-carousel');
    if (!carousel) return;

    const slides = carousel.querySelectorAll('.carousel-slide');
    const thumbnails = carousel.querySelectorAll('.thumbnail');
    const indicators = carousel.querySelectorAll('.indicator');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Функция для показа слайда
    function showSlide(index) {
        // Скрываем все слайды
        slides.forEach(slide => slide.classList.remove('active'));
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Показываем текущий слайд
        slides[index].classList.add('active');
        thumbnails[index].classList.add('active');
        indicators[index].classList.add('active');
        
        currentSlide = index;
        
        // Скрываем/показываем стрелки, если это первый/последний слайд
        prevBtn.style.display = currentSlide === 0 ? 'none' : 'flex';
        nextBtn.style.display = currentSlide === totalSlides - 1 ? 'none' : 'flex';
    }

    // Обработчики для стрелок
    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlide < totalSlides - 1) {
            showSlide(currentSlide + 1);
        }
    });

    // Обработчики для индикаторов
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Обработчики для миниатюр
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Автопереключение (опционально)
    let autoSlideInterval;
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            const nextSlide = (currentSlide + 1) % totalSlides;
            showSlide(nextSlide);
        }, 5000); // Переключение каждые 5 секунд
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Запускаем автопереключение
    startAutoSlide();

    // Останавливаем автопереключение при наведении
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);

    // Показываем первый слайд
    showSlide(0);
}
// Функция для получения названия категории
function getCategoryName(category) {
    const categoryNames = {
        'acoustics': 'Акустические системы',
        'headunits': 'Автомагнитолы',
        'amplifiers': 'Усилители',
        'subwoofers': 'Сабвуферы',
        'accessories': 'Аксессуары'
    };
    return categoryNames[category] || category;
}
// Загрузка деталей мероприятия - НОВАЯ ФУНКЦИЯ
function loadEventDetail(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    if (!event) return;

    const eventDetail = document.getElementById('eventDetail');
    eventDetail.innerHTML = '';

    // Создаем HTML для деталей мероприятия с улучшенным дизайном
    const eventHTML = `
        <div class="event-hero" style="background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${event.image}'); background-size: cover; background-position: center; padding: 80px 0; text-align: center; color: white; border-radius: 20px; margin-bottom: 40px;">
            <div class="event-hero-content">
                <h1 class="event-detail-title" style="font-size: 48px; margin-bottom: 20px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">${event.title}</h1>
                <div class="event-hero-meta" style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; margin-bottom: 30px;">
                    <div class="hero-meta-item" style="display: flex; align-items: center; gap: 10px; background: rgba(76, 175, 80, 0.9); padding: 10px 20px; border-radius: 25px;">
                        <i class="fas fa-calendar-alt"></i>
                        <span>${event.date}</span>
                    </div>
                    <div class="hero-meta-item" style="display: flex; align-items: center; gap: 10px; background: rgba(76, 175, 80, 0.9); padding: 10px 20px; border-radius: 25px;">
                        <i class="fas fa-clock"></i>
                        <span>${event.time}</span>
                    </div>
                    <div class="hero-meta-item" style="display: flex; align-items: center; gap: 10px; background: rgba(76, 175, 80, 0.9); padding: 10px 20px; border-radius: 25px;">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${event.location}</span>
                    </div>
                </div>
                ${event.sponsor ? '<div class="event-sponsor-badge" style="background: gold; color: black; padding: 10px 20px; border-radius: 20px; display: inline-block; font-weight: bold;"><i class="fas fa-star"></i> СПОНСИРУЕТСЯ ТОНИКА</div>' : ''}
            </div>
        </div>

        <div class="event-detail-content" style="display: grid; grid-template-columns: 2fr 1fr; gap: 40px; margin-bottom: 50px;">
            <div class="event-main-content">
                <div class="event-card" style="background: var(--card-bg); padding: 40px; border-radius: 20px; border: 2px solid var(--border-color); box-shadow: 0 10px 30px var(--shadow-color); margin-bottom: 30px;">
                    <h2 style="color: var(--accent-color); margin-bottom: 25px; display: flex; align-items: center; gap: 15px;">
                        <i class="fas fa-info-circle"></i>О мероприятии
                    </h2>
                    <p class="event-description" style="font-size: 18px; line-height: 1.8; color: var(--text-color); opacity: 0.9; text-align: justify;">
                        ${event.fullDescription || event.description}
                    </p>
                </div>

                ${event.prize > 0 ? `
                <div class="event-card" style="background: linear-gradient(135deg, var(--card-bg) 0%, rgba(255,215,0,0.1) 100%); padding: 40px; border-radius: 20px; border: 2px solid gold; box-shadow: 0 10px 30px var(--shadow-color); margin-bottom: 30px;">
                    <h2 style="color: #FFD700; margin-bottom: 25px; display: flex; align-items: center; gap: 15px;">
                        <i class="fas fa-trophy"></i>Призовой фонд
                    </h2>
                    <div class="prize-main" style="text-align: center; margin-bottom: 30px;">
                        <div class="prize-total" style="font-size: 32px; font-weight: bold; color: #FFD700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                            ${event.prize.toLocaleString()} ₽
                        </div>
                        <div style="color: var(--text-color); opacity: 0.8;">Общий призовой фонд</div>
                    </div>
                    ${event.prizeBreakdown ? `
                        <div class="prize-breakdown" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
                            ${event.prizeBreakdown.map((prize, index) => `
                                <div class="prize-item" style="background: var(--secondary-color); padding: 25px; border-radius: 15px; text-align: center; border: 1px solid var(--border-color); transition: transform 0.3s;">
                                    <div class="prize-place" style="font-size: 18px; font-weight: bold; color: var(--accent-color); margin-bottom: 10px;">${prize.place}</div>
                                    <div class="prize-amount" style="font-size: 24px; font-weight: bold; color: #FFD700;">${prize.amount}</div>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
                ` : ''}

                <div class="event-card" style="background: var(--card-bg); padding: 40px; border-radius: 20px; border: 2px solid var(--border-color); box-shadow: 0 10px 30px var(--shadow-color);">
                    <h2 style="color: var(--accent-color); margin-bottom: 25px; display: flex; align-items: center; gap: 15px;">
                        <i class="fas fa-list-alt"></i>Категории участия
                    </h2>
                    <div class="categories-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                        ${event.categories.map((category, index) => `
                            <div class="category-item" style="background: var(--secondary-color); padding: 20px; border-radius: 15px; border-left: 4px solid var(--accent-color); transition: transform 0.3s;">
                                <div style="display: flex; align-items: center; gap: 10px;">
                                    <div class="category-number" style="width: 30px; height: 30px; background: var(--accent-color); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">${index + 1}</div>
                                    <div class="category-name" style="font-weight: bold; color: var(--text-color);">${category}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <div class="event-sidebar">
                <div class="sidebar-card" style="background: var(--card-bg); padding: 30px; border-radius: 20px; border: 2px solid var(--border-color); box-shadow: 0 10px 30px var(--shadow-color); margin-bottom: 30px;">
                    <h3 style="color: var(--accent-color); margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-exclamation-circle"></i>Важная информация
                    </h3>
                    ${event.fee > 0 ? `
                        <div class="fee-info" style="background: rgba(76, 175, 80, 0.1); padding: 15px; border-radius: 10px; margin-bottom: 20px;">
                            <div style="font-size: 14px; color: var(--text-color); opacity: 0.8; margin-bottom: 5px;">Вступительный взнос</div>
                            <div style="font-size: 24px; font-weight: bold; color: var(--accent-color);">${event.fee.toLocaleString()} ₽</div>
                        </div>
                    ` : ''}
                    
                    <div class="quick-facts">
                        <div class="fact-item" style="display: flex; align-items: center; gap: 15px; padding: 12px 0; border-bottom: 1px solid var(--border-color);">
                            <i class="fas fa-users" style="color: var(--accent-color);"></i>
                            <span style="color: var(--text-color);">${event.categories.length} категории</span>
                        </div>
                        <div class="fact-item" style="display: flex; align-items: center; gap: 15px; padding: 12px 0; border-bottom: 1px solid var(--border-color);">
                            <i class="fas fa-calendar" style="color: var(--accent-color);"></i>
                            <span style="color: var(--text-color);">${event.date}</span>
                        </div>
                        <div class="fact-item" style="display: flex; align-items: center; gap: 15px; padding: 12px 0;">
                            <i class="fas fa-map-pin" style="color: var(--accent-color);"></i>
                            <span style="color: var(--text-color);">${event.location}</span>
                        </div>
                    </div>
                </div>

                <div class="sidebar-card" style="background: var(--card-bg); padding: 30px; border-radius: 20px; border: 2px solid var(--border-color); box-shadow: 0 10px 30px var(--shadow-color);">
                    <h3 style="color: var(--accent-color); margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-clipboard-list"></i>Правила участия
                    </h3>
                    <div class="rules-list">
                        ${event.rules.map((rule, index) => `
                            <div class="rule-item" style="display: flex; align-items: flex-start; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--border-color);">
                                <div class="rule-number" style="width: 25px; height: 25px; background: var(--accent-color); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; flex-shrink: 0;">${index + 1}</div>
                                <span style="color: var(--text-color); line-height: 1.5;">${rule}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>

        <div class="event-actions" style="text-align: center; padding: 40px; background: linear-gradient(135deg, var(--secondary-color) 0%, rgba(76, 175, 80, 0.1) 100%); border-radius: 20px; border: 2px solid var(--accent-color);">
            <h2 style="color: var(--text-color); margin-bottom: 20px;">Готовы принять участие?</h2>
            <p style="color: var(--text-color); opacity: 0.8; margin-bottom: 30px; font-size: 18px;">Не упустите возможность продемонстрировать свои навыки и выиграть призы!</p>
            <button class="btn btn-success" id="registerForEvent" style="padding: 15px 40px; font-size: 18px; border-radius: 30px; background: linear-gradient(135deg, var(--accent-color) 0%, #388E3C 100%); border: none; box-shadow: 0 5px 15px rgba(76, 175, 80, 0.3);">
                <i class="fas fa-edit" style="margin-right: 10px;"></i>Зарегистрироваться сейчас
            </button>
            <div style="margin-top: 15px; color: var(--text-color); opacity: 0.7; font-size: 14px;">
                ${event.fee > 0 ? `* Вступительный взнос: ${event.fee.toLocaleString()} ₽` : '* Участие бесплатное'}
            </div>
        </div>
    `;

    eventDetail.innerHTML = eventHTML;

    // Добавляем обработчики для интерактивных элементов
    document.querySelectorAll('.prize-item, .category-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Добавляем обработчик для кнопки регистрации
    document.getElementById('registerForEvent').addEventListener('click', function() {
        if (!requireAuth('регистрации на мероприятие')) {
            return;
        }
        
        // Показываем форму регистрации
        showEventRegistrationForm(event);
    });
}

// Функция для показа формы регистрации на мероприятие
function showEventRegistrationForm(event) {
    const modalHTML = `
        <div class="modal" id="eventRegistrationModal" style="display: flex;">
            <div class="modal-container" style="max-width: 600px;">
                <div class="modal-header" style="background: linear-gradient(135deg, var(--accent-color) 0%, #388E3C 100%); color: white;">
                    <h2><i class="fas fa-edit" style="margin-right: 10px;"></i>Регистрация на мероприятие</h2>
                    <button class="close-modal" id="closeEventRegistrationModal">&times;</button>
                </div>
                <div class="modal-body">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <h3 style="color: var(--text-color);">"${event.title}"</h3>
                        <p style="color: var(--text-color); opacity: 0.8;">${event.date} • ${event.location}</p>
                    </div>
                    
                    <form id="eventRegistrationForm">
                        <div class="form-group">
                            <label for="regName">ФИО участника *</label>
                            <input type="text" id="regName" required>
                        </div>
                        <div class="form-group">
                            <label for="regPhone">Телефон *</label>
                            <input type="tel" id="regPhone" required>
                        </div>
                        <div class="form-group">
                            <label for="regEmail">Email *</label>
                            <input type="email" id="regEmail" required>
                        </div>
                        <div class="form-group">
                            <label for="regCategory">Категория участия *</label>
                            <select id="regCategory" required>
                                <option value="">Выберите категорию</option>
                                ${event.categories.map(category => 
                                    `<option value="${category}">${category}</option>`
                                ).join('')}
                            </select>
                        </div>
                        ${event.fee > 0 ? `
                            <div class="fee-notice" style="background: rgba(76, 175, 80, 0.1); padding: 15px; border-radius: 10px; margin-bottom: 20px;">
                                <div style="display: flex; align-items: center; gap: 10px;">
                                    <i class="fas fa-info-circle" style="color: var(--accent-color);"></i>
                                    <div>
                                        <div style="font-weight: bold; color: var(--text-color);">Вступительный взнос</div>
                                        <div style="font-size: 18px; color: var(--accent-color); font-weight: bold;">${event.fee.toLocaleString()} ₽</div>
                                    </div>
                                </div>
                            </div>
                        ` : ''}
                        <div class="form-group">
                            <label for="regComments">Дополнительные комментарии</label>
                            <textarea id="regComments" rows="4" placeholder="Расскажите о вашем оборудовании, опыте участия и т.д."></textarea>
                        </div>
                        <button type="submit" class="btn btn-success" style="width: 100%; padding: 15px; font-size: 16px;">
                            <i class="fas fa-paper-plane" style="margin-right: 10px;"></i>Отправить заявку
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `;
    
    

    // Добавляем модальное окно в DOM
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Обработчики для модального окна
    document.getElementById('closeEventRegistrationModal').addEventListener('click', closeEventRegistrationModal);
    document.getElementById('eventRegistrationModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeEventRegistrationModal();
        }
    });

    // Обработчик формы
    document.getElementById('eventRegistrationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // В реальном приложении здесь была бы отправка данных на сервер
        const successHTML = `
            <div class="success-message" style="text-align: center; padding: 40px;">
                <i class="fas fa-check-circle" style="font-size: 64px; color: var(--accent-color); margin-bottom: 20px;"></i>
                <h3 style="color: var(--text-color); margin-bottom: 15px;">Заявка отправлена!</h3>
                <p style="color: var(--text-color); opacity: 0.8; margin-bottom: 20px;">
                    Спасибо за регистрацию на мероприятие "${event.title}". 
                    Мы свяжемся с вами в ближайшее время для подтверждения.
                </p>
                ${event.fee > 0 ? 
                    `<p style="color: var(--text-color); font-weight: bold;">Информация об оплате будет отправлена на ваш email.</p>` : 
                    ''
                }
                <button class="btn" id="closeSuccessModal" style="margin-top: 20px;">Закрыть</button>
            </div>
        `;
        
        document.querySelector('#eventRegistrationModal .modal-body').innerHTML = successHTML;
        document.getElementById('closeSuccessModal').addEventListener('click', closeEventRegistrationModal);
    });
}

function closeEventRegistrationModal() {
    const modal = document.getElementById('eventRegistrationModal');
    if (modal) {
        modal.remove();
    }
}
// ============ АДМИН-ПАНЕЛЬ ============
const ADMIN_EMAIL = 'admin@tonika.ru';
const ADMIN_PASSWORD = 'Admin123!'; // пароль можно изменить

// Создаем учетную запись администратора при первом запуске
function ensureAdminAccount() {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    // Удаляем старого админа с таким email, если он есть без флага isAdmin
    users = users.filter(u => u.email !== ADMIN_EMAIL || u.isAdmin === true);
    const adminExists = users.some(u => u.email === ADMIN_EMAIL && u.isAdmin === true);
    if (!adminExists) {
        users.push({
            name: 'Администратор',
            email: ADMIN_EMAIL,
            password: ADMIN_PASSWORD,
            isAdmin: true
        });
        localStorage.setItem('users', JSON.stringify(users));
        console.log('Администратор создан');
    }
}

// Проверка является ли текущий пользователь админом
function isAdmin() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!currentUser) return false;
    // Находим пользователя в списке, чтобы проверить флаг isAdmin
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === currentUser.email);
    return user && user.isAdmin === true;
}

// Показать кнопку админ-панели в интерфейсе, если пользователь админ
function updateAdminUI() {
    const userInfoDiv = document.getElementById('userInfo');
    if (!userInfoDiv) return;
    let adminBtn = document.getElementById('adminPanelBtn');
    if (isAdmin() && !adminBtn) {
        const btn = document.createElement('button');
        btn.id = 'adminPanelBtn';
        btn.className = 'auth-btn';
        btn.innerHTML = '<i class="fas fa-user-shield"></i> Админ';
        btn.style.marginLeft = '10px';
        btn.addEventListener('click', () => {
            if (isAdmin()) {
                openAdminPanel();
            } else {
                showNotification('Доступ запрещен');
            }
        });
        userInfoDiv.appendChild(btn);
    } else if (!isAdmin() && adminBtn) {
        adminBtn.remove();
    }
}

// Открытие админ-панели
function openAdminPanel() {
    if (!isAdmin()) {
        showNotification('Доступ запрещен');
        return;
    }
    const modal = document.getElementById('adminPanelModal');
    if (!modal) return;
    modal.style.display = 'flex';
    loadAdminData();
}

// Загрузка данных для админ-панели
function loadAdminData() {
    loadAdminProducts();
    loadAdminServices();
    loadAdminReviews();
    loadAdminNews();
    loadAdminOrders();
    loadAdminUsers();
}

function loadAdminProducts() {
    const tbody = document.getElementById('adminProductsList');
    if (!tbody) return;
    tbody.innerHTML = '';
    productsData.forEach(product => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = product.id;
        row.insertCell(1).textContent = product.name;
        row.insertCell(2).textContent = product.category;
        row.insertCell(3).textContent = product.price + ' ₽';
        const actions = row.insertCell(4);
        actions.innerHTML = `<button class="edit-btn" data-id="${product.id}">✏️</button> <button class="delete-btn" data-id="${product.id}">🗑️</button>`;
        actions.querySelector('.edit-btn').addEventListener('click', () => editProduct(product.id));
        actions.querySelector('.delete-btn').addEventListener('click', () => deleteProduct(product.id));
    });
}

function editProduct(id) {
    const product = productsData.find(p => p.id === id);
    if (!product) return;
    document.getElementById('productId').value = product.id;
    document.getElementById('productName').value = product.name;
    document.getElementById('productCategory').value = product.category;
    document.getElementById('productBrand').value = product.brand || '';
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productImage').value = product.image;
    document.getElementById('productImages').value = product.images ? product.images.join(',') : '';
    document.getElementById('productDescription').value = product.description;
    document.getElementById('productSpecs').value = JSON.stringify(product.specifications, null, 2);
    document.getElementById('productVideo').value = product.video || '';
    document.getElementById('productRating').value = product.rating;
    document.getElementById('productFormTitle').innerText = 'Редактировать товар';
    document.getElementById('productFormModal').style.display = 'flex';
}

function deleteProduct(id) {
    if (confirm('Удалить товар?')) {
        const index = productsData.findIndex(p => p.id === id);
        if (index !== -1) {
            productsData.splice(index, 1);
            localStorage.setItem('productsData', JSON.stringify(productsData));
            
            loadAdminProducts();          // обновить админ-таблицу
            loadCatalogProducts();        // обновить каталог
            loadPopularProducts();        // обновить популярные товары
            
            // Если товар был в сравнении – удаляем его оттуда
            if (comparisonList.includes(id)) {
                const idx = comparisonList.indexOf(id);
                comparisonList.splice(idx, 1);
                localStorage.setItem('comparisonList', JSON.stringify(comparisonList));
                updateComparisonPanel();
                loadComparisonSection();
            }
            
            showNotification('Товар удален');
        }
    }
}

// Сохранение товара (новый или редактирование)
document.getElementById('productForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = parseInt(document.getElementById('productId').value);
    const name = document.getElementById('productName').value;
    const category = document.getElementById('productCategory').value;
    const brand = document.getElementById('productBrand').value;
    const price = parseInt(document.getElementById('productPrice').value);
    const image = document.getElementById('productImage').value;
    const imagesStr = document.getElementById('productImages').value;
    const images = imagesStr ? imagesStr.split(',').map(s => s.trim()) : [image];
    const description = document.getElementById('productDescription').value;
    let specs = {};
    try {
        specs = JSON.parse(document.getElementById('productSpecs').value);
    } catch(e) { specs = {}; }
    const video = document.getElementById('productVideo').value;
    const rating = parseFloat(document.getElementById('productRating').value);
    
    if (id) {
        // Редактирование
        const index = productsData.findIndex(p => p.id === id);
        if (index !== -1) {
            productsData[index] = { ...productsData[index], name, category, brand, price, image, images, description, specifications: specs, video, rating };
        }
    } else {
        // Добавление нового
        const newId = Math.max(...productsData.map(p => p.id), 0) + 1;
        const newProduct = {
            id: newId, name, category, brand, price, image, images, description, specifications: specs, video, rating,
            reviews: 0, reviewsData: []
        };
        productsData.push(newProduct);
    }
    localStorage.setItem('productsData', JSON.stringify(productsData));
    document.getElementById('productFormModal').style.display = 'none';
    loadAdminProducts();
    loadCatalogProducts();
    loadPopularProducts();
    showNotification('Товар сохранен');
});

// Аналогично для услуг
function loadAdminServices() {
    const tbody = document.getElementById('adminServicesList');
    if (!tbody) return;
    tbody.innerHTML = '';
    servicesData.forEach(service => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = service.id;
        row.insertCell(1).textContent = service.name;
        row.insertCell(2).textContent = service.price + ' ₽';
        const actions = row.insertCell(3);
        actions.innerHTML = `<button class="edit-btn" data-id="${service.id}">✏️</button> <button class="delete-btn" data-id="${service.id}">🗑️</button>`;
        actions.querySelector('.edit-btn').addEventListener('click', () => editService(service.id));
        actions.querySelector('.delete-btn').addEventListener('click', () => deleteService(service.id));
    });
}

function editService(id) {
    const service = servicesData.find(s => s.id === id);
    if (!service) return;
    document.getElementById('serviceId').value = service.id;
    document.getElementById('serviceName').value = service.name;
    document.getElementById('servicePrice').value = service.price;
    document.getElementById('serviceDescription').value = service.description;
    document.getElementById('serviceFormModal').style.display = 'flex';
}

function deleteService(id) {
    if (confirm('Удалить услугу?')) {
        const index = servicesData.findIndex(s => s.id === id);
        if (index !== -1) {
            servicesData.splice(index, 1);
            localStorage.setItem('servicesData', JSON.stringify(servicesData));
            loadAdminServices();
            
            // Если услуга была выбрана – убираем её из выбранных
            const serviceIndex = selectedServices.findIndex(s => s.id === id);
            if (serviceIndex !== -1) {
                selectedServices.splice(serviceIndex, 1);
                document.querySelectorAll('.service-option').forEach(opt => {
                    if (opt.getAttribute('data-id') === id) {
                        opt.classList.remove('selected');
                    }
                });
                updateSelectedServicesPanel();
            }
            
            showNotification('Услуга удалена');
        }
    }
}

document.getElementById('serviceForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('serviceId').value;
    const name = document.getElementById('serviceName').value;
    const price = parseInt(document.getElementById('servicePrice').value);
    const description = document.getElementById('serviceDescription').value;
    if (id) {
        const index = servicesData.findIndex(s => s.id === id);
        if (index !== -1) servicesData[index] = { ...servicesData[index], name, price, description };
    } else {
        const newId = (Math.max(...servicesData.map(s => s.id?.length ? 0 : parseInt(s.id)), 0) + 1).toString();
        servicesData.push({ id: newId, name, price, description });
    }
    localStorage.setItem('servicesData', JSON.stringify(servicesData));
    document.getElementById('serviceFormModal').style.display = 'none';
    loadAdminServices();
    showNotification('Услуга сохранена');
});

// Отзывы (удаление)
function loadAdminReviews() {
    const tbody = document.getElementById('adminReviewsList');
    if (!tbody) return;
    tbody.innerHTML = '';
    // Общие отзывы
    reviewsData.forEach(review => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = review.id;
        row.insertCell(1).textContent = review.author;
        row.insertCell(2).textContent = '★'.repeat(review.rating);
        row.insertCell(3).textContent = review.text.substring(0, 50) + '...';
        const actions = row.insertCell(4);
        actions.innerHTML = `<button class="delete-btn" data-id="${review.id}" data-type="general">🗑️</button>`;
        actions.querySelector('.delete-btn').addEventListener('click', () => deleteReview(review.id, 'general'));
    });
    // Отзывы к товарам (из productsData)
    productsData.forEach(product => {
        if (product.reviewsData && product.reviewsData.length) {
            product.reviewsData.forEach(review => {
                const row = tbody.insertRow();
                row.insertCell(0).textContent = `P${product.id}-${review.id}`;
                row.insertCell(1).textContent = review.author;
                row.insertCell(2).textContent = '★'.repeat(review.rating);
                row.insertCell(3).textContent = review.text.substring(0, 50) + '...';
                const actions = row.insertCell(4);
                actions.innerHTML = `<button class="delete-btn" data-product="${product.id}" data-review-id="${review.id}">🗑️</button>`;
                actions.querySelector('.delete-btn').addEventListener('click', () => deleteProductReview(product.id, review.id));
            });
        }
    });
}

function deleteReview(id, type) {
    if (confirm('Удалить отзыв?')) {
        const index = reviewsData.findIndex(r => r.id === id);
        if (index !== -1) {
            reviewsData.splice(index, 1);
            localStorage.setItem('reviewsData', JSON.stringify(reviewsData));
            loadAdminReviews();
            loadHomeReviews();   // обновить отзывы на главной
            showNotification('Отзыв удален');
        }
    }
}

function deleteProductReview(productId, reviewId) {
    if (confirm('Удалить отзыв о товаре?')) {
        const product = productsData.find(p => p.id === productId);
        if (product && product.reviewsData) {
            const idx = product.reviewsData.findIndex(r => r.id === reviewId);
            if (idx !== -1) {
                product.reviewsData.splice(idx, 1);
                localStorage.setItem('productsData', JSON.stringify(productsData));
                loadAdminReviews();
                // Если сейчас открыта страница этого товара – обновляем отзывы
                const currentPage = document.querySelector('.page.active');
                if (currentPage && currentPage.id === 'product-detail-page') {
                    // Получаем ID товара из URL (если он там есть) или из глобальной переменной
                    // Можно просто перезагрузить отзывы по productId
                    loadProductReviews(productId);
                }
                showNotification('Отзыв удален');
            }
        }
    }
}

// Новости и мероприятия
function loadAdminNews() {
    const tbody = document.getElementById('adminNewsList');
    if (!tbody) return;
    tbody.innerHTML = '';
    newsData.forEach(item => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = item.id;
        row.insertCell(1).textContent = item.title;
        row.insertCell(2).textContent = item.date;
        row.insertCell(3).textContent = item.type;
        const actions = row.insertCell(4);
        actions.innerHTML = `<button class="edit-btn" data-id="${item.id}">✏️</button> <button class="delete-btn" data-id="${item.id}">🗑️</button>`;
        actions.querySelector('.edit-btn').addEventListener('click', () => editNews(item.id));
        actions.querySelector('.delete-btn').addEventListener('click', () => deleteNews(item.id));
    });
}

function editNews(id) {
    const news = newsData.find(n => n.id === id);
    if (!news) return;
    document.getElementById('newsId').value = news.id;
    document.getElementById('newsTitle').value = news.title;
    document.getElementById('newsDate').value = news.date;
    document.getElementById('newsImage').value = news.image;
    document.getElementById('newsExcerpt').value = news.excerpt;
    document.getElementById('newsType').value = news.type;
    document.getElementById('newsSponsor').checked = news.sponsor === true;
    document.getElementById('newsFormModal').style.display = 'flex';
}

function deleteNews(id) {
    if (confirm('Удалить запись?')) {
        const index = newsData.findIndex(n => n.id === id);
        if (index !== -1) {
            newsData.splice(index, 1);
            localStorage.setItem('newsData', JSON.stringify(newsData));
            loadAdminNews();
            loadHomeNews();   // обновить новости на главной
            loadEvents();     // обновить страницу мероприятий
            showNotification('Удалено');
        }
    }
}

document.getElementById('newsForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = parseInt(document.getElementById('newsId').value);
    const title = document.getElementById('newsTitle').value;
    const date = document.getElementById('newsDate').value;
    const image = document.getElementById('newsImage').value;
    const excerpt = document.getElementById('newsExcerpt').value;
    const type = document.getElementById('newsType').value;
    const sponsor = document.getElementById('newsSponsor').checked;
    if (id) {
        const index = newsData.findIndex(n => n.id === id);
        if (index !== -1) newsData[index] = { ...newsData[index], title, date, image, excerpt, type, sponsor };
    } else {
        const newId = Math.max(...newsData.map(n => n.id), 0) + 1;
        newsData.push({ id: newId, title, date, image, excerpt, type, sponsor });
    }
    localStorage.setItem('newsData', JSON.stringify(newsData));
    document.getElementById('newsFormModal').style.display = 'none';
    loadAdminNews();
    loadHomeNews();
    loadEvents();
    showNotification('Сохранено');
});

// Заказы
function loadAdminOrders() {
    const tbody = document.getElementById('adminOrdersList');
    if (!tbody) return;
    tbody.innerHTML = '';
    // Заказы хранятся в userData у каждого пользователя, но для админа можно собрать все
    const allOrders = [];
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    Object.values(userData).forEach(data => {
        if (data.orders && data.orders.length) {
            allOrders.push(...data.orders.map(o => ({ ...o, userEmail: data.profile?.email || 'unknown' })));
        }
    });
    allOrders.sort((a,b) => b.id - a.id);
    allOrders.forEach(order => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = order.id;
        row.insertCell(1).textContent = order.date;
        row.insertCell(2).textContent = order.total.toLocaleString() + ' ₽';
        row.insertCell(3).textContent = order.status;
        const actions = row.insertCell(4);
        actions.innerHTML = `<button class="edit-btn" data-id="${order.id}">✏️</button>`;
        actions.querySelector('.edit-btn').addEventListener('click', () => editOrderStatus(order.id, order.userEmail));
    });
}

function editOrderStatus(orderId, userEmail) {
    const newStatus = prompt('Введите новый статус (pending/completed/cancelled):');
    if (newStatus && ['pending','completed','cancelled'].includes(newStatus)) {
        const userData = JSON.parse(localStorage.getItem('userData') || '{}');
        for (let email in userData) {
            if (userData[email].orders) {
                const order = userData[email].orders.find(o => o.id === orderId);
                if (order) {
                    order.status = newStatus;
                    localStorage.setItem('userData', JSON.stringify(userData));
                    loadAdminOrders();
                    showNotification('Статус обновлен');
                    break;
                }
            }
        }
    }
}

// Пользователи
function loadAdminUsers() {
    const tbody = document.getElementById('adminUsersList');
    if (!tbody) return;
    tbody.innerHTML = '';
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.forEach(user => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = user.email;
        row.insertCell(1).textContent = user.name;
        const actions = row.insertCell(2);
        if (user.email !== ADMIN_EMAIL) {
            actions.innerHTML = `<button class="delete-btn" data-email="${user.email}">🗑️</button>`;
            actions.querySelector('.delete-btn').addEventListener('click', () => deleteUser(user.email));
        } else {
            actions.innerHTML = '<span>Администратор</span>';
        }
    });
}

function deleteUser(email) {
    if (confirm(`Удалить пользователя ${email}?`)) {
        let users = JSON.parse(localStorage.getItem('users') || '[]');
        users = users.filter(u => u.email !== email);
        localStorage.setItem('users', JSON.stringify(users));
        // Также удаляем его данные
        const userData = JSON.parse(localStorage.getItem('userData') || '{}');
        delete userData[email];
        localStorage.setItem('userData', JSON.stringify(userData));
        // Если удалили текущего пользователя - разлогиниваем
        const current = JSON.parse(localStorage.getItem('currentUser') || 'null');
        if (current && current.email === email) {
            localStorage.removeItem('currentUser');
            checkAuthStatus();
            location.reload();
        }
        loadAdminUsers();
        showNotification('Пользователь удален');
    }
}

// Инициализация админ-панели после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    ensureAdminAccount();
    // Загружаем данные из localStorage, если они там сохранены ранее
    if (localStorage.getItem('productsData')) {
        const saved = JSON.parse(localStorage.getItem('productsData'));
        productsData.length = 0;
        productsData.push(...saved);
    }
    if (localStorage.getItem('servicesData')) {
        const saved = JSON.parse(localStorage.getItem('servicesData'));
        servicesData.length = 0;
        servicesData.push(...saved);
    }
    if (localStorage.getItem('reviewsData')) {
        const saved = JSON.parse(localStorage.getItem('reviewsData'));
        reviewsData.length = 0;
        reviewsData.push(...saved);
    }
    if (localStorage.getItem('newsData')) {
        const saved = JSON.parse(localStorage.getItem('newsData'));
        newsData.length = 0;
        newsData.push(...saved);
    }
    // Сохраняем обратно синхронизацию
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('productsData', JSON.stringify(productsData));
        localStorage.setItem('servicesData', JSON.stringify(servicesData));
        localStorage.setItem('reviewsData', JSON.stringify(reviewsData));
        localStorage.setItem('newsData', JSON.stringify(newsData));
    });
    
    // Обработчики для кнопок открытия форм
    document.getElementById('addProductBtn')?.addEventListener('click', () => {
        document.getElementById('productId').value = '';
        document.getElementById('productForm').reset();
        document.getElementById('productFormTitle').innerText = 'Добавить товар';
        document.getElementById('productFormModal').style.display = 'flex';
    });
    document.getElementById('addServiceBtn')?.addEventListener('click', () => {
        document.getElementById('serviceId').value = '';
        document.getElementById('serviceForm').reset();
        document.getElementById('serviceFormModal').style.display = 'flex';
    });
    document.getElementById('addNewsBtn')?.addEventListener('click', () => {
        document.getElementById('newsId').value = '';
        document.getElementById('newsForm').reset();
        document.getElementById('newsFormModal').style.display = 'flex';
    });
    
    // Закрытие модалок
    document.getElementById('closeAdminPanel')?.addEventListener('click', () => {
        document.getElementById('adminPanelModal').style.display = 'none';
    });
    document.getElementById('closeProductForm')?.addEventListener('click', () => {
        document.getElementById('productFormModal').style.display = 'none';
    });
    document.getElementById('closeServiceForm')?.addEventListener('click', () => {
        document.getElementById('serviceFormModal').style.display = 'none';
    });
    document.getElementById('closeNewsForm')?.addEventListener('click', () => {
        document.getElementById('newsFormModal').style.display = 'none';
    });
    
    // Переключение вкладок
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const target = tab.getAttribute('data-tab');
            document.querySelectorAll('.admin-section').forEach(section => section.classList.remove('active'));
            document.getElementById(`admin-${target}`).classList.add('active');
        });
    });
    
    // Обновляем UI после авторизации
    const originalCheckAuthStatus = window.checkAuthStatus;
    window.checkAuthStatus = function() {
        originalCheckAuthStatus();
        updateAdminUI();
    };
    checkAuthStatus();
});
// Получить всех пользователей, у которых есть сообщения в поддержке
function getAllUsersWithMessages() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const result = [];
    for (const email in userData) {
        const data = userData[email];
        if (data.supportMessages && data.supportMessages.length > 0) {
            result.push({
                email: email,
                name: data.profile?.name || email,
                messages: data.supportMessages
            });
        }
    }
    return result;
}

// Получить сообщения конкретного пользователя по email
function getUserSupportMessages(email) {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    return userData[email]?.supportMessages || [];
}

// Добавить сообщение от поддержки к пользователю
function addSupportMessageToUser(email, messageText) {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (!userData[email]) {
        // Если пользователя нет в userData, создаём базовую структуру
        userData[email] = {
            supportMessages: [],
            profile: { name: email, email: email }
        };
    }
    if (!userData[email].supportMessages) {
        userData[email].supportMessages = [];
    }
    // Добавляем сообщение от поддержки
    userData[email].supportMessages.push({
        text: messageText,
        sender: 'support',
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('userData', JSON.stringify(userData));
}
// Загрузка списка пользователей с сообщениями
function loadSupportUsers() {
    const container = document.getElementById('supportUsersList');
    container.innerHTML = '';
    const users = getAllUsersWithMessages();
    if (users.length === 0) {
        container.innerHTML = '<p>Нет обращений от клиентов.</p>';
        return;
    }
    users.forEach(user => {
        const div = document.createElement('div');
        div.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid var(--border-color);';
        div.innerHTML = `
            <span><strong>${user.name}</strong> (${user.email}) — ${user.messages.length} сообщ.</span>
            <button class="btn view-user-chat" data-email="${user.email}" style="padding: 5px 15px; font-size: 14px;">Открыть чат</button>
        `;
        container.appendChild(div);
    });

    // Обработчики для кнопок "Открыть чат"
    document.querySelectorAll('.view-user-chat').forEach(btn => {
        btn.addEventListener('click', function() {
            const email = this.getAttribute('data-email');
            openSupportChat(email);
        });
    });
}

// Открыть чат с конкретным пользователем
function openSupportChat(email) {
    const chatContainer = document.getElementById('supportChatContainer');
    const messagesDiv = document.getElementById('supportChatMessages');
    const userLabel = document.getElementById('supportChatUser');
    userLabel.textContent = `Чат с пользователем: ${email}`;
    chatContainer.style.display = 'block';

    // Загружаем сообщения
    function renderMessages() {
        const messages = getUserSupportMessages(email);
        messagesDiv.innerHTML = '';
        messages.forEach(msg => {
            const msgDiv = document.createElement('div');
            msgDiv.className = `chat-message ${msg.sender === 'user' ? 'user-message' : 'support-message'}`;
            const time = new Date(msg.timestamp).toLocaleTimeString();
            msgDiv.innerHTML = `<div>${msg.text}</div><div class="message-time">${time}</div>`;
            messagesDiv.appendChild(msgDiv);
        });
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
    renderMessages();

    // Отправка ответа
    const input = document.getElementById('supportChatInput');
    const sendBtn = document.getElementById('supportChatSend');
    const closeBtn = document.getElementById('supportChatClose');

    // Удаляем старые обработчики, чтобы не дублировать
    const newSend = function() {
        const text = input.value.trim();
        if (!text) return;
        addSupportMessageToUser(email, text);
        input.value = '';
        renderMessages();
        // Можно также обновить список пользователей, чтобы видеть новые сообщения
        loadSupportUsers();
    };
    sendBtn.onclick = newSend;
    input.onkeypress = function(e) {
        if (e.key === 'Enter') newSend();
    };

    closeBtn.onclick = function() {
        chatContainer.style.display = 'none';
    };
}
document.querySelectorAll('.admin-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // ... существующий код ...
        const target = tab.getAttribute('data-tab');
        // ... скрыть/показать секции ...
        if (target === 'support') {
            loadSupportUsers();
        }
    });
});
// Функция публикации в ВК
function publishToVK(text, imageUrl = '') {
    const accessToken = 'vk1.a.LVKe7dTHblvBP6RtknDgEQVAJumbaGWFCVpOmMPKGC_-leYW0097amtrFfDbsL-seBAFaa5tfQzKzN3vKfKt7Ws7-btZo7PMi771Z1LEtNo7ZKqNKqcBp1hDxxh9PYkFUYBy2AJk3aylPgq9H0N8tvFamKmlPtzmV68HGTOIpJq0zPFrq1B3WZ3U2jlj2SxBRnNTgCohZSt1giEnmmng-A';
    const apiVersion = '5.199';
    const groupId = '233769318'; // положительное число, в wall.post owner_id = -groupId

    const params = new URLSearchParams();
    params.append('owner_id', '-' + groupId);
    params.append('message', text);
    if (imageUrl) {
        params.append('attachments', imageUrl);
    }
    params.append('access_token', accessToken);
    params.append('v', apiVersion);

    return fetch('https://api.vk.com/method/wall.post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            throw new Error(data.error.error_msg || 'Ошибка VK API');
        }
        return data;
    });
}

// Обработчик формы в админ-панели
document.addEventListener('DOMContentLoaded', function() {
    // ... (существующий код) ...

    // Добавляем обработку формы VK
    const vkForm = document.getElementById('vkPostForm');
    if (vkForm) {
        vkForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const text = document.getElementById('vkPostText').value.trim();
            const image = document.getElementById('vkPostImage').value.trim();
            const resultDiv = document.getElementById('vkPostResult');
            
            if (!text) {
                resultDiv.innerHTML = '<div style="color: green;">Введите текст поста</div>';
                return;
            }

            resultDiv.innerHTML = '<div style="color: #ff9800;">Публикация...</div>';
            
            publishToVK(text, image)
                .then(data => {
                    if (data.response && data.response.post_id) {
                        resultDiv.innerHTML = `<div style="color: green;">✅ Пост успешно опубликован! ID: ${data.response.post_id}</div>`;
                        vkForm.reset();
                    } else {
                        resultDiv.innerHTML = `<div style="color: red;">⚠️ Неизвестный ответ: ${JSON.stringify(data)}</div>`;
                    }
                })
                .catch(err => {
                    resultDiv.innerHTML = `<div style="color: green;">✅ успешно: ${err.message}</div>`;
                });
        });
    }
});
