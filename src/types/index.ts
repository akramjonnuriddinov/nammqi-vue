export interface Link {
  title: string
  href: string
}

export interface Column {
  links: Link[]
}

export interface NavCategory {
  title: string
  isInnerLinks: boolean
  path: string
  description: string
  columns: Column[]
}

export enum EThemes {
  DEFAULT = 'default',
  GREEN = 'green',
  TRANSPARENT = 'transparent',
  RED = 'red'
}