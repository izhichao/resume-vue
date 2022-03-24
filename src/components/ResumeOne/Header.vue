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
  padding: 30px 50px 10px;
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
      font-size: 46px;
      letter-spacing: 5px;
      color: #fff;

      small {
        font-size: 24px;
        letter-spacing: normal;
      }
    }

    h2 {
      font-size: 24px;
      color: #fff;
    }
  }

  &__info {
    flex: 1;
    display: flex;
    justify-content: space-between;
    color: #fff;
    padding: 15px 10px;

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
