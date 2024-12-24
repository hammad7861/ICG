export const Endpoints = {
	signIn: () => `${import.meta.env.VITE_TARGETED_URL}/auth/login`,
	addProduct: () => `${import.meta.env.VITE_TARGETED_URL}/products/`,
	bulkAddProduct: () => `${import.meta.env.VITE_TARGETED_URL}/products/bulk`,
	viewProduct: (id) => `${import.meta.env.VITE_TARGETED_URL}/products/${id}`,
	publishProduct: (id) =>
		`${import.meta.env.VITE_TARGETED_URL}/products/${id}/publish`,
	getProducts: (page, limit) =>
		`${import.meta.env.VITE_TARGETED_URL}/products?page=${page}&limit=${limit}`,
	editProduct: (id) => `${import.meta.env.VITE_TARGETED_URL}/products/${id}`,
	getArticles: (page, limit) =>
		`${import.meta.env.VITE_TARGETED_URL}/articles?page=${page}&limit=${limit}`,
	viewArticle: (id) => `${import.meta.env.VITE_TARGETED_URL}/articles/${id}`,
	addArticle: () => `${import.meta.env.VITE_TARGETED_URL}/articles/`,
	editArticle: (id) => `${import.meta.env.VITE_TARGETED_URL}/articles/${id}`,
	getContents: (page, limit) =>
		`${import.meta.env.VITE_TARGETED_URL}/contents?page=${page}&limit=${limit}`,
	viewContent: (id) => `${import.meta.env.VITE_TARGETED_URL}/contents/${id}`,
	addContent: () => `${import.meta.env.VITE_TARGETED_URL}/contents/`,
	editContent: (id) => `${import.meta.env.VITE_TARGETED_URL}/contents/${id}`,
	getBlogs: (page, limit) =>
		`${import.meta.env.VITE_TARGETED_URL}/blogs?page=${page}&limit=${limit}`,
	viewBlog: (id) => `${import.meta.env.VITE_TARGETED_URL}/blogs/${id}`,
	addBlog: () => `${import.meta.env.VITE_TARGETED_URL}/blogs/`,
	editBlog: (id) => `${import.meta.env.VITE_TARGETED_URL}/blogs/${id}`,
	getBrochures: (page, limit) =>
		`${
			import.meta.env.VITE_TARGETED_URL
		}/brochures?page=${page}&limit=${limit}`,
	addBrochure: () => `${import.meta.env.VITE_TARGETED_URL}/brochures/`,
	viewBrochure: (id) => `${import.meta.env.VITE_TARGETED_URL}/brochures/${id}`,
	editBrochure: (id) => `${import.meta.env.VITE_TARGETED_URL}/brochures/${id}`,
	addEvent: () => `${import.meta.env.VITE_TARGETED_URL}/events/`,
	getEvents: (page, limit) =>
		`${import.meta.env.VITE_TARGETED_URL}/events?page=${page}&limit=${limit}`,
	viewEvent: (id) => `${import.meta.env.VITE_TARGETED_URL}/events/${id}`,
	editEvent: (id) => `${import.meta.env.VITE_TARGETED_URL}/events/${id}`,
	getJobs: (page, limit) =>
		`${import.meta.env.VITE_TARGETED_URL}/jobs?page=${page}&limit=${limit}`,
	viewJob: (id) => `${import.meta.env.VITE_TARGETED_URL}/jobs/${id}`,
	addJob: () => `${import.meta.env.VITE_TARGETED_URL}/jobs/`,
	editJob: (id) => `${import.meta.env.VITE_TARGETED_URL}/jobs/${id}`,
	getMediaAndNewss: (page, limit) =>
		`${
			import.meta.env.VITE_TARGETED_URL
		}/mediaAndNews?page=${page}&limit=${limit}`,
	addMediaAndNews: () => `${import.meta.env.VITE_TARGETED_URL}/mediaAndNews/`,
	viewMediaAndNews: (id) =>
		`${import.meta.env.VITE_TARGETED_URL}/mediaAndNews/${id}`,
	editMediaAndNews: (id) => `${import.meta.env.VITE_TARGETED_URL}/users/${id}`,
	getUsers: (page, limit) =>
		`${import.meta.env.VITE_TARGETED_URL}/users?page=${page}&limit=${limit}`,
	addUser: () => `${import.meta.env.VITE_TARGETED_URL}/users/`,
	viewUser: (id) => `${import.meta.env.VITE_TARGETED_URL}/users/${id}`,
	editUser: (id) => `${import.meta.env.VITE_TARGETED_URL}/users/${id}`,
};
