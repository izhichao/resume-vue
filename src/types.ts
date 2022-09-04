interface IBase {
  name: string;
  pinyin: string;
  city: string;
  position: string;
  gender: string;
  age: number;
  web: string;
  mail: string;
  phone: string;
  formatPhone: string;
}

interface IEdu {
  school: string;
  major: string;
  background: string;
  startTime: string;
  endTime: string;
  course: string;
  gpa: string;
  prize: string;
  certificate: string;
}

interface ISkill {
  id: number;
  content: string;
}

interface IProject {
  id: number;
  startTime: string;
  endTime: string;
  name: string;
  link?: string;
  introduce: string;
  stack: string[];
  job: string[];
}

export {
  IBase,
  IEdu,
  ISkill,
  IProject
}