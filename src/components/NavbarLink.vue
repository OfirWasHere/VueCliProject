<template>
  <li>
    <a
      class="nav-link"
      :class="activeClasses"
      aria-current="page"
      :href="page.link.url"
      :title="`this link goes to ${page.link.text} page`"

      @click.prevent="$bus.$emit('NavbarLinkActivated', index)"
      
      >{{ page.link.text }}</a
    >
  </li>
</template>

<script>
export default {
  props: ["page", "isActive", "index"],
  computed: {
    activeClasses() {
      return {
        active: this.isActive,
        emphasize: this.isActive,
      };
    },
  },
};
</script>

<style scoped>
.emphasize {
  text-decoration: underline !important ;
}
</style>
