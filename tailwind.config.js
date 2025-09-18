import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'average': ['Average', 'serif'],
				'sans': ['Inter', 'system-ui', 'sans-serif']
			},
			colors: {
				'academic-blue': '#2563eb'
			}
		}
	},
	plugins: [
		typography,
		daisyui
	],
	daisyui: {
		themes: [
			{
				light: {
					"primary": "#2563eb",
					"secondary": "#1e40af",
					"accent": "#3b82f6",
					"neutral": "#1f2937",
					"base-100": "#ffffff",
					"info": "#3b82f6",
					"success": "#22c55e",
					"warning": "#f59e0b",
					"error": "#ef4444"
				},
				dark: {
					"primary": "#60a5fa",
					"secondary": "#3b82f6",
					"accent": "#2563eb",
					"neutral": "#f3f4f6",
					"base-100": "#111827",
					"info": "#60a5fa",
					"success": "#34d399",
					"warning": "#fbbf24",
					"error": "#f87171"
				}
			}
		]
	}
}