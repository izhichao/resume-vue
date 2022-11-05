import { ref, watch } from 'vue';
import { mainStore } from '../store';

export const useColor = () => {
  const store = mainStore();
  const colorOne = ref(store.activeColor[0]);
  const colorTwo = ref(store.activeColor[1]);

  // 通过watch侦听activeColor变化
  watch(
    () => store.activeColor,
    (val) => {
      colorOne.value = val[0];
      colorTwo.value = val[1];
    }
  );

  return {
    colorOne,
    colorTwo
  };
};
