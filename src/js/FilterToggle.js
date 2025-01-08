// Класс для управления отображением фильтров по нажатию кнопки
export default class FilterToggle {
    // Конструктор принимает селекторы кнопки и блока фильтра
    constructor (buttonSelector, filterSelector) {
        this.button = document.querySelector(buttonSelector)
        this.filterBlock = document.querySelector(filterSelector)
        this.isOpen = false // Флаг состояния фильтра (открыт/закрыт)
        this.init()
    }

    // Метод инициализации - добавляет слушатель события на кнопку
    init () {
        if (this.button && this.filterBlock) {
            this.button.addEventListener('click', () => this.toggleFilter())
        }
    }

    // Метод переключения состояния фильтра
    toggleFilter () {
        this.isOpen = !this.isOpen // Инверсия состояния
        this.filterBlock.classList.toggle('active', this.isOpen) // Добавление/удаление класса 'active'
        const buttonText = this.isOpen ? 'Закрыть фильтры' : 'Открыть фильтры'
        this.button.querySelector('span').nextSibling.nodeValue = buttonText
    }
}
