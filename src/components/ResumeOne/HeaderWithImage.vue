<template>
  <div class="header">
    <div class="header__left">
      <div class="header__left__title">
        <h1>
          <span>{{ base.name }}</span>
          <h2>
            {{ base.position }} ·
            <small>{{ base.city }}</small>
          </h2>
        </h1>
      </div>

      <div class="header__left__info">
        <h2>{{ edu.background }}</h2>
        <h3>{{ base.gender }} · {{ base.age }}岁</h3>
        <h3>联系电话：{{ base.formatPhone }}</h3>
        <h3>邮箱：{{ base.mail }}</h3>
      </div>
    </div>

    <div class="header__right">
      <div class="header__right__avatar"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useColor from '../../hooks/useColor';
import { storeToRefs } from 'pinia';
import { mainStore } from '../../store';

const store = mainStore();
const { base, edu } = storeToRefs(store);
// 使用自定义Hooks监听color的变化

const [colorOne, colorTwo] = useColor();
</script>

<style lang="scss" scoped>
.header {
  box-sizing: border-box;
  width: 100%;
  height: 260px;
  background: linear-gradient(to right, v-bind(colorOne), v-bind(colorTwo));
  padding: 1.875rem 3.75rem 0.625rem;
  display: flex;

  &__left {
    flex: 1;
    &__title {
      display: flex;
      box-sizing: border-box;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #fff;
      padding: 5px 10px;

      h1 {
        font-size: 2.875rem;
        letter-spacing: 0.3125rem;
        color: #fff;
        display: flex;
        align-items: flex-end;
        span {
          margin-right: 1.25rem;
        }

        h2 {
          font-size: 1.5rem;
          color: #fff;
        }

        small {
          font-size: 1.25rem;
          letter-spacing: normal;
        }
      }
    }

    &__info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #fff;
      padding: 0.9375rem 0.625rem;

      h2 {
        font-size: 18px;
      }

      h3 {
        margin-top: 10px;
        font-size: 16px;
      }
    }
  }

  &__right {
    width: 200px;

    &__avatar {
      margin: 20px 0 0 70px;
      width: 122px;
      height: 170px;
      background: url('../../assets/avatar.jpg') no-repeat -140px -20px;
      background-size: 400px auto;
    }
  }
}
</style>
