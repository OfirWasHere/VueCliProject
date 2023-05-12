<template>
  <div>
    <h1>page.pageTitle</h1>
    <p>page.content</p>
  </div>
</template>
<script>
export default {
  // Options: holds data, computed properties methods
  props: {
    page: {
      type: Object,
      // Default props are ment for object not simple
      default(rawProps) {
        return {
            pageTitle: String,
            content: String
        }
      }
    }
  },
};
</script>
<style></style>


