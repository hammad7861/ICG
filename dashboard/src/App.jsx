import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import AppLayout from "./Layout/AppLayout";
import "./App.css";
import AddProduct from "./pages/ProductDetails/AddProduct";
// import EventDetails from "./pages/Events/EventDetails";
// import AddEvent from "./pages/Events/AddEvent";
import MediaAndNewsDetails from "./pages/MediaAndNews/MediaAndNewsDetails";
import AddMediaAndNews from "./pages/MediaAndNews/AddMediaAndNews";
import ArticleDetails from "./pages/Articles/ArticleDetails";
import AddArticle from "./pages/Articles/AddArticle";
import BlogDetails from "./pages/Blogs/BlogDetails";
import AddBlog from "./pages/Blogs/AddBlog";
import BrochureDetails from "./pages/Brochures/BrochureDetails";
import AddBrochure from "./pages/Brochures/AddBrochure";
import JobDetails from "./pages/Jobs/JobDetails";
import AddJob from "./pages/Jobs/AddJob";
import UserDetails from "./pages/Users/UserDetails";
import AddUser from "./pages/Users/AddUser";
import ViewProductDetail from "./pages/ProductDetails/ViewProductDetail";
import Dashboard from "./pages/Dashboard";
import ViewJobDetail from "./pages/Jobs/ViewJobDetail";
import ViewArticleDetail from "./pages/Articles/ViewArticleDetail";
import ViewBlogDetail from "./pages/Blogs/ViewBlogDetail";
// import ViewEventDetail from "./pages/Events/ViewEventDetail";
import ViewMediaAndNewsDetail from "./pages/MediaAndNews/ViewMediaAndNewsDetail";
import ViewBrochureDetail from "./pages/Brochures/ViewBrochureDetail";
import Signin from "./pages/Auth/Signin";
import ProtectedRoute from "./routes/ProtectedRoutes";
import { useEffect } from "react";
import useAuthStore from "./store/auth";
import BulkAddProduct from "./pages/ProductDetails/BulkAddProducts";
import ContentDetails from "./pages/Content/ContentDetails";
import AddContent from "./pages/Content/AddContent";
import ViewContentDetail from "./pages/Content/ViewContentDetail";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/auth">
				<Route
					index
					element={<Signin />}
				/>
			</Route>
			<Route
				path="/"
				element={
					<ProtectedRoute>
						<AppLayout />
					</ProtectedRoute>
				}>
				<Route
					index
					element={<Dashboard />}
				/>
				<Route path="/product-details">
					<Route
						index
						element={<ProductDetails />}
					/>
					<Route
						path=":id"
						element={<ViewProductDetail />}
					/>
					<Route
						path="add-product"
						element={<AddProduct />}
					/>
					<Route
						path="bulk-add-product"
						element={<BulkAddProduct />}
					/>
				</Route>
				{/* <Route path="/event-details">
          <Route index element={<EventDetails />} />
          <Route path=":id" element={<ViewEventDetail />} />
          <Route path="add-event" element={<AddEvent />} />
        </Route> */}
				<Route path="/mediaAndNews-details">
					<Route
						index
						element={<MediaAndNewsDetails />}
					/>
					<Route
						path=":id"
						element={<ViewMediaAndNewsDetail />}
					/>
					<Route
						path="add-mediaAndNews"
						element={<AddMediaAndNews />}
					/>
				</Route>
				<Route path="/article-details">
					<Route
						index
						element={<ArticleDetails />}
					/>
					<Route
						path=":id"
						element={<ViewArticleDetail />}
					/>
					<Route
						path="add-article"
						element={<AddArticle />}
					/>
				</Route>
				<Route path="/content-details">
					<Route
						index
						element={<ContentDetails />}
					/>
					<Route
						path=":id"
						element={<ViewContentDetail />}
					/>
					<Route
						path="add-content"
						element={<AddContent />}
					/>
				</Route>
				<Route path="/blog-details">
					<Route
						index
						element={<BlogDetails />}
					/>
					<Route
						path=":id"
						element={<ViewBlogDetail />}
					/>
					<Route
						path="add-blog"
						element={<AddBlog />}
					/>
				</Route>
				<Route path="/brochure-details">
					<Route
						index
						element={<BrochureDetails />}
					/>
					<Route
						path=":id"
						element={<ViewBrochureDetail />}
					/>
					<Route
						path="add-brochure"
						element={<AddBrochure />}
					/>
				</Route>
				<Route path="/job-details">
					<Route
						index
						element={<JobDetails />}
					/>
					<Route
						path=":id"
						element={<ViewJobDetail />}
					/>
					<Route
						path="add-job"
						element={<AddJob />}
					/>
				</Route>
				<Route path="/user-details">
					<Route
						index
						element={<UserDetails />}
					/>
					<Route
						path="add-user"
						element={<AddUser />}
					/>
				</Route>
			</Route>
		</>
	),
	{
		basename: "/dashboard",
	}
);

export default function App() {
	const autoLoginFn = useAuthStore((state) => state.autoLogin);

	useEffect(() => {
		autoLoginFn();
	}, [autoLoginFn]);
	return <RouterProvider router={router} />;
}
