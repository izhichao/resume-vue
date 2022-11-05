<template>
  <ul class="btn-list">
    <li><a href="" @click.prevent="printResume">打印</a></li>
    <li><router-link to="/resume-one" @click="switchModel(1)">模板1</router-link></li>
    <li><router-link to="/resume-two" @click="switchModel(2)">模板2</router-link></li>
  </ul>
  <main>
    <router-view />
  </main>
</template>

<script lang="ts" setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import { useColor } from './composables/useColor';
import { mainStore } from './store';

// 打印按钮
const printResume = () => {
  window.print();
};

// 获取按钮颜色
const { colorOne: color } = useColor();

// 模板切换
const store = mainStore();
const switchModel = (val: number) => {
  if (val === 1) {
    store.activeColor = store.resumeOneThemeOne;
  } else if (val === 2) {
    store.activeColor = store.resumeTwo;
  }
};

// 初始化颜色
const route = useRoute();
const initColor = () => {
  if (route.fullPath === '/resume-one') {
    store.activeColor = store.resumeOneThemeOne;
  } else if (route.fullPath === '/resume-two') {
    store.activeColor = store.resumeTwo;
  }
};
watch(
  () => route.fullPath,
  () => {
    initColor();
  }
);
</script>

<style lang="scss" scoped>
.btn-list {
  position: absolute;
  right: 50%;
  transform: translateX(590px);

  li {
    &:nth-child(n + 2) {
      margin-top: 10px;
    }

    a {
      display: inline-block;
      background-color: v-bind(color);
      width: 60px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      margin: 0 10px 0;
      border-radius: 5px;
      transition: transform 0.1s ease-out;

      &:hover {
        transform: scale(1.05);
      }
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
  box-shadow: 0 0 15px #ccc;
  display: flex;
  flex-direction: column;
  font-size: 16px;
}
</style>
