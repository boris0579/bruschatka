export default class Dropdown {
    constructor (dropdownElement) {
        this.dropdown = dropdownElement
        this.menu = dropdownElement.querySelector('[data-dropdown-menu]')
        this.arrow = dropdownElement.querySelector('[data-dropdown-arrow]') // Стрелка с атрибутом data-dropdown-arrow

        // Проверим, что элементы найдены
        if (!this.menu || !this.arrow) {
            console.error('Dropdown elements are missing.')
            return
        }

        this.init()
    }

    init () {
        // Открываем меню по умолчанию
        this.menu.style.display = 'block' // Меню будет открыто по умолчанию

        // Добавляем слушатель для стрелки
        this.arrow.addEventListener('click', () => this.toggleDropdown())
    }

    toggleDropdown () {
        const isOpen = this.menu.style.display === 'block'
        this.menu.style.display = isOpen ? 'none' : 'block'
        this.arrow.classList.toggle('opened', !isOpen) // Поворачиваем стрелку
    }
}
