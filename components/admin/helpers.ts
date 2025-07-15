import type { ISidebarMenuItem } from "./SidebarMenuItem.vue";

export const adminMenuItems: ISidebarMenuItem[] = [
  {
    id: "apps-label",
    isTitle: true,
    label: "Zymes",
  },
  {
    id: "create-zyme",
    icon: "lucide--plus",
    label: "Create Zyme",
    url: "/apps/create-zyme",
  },
  {
    id: "view-zymes",
    icon: "lucide--eye",
    label: "My Zymes",
    url: "/apps/view-zymes",
  },
  {
    id: "discover-zymes",
    icon: "lucide--search",
    label: "Discover Zymes",
    url: "/apps/discover-zymes",
  },
  {
    id: "docs",
    icon: "lucide--book-open-text",
    label: "Documentation",
    url: "https://nexus.daisyui.com/docs",
    linkProp: {
      target: "_blank",
    },
  },
];

function findItem(menuItems: ISidebarMenuItem[], url: string): ISidebarMenuItem | null {
  for (const item of menuItems) {
    if (item.url === url) {
      return item;
    }
    if (item.children) {
      const fItem = findItem(item.children, url);
      if (fItem) {
        return fItem;
      }
    }
  }
  return null;
}

export function getActivatedItemParentKeys(menuItems: ISidebarMenuItem[], url: string): string[] {
  const menuItem = findItem(menuItems, url);

  if (!menuItem)
    return [];
  const list = [];

  for (const item of menuItems) {
    if (item.id === menuItem.id) {
      list.push(item.id);
    }
    if (item.children) {
      for (const iItem of item.children) {
        if (iItem.id === menuItem.id) {
          list.push(item.id);
          list.push(iItem.id);
        }
        if (iItem.children != null) {
          for (const i2Item of iItem.children) {
            if (i2Item.id === menuItem.id) {
              list.push(item.id);
              list.push(iItem.id);
              list.push(i2Item.id);
            }
          }
        }
      }
    }
  }
  return list;
}
