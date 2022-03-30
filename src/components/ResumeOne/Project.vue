<template>
  <div class="project">
    <ContentTitle>项目经验</ContentTitle>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContentTitle from './ContentTitle.vue';
export default defineComponent({
  name: 'Project',
  components: {
    ContentTitle
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped></style>
