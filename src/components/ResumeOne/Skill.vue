<template>
  <ContentTitle>专业技能</ContentTitle>
  <div class="content">
    <ul>
      <li v-for="item in skill" :key="item.id" v-html="item.content"></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import ContentTitle from './ContentTitle.vue';
export default defineComponent({
  name: 'Edu',
  components: {
    ContentTitle
  },
  setup() {
    const skill = reactive([
      { id: 1, content: `熟悉<code>Vue</code>` },
      { id: 2, content: `熟悉<code>Vue</code>` },
      { id: 3, content: `熟悉<code>Vue</code>` },
      { id: 4, content: `熟悉<code>Vue</code>` },
      { id: 5, content: `熟悉<code>Vue</code>` },
    ]);
    return {
      skill
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
        background: linear-gradient(to right, #00c9b8, #00bdc4);
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
