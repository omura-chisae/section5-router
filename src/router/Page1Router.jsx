import { Page1 } from "../Page1";
import { Page1A } from "../Page1A";
import { Page1B } from "../Page1B";

export const Page1Router = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/page1A",
    exact: false,
    children: <Page1A />
  },
  {
    path: "/Page1B",
    exact: true,
    children: <Page1B />
  }
];
