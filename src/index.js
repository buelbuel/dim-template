/**
 * Entry point of the application
 *
 * @module index
 * @param {Object} dim - The core of the application.
 * @param {Object} AppHeader - The header component of the application.
 * @param {Object} AppFooter - The footer component of the application.
 * @param {Object} ButtonComponent - The button component of the application.
 * @param {Object} LanguageComponent - The language component of the application.
 */
const { initRouter, i18n } = dim
import { routes } from './routes.js'
import './components/AppHeader.js'
import './components/AppFooter.js'
import './components/AppSidebar.js'
import './components/ButtonComponent.js'
import './components/LanguageComponent.js'

/**
 * Adds the translations to the i18n utility
 *
 * @param {Object} enTranslations - The translations for English.
 * @param {Object} deTranslations - The translations for German.
 */
import enTranslations from './locales/en.js'
import deTranslations from './locales/de.js'
i18n.addTranslations('en', enTranslations)
i18n.addTranslations('de', deTranslations)

/**
 * Initializes the application
 *
 * @param {Function} initRouter - The router utility of the application.
 * @param {Object} document - The document with the DOM of the application.
 * @returns {Object} The routes of the application.
 */
document.addEventListener('DOMContentLoaded', () => {
	initRouter(routes)
})
