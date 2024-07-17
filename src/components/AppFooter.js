const { ShadowElement, html } = dim

class AppFooter extends ShadowElement {
	render() {
		return html`
			<footer class="app-footer">
				<p class="app-footer__p container">
					You could edit me over at <code>src/components/AppFooter.js</code>.
				</p>
			</footer>

			<style>
				.app-footer {
					margin-top: 1rem;
					padding: 6rem 0;
					background-color: var(--color-gray-800);
				}

				.app-footer__p {
					color: var(--color-gray-100);
					text-align: center;
				}
			</style>
		`
	}
}

export default AppFooter.define('app-footer')
