type BaseType = {
  name: string;
  pinyin: string;
  position: string;
  gender: string;
  age: number;
  web: string;
  mail: string;
  phone: string;
  formatPhone: string;
  city?: string;
};

type EduType = {
  school: string;
  major: string;
  background: string;
  startTime: string;
  endTime: string;
  course: string;
  gpa: string;
  prize: string;
  certificate: string;
};

type SkillType = string[];

type ProjectType = {
  id: number;
  startTime: string;
  endTime: string;
  name: string;
  link?: string;
  introduce: string;
  stack: string[];
  job: string[];
};

export type UserType = {
  base: BaseType;
  edu: EduType;
  skill: SkillType;
  project: ProjectType[];
};
