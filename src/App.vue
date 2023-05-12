<template>
  <Navbar
    :pages="pages"
    :active-page="activePage"
  ></Navbar>

  <RouterView></RouterView>
  
  <!-- prevent crash with if -->
  <!-- <page-viewer v-if="pages.length > 0" :page="pages[activePage]"> </page-viewer> -->

  <!-- Page created event, we use emit to push the event back to parent component -->
  <!-- <CreatePage @page-created="pageCreated"></CreatePage> -->
</template>

<script>
import PageViewer from "./components/PageViewer.vue";
import Navbar from "./components/Navbar.vue";
import CreatePage from "./components/CreatePage.vue"
export default {
  components: {
    PageViewer,
    Navbar,
    CreatePage
  },

  created() {
    this.getPages();
    // Bus object listen to navbar and then we set the active page to the index
    this.$bus.$on('NavbarLinkActivated', (index) => {
      this.activePage = index
    })
  },

  data() {
    return {
      activePage: 0,
      pages: [],
    };
  },
  methods: {
    async getPages() {
      let response = await fetch("pages.json");
      let data = await response.json();

      this.pages = data;
    },
    pageCreated(pageObj) {
      this.pages.push(pageObj)
    }
  },
};
</script>

<style></style>
