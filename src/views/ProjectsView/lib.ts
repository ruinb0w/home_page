import { getImg } from "@/libs/common";

export interface Project {
  id?: string;
  title: string;
  status: "maintenance" | "done";
  cover: string;
  type: string;
  responsibile?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "萌鱼面试小助手",
    status: "maintenance",
    cover: getImg("logos/my.jpg"),
    type: "mp",
    responsibile: "",
  },
  {
    id: "2",
    title: "乡振共振",
    status: "maintenance",
    cover: getImg("logos/xzgz.jpg"),
    type: "mp",
  },
  {
    id: "3",
    title: "临翔慧民居",
    status: "done",
    cover: getImg("logos/lxhmj.jpg"),
    type: "mp",
  },
  { title: "蚂蚁超便利", status: "done", cover: getImg("logos/mycbl.jpg"), type: "mp" },
  { title: "临翔微政协", status: "done", cover: getImg("logos/lxwzx.jpg"), type: "mp" },
  { title: "联合智慧物业", status: "done", cover: getImg("logos/lhzhwy.jpg"), type: "mp" },
  { title: "巴瓦旅行", status: "done", cover: getImg("logos/bwlx.jpg"), type: "mp" },
  { title: "慧民永安", status: "done", cover: getImg("logos/hmya.jpg"), type: "mp" },
  { title: "拉祜南美", status: "done", cover: getImg("logos/lgnm.jpg"), type: "mp" },
  { title: "临翔图库", status: "done", cover: getImg("logos/lxtk.jpg"), type: "mp" },
  { title: "茶马古镇", status: "done", cover: getImg("logos/cmgz.jpg"), type: "mp" },
  { title: "滇红慧", status: "done", cover: getImg("logos/dhh.jpg"), type: "mp" },
  { title: "云海阳光", status: "done", cover: getImg("logos/yhyg.jpg"), type: "mp" },
  { title: "临企家园", status: "done", cover: getImg("logos/lqjy.jpg"), type: "mp" },
];
