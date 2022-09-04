<template>
  <div class="edu">
    <ContentTitle>教育经历</ContentTitle>
    <div class="content">
      <div class="content__school">
        <strong>{{ edu.school }}</strong>
        <strong>{{ edu.major }} | {{ edu.background }}</strong>
        <strong>{{ edu.startTime }} - {{ edu.endTime }}</strong>
      </div>

      <div class="content__course mt">
        <strong>主修课程：</strong>
        {{ edu.course }}
      </div>

      <hr class="mt" />

      <div class="content__gpa mt">
        <strong>GPA: {{ edu.gpa }}</strong>
      </div>

      <div class="content__prize mt">
        <strong>奖学金：</strong>
        {{ edu.prize }}
      </div>

      <div class="content__certificate mt">
        <strong>证书：</strong>
        {{ edu.certificate }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ContentTitle from './ContentTitle.vue';
import { mainStore } from '../../store';
import { storeToRefs } from 'pinia';

const store = mainStore();
const { edu } = storeToRefs(store);
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
