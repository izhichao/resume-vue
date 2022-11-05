import { reactive, toRefs } from 'vue';
import { data } from '../data';

const user = reactive(data);

export const useUser = () => {
  const { base, edu, skill, project } = toRefs(user);
  return {
    base,
    edu,
    skill,
    project
  };
}
