const ROUTES = {
	HOME: '/',
	ECO: '/eco',
	WALK: '/spacer-360',
	BLOG: {
		LIST: '/aktualnosci',
		DETAIL: (slug: string) => `/aktualnosci/${slug}`,
	},
} as const 

export default ROUTES
