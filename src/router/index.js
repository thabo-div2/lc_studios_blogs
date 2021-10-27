import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CreatePost from "../views/CreatePost.vue";
import ViewPost from "../views/ViewPost.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/posts",
		name: "ViewPost",
		component: ViewPost,
	},
	{
		path: "/posts/create",
		name: "CreatePost",
		component: CreatePost,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
