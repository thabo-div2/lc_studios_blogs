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
  <nav class="navbar navbar-expand-lg navbar-light bg-light top_nav">
    <div class="container-fluid" v-if="user">
      <div class="first_row">
        <a class="navbar-brand" href="#">The Blog Cultivaters</a>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
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
                <router-link :to="{ name: 'ViewPost' }">All</router-link>
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
              <a class="nav-link" href="#"
                ><router-link :to="{ name: 'CreatePost' }"
                  >Create a Post</router-link
                ></a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Info
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#"
                    ><p>hey there... {{ user.displayName }}</p></a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><p class="email">
                      Currently logged in as... {{ user.email }}
                    </p></a
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><button @click="handleClick">Logout</button></a
                  >
                </li>
              </ul>
            </li>
            <!-- <li class="nav-item">
						<a class="nav-link disabled">Disabled</a>
						</li> -->
          </ul>
        </div>
        <div
          class="collapse navbar-collapse social_links"
          id="navbarSupportedContent"
        >
          <i>1</i>
          <i>2</i>
          <i>3</i>
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
  margin: 200px 0 0 0;
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
  display: flex !important;
  flex-direction: row;
}
.social_links {
  display: flex;
  justify-content: flex-end;
}
.bg-light {
  /* --bs-bg-opacity: 0; */
  /* margin: 69px 0 0 0; */
  /* position: fixed; */
  position: fixed;
  width: 100%;
  top: 0;
  height: 25vh;
}
/* .top_nav {
		height: 30vh;
    	width: 100vw;
	} */
</style>
