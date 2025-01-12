/**
 * Класс Sidebar для управления боковой панелью (меню).
 * Обрабатывает открытие, закрытие меню, а также клики вне области меню и изменение размера экрана.
 */
class Sidebar {
    /**
     * Создает экземпляр класса Sidebar.
     * Находит все необходимые элементы на странице и привязывает обработчики событий.
     */
    constructor () {
        // Находим элементы на странице
        this.menuToggle = document.querySelector('[data-toggle-menu]') // Элемент, который переключает меню
        this.menuIcon = this.menuToggle.querySelector('[data-icon-menu]') // Иконка меню (меню/закрыть)
        this.sidePanel = document.querySelector('[data-panel]') // меню
        this.overlay = document.querySelector('.overlay') // Наложение

        // Привязываем обработчики событий для взаимодействия с меню
        this.addEventListeners()
    }

    /**
     * Добавляет обработчики событий для взаимодействия с боковой панелью.
     * - Открытие или закрытие панели при клике на иконку меню.
     * - Закрытие панели при клике вне ее области.
     * - Закрытие панели при изменении размера экрана (если экран больше 834px).
     */
    addEventListeners () {
        // Открытие или закрытие панели по клику на иконку меню
        this.menuToggle.addEventListener('click', () => this.toggleSidePanel())

        // Закрытие панели при клике вне ее области
        document.addEventListener('click', event =>
            this.handleOutsideClick(event)
        )

        // Закрытие панели при изменении размера экрана (если экран больше 834px)
        window.addEventListener('resize', () => this.handleResize())
    }

    /**
     * Переключает состояние боковой панели (открытие/закрытие).
     * Если панель открыта — закрывает ее, если закрыта — открывает.
     */
    toggleSidePanel () {
        // Проверяем, открыта ли панель
        const isPanelOpen = this.sidePanel.getAttribute('data-panel') === 'open'

        // Если панель открыта, закрываем ее, если закрыта — открываем
        if (isPanelOpen) {
            this.closeSidePanel()
        } else {
            this.openSidePanel()
        }
    }

    /**
     * Открывает боковую панель, меняет иконку и добавляет наложение.
     */
    openSidePanel () {
        // Устанавливаем атрибут, чтобы указать, что панель открыта
        this.sidePanel.setAttribute('data-panel', 'open')

        // Для смены иконки
        this.menuIcon.setAttribute('data-icon', 'close')

        // Отключаем скролл
        document.body.classList.add('no-scroll')

        // Показываем наложение
        this.overlay.classList.add('active')
    }

    /**
     * Закрывает боковую панель, меняет иконку и скрывает наложение.
     */
    closeSidePanel () {
        // Устанавливаем атрибут, чтобы указать, что панель закрыта
        this.sidePanel.setAttribute('data-panel', 'closed')

        // Для смены иконки
        this.menuIcon.setAttribute('data-icon', 'menu')

        // Включаем скролл
        document.body.classList.remove('no-scroll')

        // Скрываем наложение
        this.overlay.classList.remove('active')
    }

    /**
     * Обрабатывает клик вне области боковой панели.
     * Закрывает панель, если клик был вне нее или иконки меню.
     * @param {Event} event - Событие клика.
     */
    handleOutsideClick (event) {
        // Проверяем, открыта ли панель
        const isPanelOpen = this.sidePanel.getAttribute('data-panel') === 'open'
        if (isPanelOpen) {
            // Проверяем, был ли клик вне боковой панели и иконки меню
            const isClickInside =
                this.sidePanel.contains(event.target) || // Клик внутри панели
                this.menuToggle.contains(event.target) // Клик внутри иконки меню
            if (!isClickInside) {
                // Если клик был вне — закрываем панель
                this.closeSidePanel()
            }
        }
    }

    /**
     * Закрывает боковую панель при изменении размера окна, если ширина больше 834px.
     */
    handleResize () {
        // Если ширина окна больше 834px, то закрываем панель
        if (window.innerWidth > 834) {
            this.closeSidePanel()
        }
    }
}

export default Sidebar
