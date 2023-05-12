<template>
  <nav
    :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']"
  >
    <a class="navbar-brand" href="#">My Vue</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"  aria-expanded="false"  aria-label="Toggle navigation" >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
          <!-- The navbar link  -->
          <NavbarLink
            v-for="(page, index) in publishedPages" class="nav-item" :key="index"
            :page="page"
            :index="index"
            :isActive="activePage == index"
            @activated="$emit('activated')"
          >
          </NavbarLink>
      </ul>
      <form class="d-flex ml-auto">
        <button class="btn btn-primary" @click.prevent="changeTheme()">
          Change Theme
        </button>
      </form>
    </div>
  </nav>
</template>
<script>
import NavbarLink from "./NavbarLink.vue";

export default {
  components: {
    NavbarLink,
  },
  props: ["pages", "active-page"],
  data() {
    return {
      theme: "dark",
    };
  },

  created() {
    this.getThemeSetting();
  },
  computed:{
    publishedPages(){
      return this.pages.filter(e =>  e.published);
    }
  },

  methods: {
    changeTheme() {
      let theme = "light";
      if (this.theme == "light") {
        theme = "dark";
      }
      this.theme = theme;
      this.storeThemeSetting();
    },
    storeThemeSetting() {
      localStorage.setItem("theme", this.theme);
    },
    getThemeSetting() {
      let theme = localStorage.getItem("theme");
      if (theme) {
        this.theme = theme;
      }
    },
  },
};
</script>
<style></style>
