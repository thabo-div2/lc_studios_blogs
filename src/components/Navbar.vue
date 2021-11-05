<template>
	<!-- <nav class="top_nav">
		<div class="topnav_container" v-if="user">

			<router-link :to="{ name: 'ViewPost' }">See All Post</router-link>
			<router-link :to="{ name: 'CreatePost' }">Create a Post</router-link>
			<div>
				<p>hey there... {{ user.displayName }}</p>
				<p class="email">Currently logged in as... {{ user.email }}</p>
			</div>
			<button @click="handleClick">Logout</button>
		</div>
	</nav> -->
	<nav class="navbar navbar-expand-lg navbar-light top_nav">
		<div class="container-fluid" v-if="user">
			<div class="first_row">
				<a class="navbar_brand" href="/posts/">The Blog Cultivaters</a>
				<form class="d-flex">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
					<button class="btn" type="submit">
						<i class="fas fa-search"></i>
					</button>
				</form>
			</div>
			<!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button> -->
			<div class="second_row">
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="#">
							<router-link :to="{ name: 'ViewPost' }" class="nav_link">All</router-link>
						</a>
						</li>
						<li class="nav-item">
						<a class="nav-link" href="#">Lifestyle</a>
						</li>
						<li class="nav-item">
						<a class="nav-link" href="#">Health</a>
						</li>
						<li class="nav-item">
						<a class="nav-link" href="#">Travel</a>
						</li>
						<li class="nav-item">
						<a class="nav-link" href="#">Music</a>
						</li>
						<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Info
						</a>
						<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
							<li><a class="dropdown-item style" href="#"><p>hey there <b>{{ user.displayName }}</b></p></a></li>
							<li><a class="dropdown-item style" href="#"><p class="email">Currently logged in as <b>{{ user.email }}</b></p></a></li>
							<li><hr class="dropdown-divider"></li>
							<li><a class="dropdown_item style" href="#"><button class="logout_btn" @click="handleClick">Logout</button></a></li>
						</ul>
						</li>
						<!-- <li class="nav-item">
						<a class="nav-link disabled">Disabled</a>
						</li> -->
					</ul>
				</div>
				<div class="collapse navbar-collapse social_links" id="navbarSupportedContent">
					<span class="icon">
						<i class="fab fa-facebook-f social_icon"></i>
					</span>
					<span class="icon">
						<i class="fab fa-instagram social_icon"></i>
					</span>
					<span class="icon">
						<i class="fab fa-linkedin-in social_icon"></i>
					</span>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUsers from "../composables/getUsers";
import { useRouter } from "vue-router";

export default {
	setup() {
		const { user } = getUsers();
		const { logout, error } = useLogout();
		const router = useRouter();

		const handleClick = async () => {
			await logout();
			if (!error.value) {
				console.log("user logged out");
				router.push("/");
			}
		};

		return { handleClick, user };
	},
};
</script>

<style>
	.post_page_container {
		display: flex;
		justify-content: center;
		/* flex-direction: column; */
		/* overflow-y: scroll; */
		margin: 156px 0 0 0; 
		background: #F8F8F8;
		/* margin: 170px 0 0 0 */
	}
	.container-fluid {
		display: flex;
		flex-direction: column;
	}
	.first_row {
		display: flex;
		/* flex-direction: row; */
		width: 85%;
		justify-content: space-between;
	}
	.second_row {
		display: flex;
		box-sizing: border-box;
		width: 85%;
    	justify-content: space-between;
		/* flex-direction: row; */
	}
	.d-flex {
		display: flex!important;
		flex-direction: row;
		justify-content: flex-end;
		background: transparent;
	}
	.social_links {
		display: flex;
    	justify-content: flex-end;
	}
	.navbar {
		/* background-color: #327a77; */
		background-color: #F8F8F8;
		/* margin: 69px 0 0 0; */
		/* position: fixed; */
		position: fixed;
		width: 100%;
		top: 0;
		height: 25vh;
		/* z-index: 1; */
	}
	.form-control {
		border: none;
		border-bottom: solid 1px black;
		border-radius: 0;
		width: 44%;
		background: transparent;
		padding: 28px 0 0 0;
	}
	.form-control:focus {
		outline: none;
		/* outline:0; */
        -webkit-appearance:none;
        box-shadow: none;
        -moz-box-shadow: none;
        -webkit-box-shadow: none;
		border-bottom: solid 1px black;
		background: transparent;
	}
	.btn {
		border: none;
	}
	.btn:hover {
		background: none;
		color: black;
	}
	.fas {
		color: black;
	}
	.form-control::placeholder {
	color: black;
	/* color: #C9D6FF; */
	/* color: #a1f2ee; */
	-webkit-text-stroke: 0.1px black;
	-webkit-font-smoothing: antialiased;
	font-family: "Barlow", sans-serif;
}
.navbar_brand {
	font-size: 30px;
	font-family: 'Mukta', sans-serif;
	color: #517fff;
}
.navbar_brand:hover {
	color: #517fff;
}
.social_icon {
    font-size: 16px;
    margin: 0 0 0 5px;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.social_icon:hover {
	/* height: 30px;
    width: 30px; */
    background: #e3ad1b;
    margin: 0 0 0 5px;
    border-radius: 15px;
	transform: translateX(0);
    transition: 1s 0.2s ease;
}
.nav_link {
	color: #7C7C7C;
}
.nav_link:hover {
	color: #515050;
}
.dropdown-menu {
	background: black;
	border: solid 1px;
}
.dropdown-item:active {
    color: #fff;
    text-decoration: none;
    background-color: black;
}
.dropdown_item {
    display: block;
    width: 100%;
    padding: .25rem 1.5rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
}
.logout_btn {
  background: #f7f5f0;
  border: none;
  width: 35%;
  padding: 9px 0 9px 0;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 600;
  color: #7C7C7C;
}
</style>
