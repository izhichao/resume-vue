<template>
  <div class="header">
    <div class="header__left">
      <div class="header__left__title">
        <h1>
          <span>{{ name }}</span>
          <h2>
            {{ position }} ·
            <small>{{ city }}</small>
          </h2>
        </h1>
      </div>

      <div class="header__left__info">
        <h2>{{ background }}</h2>
        <h3>{{ gender }} · {{ age }}岁</h3>
        <h3>联系电话：{{ formatPhone }}</h3>
        <h3>邮箱：{{ mail }}</h3>
      </div>
    </div>

    <div class="header__right">
      <div class="header__right__avatar">

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { base, edu } from '../../data';
export default defineComponent({
  name: 'Header',
  setup() {
    const { school, major, background } = edu;

    return {
      ...base,
      school,
      major,
      background
    };
  }
});
</script>

<style lang="scss" scoped>
.header {
  box-sizing: border-box;
  width: 100%;
  height: 260px;
  background: linear-gradient(to right, #6C94C8, #90B8D8);
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
      background:url("../../assets/avatar.jpg") no-repeat -140px -20px;
      background-size: 400px auto;
    }
  }
}
</style>
