<template>
  <div class="skill">
    <ContentTitle>专业技能</ContentTitle>
    <div class="content">
      <ul>
        <li v-for="item in skill" v-html="item"></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ContentTitle from './ContentTitle.vue';
import { useColor } from '../../composables/useColor';
import { useUser } from '../../composables/useUser';

const { skill } = useUser();
const { colorOne, colorTwo } = useColor();
</script>

<style lang="scss" scoped>
.content {
  ul {
    li {
      position: relative;
      line-height: 24px;
      margin-top: 10px;
      padding-left: 30px;

      &:nth-child(1) {
        margin-top: 0;
      }

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
