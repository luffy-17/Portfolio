import { DiAndroid, DiTerminal } from "react-icons/di";
import { SiJava, SiFirebase, SiGit,SiMongodb, SiTableau, SiMysql, SiTensorflow } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "machine learning",
    Component: SiTensorflow,
    title: "Machine Learning",
    Description: () => <>I work many project of Data Science.</>,
  },
  {
    slug: "sql",
    Component: SiMysql,
    title: "SQL",
    Description: () => <>I know MySQL. I had practiced it in past. </>,
  },
  {
    slug: "dataanalytics",
    Component: SiTableau,
    title: "Data Analytics",
    Description: () => <>I had done some project on customer analytics</>,
  },
  {
    slug: "mongodb",
    Component: SiMongodb,
    title: "MongoDB",
    Description: () => <>I have used MongoDB database and in my apps.</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I use every day. I use GitHub for pushing my code.</>,
  },
];
