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
        arrows: false
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

    cardSlider.init()
    reviewSlider.init()
}
