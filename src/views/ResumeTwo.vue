<template>
  <Header />
  <ContentTitle>教育经历</ContentTitle>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContentTitle from '../components/ResumeTwo/ContentTitle.vue';
import Header from '../components/ResumeTwo/Header.vue';

export default defineComponent({
  components: { Header, ContentTitle },
  name: 'ResumeTwo',
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>

</style>
