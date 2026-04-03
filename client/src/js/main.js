document.addEventListener('DOMContentLoaded', () => {
	// Basic component loader to simulate React-like component imports
	async function loadComponent(elementId, componentPath) {
		const element = document.getElementById(elementId);
		if (element) {
			try {
				// Auto-guess the CSS path by replacing .html with .css
				const cssPath = componentPath.replace('.html', '.css');

				// Try to load the associated CSS if it exists
				try {
					const cssResponse = await fetch(cssPath, { method: 'HEAD' });
					if (cssResponse.ok && !document.querySelector(`link[href="${cssPath}"]`)) {
						const link = document.createElement('link');
						link.rel = 'stylesheet';
						link.href = cssPath;
						document.head.appendChild(link);
					}
				} catch (cssError) {
					// Ignore error if component doesn't have a CSS file
				}

				const response = await fetch(componentPath);
				if (!response.ok) throw new Error(`Failed to load ${componentPath}`);
				const html = await response.text();
				element.innerHTML = html;
			} catch (error) {
				console.error('Error loading component:', error);
			}
		}
	}

	// Load main components
	loadComponent('header', 'src/components/header.html');
	loadComponent('footer', 'src/components/footer.html');
});
