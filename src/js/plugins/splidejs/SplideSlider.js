import Splide from '@splidejs/splide' // Импортируем библиотеку Splide

// Класс для управления слайдерами Splide
export default class SplideSlider {
    // Конструктор принимает атрибут (для селектора) и опции для конфигурации слайдера
    constructor (attribute, options) {
        this.attribute = attribute // Атрибут для поиска элементов (например, 'card-slider')
        this.options = options // Опции конфигурации Splide
    }

    // Метод для инициализации слайдеров
    init () {
        // Ищем все элементы с атрибутом data-splide="значение" и внутри них элемент с классом .splide
        const elements = document.querySelectorAll(
            `[data-splide="${this.attribute}"] .splide`
        )

        // Если элементы не найдены, выводим ошибку в консоль и прекращаем выполнение
        if (elements.length === 0) {
            console.error(
                `No elements found with attribute [data-splide="${this.attribute}"].`
            )
            return
        }

        // Для каждого найденного элемента создаём и монтируем Splide слайдер
        elements.forEach(element => {
            try {
                const splide = new Splide(element, this.options) // Создаём новый экземпляр слайдера
                splide.mount() // Монтируем слайдер (инициализация)
            } catch (error) {
                // В случае ошибки при создании или монтировании, выводим сообщение об ошибке
                console.error('Error initializing Splide slider:', error)
            }
        })
    }
}
