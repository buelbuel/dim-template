const { BaseElement, html } = dim

class StartPage extends BaseElement {
	constructor() {
		super()
		this.defineReactiveProperty('count', 0)
		this.setAttribute('title', 'Start')
		this.setAttribute('description', 'Description of the Start page.')
	}

	render() {
		return html`
			<section class="start-page container">
				<h1>${this.t('editMe')}</h1>
				<p>${this.t('description')}</p>
				<div>
					<button-component id="increment">Increment ${this.count}</button-component>
				</div>
			</section>
		`
	}

	addEventListeners() {
		this.addEventListenerWithCleanup('#increment', 'click', () => {
			this.count++
		})
	}
}

export default StartPage.define('start-page')
