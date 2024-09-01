import { LINK_CODE } from "@/menu-code";
import linkData, { ILinkItem } from "@/data/link";
import { cloneDeep } from "lodash";

export interface MenuLinkItem {
  title: string;
  route?: string;
  code?: string;
  icon?: string;
  children?: Array<MenuLinkItem>;
}

function transformMenuData(menus: Array<ILinkItem>): Array<MenuLinkItem> {
  if (!menus || menus.length === 0) {
    return [];
  }

  const result: Array<MenuLinkItem> = [];

  let isAllLeaf = true;

  for (const menu of menus) {
    const { title, icon, code, children } = menu;
    const data = {} as MenuLinkItem;

    if (children) {
      isAllLeaf = false;

      data.children = transformMenuData(children);
      data.icon = icon;
      data.title = title;
      data.route = LINK_CODE;
      data.code = code;
      result.push(data);
    }
  }

  return isAllLeaf ? (null as Array<MenuLinkItem>) : result;
}

export const MENU_ORIGIN: ReadonlyArray<MenuLinkItem> = Object.freeze([
  {
    icon: "picture.png",
    title: "链接",
    route: LINK_CODE,
    code: "link",
    children: transformMenuData(linkData),
  },
]);

export const MENU_DATA = cloneDeep(MENU_ORIGIN) as Array<MenuLinkItem>;
