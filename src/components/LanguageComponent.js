const { BaseElement, html, i18n } = dim

class LanguageComponent extends BaseElement {
	constructor() {
		super()
		this.defineReactiveProperty('currentLanguage', i18n.currentLanguage)
	}

	render() {
		return html`
			<select id="language-select">
				<option value="en" ${this.currentLanguage === 'en' ? 'selected' : ''}>
					English
				</option>
				<option value="es" ${this.currentLanguage === 'es' ? 'selected' : ''}>
					Español
				</option>
			</select>
		`
	}

	addEventListeners() {
		this.addEventListenerWithCleanup('#language-select', 'change', (e) => {
			const newLang = e.target.value
			i18n.setLanguage(newLang)
			this.currentLanguage = newLang
		})
	}
}

export default LanguageComponent.define('language-component')
