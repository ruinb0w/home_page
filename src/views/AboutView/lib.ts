enum SKILL_LEVEL {
  NOVICE = "novice",
  INTERMEDIATE = "intermediate",
  ADVANCED = "advanced",
  MASTER = "master",
}
export const SKILLS = [
  {
    title: "frontend",
    topics: [
      { title: "vue", level: SKILL_LEVEL.ADVANCED },
      { title: "jquery", level: SKILL_LEVEL.INTERMEDIATE },
      { title: "sass", level: SKILL_LEVEL.INTERMEDIATE },
      { title: "react", level: SKILL_LEVEL.NOVICE },
      { title: "web3", level: SKILL_LEVEL.NOVICE },
    ],
  },
  {
    title: "backend",
    topics: [
      { title: "node", level: SKILL_LEVEL.ADVANCED },
      { title: "express", level: SKILL_LEVEL.ADVANCED },
      { title: "nestjs", level: SKILL_LEVEL.INTERMEDIATE },
      { title: "mongodb", level: SKILL_LEVEL.INTERMEDIATE },
      { title: "pm2", level: SKILL_LEVEL.INTERMEDIATE },
    ],
  },
  {
    title: "common",
    topics: [
      { title: "linux", level: SKILL_LEVEL.ADVANCED },
      { title: "ts", level: SKILL_LEVEL.ADVANCED },
      { title: "git", level: SKILL_LEVEL.INTERMEDIATE },
      { title: "docker", level: SKILL_LEVEL.INTERMEDIATE },
      { title: "c", level: SKILL_LEVEL.INTERMEDIATE },
      { title: "rust", level: SKILL_LEVEL.NOVICE },
      { title: "solidity", level: SKILL_LEVEL.NOVICE },
    ],
  },
  {
    title: "client",
    topics: [
      { title: "uniapp", level: SKILL_LEVEL.ADVANCED },
      { title: "electron", level: SKILL_LEVEL.ADVANCED },
      { title: "chrome-extention", level: SKILL_LEVEL.INTERMEDIATE },
      { title: "puppeteer", level: SKILL_LEVEL.INTERMEDIATE },
      { title: "harmonyos", level: SKILL_LEVEL.NOVICE },
    ],
  },
];
