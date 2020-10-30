export type MenuItem = LinkMenuItem | DropdownMenuItem;

type MenuItemBase = {
  id: string
  label: string
  path: string
  basePath?: string
}

export type LinkMenuItem = MenuItemBase

export type NavMenuItem = MenuItemBase & {
  requireAuth?: boolean
}

export type DropdownMenuItem = MenuItemBase & {
  items: LinkMenuItem[]
}

