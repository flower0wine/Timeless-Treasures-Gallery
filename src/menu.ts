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

function transformMenuData<T, R>(menus: Array<T>): Array<R> {
  if (!menus || menus.length === 0) {
    return [];
  }

  const result: Array<R> = [];

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

  return isAllLeaf ? (null as Array<R>) : result;
}

export const MENU_ORIGIN: ReadonlyArray<MenuLinkItem> = Object.freeze([
  {
    icon: "link.png",
    title: "链接",
    route: LINK_CODE,
    code: "link",
    children: transformMenuData<ILinkItem, MenuLinkItem>(linkData),
  },
]);

export const MENU_DATA = cloneDeep(MENU_ORIGIN) as Array<MenuLinkItem>;
