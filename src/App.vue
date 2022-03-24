<template>
  <main>
    <ResumeOne />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ResumeOne from './views/ResumeOne.vue';

export default defineComponent({
  components: { ResumeOne },
  name: 'Home',
  
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
main {
  width: 1024px;
  min-height: 1448px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 0 5px #ccc;
  display: flex;
  flex-direction: column;
}
</style>
