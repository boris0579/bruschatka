import Splide from '@splidejs/splide' // Импортируем библиотеку Splide

/**
 * Класс для управления слайдерами Splide
 */
export default class SplideSlider {
    /**
     * Создаёт экземпляр слайдера
     * @param {string} attribute - Атрибут для поиска элемента с слайдером
     * @param {Object} options - Опции для конфигурации слайдера
     */
    constructor (attribute, options) {
        this.attribute = attribute // Атрибут для поиска элементов
        this.options = options // Опции конфигурации Splide
        this.splide = null // Для хранения экземпляра Splide
    }

    /**
     * Метод для инициализации слайдера
     */
    init () {
        const element = document.querySelector(
            `[data-splide="${this.attribute}"] .splide`
        )

        if (!element) {
            console.warn(`Элемент с атрибутом "${this.attribute}" не найден.`)
            return
        }

        try {
            this.splide = new Splide(element, this.options)
            this.splide.mount()
        } catch (error) {
            console.error('Ошибка при инициализации слайдера Splide:', error)
        }
    }

    /**
     * Метод для синхронизации слайдера с другим слайдером
     * @param {SplideSlider} secondarySlider - Второй слайдер для синхронизации
     */
    sync (secondarySlider) {
        if (!(secondarySlider instanceof SplideSlider)) {
            console.error(
                'Переданный слайдер не является экземпляром SplideSlider.'
            )
            return
        }

        if (!this.splide || !secondarySlider.splide) {
            console.warn('Один или оба слайдера не инициализированы.')
            return
        }

        try {
            this.splide.sync(secondarySlider.splide)
        } catch (error) {
            console.error('Ошибка при синхронизации слайдеров Splide:', error)
        }
    }
}
