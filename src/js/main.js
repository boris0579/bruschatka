import '../scss/main.scss'
import Dropdown from './Dropdown'
import initSlider from './plugins/splidejs/initSlider'
import FilterToggle from './FilterToggle'
import NavbarScrollEffect from './NavbarScrollEffect'
import Sidebar from './Sidebar'
import ProductGallery from './ProductGallery'
import Select from './Select'
import ColorPicker from './ColorPicker'
import Tabs from './Tabs'
import Modal from './Modal'
import CatalogSidebar from './CatalogSidebar'
import HeaderDropdownMenu from './HeaderDropdownMenu'
import ButtonPreloader from './ButtonPreloader'
import QuantityInput from './QuantityInput'

document.addEventListener('DOMContentLoaded', () => {
    // Modals
    const modal = new Modal()

    // Инициализация всех dropdown'ов на странице
    const dropdowns = document.querySelectorAll('[data-dropdown-id]')

    dropdowns.forEach(dropdownElement => {
        new Dropdown(dropdownElement)
    })

    // Инициализация слайдера
    initSlider()

    // Поле number (custom)
    new QuantityInput()

    // Скрыть/показать фильтр
    new FilterToggle('[data-filter-btn]', '[data-filter-block]')

    // Добавляем тень к шапке при скроле
    new NavbarScrollEffect('.header')

    // Мобильное меню шапки
    // Получаем все кнопки
    const toggleMenu = document.querySelectorAll('[data-toggle-menu]')

    // Преобразуем NodeList в массив и передаем все кнопки в один экземпляр Sidebar
    new Sidebar(Array.from(toggleMenu))

    // Страница продукта
    new ProductGallery('[data-product-gallery]')

    // Select
    const selectElements = document.querySelectorAll('[data-select]')
    if (selectElements.length > 0) {
        selectElements.forEach(selectElement => {
            // Создаем экземпляр Select для каждого элемента
            const selectInstance = new Select(selectElement)

            // Добавляем слушатель события для каждого селекта
            selectElement.addEventListener('selectChanged', event => {
                console.log(
                    'Выбран вариант для этого select:',
                    event.detail.text
                )
                console.log('Значение:', event.detail.value)
            })
        })
    }

    // Color picker product
    const colorPickerElement = document.querySelector('[data-picker="color"]')
    if (colorPickerElement) {
        new ColorPicker(colorPickerElement)

        // Добавляем обработчик события на родительский элемент
        colorPickerElement.addEventListener('colorSelected', event => {
            const selectedColor = event.detail.color // Получаем выбранный цвет из события
            console.log(`Выбран цвет: ${selectedColor}`)
        })
    }

    // Tabs
    new Tabs({
        selector: '[data-tabs]', // Селектор контейнера с табами
        activeTabIndex: 1 // Активный таб
    })

    // Catalog sidebar
    new CatalogSidebar('[data-catalog-sidebar]', '[data-toggle-sidebar]')

    // Menu header
    new HeaderDropdownMenu()

    // Ищем все кнопки с data-loader="false"
    const buttons = ButtonPreloader.getLoaderButtons()
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Добавляем прелоадер
            ButtonPreloader.addPreloader(button, 'Загрузка...')

            // Эмуляция запроса
            setTimeout(() => {
                // Удаляем прелоадер
                ButtonPreloader.removePreloader(button)
                modal.open('success') // Открываем модальное окно по значению аттрибута
            }, 1000)
        })
    })
})
