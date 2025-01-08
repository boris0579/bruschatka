import '../scss/main.scss'
import Dropdown from './Dropdown'
import initSlider from './plugins/splidejs/initSlider'
import FilterToggle from './FilterToggle'
import NavbarScrollEffect from './NavbarScrollEffect'
import Sidebar from './Sidebar'

document.addEventListener('DOMContentLoaded', () => {
    // Инициализация всех dropdown'ов на странице
    const dropdowns = document.querySelectorAll('[data-dropdown-id]')

    dropdowns.forEach(dropdownElement => {
        new Dropdown(dropdownElement)
    })

    // Инициализация слайдера
    initSlider()

    // Скрыть/показать фильтр
    new FilterToggle('[data-filter-btn]', '[data-filter-block]')

    // Добавляем тень к шапке при скроле
    new NavbarScrollEffect('.header')

    // Мобильное меню шапки
    new Sidebar()
})
