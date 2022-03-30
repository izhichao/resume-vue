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

<script lang="ts">
import { defineComponent } from 'vue';
import ContentTitle from './ContentTitle.vue';
import { skill } from '../../data';
import useColor from '../../hooks/useColor';

export default defineComponent({
  name: 'Edu',
  components: {
    ContentTitle
  },
  setup() {
    const [colorOne, colorTwo] = useColor();

    return {
      skill,
      colorOne,
      colorTwo
    };
  }
});
</script>

<style lang="scss" scoped>
.content {
  ul {
    li {
      position: relative;
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
      line-height: 24px;
      margin-top: 10px;
      padding-left: 30px;
    }
  }
}
</style>
