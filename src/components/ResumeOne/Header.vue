<template>
  <div class="header">
    <div class="header__title">
      <h1>
        {{ name }}
        <small>{{ pinyin }}</small>
      </h1>
      <h2>
        {{ position }} ·
        <small>{{ city }}</small>
      </h2>
    </div>

    <div class="header__info">
      <section class="header__info__left">
        <h2>{{ background }}</h2>
        <h3>{{ school }} · {{ major }}</h3>
        <h3>{{ gender }} / {{ age }}岁</h3>
      </section>

      <ul class="header__info__right">
        <li>
          <a :href="web">
            {{ web }}
            <span class="iconfont">&#xe61f;</span>
          </a>
        </li>
        <li>
          <a :href="'mailto:' + mail">
            {{ mail }}
            <span class="iconfont">&#xe908;</span>
          </a>
        </li>
        <li>
          <a :href="'tel:' + phone">
            {{ formatPhone }}
            <span class="iconfont">&#xe692;</span>
          </a>
        </li>
      </ul>
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
  background: linear-gradient(to right, #00c9b8, #00bdc4);
  padding: 1.875rem 3.125rem 0.625rem;
  display: flex;
  flex-direction: column;

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

      small {
        font-size: 1.5rem;
        letter-spacing: normal;
      }
    }

    h2 {
      font-size: 1.5rem;
      color: #fff;
    }
  }

  &__info {
    flex: 1;
    display: flex;
    justify-content: space-between;
    color: #fff;
    padding: 0.9375rem 0.625rem;

    &__left {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      h2 {
        font-size: 18px;
      }

      h3 {
        font-size: 16px;
      }
    }

    ul {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-end;
      font-size: 16px;
    }
  }
}
</style>
