import { defineStore } from 'pinia';
import { IBase, IEdu, ISkill, IProject } from './types';
export const mainStore = defineStore('main', {
  state: () => {
    return {
      activeColor: ['#6c94c8', '#90b8d8'],
      resumeOneThemeOne: ['#6c94c8', '#6c94c8'],
      resumeOneThemeTwo: ['#00c9b8', '#00bdc4'],
      resumeTwo: ['black', 'black']
    };
  }
});
