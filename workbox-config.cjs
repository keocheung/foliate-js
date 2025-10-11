module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,js,json,html,md,css,bcmap,mjs,pfb,ttf}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};