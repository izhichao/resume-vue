<template>
  <div class="project">
    <ContentTitle>个人项目</ContentTitle>
    <div class="content" v-for="item in project" :key="item.id">
      <div class="content__name">
        <div>
          <strong v-html="item.name"></strong>
          <a :href="item.link" class="content__name__link iconfont" v-if="item.link">&#xe612;</a>
        </div>
        <strong>{{ item.startTime }} - {{ item.endTime }}</strong>
      </div>

      <div class="content__introduce mt">
        <strong>项目介绍</strong>
        <div class="content__introduce__detail" v-html="item.introduce"></div>
      </div>

      <div class="content__stack mt">
        <strong>技术栈</strong>
        <ul>
          <li v-for="stack in item.stack" v-html="stack"></li>
        </ul>
      </div>

      <div class="content__job mt">
        <strong>任务</strong>
        <ul>
          <li v-for="job in item.job" v-html="job"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ContentTitle from './ContentTitle.vue';
import { useColor } from '../../composables/useColor';
import { useUser } from '../../composables/useUser';

const { colorOne, colorTwo } = useColor();
const { project } = useUser();
</script>

<style lang="scss" scoped>
.mt {
  margin-top: 15px;
}

.content {
  font-size: 16px;
  padding-bottom: 15px;
  border-bottom: 2px dashed #ccc;
  position: relative;

  &:last-child {
    border-bottom: none;
  }

  &__name {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__link {
      color: v-bind(colorOne);
      font-size: 18px;
      vertical-align: 0;
      font-weight: 700;
      margin-left: 10px;
    }
  }

  &__introduce {
    display: flex;

    strong {
      line-height: 30px;
      flex-basis: 70px;
    }

    &__detail {
      flex: 1;
      padding-left: 30px;
      line-height: 30px;
    }
  }

  &__stack,
  &__job {
    display: flex;
    strong {
      line-height: 30px;
      flex-basis: 70px;
    }

    ul {
      flex: 1;
      li {
        &:nth-child(1) {
          margin-top: 3px;
        }
      }
    }
  }

  &__stack {
    margin-top: 5px;
  }

  &__job {
    margin-top: 10px;
  }
}

ul {
  li {
    position: relative;
    line-height: 24px;
    margin-top: 10px;
    padding-left: 30px;

    &::before {
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      background: linear-gradient(to right, v-bind(colorOne), v-bind(colorTwo));
      position: absolute;
      top: 8px;
      left: 11px;
      border-radius: 4px;
    }
  }
}
</style>
