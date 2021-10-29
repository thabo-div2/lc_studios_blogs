import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "../firebase/config";
import Home from "../views/Home.vue";
import CreatePost from "../views/CreatePost.vue";
import ViewPost from "../views/ViewPost.vue";
import SinglePost from "../views/SinglePost.vue";

// auth guard
const requireAuth = (to, from, next) => {
	let user = projectAuth.currentUser;
	if (!user) {
		next({ name: "Home" });
	} else {
		next();
	}
};

const requireNoAuth = (to, from, next) => {
	let user = projectAuth.currentUser;
	if (user) {
		next({ name: "ViewPost" });
	} else {
		next();
	}
};

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		beforeEnter: requireNoAuth,
	},
	{
		path: "/posts",
		name: "ViewPost",
		component: ViewPost,
		beforeEnter: requireAuth,
	},
	{
		path: "/posts/create",
		name: "CreatePost",
		component: CreatePost,
	},
	{
		path: "/posts/:id",
		name: "SinglePost",
		component: SinglePost,
		props: true,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
