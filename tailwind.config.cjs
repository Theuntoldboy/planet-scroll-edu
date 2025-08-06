module.exports = {
 darkMode: 'class',
 content: [
 './index.html',
 './src/**/*.{js,jsx,ts,tsx}',
 ],
 theme: {
 extend: {
 fontFamily: {
 display: ['"Space Grotesk"', 'sans-serif'],
 body: ['"Inter"', 'sans-serif'],
 },
 colors: {
 mercury: '#e3e3e3',
 venus: '#f7c873',
 earth: '#3b82f6',
 mars: '#e2584d',
 jupiter: '#f5d68a',
 saturn: '#e7c97f',
 uranus: '#7de2e6',
 neptune: '#4f6ee2',
 deep: '#0b1120',
 },
 backgroundImage: {
 'stars': 'url(https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1500&q=80)',
 },
 transitionProperty: {
 'bg': 'background-color',
 },
 },
 },
 plugins: [require('tailwindcss-animate')],
};
