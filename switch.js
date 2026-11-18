(() => {
	const THEMES = ['def', 'alt'];
	const KEY = 'fisat-aicte-idealab-theme';
	const link = document.getElementById('theme');
	const base = new URL('.', document.currentScript.src);

	const get = () => {
		const q = new URLSearchParams(location.search).get('theme');
		const t = q || localStorage.getItem(KEY);
		return THEMES.includes(t) ? t : THEMES[0];
	};
	const set = t => {
		localStorage.setItem(KEY, t);
		link.href = new URL(t + '.css', base);
	};

	set(get());

})();
