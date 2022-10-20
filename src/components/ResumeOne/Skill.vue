<template>
  <div class="skill">
    <ContentTitle>专业技能</ContentTitle>
    <div class="content">
      <ul>
        <li v-for="item in skill" :key="item.id" v-html="item.content"></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ContentTitle from './ContentTitle.vue';
import useColor from '../../hooks/useColor';
import { mainStore } from '../../store';
import { storeToRefs } from 'pinia';
const store = mainStore();
const { skill } = storeToRefs(store);
const [colorOne, colorTwo] = useColor();
</script>

<style lang="scss" scoped>
.content {
  padding: 0 0 10px 0;

  ul {
    li {
      position: relative;
      line-height: 24px;
      margin-top: 15px;
      padding-left: 30px;

      &::before {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background: linear-gradient(to right, v-bind(colorOne), v-bind(colorTwo));
        position: absolute;
        top: 8px;
        left: 11px;
        border-radius: 5px;
      }
    }
  }
}
</style>
