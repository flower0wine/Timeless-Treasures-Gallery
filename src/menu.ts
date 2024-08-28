export type MenuIcon = string;

export interface MenuItem {
  icon: MenuIcon;
  title: string;
  children?: Array<MenuItem>;
}

export const MENU_ORIGIN: ReadonlyArray<MenuItem> = Object.freeze([
  { icon: "picture.png", title: "图片" },
]);
