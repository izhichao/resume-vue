<template>
  <div class="edu">
    <ContentTitle>教育经历</ContentTitle>
    <div class="content">
      <div class="content__school">
        <strong>{{ school }}</strong>
        <strong>{{ major }} | {{ background }}</strong>
        <strong>{{ startTime }} - {{ endTime }}</strong>
      </div>

      <div class="content__course mt">
        <strong>主修课程：</strong>
        {{ course }}
      </div>

      <hr class="mt"/>

      <div class="content__gpa mt">
        <strong>GPA: {{ gpa }}</strong>
      </div>

      <div class="content__prize mt">
        <strong>奖学金：</strong>
        {{ prize }}
      </div>

      <div class="content__certificate mt">
        <strong>证书：</strong>
        {{ certificate }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContentTitle from './ContentTitle.vue';
import { edu } from '../../data';
export default defineComponent({
  name: 'Edu',
  components: {
    ContentTitle
  },
  setup() {
    return {
      ...edu
    };
  }
});
</script>

<style lang="scss" scoped>
.mt {
  margin-top: 10px;
}

.content {
  font-size: 16px;
  padding: 15px 0 10px 0;

  hr {
    border-bottom: 2px dashed #ccc;
  }

  &__school {
    display: flex;
    justify-content: space-between;
  }

  &__course {
    font-size: 14px;
  }
}
</style>
