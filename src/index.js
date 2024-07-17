/**
 * Entry point of the application
 *
 * @module index
 * @param {Object} dim - The core of the application.
 * @param {Object} AppHeader - The header component of the application.
 * @param {Object} AppFooter - The footer component of the application.
 */
const { initRouter } = dim
import { routes } from './routes.js'
import './components/AppHeader.js'
import './components/AppFooter.js'
import './components/AppSidebar.js'

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
