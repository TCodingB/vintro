/** @type {import('tailwindcss').Config} */
export default { content: ['./index.html','./src/**/*.{vue,ts}'], theme: { extend: { colors: { ink:'#20211f', canvas:'#f5f4f0', accent:'#2d5b4f', line:'#deddd7', muted:'#71736f', success:'#2d6a4f', amber:'#a36a17' }, fontFamily:{sans:['Inter','ui-sans-serif','system-ui','sans-serif']}, boxShadow:{soft:'0 12px 40px rgba(26,29,27,.08)'} } }, plugins: [] }
