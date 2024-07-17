/**
 * Entry point of the application
 *
 * @module index
 * @param {Object} initRouter - The router utility of the application.
 * @param {Object} loadEnv - The environment variables loader of the application.
 * @param {Object} AppHeader - The header component of the application.
 * @param {Object} AppFooter - The footer component of the application.
 */
import { initRouter } from './core/utils/router.js'
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

/**
 * Get the environment variables of the application.
 *
 * @module loadEnv
 * @param {function} loadEnv - The environment variables loader of the application.
 * @returns {Promise} The environment variables of the application.
 */
export async function loadEnv() {
	const response = await fetch('/.env')
	const text = await response.text()
	const env = {}

	text.split('\n').forEach((line) => {
		const [key, value] = line.split('=')
		if (key && value) {
			env[key.trim()] = value.trim()
		}
	})
	return env
}

/**
 * Load the environment variables of the application.
 *
 * @param {Function} loadEnv - The environment variables loader of the application.
 * @returns {Promise} The environment variables of the application.
 */
loadEnv().then((env) => {
	if (env.API_ENDPOINT) {
		window.API_ENDPOINT = env.API_ENDPOINT
	}
})
