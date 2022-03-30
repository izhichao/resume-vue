<template>
  <Header />
  <div class="detail">
    <hr />
    <Edu />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '../components/ResumeTwo/Header.vue';
import Edu from '../components/ResumeTwo/Edu.vue';

export default defineComponent({
  components: { Header, Edu },
  name: 'ResumeTwo',
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.detail {
  padding: 0 60px;

  hr {
    border-top: 1px solid #ccc;
  }
}
</style>
