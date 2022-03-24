<template>
  <div class="btn-list">
    <a href="" @click.prevent="printResume">打印</a>
    <router-link to="/resume-one">模板1</router-link>
  </div>
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ResumeOne from './views/ResumeOne.vue';

export default defineComponent({
  components: { ResumeOne },
  name: 'Home',

  setup() {
    const printResume = () => {
      
    };
    return {
      printResume
    };
  }
});
</script>

<style lang="scss" scoped>
.btn-list {
  width: 1024px;
  margin: 0 auto 10px;
  a {
    display: inline-block;
    background-color: #00c9b8;
    width: 50px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin: 0 10px 0;
    border-radius: 5px;
    transition: all 0.2s ease-out;

    &:hover {
      background-color: #00bdc4;
      transform: scale(1.1);
    }
  }
}

main {
  width: 1024px;
  min-height: 1448px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 0 5px #ccc;
  display: flex;
  flex-direction: column;
}
</style>
