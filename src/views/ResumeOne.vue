<template>
  <ul class="btn-list">
    <li @click="switchTheme(1)">主题1</li>
    <li @click="switchTheme(2)">主题2</li>
  </ul>
  <Header />
  <div class="detail">
    <Edu />
    <Skill />
    <Project />
  </div>
</template>

<script lang="ts" setup>
import Header from '../components/ResumeOne/Header.vue';
import Edu from '../components/ResumeOne/Edu.vue';
import Skill from '../components/ResumeOne/Skill.vue';
import Project from '../components/ResumeOne/Project.vue';
import { useColor } from '../composables/useColor';
import { mainStore } from '../store';

// 获取按钮颜色
const { colorOne: color } = useColor();

// 主题切换
const store = mainStore();
const switchTheme = (val: number) => {
  if (val === 1) {
    store.activeColor = store.resumeOneThemeOne;
  } else if (val === 2) {
    store.activeColor = store.resumeOneThemeTwo;
  }
};
</script>

<style lang="scss" scoped>
.btn-list {
  position: absolute;
  left: 50%;
  transform: translateX(-590px);

  li {
    &:nth-child(n + 2) {
      margin-top: 10px;
    }

    background-color: v-bind(color);
    color: #fff;
    width: 60px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin: 0 10px 0;
    border-radius: 5px;
    transition: transform 0.1s ease-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }
}
.detail {
  flex: 1;
  padding: 1.25rem 3.75rem 3.75rem;
}

@media screen and (max-width: 1024px) {
  .header {
    padding: 1.875rem 1.25rem 0.625rem !important;
  }

  .detail {
    padding: 1.875rem 1.25rem 0.625rem !important;
  }
}
</style>
