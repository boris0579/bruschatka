import SplideSlider from './SplideSlider'

export default function initSlider () {
    // Слайдер для карточки товара
    const cardSlider = new SplideSlider('card-slider', {
        type: 'loop',
        perPage: 1,
        //autoplay: true,
        gap: '10px',
        live: false,
        pagination: true,
        arrows: false,
        waitForTransition: true,
        wheel: true
    })

    // Слайдер для отзывов
    const reviewSlider = new SplideSlider('reviews', {
        type: 'loop',
        perPage: 3,
        autoplay: true,
        gap: '40px',
        live: false,
        pagination: true,
        arrows: true,
        breakpoints: {
            900: {
                perPage: 2,
                gap: '10px'
            },
            768: {
                perPage: 1,
                gap: '5px'
            }
        }
    })

    // Слайдер для категорий
    const categoriesSlider = new SplideSlider('categories', {
        autoWidth: true,
        arrows: false,
        pagination: false,
        drag: 'free',
        live: false,
        breakpoints: {
            768: {
                type: 'loop'
            }
        }
    })

    // Основной слайдер для продукта
    const mainImage = new SplideSlider('main-image', {
        type: 'fade', // Плавное переключение между изображениями
        rewind: true, // Переключение в начало после последнего слайда
        pagination: false, // Отключаем пагинацию
        arrows: false, // Отключаем стрелки
        live: false // Отключаем live-обновление для оптимизации
    })

    // Слайдер миниатюр продукта
    const thumbnails = new SplideSlider('thumbnails', {
        direction: 'ttb', // Вертикальный режим
        height: 'auto', // Автоматическая высота
        autoHeight: true, // Включаем авто-высоту
        drag: 'free', // Свободное перетаскивание
        live: false, // Отключаем live-обновление
        pagination: false, // Отключаем пагинацию
        arrows: true, // Включаем стрелки
        isNavigation: true, // Включаем режим навигации
        breakpoints: {
            1024: {
                type: 'loop',
                direction: 'ltr', // Горизонтальное направление
                autoWidth: true,
                isNavigation: false, // Включаем навигацию
                pagination: true
            }
        }
    })

    // Сначала инициализируем слайдеры
    mainImage.init()
    thumbnails.init()

    // Затем синхронизируем основной слайдер с миниатюрами
    mainImage.sync(thumbnails)

    //
    cardSlider.init()
    reviewSlider.init()
    categoriesSlider.init()
}
