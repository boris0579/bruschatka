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
        const elements = document.querySelectorAll(
            `[data-splide="${this.attribute}"] .splide`
        )

        if (elements.length === 0) {
            console.warn(`Элементы с атрибутом "${this.attribute}" не найдены.`)
            return
        }

        this.sliders = [] // Очищаем массив перед инициализацией

        elements.forEach((element, index) => {
            try {
                const splide = new Splide(element, this.options)
                splide.mount()
                this.sliders.push(splide) // Сохраняем экземпляр в массив
                console.log(`Слайдер #${index + 1} успешно инициализирован.`)
            } catch (error) {
                console.error(
                    `Ошибка при инициализации слайдера #${index + 1}:`,
                    error
                )
            }
        })
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
